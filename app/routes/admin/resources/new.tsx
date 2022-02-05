import {
  LoaderFunction,
  ActionFunction,
  useTransition,
  redirect,
  json,
  useLoaderData,
} from 'remix'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'
import { Form, TextInput, TextArea, RadioButton } from '~/components/Form'
import { toSlug } from '~/utils/utils'

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

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
      <div className="flex w-full gap-2 mt-2">
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
