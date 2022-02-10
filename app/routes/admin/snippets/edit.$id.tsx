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
import { Form, TextInput, TextArea, RadioButton } from '~/components/Form'
import { toSlug } from '~/utils/utils'
import { cache } from '~/utils/cache.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

  const { id } = params

  const snippet = await db.snippet.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      SnippetCollection: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })

  const collections = await db.snippetCollection.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  return json({
    snippet,
    collections,
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
  } else {
    await db.snippet.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title: title,
        content: content,
      },
    })
  }

  // delete the cache for the index and $slug route
  await Promise.all([
    cache.del('snippets'),
    cache.del(`snippets-${toSlug(collectionName)}`),
  ])

  return redirect(`/snippets/${toSlug(collectionName)}`)
}

type Collection = {
  name: string
  id: number
}

const EditSnippet = () => {
  const transition = useTransition()
  const { snippet, collections } = useLoaderData()
  const { title, content, SnippetCollection } = snippet

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
        rows={5}
      />
      <div className="flex w-full gap-2 mt-2">
        {collections.map(({ id, name }: Collection) => (
          <RadioButton
            name="collectionId"
            label={name}
            value={id}
            defaultChecked={id === SnippetCollection.id}
          />
        ))}
      </div>
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
