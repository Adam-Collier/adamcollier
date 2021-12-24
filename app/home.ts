import Parser from "rss-parser";

export const getBooks = async () => {
  const urls = [
    process.env.BOOKS_READ,
    process.env.BOOKS_WANT_TO_READ,
    process.env.BOOKS_CURRENTLY_READING,
  ];

  const parser = new Parser();

  const [read, toRead, reading] = await Promise.all(
    urls.map(async (url) => {
      // the exclamation mark here tells typescript that the values will never be null
      const feed = await parser.parseURL(url!);
      const { items } = feed;
      // limit to what we need
      return items.slice(0, 3);
    })
  );

  return { read, toRead, reading: reading[0] };
};

export const getLatestFilms = async () => {
  const parser = new Parser();
  // the exclamation mark here tells typescript that the values will never be null
  const feed = await parser.parseURL(process.env.LETTERBOXD_LATEST!);
  const { items } = feed;

  const filteredFilms = items.slice(0, 5).map((film) => {
    const { content, title } = film;

    const src = content?.split('"')[1];
    const [filmTitle, ...rest] = title?.split(",")!;
    const [year, rating] = rest.join("").split("-");

    return {
      title: filmTitle,
      year,
      rating,
      src,
    };
  });
  // limit to what we need
  return filteredFilms;
};
