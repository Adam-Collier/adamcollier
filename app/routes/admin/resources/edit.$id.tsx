import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react";
import { Resource } from '@prisma/client'
import { db } from '~/utils/db.server'
import { Form, TextInput, TextArea, RadioButton } from '~/components/Form'
import { toSlug } from '~/utils/utils'

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params
  const resource = await db.resource.findUnique({
    where: {
      id: Number(id),
    },
  })

  const collections = await db.resourceCollection.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  return json({
    resource,
    collections,
  })
}

type Collection = {
  name: string
  id: number
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const button = formData.get('button')
  const title = formData.get('title') as string
  const content = formData.get('markdown') as string
  const collection = formData.get('collection') as string
  const section = formData.get('section') as string

  const [collectionId, ...collectionName] = collection.split(' ')

  if (button === 'delete') {
    await db.resource.delete({
      where: {
        id: Number(params.id),
      },
    })

    return redirect('/resources')
  }

  await db.resource.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title,
      content,
      resourceCollectionId: Number(collectionId),
      section: section,
    },
  })

  return redirect(`/resources/${toSlug(collectionName.join(' '))}`)
}

const Edit = () => {
  const transition = useTransition()
  const data = useLoaderData()

  const {
    resource,
    collections,
  }: { resource: Resource; collections: Collection[] } = data
  const { title, content, resourceCollectionId, section } = resource

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="title" label="Title" defaultValue={title} required />
      <TextArea name="markdown" label="Markdown" defaultValue={content} />
      <TextInput
        name="section"
        label="Section"
        defaultValue={section}
        required
      />
      <div className="flex flex-wrap w-full gap-2 py-2">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton
            key={name}
            name="collection"
            label={name}
            value={`${id} ${name}`}
            defaultChecked={id === resourceCollectionId}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button className="btn" name="button">
          {transition.submission ? 'Saving...' : 'Edit Resource'}
        </button>
        <button
          className="btn-delete"
          type="submit"
          name="button"
          value="delete"
        >
          {transition.submission ? 'Deleting...' : 'Delete Resource'}
        </button>
      </div>
    </Form>
  )
}

export default Edit
