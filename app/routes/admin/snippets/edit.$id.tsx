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

export const loader: LoaderFunction = async ({ request, params }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

  const { id } = params
  const data = await db.snippet.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      SnippetCollection: {
        select: {
          name: true,
        },
      },
    },
  })

  return json({
    ...data,
  })
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const button = formData.get('button')
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const collectionName = formData.get('collection-name') as string

  if (button === 'delete') {
    await db.snippet.delete({
      where: {
        id: Number(params.id),
      },
    })

    return redirect('/snippets')
  }

  await db.snippet.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: title,
      content: content,
    },
  })

  return redirect(`/snippets/${toSlug(collectionName)}`)
}

const EditSnippet = () => {
  const transition = useTransition()
  const data = useLoaderData()

  const { title, content, SnippetCollection } = data

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="title" label="Title" defaultValue={title} required />
      <input
        type="text"
        name="collection-name"
        defaultValue={SnippetCollection.name}
        hidden
      />
      <TextArea
        name="content"
        label="Content"
        defaultValue={content}
        rows={20}
      />
      <div className="flex gap-2">
        <button className="btn" name="button">
          {transition.submission ? 'Saving...' : 'Edit Snippet'}
        </button>
        <button
          className="btn bg-transparent border border-color-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          type="submit"
          name="button"
          value="delete"
        >
          {transition.submission ? 'Deleting...' : 'Delete Snippet'}
        </button>
      </div>
    </Form>
  )
}

export default EditSnippet
