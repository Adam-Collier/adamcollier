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
  const data = await request.formData()
  const action = data.get('_action')
  const title = data.get('title') as string
  const description = data.get('description') as string
  const content = data.get('markdown') as string

  if (action === 'draft') {
    await db.post.update({
      where: {
        slug,
      },
      data: {
        slug: toSlug(title),
        title,
        description,
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
        slug: toSlug(title),
        title,
        description,
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
  const { title, content, description } = data
  const transition = useTransition()

  return (
    <div className="w-full min-w-0">
      <Form method="post">
        <div className="flex flex-col-reverse sm:flex-row gap-8 sm:items-start w-full">
          <div className="flex flex-grow flex-col gap-3">
            <TextInput
              name="title"
              label="Title"
              required
              defaultValue={title}
            />
            <TextArea
              label="Description"
              name="description"
              rows={2}
              minChar={120}
              maxChar={155}
              defaultValue={description}
            />
            <TextArea
              label="Markdown"
              name="markdown"
              rows={50}
              defaultValue={content}
            />
          </div>
          <div className="flex justify-end space-x-2 min-w-52">
            <button
              name="_action"
              value="draft"
              className="btn bg-white hover:bg-gray-100 border border-black text-black"
            >
              {transition.submission?.formData.get('_action') === 'draft' &&
              transition.state === 'submitting'
                ? 'Saving'
                : 'Save Draft'}
            </button>
            <button name="_action" value="publish" className="btn">
              {transition.submission?.formData.get('_action') === 'publish' &&
              transition.state === 'submitting'
                ? 'Publishing'
                : 'Publish'}
            </button>
          </div>
        </div>
      </Form>
      <div className="h-50vh"></div>
    </div>
  )
}

export default EditDraft
