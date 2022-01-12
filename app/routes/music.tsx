import { json, Link, LoaderFunction, useCatch, useLoaderData } from 'remix'
import notion from '~/utils/notion.server'
import { Spotify as SpotifyLogo, Soundcloud as SoundcloudLogo } from '~/svgs'
import { useAuth } from '~/context'

export const loader: LoaderFunction = async () => {
  if (!process.env.NOTION_SPOTIFY_ALBUMS) {
    throw new Response('notion spotify album id needed', { status: 500 })
  }
  if (!process.env.NOTION_SOUNDCLOUD_MIXES) {
    throw new Response('notion soundcloud mixes id needed', { status: 500 })
  }
  if (!process.env.NOTION_INTERNET_RADIO_STATIONS) {
    throw new Response('notion internet radio station id needed', {
      status: 500,
    })
  }

  const [albumData, soundcloudData, radioData] = await Promise.all([
    await notion.databases.query({
      database_id: process.env.NOTION_SPOTIFY_ALBUMS,
    }),
    await notion.databases.query({
      database_id: process.env.NOTION_SOUNDCLOUD_MIXES,
    }),
    await notion.databases.query({
      database_id: process.env.NOTION_INTERNET_RADIO_STATIONS,
    }),
  ])

  const spotifyAlbums = albumData.results.map(({ properties }: any) => {
    return {
      artist: properties.artist.title[0].plain_text,
      link: properties.link.rich_text[0].plain_text,
      album: properties.album.rich_text[0].plain_text,
      rating: properties.rating.number,
      image: properties.image.rich_text[0].plain_text,
    }
  })

  const soundcloudMixes = soundcloudData.results.map(({ properties }: any) => ({
    artist: properties.artist.rich_text[0].plain_text,
    title: properties.title.title[0].plain_text,
    link: properties.link.rich_text[0].plain_text,
    image: properties.image.rich_text[0].plain_text,
  }))

  const radioStations = radioData.results.map(({ properties }: any) => {
    return {
      name: properties.name.title[0].plain_text,
      link: properties.link.rich_text[0].plain_text,
      image: properties.image.rich_text[0].plain_text,
    }
  })

  return json({
    spotifyAlbums,
    soundcloudMixes,
    radioStations,
  })
}

const Music = () => {
  const { spotifyAlbums, soundcloudMixes, radioStations } = useLoaderData()
  const { user } = useAuth()

  return (
    <section className="flex h-full">
      {/* gradient created with: https://larsenwork.com/easing-gradients/#editor */}
      <div
        className="p-4 basis-5/6 space-y-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, hsl(0, 0%, 39%) 0%, hsl(0, 0%, 35.62%) 2.5%, hsl(0, 0%, 32.33%) 4.4%, hsl(0, 0%, 29.13%) 6.2%, hsl(0, 0%, 26.05%) 7.9%, hsl(0, 0%, 23.06%) 9.9%, hsl(0, 0%, 20.18%) 12.4%, hsl(0, 0%, 17.42%) 15.7%, hsl(0, 0%, 14.77%) 20%, hsl(0, 0%, 12.24%) 25.6%, hsl(0, 0%, 9.84%) 32.7%, hsl(0, 0%, 7.58%) 41.6%, hsl(0, 0%, 5.45%) 52.5%, hsl(0, 0%, 3.47%) 65.7%, hsl(0, 0%, 1.65%) 81.5%, hsl(0, 0%, 0%) 100%',
        }}
      >
        <div className="h-[24px] flex justify-between items-center">
          <SpotifyLogo className="h-full w-auto" />
          {user && (
            <Link to="/admin/music/new/spotify" className="text-white text-xs">
              Add an Album
            </Link>
          )}
        </div>

        <div className="grid grid-cols-8 gap-2">
          {spotifyAlbums.map(
            (
              {
                image,
                link,
                rating,
              }: { image: string; link: string; rating: number },
              index: string,
            ) => (
              <a className="block w-full relative" href={link} key={index}>
                <img className="rounded" src={image} alt="" />
                {/* <span className="block absolute bottom-2 right-2 text-white text-xs bg-black p-1 line-height-1 rounded">{rating.toFixed(1)}</span> */}
              </a>
            ),
          )}
        </div>
      </div>
      <div className="p-4 bg-gradient-to-t from-[#f30] to-[#f70] space-y-4 flex-grow">
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
        <div className="flex flex-col gap-2">
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
                  className="block w-full relative flex items-start text-white bg-gradient-to-r to-white/3 hover:to-white/10 from-transparent rounded overflow-hidden"
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={index}
                >
                  <div className="w-12 h-12 relative rounded overflow-hidden">
                    <img
                      className="absolute top-0 left-0 w-full h-full"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-sm truncate">{title}</h3>
                    <p className="text-xs">{artist}</p>
                  </div>
                </a>
              )
            },
          )}
        </div>
      </div>
      <div className="bg-black p-2 flex flex-col justify-between items-center bg-gradient-to-t from-orange-300 to-orange-100">
        <div className="flex flex-col gap-2">
          {radioStations.map(
            ({
              name,
              link,
              image,
            }: {
              name: string
              link: string
              image: string
            }) => (
              <a
                href={link}
                className="relative block rounded w-10 h-10 border border-gray-800"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={image} alt={name} />
              </a>
            ),
          )}
        </div>
        {user && (
          <Link
            className="i-ri:add-line w-6 h-6 mb-2"
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
