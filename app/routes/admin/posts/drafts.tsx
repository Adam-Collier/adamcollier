import { json, LoaderFunction } from "@remix-run/cloudflare";
import { Link, Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { db } from '~/utils/db.server'
import { toReadableDate } from '~/utils/utils'

export const loader: LoaderFunction = async () => {
  const drafts = await db.post.findMany({
    where: {
      published: false,
    },
  })

  return json(drafts)
}

export type Post = {
  slug: string
  title: string
  createdAt: Date
}

const PostDrafts = () => {
  const data = useLoaderData()
  const location = useLocation()

  const isSidebar = location.pathname.endsWith('drafts')
    ? 'flex flex-col'
    : 'hidden sm:flex sm:flex-col'

  return (
    <div className="flex flex-col sm:flex-row gap-8 block max-w-6xl mx-auto">
      <aside className={`${isSidebar} sm:w-44 sm:flex-shrink-0 gap-4`}>
        <h2 className="text-md">Drafts</h2>
        <ul className="space-y-4">
          {data.map(({ slug, title, createdAt }: Post, index: number) => (
            <li key={index}>
              <Link to={slug}>
                <h3>{title}</h3>
                <small>created: {toReadableDate(createdAt)}</small>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <Outlet context={data} />
    </div>
  )
}

export default PostDrafts
