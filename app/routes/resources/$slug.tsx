import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { db } from '~/utils/db.server'
import { toTitleCase } from '~/utils/utils'
import { Resource as ResourceProps } from '@prisma/client'
import Resource from '~/components/Resource'
import { useAuth } from '~/context'
import AdminToolbar from '~/components/AdminToolbar'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  if (!slug) return null

  const data = await db.resourceCollection.findUnique({
    where: { name: toTitleCase(slug) },
    include: {
      resources: {
        orderBy: [
          {
            section: 'asc',
          },
        ],
      },
    },
  })

  return json(data)
}

const Resources = () => {
  const data = useLoaderData()
  const { user } = useAuth()

  const { name, description, resources, id } = data

  let sectionName = ''

  return (
    <>
      <AdminToolbar user={user}>
        <Link to={`/admin/resources/collection/edit/${id}`}>
          Edit Collection
        </Link>
        <Link to="/admin/resources/new">Add Resource</Link>
      </AdminToolbar>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">{name}</h1>
        <p>{description}</p>
        {resources.map((props: ResourceProps) => {
          const resource = (
            <>
              {props.section !== sectionName && (
                <h2 className="text-xl">{props.section}</h2>
              )}
              <Resource user={user} {...props} />
            </>
          )
          sectionName = props.section
          return resource
        })}
      </div>
    </>
  )
}

export default Resources
