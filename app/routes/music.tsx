import {
  ActionFunction,
  json,
  Link,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLoaderData,
} from 'remix'
import { Spotify as SpotifyLogo, Soundcloud as SoundcloudLogo } from '~/svgs'
import { useAuth } from '~/context'
import { getMusicData } from '~/music'
import { cache } from '~/utils/cache.server'
import { NavSpacer } from '~/components/NavSpacer'
import { Image } from '~/components/Image'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const deleteCache = form.get('delete-cache')

  if (deleteCache) {
    if (await cache.has('music')) await cache.del('music')
  }

  return null
}

export const loader: LoaderFunction = async () => {
  let cachedData = await cache.get('music')
  if (cachedData) return json(cachedData)

  let data = await getMusicData()
  await cache.set('music', data)

  return json({
    ...data,
  })
}

export const meta: MetaFunction = () => {
  const title = 'Music'
  const description =
    'All the music I love to listen to online. Including Spotify albums, Soundcloud mixes and my favourite Radio Stations.'

  return {
    title,
    description,
    'twitter:title': title,
    'twitter:description': description,
  }
}

const Music = () => {
  const data = useLoaderData()
  const { spotifyAlbums, soundcloudMixes, radioStations } = data
  const { user } = useAuth()

  return (
    <section className="flex flex-col sm:flex-row sm:h-full p-2 sm:p-4 gap-2">
      {/* gradient created with: https://larsenwork.com/easing-gradients/#editor */}
      {/* spotify */}
      {/* spotify colours: 
        light grey: hsl(0, 0%, 70.2%), #b3b3b3
        dark grey: hsl(0, 0%, 7.1%), #121212
      */}
      <div className="sm:w-11/12 lg:w-8/12 p-4 pb-0 space-y-4 rounded-xl bg-gradient-to-t from-[#121212] to-gray-100 flex flex-col">
        <div className="h-[24px] flex justify-between items-center">
          <SpotifyLogo className="h-full w-auto" />
          {user && (
            <div className="flex space-x-2 place-items-center">
              <Link to="/admin/music/new/spotify" className="text-xs">
                Add an Album
              </Link>
              <span className="text-xs">|</span>
              <form method="post" className="flex place-items-center">
                <button
                  type="submit"
                  className="text-xs"
                  name="delete-cache"
                  value="delete"
                >
                  Delete the cache
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="sm:overflow-y-scroll self-stretch pb-5">
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
                  className="block w-full relative pt-full rounded overflow-hidden shadow-lg"
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={index}
                >
                  <Image
                    className="rounded absolute top-0 left-0 w-full h-full bg-gray-100/20 text-xs text-gray-400"
                    src={image.replace(/b273/g, '1e02')}
                    alt={`${album}, ${artist}`}
                    loading="lazy"
                    height={218}
                    width={218}
                  />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
      {/* soundcloud 
        soundcloud colours: #f30, #f70
      */}
      <div className="p-4 bg-gradient-to-t from-[#f30] to-[#ffab61] rounded-xl space-y-4 flex flex-col flex-grow flex-shrink min-w-0">
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
                  <div className="w-13 h-13 relative rounded overflow-hidden flex-shrink-0 bg-orange-100/20 text-xs text-orange-300">
                    <img
                      className="absolute top-0 left-0 w-full h-full"
                      src={image}
                      alt={`${title}, ${artist}`}
                      loading="lazy"
                    />
                    <Image
                      className="absolute top-0 left-0 w-full h-full"
                      src={image}
                      alt={`${title}, ${artist}`}
                      loading="lazy"
                      height={104}
                      width={104}
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
        <NavSpacer />
      </div>
      {/* radio stations */}
      <div className="order-first rounded-xl sm:order-last bg-black p-2 flex sm:flex-col justify-between items-center bg-gradient-to-t sm:bg-gradient-to-t from-orange-200 to-orange-100 ">
        <div className="flex sm:flex-col gap-2">
          {user && (
            <Link
              className="w-10 h-10 bg-orange-200 flex items-center justify-center rounded"
              to="/admin/music/new/radio"
              aria-label="add radio station"
            >
              <span className="block w-6 h-6 i-ri:add-line"></span>
            </Link>
          )}
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
                <Image
                  className="absolute top-0 left-0 w-full h-full"
                  src={image}
                  alt={name}
                  loading="lazy"
                  height={104}
                  width={104}
                />
              </a>
            ),
          )}
        </div>
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
