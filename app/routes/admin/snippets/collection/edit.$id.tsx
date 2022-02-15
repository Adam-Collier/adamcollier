import {
  LoaderFunction,
  json,
  useLoaderData,
  ActionFunction,
  useTransition,
  redirect,
} from 'remix'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'
import { Form, TextInput, TextArea } from '~/components/Form'
import { toSlug } from '~/utils/utils'
import { cache } from '~/utils/cache.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

  const { id } = params
  const data = await db.snippetCollection.findUnique({
    where: {
      id: Number(id),
    },
  })

  return json({
    ...data,
  })
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const button = formData.get('button')
  const name = formData.get('name') as string
  const description = formData.get('description') as string

  if (button === 'delete') {
    const deleteCollection = db.snippetCollection.delete({
      where: {
        id: Number(params.id),
      },
    })

    const deleteSnippets = db.snippet.deleteMany({
      where: {
        snippetCollectionId: Number(params.id),
      },
    })

    // we must delete the snippets first otherwise snippetCollectionId changes to null before we can delete them via id
    await db.$transaction([deleteSnippets, deleteCollection])
    await cache.del('snippets-nav')

    return redirect('/snippets')
  }

  await db.snippetCollection.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: name,
      description: description,
    },
  })

  await cache.del('snippets-nav')
  return redirect(`/snippets/${toSlug(name)}`)
}

const EditSnippetCollection = () => {
  const transition = useTransition()
  const data = useLoaderData()

  const { name, description } = data

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="name" label="Name" defaultValue={name} required />
      <TextArea
        name="description"
        label="Description"
        defaultValue={description}
      />
      <div className="flex gap-2">
        <button className="btn" name="button">
          {transition.submission ? 'Saving...' : 'Edit Snippet Collection'}
        </button>
        <button
          className="btn bg-transparent border border-color-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          type="submit"
          name="button"
          value="delete"
        >
          {transition.submission ? 'Deleting...' : 'Delete Snippet Collection'}
        </button>
      </div>
    </Form>
  )
}

export default EditSnippetCollection
