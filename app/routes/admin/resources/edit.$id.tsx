import {
  LoaderFunction,
  json,
  useLoaderData,
  ActionFunction,
  useTransition,
  redirect,
} from 'remix'
import { Resource } from '@prisma/client'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'
import { Form, TextInput, TextArea, RadioButton } from '~/components/Form'
import { toMarkdown, toHTML } from '~/utils/utils.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

  const { id } = params
  const data = await db.resource.findUnique({
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
    resource: { ...data, description: await toMarkdown(data!.description) },
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
  const title = formData.get('title')?.toString()
  const link = formData.get('link')?.toString()
  const summary = formData.get('summary')?.toString()
  const collection = formData.get('collection')
  const description = formData.get('description')?.toString()
  const section = formData.get('section')?.toString()

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
      title: title,
      link: link,
      description: await toHTML(description!),
      summary: summary,
      resourceCollectionId: Number(collection),
      section: section,
    },
  })

  return redirect('/resources')
}

const Edit = () => {
  const transition = useTransition()
  const data = useLoaderData()

  const {
    resource,
    collections,
  }: { resource: Resource; collections: Collection[] } = data
  const { link, title, description, summary, resourceCollectionId, section } =
    resource

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="link" label="Link" defaultValue={link} required />
      <TextInput name="title" label="Title" defaultValue={title} required />
      <TextInput
        name="summary"
        label="Summary"
        defaultValue={summary}
        required
      />
      <TextArea
        name="description"
        label="Description"
        defaultValue={description}
      />
      <TextInput
        name="section"
        label="Section"
        defaultValue={section}
        required
      />
      <div className="flex w-full gap-2 mt-2">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton
            key={name}
            name="collection"
            label={name}
            value={id}
            defaultChecked={id === resourceCollectionId}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button className="btn" name="button">
          {transition.submission ? 'Saving...' : 'Edit Resource'}
        </button>
        <button
          className="btn bg-transparent border border-color-red-600 text-red-600 hover:bg-red-600 hover:text-white"
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
