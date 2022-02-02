import {
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  Outlet,
  MetaFunction,
} from 'remix'
import { db } from '~/utils/db.server'
import { copyCodeToClipboard, toSlug } from '~/utils/utils'
import prism from '~/styles/prism.css'
import dark from '~/styles/dark.css'
import { useEffect } from 'react'

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

  useEffect(() => {
    copyCodeToClipboard()
  }, [])

  return (
    <div className="dark w-full bg-zinc-900">
      <div className="flex flex-col sm:flex-row gap-8 block max-w-5xl mx-auto px-4 py-16">
        <aside className="sm:flex-shrink-0 sm:w-52 space-y-4">
          <ul className="flex flex-col gap-1">
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
              ) => (
                <>
                  <li className="font-medium text-white">
                    <Link to={`/snippets/${toSlug(name)}`}>{name}</Link>
                  </li>
                  <ul className="flex flex-col gap-0.5 pl-2" key={index}>
                    {snippets &&
                      snippets.map(({ title }) => (
                        <li className="text-sm hover:underline text-gray-300">
                          <Link
                            to={`/snippets/${toSlug(name)}#${toSlug(title)}`}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </>
              ),
            )}
          </ul>
        </aside>
        <Outlet />
      </div>
    </div>
  )
}

export default Snippets
