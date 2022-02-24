import {
  json,
  Link,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLoaderData,
} from 'remix'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'
import { cache } from '~/utils/cache.server'
import { db } from '~/utils/db.server'
import { toSlug, toTitleCase } from '~/utils/utils'
import { toHTML } from '~/utils/utils.server'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  let cachedData = await cache.get(`snippets-${slug}`)
  if (cachedData) return json(cachedData)

  if (!slug) return

  const data = await db.snippetCollection.findUnique({
    where: { name: toTitleCase(slug) },
    select: {
      name: true,
      description: true,
      id: true,
      snippets: {
        select: {
          id: true,
          updatedAt: true,
          title: true,
          content: true,
        },
      },
    },
  })

  if (!data) {
    throw new Response("This Snippet Collection doesn't exist", { status: 404 })
  }

  const snippetsWithHtmlContent = await Promise.all(
    data.snippets.map(async (snippet) => ({
      ...snippet,
      content: await toHTML(snippet.content),
    })),
  )

  let formattedData = {
    ...data,
    snippets: snippetsWithHtmlContent,
  }

  cache.set(`snippets-${slug}`, formattedData)

  return json(formattedData)
}

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    let errorMessage = 'Snippet Collection not found!'
    return {
      title: errorMessage,
      description: errorMessage,
      'twitter:title': errorMessage,
      'twitter:description': errorMessage,
    }
  }
  const { name } = data
  const title = name
  const description = `${title} snippets which I like to use or refer back to when working on projects. Easily copy and paste them into your own projects.`

  return {
    title,
    description,
    'twitter:title': title,
    'twitter:description': description,
  }
}

type Snippet = {
  id: number
  updatedAt: Date
  title: string
  content: string
}

const Snippets = () => {
  const data = useLoaderData()
  const { user } = useAuth()

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const { name, description, id, snippets } = data

  return (
    <>
      <AdminToolbar user={user}>
        <Link to={`/admin/snippets/collection/edit/${id}`}>
          Edit Collection
        </Link>
        <Link to="/admin/snippets/collection/new">Add Collection</Link>
        <Link to="/admin/snippets/new">Add Snippet</Link>
      </AdminToolbar>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-white">{name}</h1>
        {description && <p className="text-white">{description}</p>}
        <div className="space-y-8">
          {snippets.map(
            ({ title, content, updatedAt, id }: Snippet, index: number) => {
              return (
                <div className="block space-y-3" key={index}>
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

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <div>
      <h1 className="text-lg sm:text-2xl text-white">
        {caught.status}! {caught.data}
      </h1>
    </div>
  )
}

export default Snippets
