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
