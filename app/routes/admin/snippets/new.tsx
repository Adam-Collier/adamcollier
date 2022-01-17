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

  const collections = await db.snippetCollection.findMany({
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
  const content = formData.get('content') as string
  const collectionId = formData.get('collectionId') as string

  await db.snippet.create({
    data: {
      // we need our snippetCollectionId so the resource is associated with the correct page/collection
      snippetCollectionId: Number(collectionId),
      // the rest is the state from our inputs
      title,
      content,
    },
  })

  return redirect('/snippets')
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

      <TextArea name="content" label="Content" rows={15} />
      <div className="flex w-full gap-2 mt-2">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton name="collectionId" label={name} value={id} />
        ))}
      </div>
      <button className="btn">
        {transition.submission ? 'Creating...' : 'Create Snippet'}
      </button>
    </Form>
  )
}

export default NewResource
