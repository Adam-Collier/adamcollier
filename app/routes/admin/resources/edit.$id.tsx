import { LoaderFunction, json, useLoaderData, ActionFunction, useTransition, redirect } from "remix";
import { Resource } from "@prisma/client";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import { Form, TextInput, TextArea, RadioButton } from "~/components/Form";
import { toMarkdown, toHTML } from "~/utils/utils.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response("Unauthorized", { status: 401 });

  const { id } = params;
  const data = await db.resource.findUnique({
    where: {
      id: Number(id)
    }
  })

  const collections = await db.resourceCollection.findMany({
    select: {
      id: true,
      name: true
    }
  });

  return json({ resource: { ...data, description: await toMarkdown(data!.description) }, collections });
}

type Collection = {
  name: string
  id: number
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const link = formData.get("link")?.toString();
  const summary = formData.get("summary")?.toString();
  const collection = formData.get("collection");
  const description = formData.get("description")?.toString();
  const section = formData.get("section")?.toString();

  await db.resource.update({
    where: {
      id: Number(params.id)
    },
    data: {
      title: title,
      link: link,
      description: await toHTML(description!),
      summary: summary,
      resourceCollectionId: Number(collection),
      section: section
    }
  })

  return redirect("/resources");
}

const Edit = () => {
  const transition = useTransition();
  const data = useLoaderData();

  const { resource, collections }: { resource: Resource, collections: Collection[] } = data;


  const { link, title, description, summary, resourceCollectionId, section } = resource;

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput id="link-input" name="link" label="Link" defaultValue={link} required />
      <TextInput id="title-input" name="title" label="Title" defaultValue={title} required />
      <TextInput id="summary-input" name="summary" label="Summary" defaultValue={summary} required />
      <TextArea id="resource-description" name="description" label="Description" defaultValue={description} />
      <TextInput id="section-input" name="section" label="Section" defaultValue={section} required />
      <div className="flex w-full gap-2 mt-2">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton key={name} name="collection" label={name} value={id} defaultChecked={id === resourceCollectionId} />
        ))}
      </div>
      <button className="btn">{transition.submission
        ? "Saving..."
        : "Edit Resource"}</button>
    </Form>
  )
}

export default Edit;