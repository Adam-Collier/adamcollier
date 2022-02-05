import {
  json,
  Link,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useLoaderData,
} from 'remix'
import { db } from '~/utils/db.server'
import { toSlug } from '~/utils/utils'

export const loader: LoaderFunction = async () => {
  const data = await db.resourceCollection.findMany({
    select: {
      name: true,
      updatedAt: true,
    },
  })

  return json(data)
}

export const meta: MetaFunction = () => {
  return {
    title: 'Adam Collier - Resources',
    description:
      'This is a group of resources I have either learned something from or thought could become useful in the future.',
  }
}

type Collection = {
  name: string
  updatedAt: Date
}

const Resources = () => {
  const data = useLoaderData()
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <main className="flex flex-col sm:flex-row gap-8 md:gap-16 block max-w-5xl mx-auto px-4 py-16 sm:pb-32">
      <div className="md:flex-shrink-0">
        <ul className="flex flex-col gap-4">
          {data.map(({ name, updatedAt }: Collection, index: number) => {
            return (
              <li key={index}>
                <Link to={`/resources/${toSlug(name)}`} className="group block">
                  <p className="font-semibold hover:underline group-hover:underline">
                    {name}
                  </p>
                  <small className="text-gray-400 text-xs">
                    <i>
                      Updated:{' '}
                      {new Date(updatedAt).toLocaleDateString(
                        'en-US',
                        dateOptions,
                      )}
                    </i>
                  </small>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <Outlet />
    </main>
  )
}

export default Resources
