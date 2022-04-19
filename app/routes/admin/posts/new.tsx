import { ActionFunction, redirect } from "@remix-run/node";
import { useTransition } from "@remix-run/react";
import { TextArea, TextInput, Form, DatePicker } from '~/components/Form'
import { db } from '~/utils/db.server'
import { toSlug } from '~/utils/utils'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const action = formData.get('_action')
  const title = formData.get('title') as string
  const description = (formData.get('description') as string) || ''
  const content = (formData.get('markdown') as string) || ''
  const publishedDate = formData.get('published-date') as string

  if (action === 'draft') {
    await db.post.create({
      data: {
        title,
        slug: toSlug(title),
        content,
        description,
        published: false,
      },
    })

    return redirect('/admin/posts/drafts')
  }

  if (action === 'publish') {
    await db.post.create({
      data: {
        title,
        slug: toSlug(title),
        content,
        description,
        published: true,
        ...(publishedDate && {
          createdAt: new Date(publishedDate).toISOString(),
        }),
      },
    })

    return redirect(`/blog/${toSlug(title)}`)
  }
}

const NewPost = () => {
  const transition = useTransition()

  return (
    <Form method="post" className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 sm:items-start w-full">
        <div className="flex-grow flex flex-col gap-3">
          <TextInput name="title" label="Title" required />
          <TextArea
            label="Description"
            name="description"
            rows={2}
            minChar={120}
            maxChar={155}
          />
          <TextArea label="Markdown" name="markdown" />
        </div>
        <aside className="p-4 bg-gray-50 rounded flex flex-col space-y-4 sm:min-w-72 sm:sticky sm:top-8">
          <div className="flex space-x-2">
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
          <DatePicker name="published-date" label="Published" />
        </aside>
      </div>
    </Form>
  )
}

export default NewPost
