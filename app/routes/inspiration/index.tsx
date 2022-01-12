import { json, LoaderFunction, useLoaderData } from 'remix'
import Masonry from '~/components/Masonry'

export const saveeBoards: { [key: string]: string } = {
  desktop: '5fb3c9cbf7c86a3ed1019f85',
  print: '5b17bb66ef494b6aa2686140',
  '3D': '5fb44c7eb074713f1d2189e1',
}

export const loader: LoaderFunction = async () => {
  const allBoardsData = await Promise.all(
    Object.values(saveeBoards).map(async (id) => {
      const response = await fetch(
        `https://api.savee.it/user/adamcollier/boards/${id}/items/`,
      )
      const { data } = await response.json()

      return data
    }),
  )

  // flatten the data so we can loop through it all
  const flattenedArr = allBoardsData.flat()

  // sort posts by when they were added
  const sortedByDate = flattenedArr.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  return json(sortedByDate, {
    headers: { 'Cache-Control': 's-maxage=1, stale-while-revalidate' },
  })
}

export const headers = () => ({
  'Cache-Control': 's-maxage=1, stale-while-revalidate',
})

const Inspiration = () => {
  const data = useLoaderData()
  return (
    <main>
      <Masonry images={data} />
    </main>
  )
}

export default Inspiration
