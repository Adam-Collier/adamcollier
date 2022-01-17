import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { useAuth } from '~/context'
import { db } from '~/utils/db.server'
import { toSlug } from '~/utils/utils'
import { toHTML } from '~/utils/utils.server'

export const loader: LoaderFunction = async () => {
  const data = await db.snippet.findMany({
    take: 5,
    orderBy: {
      updatedAt: 'desc',
    },
    include: {
      SnippetCollection: {
        select: {
          name: true,
        },
      },
    },
  })
  const formattedData = await Promise.all(
    data.map(async (snippet) => ({
      ...snippet,
      content: await toHTML(snippet.content),
    })),
  )

  return json(formattedData)
}

type Snippet = {
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
  SnippetCollection: any
}

const Snippets = () => {
  const data = useLoaderData()
  const { user } = useAuth()

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className="flex flex-col gap-4 min-w-0">
      {user && (
        <Link to={`/admin/snippets/new`} className="hover:underline">
          <i className="text-sm text-white flex items-center gap-1 hover:underline">
            Add a new Snippet{' '}
            <span className="inline-block i-ri:arrow-right-line" />
          </i>
        </Link>
      )}
      <h1 className="text-2xl text-white">Snippets</h1>
      <p className="text-white">
        There's nothing worse than almost remembering where you found that
        perfect snippet you desperately need in that moment. To reduce those
        moments I've started to collate the ones I've used or think could come
        handy.
      </p>
      <h2 className="text-xl text-white">Latest Snippets</h2>
      <div className="space-y-8">
        {data.map(
          (
            { title, content, SnippetCollection, updatedAt }: Snippet,
            index: number,
          ) => {
            const slug = toSlug(`${SnippetCollection.name}/#${title}`)

            return (
              <div className="block space-y-3">
                <Link to={`/snippets/${slug}`} key={index}>
                  <h2 className="text-lg text-white" id={slug}>
                    {title}
                  </h2>
                </Link>
                <div
                  className="text-white space-y-3"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <small className="block text-gray-400">
                  Updated:{' '}
                  {new Date(updatedAt).toLocaleDateString('en-US', dateOptions)}
                </small>
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}

export default Snippets
