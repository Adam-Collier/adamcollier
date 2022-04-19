import { LoaderFunction } from "@remix-run/node";
import { db } from '~/utils/db.server'
import { toSlug } from '~/utils/utils'
import { saveeBoards } from '~/routes/inspiration/index'

export const loader: LoaderFunction = async () => {
  const baseUrl = 'https://www.adamcollier.co.uk'

  // hard code the main routes
  const staticRoutes = [
    '',
    '/blog',
    '/snippets',
    '/resources',
    '/inspiration',
    '/music',
  ]

  // loop through and generate the XML
  const staticRoutesXML = staticRoutes
    .map(
      (staticRoute) => `
<url>
    <loc>${baseUrl}${staticRoute}</loc>
    <priority>1.0</priority>
</url>
  `,
    )
    .join('')

  // a util function to create each dynamic routes XML
  const generateDynamicRouteXML = (
    arr: { [key: string]: string }[],
    prefix: string,
    priority: number,
  ) => {
    return arr.map(
      (obj) => `
<url>
  <loc>${baseUrl}${prefix + toSlug(Object.values(obj)[0])}</loc>
  <priority>${priority}</priority>
</url>
`,
    )
  }

  // grab all of the bits from the db and run through the generateDynamicRouteXML function
  const posts = generateDynamicRouteXML(
    await db.post.findMany({
      select: {
        slug: true,
      },
    }),
    '/blog/',
    0.7,
  )

  const snippets = generateDynamicRouteXML(
    await db.snippetCollection.findMany({
      select: {
        name: true,
      },
    }),
    '/snippets/',
    0.8,
  )

  const resources = generateDynamicRouteXML(
    await db.resourceCollection.findMany({
      select: {
        name: true,
      },
    }),
    '/resources/',
    0.8,
  )

  // inspiration routes are slightly different as we don't need to hit our db
  const inspiration = Object.keys(saveeBoards).map(
    (route) => `
<url>
  <loc>${baseUrl}/inspiration/${toSlug(route)}</loc>
  <priority>${0.5}</priority>
</url>
`,
  )

  // run the promises in parallel
  const dynamicRoutesXML = await Promise.all([
    posts,
    snippets,
    resources,
    inspiration,
  ])

  // and bring it all together
  const xml = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[staticRoutesXML, dynamicRoutesXML.flat().join('')].join('')}
</urlset>
`

  // return our xml
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  })
}
