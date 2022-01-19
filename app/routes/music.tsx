import {
  ActionFunction,
  json,
  Link,
  LoaderFunction,
  useCatch,
  useLoaderData,
} from 'remix'
import { Spotify as SpotifyLogo, Soundcloud as SoundcloudLogo } from '~/svgs'
import { useAuth } from '~/context'
import { getMusicData } from '~/music'
import { lruCache } from '~/utils/cache.server'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const cache = form.get('cache')

  if (cache) {
    if (lruCache.has('musicData')) lruCache.del('musicData')
  }

  return null
}

export const loader: LoaderFunction = async () => {
  if (lruCache.has('musicData')) {
    return json({ ...lruCache.get('musicData') })
  }

  let data = await getMusicData()
  lruCache.set('musicData', data)

  return json({
    ...data,
  })
}

const Music = () => {
  const { spotifyAlbums, soundcloudMixes, radioStations } = useLoaderData()
  const { user } = useAuth()

  return (
    <section className="flex flex-col sm:flex-row h-full">
      {/* gradient created with: https://larsenwork.com/easing-gradients/#editor */}
      {/* spotify */}
      <div
        className="p-4 pb-5 space-y-4 sm:w-11/12 lg:w-8/12"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, hsl(0, 0%, 39%) 0%, hsl(0, 0%, 35.62%) 2.5%, hsl(0, 0%, 32.33%) 4.4%, hsl(0, 0%, 29.13%) 6.2%, hsl(0, 0%, 26.05%) 7.9%, hsl(0, 0%, 23.06%) 9.9%, hsl(0, 0%, 20.18%) 12.4%, hsl(0, 0%, 17.42%) 15.7%, hsl(0, 0%, 14.77%) 20%, hsl(0, 0%, 12.24%) 25.6%, hsl(0, 0%, 9.84%) 32.7%, hsl(0, 0%, 7.58%) 41.6%, hsl(0, 0%, 5.45%) 52.5%, hsl(0, 0%, 3.47%) 65.7%, hsl(0, 0%, 1.65%) 81.5%, hsl(0, 0%, 0%) 100%',
        }}
      >
        <div className="h-[24px] flex justify-between items-center">
          <SpotifyLogo className="h-full w-auto" />
          {user && (
            <div className="flex text-white space-x-2 place-items-center">
              <Link
                to="/admin/music/new/spotify"
                className="text-white text-xs"
              >
                Add an Album
              </Link>
              <span className="text-xs">|</span>
              <form method="post" className="flex place-items-center">
                <button
                  type="submit"
                  className="text-white text-xs"
                  name="cache"
                  value="delete"
                >
                  Delete the cache
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
          {spotifyAlbums.map(
            (
              {
                image,
                link,
                artist,
                album,
              }: {
                image: string
                link: string
                rating: number
                artist: string
                album: string
              },
              index: string,
            ) => (
              <a
                className="block w-full relative pt-full rounded overflow-hidden"
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={index}
              >
                <img
                  className="rounded absolute top-0 left-0 w-full h-full bg-gray-100/20"
                  src={image.replace(/b273/g, '1e02')}
                  alt={`${album}, ${artist}`}
                  loading="lazy"
                />
              </a>
            ),
          )}
        </div>
      </div>
      {/* soundcloud */}
      <div className="p-4 bg-gradient-to-t from-[#f30] to-[#f70] space-y-4 flex flex-col flex-grow flex-shrink min-w-0">
        <div className="h-[24px] flex items-center justify-between">
          <SoundcloudLogo className="h-[18px]" />
          {user && (
            <Link
              to="/admin/music/new/soundcloud"
              className="text-white text-xs"
            >
              Add a mix
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          {soundcloudMixes.map(
            (
              {
                artist,
                title,
                link,
                image,
              }: { artist: string; title: string; link: string; image: string },
              index: number,
            ) => {
              return (
                <a
                  className="block relative flex items-start text-white bg-gradient-to-r to-white/3 hover:to-white/10 from-transparent rounded overflow-hidden"
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={index}
                >
                  <div className="w-13 h-13 relative rounded overflow-hidden flex-shrink-0 bg-orange-100/20">
                    <img
                      className="absolute top-0 left-0 w-full h-full"
                      src={image}
                      alt={`${title}, ${artist}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2 flex flex-col w-full min-w-0">
                    <h3 className="text-sm truncate">{title}</h3>
                    <p className="text-xs truncate">{artist}</p>
                  </div>
                </a>
              )
            },
          )}
        </div>
        <div className="block h-24"></div>
      </div>
      {/* radio stations */}
      <div className="order-first sm:order-last bg-black p-2 flex sm:flex-col justify-between items-center bg-gradient-to-t sm:bg-gradient-to-t from-orange-200 to-orange-100 ">
        <div className="flex sm:flex-col gap-2">
          {radioStations.map(
            (
              {
                name,
                link,
                image,
              }: {
                name: string
                link: string
                image: string
              },
              index: string,
            ) => (
              <a
                href={link}
                className="relative block rounded w-10 h-10 sm:w-10 overflow-hidden sm:h-10 bg-orange-200"
                target="_blank"
                rel="noreferrer noopener"
                key={index}
              >
                <img
                  src={image}
                  alt={name}
                  className="absolute top-0 left-0 w-full h-full"
                  loading="lazy"
                />
              </a>
            ),
          )}
        </div>
        {user && (
          <Link
            className="i-ri:add-line w-6 h-6 sm:mb-2"
            to="/admin/music/new/radio"
          ></Link>
        )}
      </div>
    </section>
  )
}

export default Music

export function CatchBoundary() {
  const caught = useCatch()
  return (
    <div className="flex w-full h-full items-center justify-center">
      <h2 className="text-xl">{caught.data}</h2>
    </div>
  )
}
