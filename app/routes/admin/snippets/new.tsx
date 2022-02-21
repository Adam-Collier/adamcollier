import {
  LoaderFunction,
  ActionFunction,
  useTransition,
  redirect,
  json,
  useLoaderData,
} from 'remix'
import { db } from '~/utils/db.server'
import { Form, TextInput, TextArea, RadioButton } from '~/components/Form'
import { toSlug } from '~/utils/utils'
import { cache } from '~/utils/cache.server'

export const loader: LoaderFunction = async () => {
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
  const collection = formData.get('collection') as string

  const [collectionId, collectionName] = collection.split(' - ')

  await db.snippet.create({
    data: {
      // we need our snippetCollectionId so the resource is associated with the correct page/collection
      snippetCollectionId: Number(collectionId),
      // the rest is the state from our inputs
      title,
      content,
    },
  })

  // delete the cache for the index and $slug route
  await Promise.all([
    cache.del('snippets'),
    cache.del(`snippets-${toSlug(collectionName)}`),
    cache.del('snippets-nav'),
  ])

  return redirect(toSlug(`/snippets/${collectionName}`))
}

type Collection = {
  name: string
  id: number
}

const NewSnippet = () => {
  const transition = useTransition()
  const { collections } = useLoaderData()

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="title" label="Title" required />
      <TextArea name="content" label="Content" rows={15} />
      <div className="flex flex-wrap w-full gap-2 py-4">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton
            name="collection"
            label={name}
            value={`${id} - ${name}`}
          />
        ))}
      </div>
      <button className="btn">
        {transition.submission ? 'Creating...' : 'Create Snippet'}
      </button>
    </Form>
  )
}

export default NewSnippet
