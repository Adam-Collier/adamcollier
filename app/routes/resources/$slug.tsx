import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { db } from '~/utils/db.server'
import { toTitleCase } from '~/utils/utils'
import { Resource as ResourceProps } from '@prisma/client'
import { useAuth } from '~/context'
import AdminToolbar from '~/components/AdminToolbar'
import { toHTML } from '~/utils/utils.server'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  if (!slug) return null

  const data = await db.resourceCollection.findUnique({
    where: { name: toTitleCase(slug) },
    select: {
      id: true,
      name: true,
      description: true,
      resources: {
        select: {
          content: true,
          id: true,
          section: true,
        },
        orderBy: [
          {
            section: 'asc',
          },
        ],
      },
    },
  })

  if (!data)
    throw new Response('No Resources returned from database', { status: 500 })

  const formattedResources = await Promise.all(
    data.resources.map(async (resource) => ({
      ...resource,
      content: await toHTML(resource.content),
    })),
  )

  return json({ ...data, resources: formattedResources })
}

const Resources = () => {
  const data = useLoaderData()
  const { user } = useAuth()

  const { name, description, resources, id } = data

  let sectionName = ''

  return (
    <>
      <AdminToolbar user={user}>
        <Link to="/admin/resources/collection/new">Add Collection</Link>
        <Link to={`/admin/resources/collection/edit/${id}`}>
          Edit Collection
        </Link>
        <Link to="/admin/resources/new">Add Resource</Link>
      </AdminToolbar>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">{name}</h1>
        <p>{description}</p>
        {resources.map(({ content, id, section }: ResourceProps) => {
          const resource = (
            <>
              {section !== sectionName && (
                <h2 className="text-xl">{section}</h2>
              )}
              <div>
                <div
                  className="space-y-4 children:no-underline"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                {user && (
                  <Link
                    to={`/admin/resources/edit/${id}`}
                    className="hover:underline"
                  >
                    <i className="text-sm flex items-center gap-1 hover:underline">
                      Edit{' '}
                      <span className="inline-block i-ri:arrow-right-line" />
                    </i>
                  </Link>
                )}
              </div>
            </>
          )
          sectionName = section
          return resource
        })}
      </div>
    </>
  )
}

export default Resources
