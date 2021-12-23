import type { LoaderFunction } from "remix";
import { getBooks } from "~/home";
import { useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  const books = await getBooks();
  const data = {
    books
  };

  return data;
}

export default function Index() {
  const data = useLoaderData();

  const { reading, read } = data.books;

  return (
    <main className="block max-w-2xl mx-auto px-4 pt-16 md:pt-24 flex flex-col gap-10">
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
        <p className="block bg-amber-50 text-amber-600 self-start px-2 py-1 text-sm">Currently Reading...</p>
        <section className="flex flex-col gap-4">
          <a href={reading.link}>
            <h2>{reading.title}</h2>
            <p className="text-slate-500 text-sm">{reading.creator}</p>
          </a>
          <p className="block bg-lime-50 text-lime-800 self-start px-2 py-1 text-sm">Last few I've finished</p>
          {/* instead of creating a type or interface I've declared the types inline */}
          {read.map((book: { link: string, title: string, creator: string }) => (
            <a href={book.link}>
              <h2>{book.title}</h2>
              <p className="text-slate-500 text-sm">{book.creator}</p>
            </a>
          ))}
        </section>
      </section>
      <section>
        <p></p>
      </section>
    </main>
  );
}
