import { HeadersFunction, json, Link, LoaderFunction } from 'remix'
import { getBooks, getLatestFilms } from '~/home'
import { useLoaderData } from 'remix'
import { db } from '~/utils/db.server'
import { toReadableDate } from '~/utils/utils'

export const loader: LoaderFunction = async () => {
  const [books, latestFilms] = await Promise.all([getBooks(), getLatestFilms()])

  const latestPosts = await db.post.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      title: true,
      createdAt: true,
      updatedAt: true,
      slug: true,
    },
  })

  const latestResources = await db.resource.findMany({
    take: 5,
    select: {
      title: true,
      link: true,
      createdAt: true,
    },
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  })

  const data = {
    books,
    latestFilms,
    latestPosts,
    latestResources,
  }

  return json(data, {
    headers: { 'Cache-Control': 's-maxage=1, stale-while-revalidate' },
  })
}

export const headers: HeadersFunction = () => {
  // loader headers doesnt seem to be working atm
  return {
    'Cache-Control': 's-maxage=1, stale-while-revalidate',
  }
}

export default function Index() {
  const data = useLoaderData()
  const { books, latestFilms, latestPosts, latestResources } = data
  const { reading, read } = books

  return (
    <main className="block pb-24 flex flex-col gap-10 children:w-full children:mx-auto children:px-4">
      <section className="max-w-2xl pt-24 pb-16 mx-auto flex flex-col gap-4">
        <h1 className="text-3xl">Hey, I'm Adam </h1>
        <p className="text-lg leading-relaxed">
          A designer and developer from Manchester, UK. Instead of the
          traditional portfolio site that never gets updated I wanted to make
          something functional, practical and useful in my day to day. It will
          exist as an ever growing repository of ideas, productivity helpers and
          things I enjoy.
        </p>
      </section>
      {/* latest posts */}
      <section className="bg-gray-50 py-8 sm:py-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="space-y-6">
            <h2 className="text-xl">Latest Posts</h2>
            <div className="space-y-4">
              {latestPosts.map(
                ({
                  title,
                  slug,
                  createdAt,
                }: {
                  title: string
                  slug: string
                  createdAt: Date
                }) => (
                  <Link to={`/blog/${slug}`} className="block group">
                    <h3 className="text-md group-hover:underline">{title}</h3>
                    <small className="text-slate-500">
                      {toReadableDate(createdAt)}
                    </small>
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl">Latest Resources</h2>
            <div className="space-y-4">
              {latestResources.map(
                ({
                  createdAt,
                  title,
                  link,
                }: {
                  createdAt: Date
                  title: string
                  link: string
                }) => (
                  <a href={link} target="_blank" className="block group">
                    <h3 className="text-md group-hover:underline">{title}</h3>
                    <small className="text-slate-500">
                      {toReadableDate(createdAt)}
                    </small>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      {/* activity section */}
      <section className="max-w-5xl flex-col space-y-4">
        <h2 className="text-xl ">Activity</h2>
        <div className="flex flex-col md:flex-row gap-8 sm:gap-16">
          <section className="flex flex-col gap-4 sm:basis-2/5">
            <p>
              Looking for a new book to read? Check out what I'm reading and the
              last few I've finished. All pulled from my{' '}
              <a
                className="underline text-purple-500"
                href="https://oku.club/user/mistapolnareff"
                target="_blank"
              >
                Oku.club
              </a>{' '}
              feed.
            </p>
            {/* show the one im currently reading first */}
            <p className="block bg-amber-50 text-amber-600 self-start px-2 py-1 text-sm flex gap-1 items-center">
              <span className="i-ri:bookmark-line" />
              Currently Reading...
            </p>
            <section className="flex flex-col gap-4">
              <a href={reading.link}>
                <h2>{reading.title}</h2>
                <p className="text-slate-500 text-sm">{reading.creator}</p>
              </a>
              <p className="block bg-lime-50 text-lime-800 self-start px-2 py-1 text-sm flex gap-1 items-center">
                <span className="i-ri:check-double-line" />
                Last few I've finished
              </p>
              {/* instead of creating a type or interface I've declared the types inline */}
              {read.map(
                (
                  book: { link: string; title: string; creator: string },
                  index: number,
                ) => (
                  <a href={book.link} key={index}>
                    <h2>{book.title}</h2>
                    <p className="text-slate-500 text-sm">{book.creator}</p>
                  </a>
                ),
              )}
            </section>
          </section>
          <section className="flex flex-col gap-4 sm:basis-3/5">
            <p>
              Struggling for a film to watch? Here's the latest eight from my{' '}
              <a
                className="underline text-purple-500"
                href="https://letterboxd.com/mistapolnareff/"
              >
                Letterboxd
              </a>
            </p>
            <div className="grid grid-cols-4 gap-2">
              {latestFilms.map(
                ({ link, src }: { link: string; src: string }) => {
                  return (
                    <a
                      href={link}
                      className="block overflow-hidden rounded relative w-full"
                    >
                      <div className="block pt-[150%]"></div>
                      <img
                        src={src}
                        alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </a>
                  )
                },
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
