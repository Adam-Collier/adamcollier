import {
  json,
  Link,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useLoaderData,
  useLocation,
} from 'remix'
import { NavSpacer } from '~/components/NavSpacer'
import { useAuth } from '~/context'
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
  const title = 'Resources'
  const description =
    'This is a group of resources I have either learned something from or thought could become useful in the future.'

  return {
    title,
    description,
    'twitter:title': title,
    'twitter:description': description,
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
  const { pathname } = useLocation()
  const { user } = useAuth()

  return (
    <main
      className={`${
        user ? 'pt-4' : ''
      } flex flex-col sm:flex-row gap-8 md:gap-16 block max-w-5xl mx-auto px-4 sm:pt-16`}
    >
      <aside className="py-4 sm:py-0 md:flex-shrink-0">
        <ul className="flex sm:flex-col gap-2 overflow-x-scroll overflow-y-hidden px-2 -mx-4 sm:px-0 sm:mx-0 w-screen sm:w-full no-scrollbar">
          {data.map(({ name, updatedAt }: Collection, index: number) => {
            const slug = toSlug(name)
            let activeClass = pathname.endsWith(slug)
              ? 'bg-gradient-to-l from-gray-50 to-gray-50 sm:to-transparent'
              : ''

            return (
              <li
                key={index}
                className={[activeClass, 'px-2 py-1 sm:py-2 rounded'].join(' ')}
              >
                <Link to={`/resources/${slug}`} className="group block">
                  <p className="hover:underline group-hover:underline font-semibold">
                    {name}
                  </p>
                  <small className="hidden sm:block text-gray-500 text-xs">
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
      </aside>
      <div>
        <Outlet />
        <NavSpacer />
      </div>
    </main>
  )
}

export default Resources
