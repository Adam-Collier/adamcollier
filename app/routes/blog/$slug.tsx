import { json, Link, LoaderFunction, useLoaderData, useLocation } from 'remix'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'
import { db } from '~/utils/db.server'
import { toHTML } from '~/utils/utils.server'
import prism from '~/styles/prism.css'
import { getHeadings, Heading, toSlug } from '~/utils/utils'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  const data = await db.post.findUnique({
    where: {
      slug,
    },
  })

  const headings = getHeadings(data?.content!)

  return json({ ...data, content: await toHTML(data?.content!), headings })
}

export const links = () => [{ rel: 'stylesheet', href: prism }]

const createTableItems = (items: Heading[], pathname: string) =>
  items &&
  items.map((item, key: number) => {
    let href = `${pathname}#${toSlug(item.title)}`
    return item.items?.length ? (
      <li key={key} className="text-sm text-gray-600 hover:underline">
        <a href={href}>{item.title}</a>
        {item.items && <ul>{createTableItems(item.items, pathname)}</ul>}
      </li>
    ) : (
      <li key={key} className="text-sm text-gray-600 hover:underline">
        <a href={href}>{item.title}</a>
      </li>
    )
  })

const Post = () => {
  const data = useLoaderData()
  const { headings, title, content } = data
  const { user } = useAuth()
  const location = useLocation()

  return (
    <>
      <AdminToolbar user={user}>
        <Link to={`/admin/posts/new`}>Create New Post</Link>
        <Link to={`/admin/posts/edit/${toSlug(title)}`}>Edit Post</Link>
        <Link to={`/admin/posts/drafts`}>Drafts</Link>
      </AdminToolbar>
      {/* post content and headers */}

      <div className="flex flex-col space-y-4 sm:flex-grow w-full min-w-0 max-w-[75ch]">
        <h1 className="text-2xl">{title}</h1>
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <ul className="w-full sm:w-44 sm:flex-shrink-0 space-y-1 sm:sticky sm:top-18 sm:self-start min-w-0">
        {createTableItems(headings, location.pathname)}
      </ul>
    </>
  )
}

export default Post
