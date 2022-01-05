import { json, Link, LoaderFunction, useLoaderData, Outlet } from "remix";
import { db } from "~/utils/db.server";
import { toSlug } from "~/utils/utils";

export const loader: LoaderFunction = async () => {
  // get everything we need for the headings here
  const data = await db.snippetCollection.findMany({
    select: {
      name: true,
      snippets: {
        select: {
          title: true
        }
      }
    }
  });

  return json(data);
}

const Snippets = () => {
  const data = useLoaderData();

  return (<div className="flex flex-col sm:flex-row gap-8 md:gap-16 block max-w-4xl mx-auto px-4 py-16">
    <aside className="md:flex-shrink-0">
      <ul className="flex flex-col gap-1">
        {data.map(({ name, snippets }: { name: string, snippets: [{ title: string }] }) => (
          <>
            <li className="font-medium"><Link to={`/snippets/${toSlug(name)}`}>{name}</Link></li>
            <ul className="flex flex-col gap-0.5 pl-2">
              {snippets && snippets.map(({ title }) => (
                <li className="text-sm hover:underline text-gray-500"><Link to={`/snippets/${toSlug(name)}#${toSlug(title)}`}>{title}</Link></li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </aside>
    <Outlet />
  </div>)
}

export default Snippets;