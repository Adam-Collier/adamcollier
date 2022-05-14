import { json, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from '~/utils/db.server'
import { Resource as ResourceProps } from '@prisma/client'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'
import { toHTML } from '~/utils/utils.server'

export const loader: LoaderFunction = async () => {
  const latestResources = await db.resource.findMany({
    take: 5,
    select: {
      id: true,
      title: true,
      content: true,
    },
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  })

  const formattedData = await Promise.all(
    latestResources.map(async (resource) => ({
      ...resource,
      content: await toHTML(resource.content),
    })),
  )

  return json(formattedData)
}

const Resources = () => {
  const data = useLoaderData()
  const { user } = useAuth()

  return (
    <>
      <AdminToolbar user={user}>
        <Link to="/admin/resources/collection/new">Add Collection</Link>
        <Link to="/admin/resources/new">Add Resource</Link>
      </AdminToolbar>
      <main className="flex flex-col gap-4">
        <h2 className="text-2xl">Resources</h2>
        <p>
          This is a group of resources I have either learned something from or
          thought could become useful in the future.
        </p>
        <h3 className="text-xl">Latest Resources</h3>
        {data.map(({ content, id }: ResourceProps, index: number) => (
          <div key={index}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {user && (
              <Link
                to={`/admin/resources/edit/${id}`}
                className="hover:underline"
              >
                <i className="text-sm flex items-center gap-1 hover:underline mt-0.5">
                  Edit <span className="inline-block i-ri:arrow-right-line" />
                </i>
              </Link>
            )}
          </div>
        ))}
      </main>
    </>
  )
}

export default Resources
