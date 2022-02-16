import { useEffect } from 'react'
import {
  json,
  Link,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useLoaderData,
  useLocation,
} from 'remix'
import { db } from '~/utils/db.server'
import { copyCodeToClipboard, toReadableDate, toSlug } from '~/utils/utils'

export const meta: MetaFunction = () => {
  const title = 'Blog'
  const description =
    'A diverse collection of writing which ranges from code, design and life in general.'

  return {
    title,
    description,
    'twitter:title': title,
    'twitter:description': description,
  }
}

export const loader: LoaderFunction = async () => {
  const data = await db.post.findMany({
    where: { published: true },
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
    select: {
      title: true,
      createdAt: true,
    },
  })

  return json(data)
}

type Post = {
  title: string
  createdAt: Date
}

const Blog = () => {
  const data = useLoaderData()
  const location = useLocation()

  const slugClasses = location.pathname.endsWith('blog') ? '' : 'hidden'

  useEffect(() => {
    copyCodeToClipboard()
  }, [])

  return (
    <div className="flex flex-col-reverse min-w-0 sm:flex-row sm:max-w-7xl sm:mx-auto gap-8 lg:gap-x-16 w-full px-4 justify-between py-16">
      <aside
        className={`${slugClasses} lg:block sm:w-56 sm:flex-shrink-0 sm:self-start sm:sticky sm:top-0 sm:overflow-y-scroll h-screen no-scrollbar sm:-my-16 sm:py-16`}
      >
        <ul>
          {data.map((post: Post, index: number) => (
            <li className="hover:bg-gray-50 p-2 rounded" key={index}>
              <Link to={toSlug(post.title)}>
                <h2 className="text-md sm:text-sm leading-5 text-gray-700">
                  {post.title}
                </h2>
                <small className="text-xs text-gray-500">
                  {toReadableDate(post.createdAt)}
                </small>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <Outlet />
    </div>
  )
}

export default Blog
