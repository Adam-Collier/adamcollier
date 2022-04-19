import { HeadersFunction, json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  getBooks,
  getLatestFilms,
  getTopTracks,
  getLatestPosts,
  getLatestResources,
} from '~/home'
import { toReadableDate, toSlug } from '~/utils/utils'
import { Spotify as SpotifyLogo } from '~/svgs'
import { NavSpacer } from '~/components/NavSpacer'

export const loader: LoaderFunction = async () => {
  const [books, latestFilms, topTracks, latestPosts, latestResources] =
    await Promise.allSettled([
      getBooks(),
      getLatestFilms(),
      getTopTracks(),
      getLatestPosts(),
      getLatestResources(),
    ])

  const data = {
    books: books?.value ?? null,
    latestFilms: latestFilms?.value ?? null,
    topTracks: topTracks?.value ?? null,
    latestPosts: latestPosts?.value ?? null,
    latestResources: latestResources?.value ?? null,
  }

  return json(data, {
    headers: {
      // cache the loader data
      'Cache-Control': 's-maxage=1, stale-while-revalidate',
    },
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
  const { books, latestFilms, latestPosts, latestResources, topTracks } = data
  const { reading, read } = books

  return (
    <>
      <main className="block flex flex-col gap-10 sm:gap-20 children:w-full children:mx-auto children:px-4">
        <section className="max-w-2xl pt-24 pb-16 mx-auto flex flex-col gap-4">
          <h1 className="text-3xl">Hey, I'm Adam </h1>
          <p className="text-lg leading-relaxed">
            A designer and developer from Manchester, UK. Instead of the
            traditional portfolio site that never gets updated I wanted to make
            something functional, practical and useful in my day to day. It will
            exist as an ever growing repository of ideas, productivity helpers
            and things I enjoy.
          </p>
        </section>
        {/* latest posts */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-16 sm:children:basis-1/2 sm:children:p-8">
          <div className="space-y-6 sm:rounded-xl sm:border sm:border-dashed sm:border-gray-600">
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
                  ResourceCollection,
                }: {
                  createdAt: Date
                  title: string
                  ResourceCollection: {
                    name: string
                  }
                }) => (
                  <a
                    href={`/resources/${toSlug(
                      ResourceCollection.name,
                    )}#${toSlug(title)}`}
                    className="block group"
                  >
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
        {/* top tracks section */}
        <section className="w-full bg-gradient-to-t from-zinc-100 to-gray-50">
          <div className="space-y-4 rounded-xl max-w-7xl mx-auto py-4 sm:py-12 sm:px-8">
            <div className="h-[24px] flex justify-between items-center">
              <SpotifyLogo className="h-full w-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 sm:pt-4">
              {topTracks.map(
                (
                  {
                    artist,
                    url,
                    title,
                    image,
                  }: {
                    artist: string
                    url: string
                    title: string
                    image: string
                  },
                  index: number,
                ) => (
                  <a
                    className="block w-full flex items-start"
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={index}
                  >
                    <div className="block w-full relative rounded overflow-hidden shadow-lg basis-16 sm:basis-20 shrink-0">
                      <div className="block w-full pt-full"></div>
                      <img
                        className="rounded absolute top-0 left-0 bottom-0 right-0 bg-gray-100/20 text-xs text-gray-400"
                        src={image}
                        alt={`${title}, ${artist}`}
                        loading="lazy"
                      />
                    </div>

                    <div className="p-1 sm:p-2 space-y-0.5">
                      <h3 className="text-sm sm:text-base leading-4 sm:leading-5 text-clamp-2">
                        {title}
                      </h3>
                      <p className="text-xs leading-4 text-clamp-1">{artist}</p>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>
        {/* activity section */}
        <section className="max-w-5xl flex-col space-y-4">
          <h2 className="text-xl ">Activity</h2>
          <div className="flex flex-col md:flex-row gap-8 sm:gap-16">
            <section className="flex flex-col gap-4 sm:basis-2/5">
              <p>
                Looking for a new book to read? Check out what I'm reading and
                the last few I've finished. All pulled from my{' '}
                <a
                  className="underline text-indigo-600"
                  href="https://oku.club/user/mistapolnareff"
                  target="_blank"
                >
                  Oku.club
                </a>{' '}
                feed.
              </p>
              {/* show the one im currently reading first */}
              <p className="block bg-amber-50 text-amber-700 self-start px-2 py-1 text-sm flex gap-1 items-center">
                <span className="i-ri:bookmark-line" />
                Currently Reading...
              </p>
              <section className="flex flex-col gap-4">
                <a href={reading.link} className="group">
                  <h2 className="group-hover:underline">{reading.title}</h2>
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
                    <a href={book.link} key={index} className="group">
                      <h2 className="group-hover:underline">{book.title}</h2>
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
                  className="underline text-indigo-600"
                  href="https://letterboxd.com/mistapolnareff/"
                >
                  Letterboxd
                </a>
              </p>
              {latestFilms ? (
                <div className="grid grid-cols-4 gap-2">
                  {latestFilms.map(
                    ({
                      link,
                      src,
                      title,
                    }: {
                      link: string
                      src: string
                      title: string
                    }) => {
                      return (
                        <a
                          href={link}
                          className="block overflow-hidden rounded relative w-full"
                          aria-label={`${title} film`}
                        >
                          <div className="block pt-[150%]"></div>
                          <img
                            src={src}
                            alt={title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </a>
                      )
                    },
                  )}
                </div>
              ) : (
                <p className="text-red-700 bg-red-100 px-3 py-2 rounded">
                  Oh no! Letterboxd films can't currently be fetched! :'(
                </p>
              )}
            </section>
          </div>
        </section>
      </main>
      <NavSpacer />
    </>
  )
}
