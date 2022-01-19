import { LoaderFunction, json, useLoaderData, Link } from 'remix'
import { db } from '~/utils/db.server'
import { Resource as ResourceProps } from '@prisma/client'
import Resource from '~/components/Resource'
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'

type Resource = {
  id: number
  title: string
  description: string
  link: string
  summary: string
}

export const loader: LoaderFunction = async () => {
  const latestResources = await db.resource.findMany({
    take: 5,
    select: {
      id: true,
      title: true,
      description: true,
      link: true,
      summary: true,
    },
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  })

  return json(latestResources)
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
        {data.map((props: ResourceProps) => (
          <Resource user={user} {...props} />
        ))}
      </main>
    </>
  )
}

export default Resources
