import { LoaderFunction, ActionFunction, useTransition, redirect, json, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import { Form, TextInput, TextArea, RadioButton } from "~/components/Form";
import { toHTML } from "~/utils/utils.server";

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response("Unauthorized", { status: 401 });

  const collections = await db.resourceCollection.findMany({
    select: {
      id: true,
      name: true
    }
  });

  return json({ collections });
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString() || "";
  const link = formData.get("link")?.toString() || "";
  const summary = formData.get("summary")?.toString() || "";
  const description = formData.get("description")?.toString();
  const section = formData.get("section")?.toString() || "";
  const collectionId = formData.get("collectionId");

  await db.resource.create({
    data: {
      // we need our resourceCollectionId so the resource is associated with the correct page/collection
      resourceCollectionId: Number(collectionId),
      // the rest is the state from our inputs
      title,
      summary,
      description: await toHTML(description!),
      link,
      section,
    }
  })

  return redirect("/resources");
}

type Collection = {
  name: string
  id: number
}

const NewResource = () => {
  const transition = useTransition();
  const { collections } = useLoaderData()

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="link" label="Link" required />
      <TextInput name="title" label="Title" required />
      <TextInput name="summary" label="Summary" required />
      <TextInput name="section" label="Section" required />
      <TextArea name="description" label="Description" id="resource-description" />
      <div className="flex w-full gap-2 mt-2">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton name="collectionId" label={name} value={id} />
        ))}
      </div>
      <button className="btn">{transition.submission
        ? "Creating..."
        : "Create Resource"}</button>
    </Form>
  )
}

export default NewResource;