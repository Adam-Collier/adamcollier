import { json, Link, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import { toSlug } from "~/utils/utils";
import { toHTML } from "~/utils/utils.server";

export const loader: LoaderFunction = async () => {
  const data = await db.snippet.findMany({
    take: 5,
    orderBy: {
      updatedAt: "desc"
    },
    include: {
      SnippetCollection: {
        select: {
          name: true
        }
      }
    }
  })

  const formattedData = await Promise.all(data.map(async (snippet) => ({
    ...snippet,
    content: await toHTML(snippet.content)
  })))

  return json(formattedData);
}

type Snippet = {
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
}

const Snippets = () => {
  const data = useLoaderData();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Snippets</h1>
      <p>There's nothing worse than almost remembering where you found that perfect snippet you desperately need in that moment. To reduce those moments I've started to collate the ones I've used or think could come handy.</p>
      {data.map(({ createdAt, updatedAt, title, content, SnippetCollection }: Snippet, index: number) => {
        const slug = toSlug(`${SnippetCollection.name}/#${title}`);

        return (<Link to={`/snippets/${slug}`} key={index}>
          <h2 className="text-lg" id={slug}>
            {title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Link>)
      })}
    </div>
  )
}

export default Snippets;