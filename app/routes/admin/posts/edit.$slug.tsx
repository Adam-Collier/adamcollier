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
import { toSlug } from '~/utils/utils'

export const action: ActionFunction = async ({ request, params }) => {
  const { slug } = params
  const formData = await request.formData()
  const action = formData.get('_action')
  const title = formData.get('title') as string
  const content = formData.get('markdown') as string

  if (action === 'update') {
    await db.post.update({
      where: {
        slug,
      },
      data: {
        title,
        content,
        slug: toSlug(title),
      },
    })

    return redirect(`/blog/${toSlug(title)}`)
  }

  if (action === 'delete') {
    await db.post.delete({
      where: {
        slug,
      },
    })
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

const EditPost = () => {
  const data = useLoaderData()
  const { title, content } = data
  const transition = useTransition()

  return (
    <>
      <Form method="post" className="w-full max-w-5xl mx-auto pt-8 px-4">
        <div className="flex flex-col sm:flex-row gap-8 sm:items-start w-full">
          <div className="flex-grow flex flex-col gap-3">
            <TextInput
              name="title"
              label="Title"
              required
              defaultValue={title}
            />
            <TextArea
              label="Markdown"
              name="markdown"
              rows={50}
              defaultValue={content}
            />
          </div>
          <div className="flex space-x-2 sm:min-w-48 sm:justify-end sm:sticky sm:top-8">
            <button name="_action" value="delete" className="btn-delete">
              {transition.submission?.formData.get('_action') === 'delete' &&
              transition.state === 'submitting'
                ? 'Deleting'
                : transition.state === 'loading'
                ? 'Deleted!'
                : 'Delete'}
            </button>
            <button name="_action" value="update" className="btn">
              {transition.submission?.formData.get('_action') === 'update' &&
              transition.state === 'submitting'
                ? 'Updating'
                : transition.state === 'loading'
                ? 'Updated!'
                : 'Update'}
            </button>
          </div>
        </div>
      </Form>
      <div className="h-50vh"></div>
    </>
  )
}

export default EditPost
