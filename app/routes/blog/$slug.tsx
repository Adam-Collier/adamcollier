import {
  json,
  Link,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  useLocation,
  useCatch,
} from 'remix'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'
import { db } from '~/utils/db.server'
import { toHTML } from '~/utils/utils.server'
import prism from '~/styles/prism.css'
import { getHeadings, Heading, toSlug } from '~/utils/utils'
import { cache } from '~/utils/cache.server'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  // if we have cached data, return it. If not carry on
  let cachedData = await cache.get(`blog-${slug}`)
  if (cachedData) return json(cachedData)

  const data = await db.post.findUnique({
    where: {
      slug,
    },
  })

  if (!data) {
    throw new Response("This page doesn't exist", { status: 404 })
  }

  const headings = getHeadings(data?.content!)

  let formattedData = {
    ...data,
    content: await toHTML(data?.content!),
    headings,
  }

  cache.set(`blog-${slug}`, formattedData)

  return json(formattedData)
}

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    let errorMessage = 'No post found'
    return {
      title: errorMessage,
      description: errorMessage,
      'twitter:title': errorMessage,
      'twitter:description': errorMessage,
    }
  }

  return {
    title: data.title,
    description: data.description,
    'twitter:title': data.title,
    'twitter:description': data.description,
  }
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: prism }]

const createTableItems = (items: Heading[], pathname: string) =>
  items &&
  items.map((item, key: number) => {
    let href = `${pathname}#${toSlug(item.title)}`
    return item.items?.length ? (
      <li key={key} className="text-sm sm:text-gray-600 hover:underline">
        <a href={href}>{item.title}</a>
        {item.items && <ul>{createTableItems(item.items, pathname)}</ul>}
      </li>
    ) : (
      <li key={key} className="text-sm sm:text-gray-600 hover:underline">
        <a href={href}>{item.title}</a>
      </li>
    )
  })

const Post = () => {
  const data = useLoaderData()
  const { headings, title, content } = data
  const { user } = useAuth()
  const location = useLocation()

  let TableOfContents = () => (
    <ul className="w-full sm:w-44 sm:flex-shrink-0 space-y-2 sm:sticky sm:top-18 sm:self-start min-w-0">
      {createTableItems(headings, location.pathname)}
    </ul>
  )

  return (
    <>
      <AdminToolbar user={user}>
        <Link to={`/admin/posts/new`}>Create New Post</Link>
        <Link to={`/admin/posts/edit/${toSlug(title)}`}>Edit Post</Link>
        <Link to={`/admin/posts/drafts`}>Drafts</Link>
      </AdminToolbar>
      <div className="flex flex-col space-y-4 sm:flex-grow w-full min-w-0 max-w-[65ch] pb-24">
        <h1 className="text-2xl">{title}</h1>
        {headings.length !== 0 && (
          <div className="sm:hidden rounded p-4 space-y-3 bg-gray-50">
            <h2>Table of Contents</h2>
            <TableOfContents />
          </div>
        )}
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="hidden sm:block ">
        <TableOfContents />
      </div>
    </>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-lg sm:text-2xl">
        {caught.status}! {caught.data}
      </h1>
    </div>
  )
}

export default Post
