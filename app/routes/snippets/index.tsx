import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'
import { cache } from '~/utils/cache.server'
import { db } from '~/utils/db.server'
import { toSlug } from '~/utils/utils'
import { toHTML } from '~/utils/utils.server'

export const loader: LoaderFunction = async () => {
  let cachedData = await cache.get('snippets')
  if (cachedData) return json(cachedData)

  const data = await db.snippet.findMany({
    take: 5,
    orderBy: {
      updatedAt: 'desc',
    },
    select: {
      id: true,
      updatedAt: true,
      title: true,
      content: true,
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

  cache.set('snippets', formattedData)

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
    <>
      <AdminToolbar user={user}>
        <Link to="/admin/snippets/collection/new">Add Collection</Link>
        <Link to="/admin/snippets/new">Add Snippet</Link>
      </AdminToolbar>
      <div className="flex flex-col gap-4">
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
              const slug = `${toSlug(SnippetCollection.name)}#${toSlug(title)}`

              return (
                <div className="block space-y-3" key={index}>
                  <Link to={`/snippets/${slug}`}>
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
                    {new Date(updatedAt).toLocaleDateString(
                      'en-US',
                      dateOptions,
                    )}
                  </small>
                </div>
              )
            },
          )}
        </div>
      </div>
    </>
  )
}

export default Snippets
