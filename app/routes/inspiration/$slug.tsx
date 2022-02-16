import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import Masonry from '~/components/Masonry'
import { toTitleCase } from '~/utils/utils'
import { saveeBoards } from './index'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params
  if (!slug) throw new Response('Not Found', { status: 404 })
  const id = saveeBoards[slug]
  if (!id) throw new Response('Not Found', { status: 404 })

  const response = await fetch(
    `https://api.savee.it/user/adamcollier/boards/${id}/items/`,
  )
  const { data } = await response.json()
  return json(data, {
    headers: { 'Cache-Control': 's-maxage=1, stale-while-revalidate' },
  })
}

export const meta: MetaFunction = ({ params }) => {
  const { slug } = params
  const title = `${toTitleCase(slug!)} Inspiration`
  const description = `A space for all of the ${title} references I have collected and screenshotted. All taken from my Saave`

  return {
    title,
    description,
    'twitter:title': title,
    'twitter:description': description,
  }
}

export const headers = () => ({
  'Cache-Control': 's-maxage=1, stale-while-revalidate',
})

const InspirationPage = () => {
  const data = useLoaderData()
  return (
    <main>
      <Masonry images={data} />
    </main>
  )
}

export default InspirationPage

export function CatchBoundary() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <h2 className="text-xl">We couldn't find that page!</h2>
    </div>
  )
}
