import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'
import { db } from '~/utils/db.server'
import { toSlug, toTitleCase } from '~/utils/utils'
import { toHTML } from '~/utils/utils.server'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  if (!slug) return

  const data = await db.snippetCollection.findUnique({
    where: { name: toTitleCase(slug) },
    include: {
      snippets: true,
    },
  })

  if (!data) return

  const snippetsWithHtmlContent = await Promise.all(
    data.snippets.map(async (snippet) => ({
      ...snippet,
      content: await toHTML(snippet.content),
    })),
  )

  return json({ ...data, snippets: snippetsWithHtmlContent })
}

type Snippet = {
  id: number
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

  const { name, description, id } = data

  return (
    <>
      <AdminToolbar user={user}>
        <Link to={`/admin/snippets/collection/edit/${id}`}>
          Edit Collection
        </Link>
        <Link to="/admin/snippets/new">Add Snippet</Link>
      </AdminToolbar>
      <div className="flex flex-col gap-4 min-w-0 w-full">
        <h1 className="text-2xl text-white">{name}</h1>
        {description && <p className="text-white">{description}</p>}
        <div className="space-y-8">
          {data.snippets.map(
            ({ title, content, updatedAt, id }: Snippet, index: number) => {
              return (
                <div className="block space-y-3">
                  <h2 className="text-lg text-white" id={toSlug(title)}>
                    {title}
                  </h2>
                  <div
                    className="text-white space-y-3"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                  <div className="flex space-x-4">
                    <small className="block text-gray-400">
                      Updated:{' '}
                      {new Date(updatedAt).toLocaleDateString(
                        'en-GB',
                        dateOptions,
                      )}
                    </small>
                    {user && (
                      <Link
                        to={`/admin/snippets/edit/${id}`}
                        className="hover:underline"
                      >
                        <i className="text-sm text-white flex items-center gap-1 hover:underline">
                          Edit this Snippet{' '}
                          <span className="inline-block i-ri:arrow-right-line" />
                        </i>
                      </Link>
                    )}
                  </div>
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
