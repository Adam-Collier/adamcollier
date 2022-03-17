import type { LoaderFunction } from 'remix'

import { db } from '~/utils/db.server'

function escapeCdata(s: string) {
  return s.replace(/\]\]>/g, ']]]]><![CDATA[>')
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export const loader: LoaderFunction = async ({ request }) => {
  const posts = await db.post.findMany({
    where: { published: true },
    take: 100,
    orderBy: { createdAt: 'desc' },
  })

  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')
  if (!host) {
    throw new Error('Could not determine domain URL.')
  }
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const domain = `${protocol}://${host}`
  const postsUrl = `${domain}/blog`

  const rssString = `
    <rss xmlns:blogChannel="${postsUrl}" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>Adam Collier's Blog</title>
        <link>${postsUrl}</link>
        <atom:link href="${postsUrl}/rss.xml" rel="self" type="application/rss+xml" />
        <description>Welcome to the blog! I hope you enjoy reading what I write and learn something a long the way</description>
        <language>en-gb</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${posts
          .map(
            ({
              title,
              description,
              createdAt,
              slug,
            }: {
              title: string
              description: string | null
              createdAt: Date
              slug: string
            }) =>
              `
            <item>
              <title><![CDATA[${escapeCdata(title)}]]></title>
              <description><![CDATA[${escapeHtml(description!)}]]></description>
              <pubDate>${createdAt.toUTCString()}</pubDate>
              <link>${postsUrl}/${slug}</link>
              <guid>${postsUrl}/${slug}</guid>
            </item>
          `.trim(),
          )
          .join('\n')}
      </channel>
    </rss>
  `.trim()

  return new Response(rssString, {
    headers: {
      'Cache-Control': `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      'Content-Type': 'application/xml',
      'Content-Length': String(Buffer.byteLength(rssString)),
    },
  })
}
