import { json, Link, LoaderFunction, Outlet, useLoaderData } from 'remix'
import { db } from '~/utils/db.server'
import { toReadableDate, toSlug } from '~/utils/utils'

export const loader: LoaderFunction = async () => {
  const data = await db.post.findMany({
    where: { published: true },
    select: {
      title: true,
      updatedAt: true,
    },
  })

  return json(data)
}

type Post = {
  title: string
  updatedAt: Date
}

const Blog = () => {
  const data = useLoaderData()

  return (
    <div className="flex max-w-5xl mx-auto space-x-4 py-16">
      <ul className="w-60 flex-shrink-0 space-y-3">
        {data.map((post: Post) => (
          <li>
            <Link to={toSlug(post.title)}>
              <h2>{post.title}</h2>
              <small>{toReadableDate(post.updatedAt)}</small>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default Blog
