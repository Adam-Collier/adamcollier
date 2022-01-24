import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  useLoaderData,
  useTransition,
} from 'remix'
import { Form, TextArea, TextInput } from '~/components/Form'
import { db } from '~/utils/db.server'

export const action: ActionFunction = async ({ request, params }) => {
  const { slug } = params
  const data = await request.formData()
  const action = data.get('_action')
  const title = data.get('title') as string
  const content = data.get('markdown') as string

  if (action === 'draft') {
    await db.post.update({
      where: {
        slug,
      },
      data: {
        title,
        content,
      },
    })

    return json({ success: 'The draft has been saved!' })
  }

  if (action === 'publish') {
    await db.post.update({
      where: {
        slug,
      },
      data: {
        title,
        content,
        published: true,
      },
    })

    return redirect(`/blog/${slug}`)
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  const data = await db.post.findUnique({
    where: {
      slug,
    },
  })

  return json(data)
}

const EditDraft = () => {
  const data = useLoaderData()
  const { title, content } = data
  const transition = useTransition()
  console.log(transition.state)

  return (
    <Form method="post">
      <div className="flex gap-8 items-start w-full">
        <div className="flex-grow flex flex-col gap-3">
          <TextInput name="title" label="Title" required defaultValue={title} />
          <TextArea
            label="Markdown"
            name="markdown"
            rows={50}
            defaultValue={content}
          />
        </div>
        <div className="flex space-x-2">
          <button
            name="_action"
            value="draft"
            className="btn bg-white hover:bg-gray-100 border border-black text-black"
          >
            {transition.submission?.formData.get('_action') === 'draft' &&
            transition.state === 'submitting'
              ? 'Saving'
              : transition.state === 'loading'
              ? 'Saved!'
              : 'Save Draft'}
          </button>
          <button name="_action" value="publish" className="btn">
            {transition.submission?.formData.get('_action') === 'publish' &&
            transition.state === 'submitting'
              ? 'Publishing'
              : transition.state === 'loading'
              ? 'Published!'
              : 'Publish'}
          </button>
        </div>
      </div>
    </Form>
  )
}

export default EditDraft
