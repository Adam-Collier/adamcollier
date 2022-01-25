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
    <div className="flex flex-col-reverse min-w-0 sm:flex-row sm:max-w-7xl sm:mx-auto gap-8 lg:gap-x-16 py-16 w-full px-4">
      <ul className="hidden lg:block sm:w-48 sm:flex-shrink-0 space-y-3 sm:self-start sm:sticky sm:top-16">
        {data.map((post: Post) => (
          <li className="hover:bg-gray-50 p-2 rounded">
            <Link to={toSlug(post.title)}>
              <h2 className="text-sm leading-5 text-gray-700">{post.title}</h2>
              <small className="text-xs text-gray-400">
                {toReadableDate(post.updatedAt)}
              </small>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default Blog
