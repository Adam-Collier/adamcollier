import notion from '~/utils/notion.server'

export const getMusicData = async () => {
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

  return {
    spotifyAlbums,
    soundcloudMixes,
    radioStations,
  }
}
