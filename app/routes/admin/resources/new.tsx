import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/cloudflare";
import { useLoaderData, useTransition } from "@remix-run/react";
import { db } from '~/utils/db.server'
import { Form, TextInput, TextArea, RadioButton } from '~/components/Form'
import { toSlug } from '~/utils/utils'

export const loader: LoaderFunction = async () => {
  const collections = await db.resourceCollection.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  return json({ collections })
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const title = formData.get('title') as string
  const content = formData.get('markdown') as string
  const section = formData.get('section') as string
  const collection = formData.get('collection') as string

  const [collectionId, ...collectionName] = collection.split(' ')

  await db.resource.create({
    data: {
      // we need our resourceCollectionId so the resource is associated with the correct page/collection
      resourceCollectionId: Number(collectionId),
      // the rest is the state from our inputs
      title,
      content,
      section,
    },
  })

  return redirect(`/resources/${toSlug(collectionName.join(' '))}`)
}

type Collection = {
  name: string
  id: number
}

const NewResource = () => {
  const transition = useTransition()
  const { collections } = useLoaderData()

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="title" label="Title" required />
      <TextArea name="markdown" label="Markdown" />
      <TextInput name="section" label="Section" required />
      <div className="flex flex-wrap w-full gap-2 py-2">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton name="collection" label={name} value={`${id} ${name}`} />
        ))}
      </div>
      <button className="btn">
        {transition.submission ? 'Creating...' : 'Create Resource'}
      </button>
    </Form>
  )
}

export default NewResource
