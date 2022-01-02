import { json, LoaderFunction, useLoaderData } from "remix";
import Masonry from "~/components/Masonry";
import { saveeBoards } from "./index";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;

  if (!slug) throw new Response("Not Found", { status: 404 });
  const id = saveeBoards[slug];
  const response = await fetch(
    `https://api.savee.it/user/adamcollier/boards/${id}/items/`
  );
  const { data } = await response.json();
  return json(data, { headers: { "Cache-Control": "s-maxage=1, stale-while-revalidate" } });
}

export const headers = () => ({
  "Cache-Control": "s-maxage=1, stale-while-revalidate"
})

const InspirationPage = () => {
  const data = useLoaderData();
  return <main>
    <Masonry images={data} />
  </main>
}

export default InspirationPage;
