import type { LoaderFunction } from "remix";
import { getBooks, getLatestFilms } from "~/home";
import { useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  const [books, latestFilms] = await Promise.all([getBooks(), getLatestFilms()]);

  const data = {
    books,
    latestFilms
  };

  return data;
}

export function headers() {
  return {
    "Cache-Control": "s-maxage=1 stale-while-revalidate"
  };
}

export default function Index() {
  const data = useLoaderData();

  const { reading, read } = data.books;

  return (
    <main className="block max-w-2xl mx-auto px-4 py-16 md:py-24 flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl">
          Hey, I'm Adam Collier
        </h1>
        <p className="text-lg leading-relaxed">
          A designer and developer from Manchester, UK. Instead of the traditional portfolio site that never gets updated I wanted to make something functional, practical and useful in my day to day. It will exist as an ever growing repository of ideas, productivity helpers and things I enjoy.
        </p>
      </section>
      {/* start the books section here */}
      <section className="flex flex-col gap-4">
        <p>Looking for a new book to read? Check out what I'm reading and the last few I've finished. All pulled from my Oku.club feed.</p>
        {/* show the one im currently reading first */}
        <p className="block bg-amber-50 text-amber-600 self-start px-2 py-1 text-sm flex gap-1 items-center">
          <span className="i-ri:bookmark-line" />Currently Reading...
        </p>
        <section className="flex flex-col gap-4">
          <a href={reading.link}>
            <h2>{reading.title}</h2>
            <p className="text-slate-500 text-sm">{reading.creator}</p>
          </a>
          <p className="block bg-lime-50 text-lime-800 self-start px-2 py-1 text-sm flex gap-1 items-center">
            <span className="i-ri:check-double-line" />Last few I've finished
          </p>
          {/* instead of creating a type or interface I've declared the types inline */}
          {read.map((book: { link: string, title: string, creator: string }, index: number) => (
            <a href={book.link} key={index}>
              <h2>{book.title}</h2>
              <p className="text-slate-500 text-sm">{book.creator}</p>
            </a>
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-4">
        <p>Struggling for a film to watch? Here's the latest five from my Letterboxd</p>
        <div className="flex gap-2">
          {data.latestFilms.map(({ link, src }: { link: string, src: string }) => {
            return (<a href={link}>
              <img src={src} alt="" />
            </a>)
          })}
        </div>
      </section>
    </main>
  );
}
