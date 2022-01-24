import { json, Link, LoaderFunction, Outlet, useLoaderData } from 'remix'
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

const PostDrafts = () => {
  const data = useLoaderData()
  console.log(data)

  return (
    <div className="flex flex-col sm:flex-row sm:gap-8 block max-w-5xl mx-auto pt-8">
      {data.length ? (
        <ul className="min-w-44 space-y-4">
          {data.map(
            (
              {
                slug,
                title,
                createdAt,
              }: {
                slug: string
                title: string
                createdAt: Date
              },
              index: number,
            ) => (
              <li key={index}>
                <Link to={slug}>
                  <h3>{title}</h3>
                  <small>created: {toReadableDate(createdAt)}</small>
                </Link>
              </li>
            ),
          )}
        </ul>
      ) : (
        <p>
          There are currently no drafts!{' '}
          <Link className="underline" to="/admin/posts/new">
            Create a New Post
          </Link>{' '}
          instead
        </p>
      )}

      <Outlet />
    </div>
  )
}

export default PostDrafts
