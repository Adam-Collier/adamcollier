import {
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  Outlet,
  MetaFunction,
  useLocation,
} from 'remix'
import { db } from '~/utils/db.server'
import { copyCodeToClipboard, toSlug } from '~/utils/utils'
import { Accordion } from '~/components/Accordion'
import prism from '~/styles/prism.css'
import dark from '~/styles/dark.css'
import { useEffect } from 'react'
import { NavSpacer } from '~/components/NavSpacer'
import { useAuth } from '~/context'

export const loader: LoaderFunction = async () => {
  // get everything we need for the headings here
  const data = await db.snippetCollection.findMany({
    select: {
      name: true,
      snippets: {
        select: {
          title: true,
        },
      },
    },
  })

  return json(data)
}

export const links = () => [
  { rel: 'stylesheet', href: prism },
  { rel: 'stylesheet', href: dark },
]

export const meta: MetaFunction = () => {
  return {
    title: 'Adam Collier - Snippets',
    description:
      "There's nothing worse than almost remembering a bit of code you saw on stackoverflow on in a blogpost once. So I've collated all of the ones I find most useful.",
  }
}

const Snippets = () => {
  const data = useLoaderData()
  const { user } = useAuth()
  const { pathname } = useLocation()

  useEffect(() => {
    copyCodeToClipboard()
  }, [])

  return (
    <div className="dark w-full bg-zinc-900">
      <div
        className={`${
          user ? 'pt-6' : ''
        } flex flex-col sm:flex-row gap-8 block max-w-5xl mx-auto px-4 sm:pt-16`}
      >
        <aside className="py-4 sm:py-0 sm:flex-shrink-0 sm:w-52 space-y-4 sm:self-start sm:sticky sm:top-16">
          <ul className="flex sm:flex-col gap-3 text-white overflow-x-scroll overflow-y-hidden px-2 -mx-4 sm:px-0 sm:mx-0 w-screen sm:w-full no-scrollbar">
            {data.map(
              (
                {
                  name,
                  snippets,
                }: {
                  name: string
                  snippets: [{ title: string }]
                },
                index: number,
              ) => {
                const slug = toSlug(name)
                let activeClass = pathname.endsWith(slug) ? 'bg-zinc-800' : ''

                return (
                  <li key={index}>
                    <Link
                      to={`/snippets/${toSlug(name)}`}
                      className={[
                        activeClass,
                        'sm:hidden px-2 py-1 block rounded',
                      ].join(' ')}
                    >
                      {name}
                    </Link>
                    <Accordion title={name} className="hidden sm:block">
                      <ul className="flex flex-col gap-2 pl-4.5" key={index}>
                        {snippets &&
                          snippets.map(({ title }, index) => (
                            <li
                              className="text-sm hover:underline text-gray-400"
                              key={index}
                            >
                              <Link
                                to={`/snippets/${toSlug(name)}#${toSlug(
                                  title,
                                )}`}
                              >
                                {title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </Accordion>
                  </li>
                )
              },
            )}
          </ul>
        </aside>
        <div className="min-w-0">
          <Outlet />
          <NavSpacer />
        </div>
      </div>
    </div>
  )
}

export default Snippets
