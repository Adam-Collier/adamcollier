import { json, Link, LoaderFunction, useLoaderData } from "remix"
import { db } from "~/utils/db.server"
import { toTitleCase } from "~/utils/utils";
import { Resource as ResourceProps } from "@prisma/client";
import Resource from "~/components/Resource";
import { useAuth } from "~/context";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;

  if (!slug) return;

  const data = await db.resourceCollection.findUnique({
    where: { name: toTitleCase(slug) },
    include: {
      resources: {
        orderBy: [
          {
            section: 'asc',
          },
        ],
      },
    },
  })

  return json(data);
}

const Resources = () => {
  const data = useLoaderData();
  const { user } = useAuth();

  const { name, description, resources } = data;

  return (
    <div className="flex flex-col gap-4">
      {user && (
        <Link to="/admin/resources/new" className="hover:underline"><i className="text-sm flex items-center gap-1 hover:underline">Add new Snippet <span className="inline-block i-ri:arrow-right-line" /></i></Link>
      )}
      <h1 className="text-2xl">{name}</h1>
      <p>{description}</p>
      {resources.map((props: ResourceProps) => (
        <Resource user={user} {...props} />
      ))}
    </div>
  )

}

export default Resources