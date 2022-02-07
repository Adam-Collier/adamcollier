import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  useLoaderData,
  useTransition,
} from 'remix'
import { DatePicker, Form, TextArea, TextInput } from '~/components/Form'
import { db } from '~/utils/db.server'
import { toSlug } from '~/utils/utils'

export const action: ActionFunction = async ({ request, params }) => {
  const { slug } = params
  const formData = await request.formData()
  const action = formData.get('_action')
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const content = formData.get('markdown') as string
  const publishedDate = formData.get('published-date') as string

  if (action === 'update') {
    await db.post.update({
      where: {
        slug,
      },
      data: {
        title,
        description,
        content,
        slug: toSlug(title),
        createdAt: String(new Date(publishedDate).toISOString()),
      },
    })

    // fetch requests need an absolute url
    const { origin } = new URL(request.url)
    // make a request to the updated page to stale-while-revalidate is triggered
    let data = await fetch(`${origin}/blog/${toSlug(title)}`)
    console.log(data, 'this is the data from the fetch')

    return redirect(`/blog/${toSlug(title)}`, {
      headers: { 'Cache-Control': 'max-age=0, must-revalidate' },
    })
  }

  if (action === 'delete') {
    await db.post.delete({
      where: {
        slug,
      },
    })

    redirect('/blog')
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
  const { title, description, content, createdAt } = data
  const transition = useTransition()

  return (
    <>
      <Form
        method="post"
        className="w-full max-w-5xl mx-auto"
        disabled={transition.state === 'submitting'}
      >
        <div className="flex flex-col sm:flex-row gap-8 sm:items-start w-full">
          <div className="flex-grow flex flex-col gap-3">
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
          <aside className="p-4 bg-gray-50 rounded flex flex-col space-y-4 sm:min-w-72">
            <div className="flex space-x-2 sm:sticky sm:top-8">
              <button name="_action" value="delete" className="btn-delete">
                {transition.submission?.formData.get('_action') === 'delete' &&
                transition.state === 'submitting'
                  ? 'Deleting'
                  : 'Delete'}
              </button>
              <button name="_action" value="update" className="btn">
                {transition.submission?.formData.get('_action') === 'update' &&
                transition.state === 'submitting'
                  ? 'Updating'
                  : 'Update'}
              </button>
            </div>
            <DatePicker
              defaultValue={createdAt}
              name="published-date"
              label="Published"
            />
          </aside>
        </div>
      </Form>
    </>
  )
}

export default EditPost
