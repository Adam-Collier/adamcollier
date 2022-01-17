import { LoaderFunction, ActionFunction, useTransition, redirect } from 'remix'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'
import { Form, TextInput, TextArea } from '~/components/Form'

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

  return null
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const name = formData.get('name')?.toString() || ''
  const description = formData.get('description')?.toString() || ''

  await db.snippetCollection.create({
    data: {
      name,
      description,
    },
  })

  return redirect('/snippets')
}

const NewSnippetCollection = () => {
  const transition = useTransition()

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="name" label="Name" required />
      <TextArea name="description" label="Description" />
      <button className="btn">
        {transition.submission ? 'Creating...' : 'Create Snippet Collection'}
      </button>
    </Form>
  )
}

export default NewSnippetCollection
