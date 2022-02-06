import Parser from 'rss-parser'
import { db } from './utils/db.server'

export const getBooks = async () => {
  const urls = [process.env.BOOKS_READ, process.env.BOOKS_CURRENTLY_READING]

  const parser = new Parser()

  const [read, reading] = await Promise.all(
    urls.map(async (url) => {
      // the exclamation mark here tells typescript that the values will never be null
      const feed = await parser.parseURL(url!)
      const { items } = feed
      // limit to what we need
      const books = items.slice(0, 3)

      const filteredPropertied = books.map(
        ({
          link,
          title,
          creator,
        }): {
          link: string | undefined
          title: string | undefined
          creator: string | undefined
        } => ({
          link,
          title,
          creator,
        }),
      )

      return filteredPropertied
    }),
  )

  return { read, reading: reading[0] }
}

export const getLatestFilms = async () => {
  const parser = new Parser()

  const feed = await parser.parseURL(process.env.LETTERBOXD_LATEST!)
  const { items } = feed

  const filteredFilms = items.slice(0, 8).map((film) => {
    const { content, title, link } = film

    const formattedFilmLink = link?.replace(/\/mistapolnareff/g, '')
    const src = content?.split('"')[1]

    let lastCommaIndex = title?.lastIndexOf(',')
    const filmTitle = title?.substring(0, lastCommaIndex)
    const rest = title?.substring(lastCommaIndex!)
    const [year, rating] = rest?.split('-')!

    return {
      link: formattedFilmLink,
      title: filmTitle,
      year: year.trim(),
      rating: rating.trim(),
      src,
    }
  })
  // limit to what we need
  return filteredFilms
}

const getAccessToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

  const queryBody = new URLSearchParams()

  if (!refreshToken) {
    console.log('there is current no Spotify refresh token')
    return
  }

  queryBody.append('grant_type', 'refresh_token')
  queryBody.append('refresh_token', refreshToken)

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryBody,
  })

  return response.json()
}

export const getTopTracks = async () => {
  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=12`
  const { access_token: accessToken } = await getAccessToken()

  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const data = await response.json()

  const tracks = data.items.map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    url: track.external_urls.spotify,
    title: track.name,
    image: track.album.images[0].url,
  }))

  return tracks
}

export const getLatestPosts = async () =>
  await db.post.findMany({
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

export const getLatestResources = async () =>
  await db.resource.findMany({
    take: 5,
    select: {
      title: true,
      createdAt: true,
      ResourceCollection: {
        select: {
          name: true,
        },
      },
    },
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  })
