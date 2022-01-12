import Parser from 'rss-parser'

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

  const filteredFilms = items.slice(0, 5).map((film) => {
    const { content, title, link } = film

    const src = content?.split('"')[1]

    let lastCommaIndex = title?.lastIndexOf(',')
    const filmTitle = title?.substring(0, lastCommaIndex)
    const rest = title?.substring(lastCommaIndex!)
    const [year, rating] = rest?.split('-')!

    return {
      link,
      title: filmTitle,
      year: year.trim(),
      rating: rating.trim(),
      src,
    }
  })
  // limit to what we need
  return filteredFilms
}
