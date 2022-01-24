import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'
import { db } from '~/utils/db.server'
import { toHTML } from '~/utils/utils.server'
import prism from '~/styles/prism.css'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  const data = await db.post.findUnique({
    where: {
      slug,
    },
  })

  return json({ ...data, content: await toHTML(data?.content!) })
}

export const links = () => [{ rel: 'stylesheet', href: prism }]

const Post = () => {
  const data = useLoaderData()
  const { user } = useAuth()

  return (
    <div>
      <AdminToolbar user={user}>
        <Link to={`/admin/posts/new`}>Create New Post</Link>
        <Link to={`/admin/posts/edit`}>Edit Post</Link>
        <Link to={`/admin/posts/drafts`}>Drafts</Link>
      </AdminToolbar>
      <div className="space-y-2">
        <h1 className="text-2xl">{data.title}</h1>
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  )
}

export default Post
