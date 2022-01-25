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
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const excerpt = formData.get('excerpt') as string

  await db.resourceCollection.create({
    data: {
      name,
      description,
      excerpt,
    },
  })

  return redirect('/resources')
}

const NewResourceCollection = () => {
  const transition = useTransition()

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="name" label="Name" required />
      <TextArea name="description" label="Description" />
      <TextArea name="excerpt" rows={2} label="Excerpt" />
      <button className="btn">
        {transition.submission ? 'Creating...' : 'Create Snippet Collection'}
      </button>
    </Form>
  )
}

export default NewResourceCollection
