import { ActionFunction, redirect } from 'remix'
import { TextArea, TextInput, Form } from '~/components/Form'
import { db } from '~/utils/db.server'
import { toSlug } from '~/utils/utils'

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData()
  const action = data.get('_action')
  const title = data.get('title') as string
  const content = data.get('markdown') as string

  if (action === 'draft') {
    await db.post.create({
      data: {
        title,
        slug: toSlug(title),
        content: content,
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
        content: content,
        published: true,
      },
    })

    return redirect(`/blog/${toSlug(title)}`)
  }
}

const NewPost = () => {
  return (
    <Form method="post" className="w-full max-w-3xl mx-auto pt-8">
      <div className="flex items-start w-full space-x-8">
        <div className="w-full flex-grow flex flex-col space-y-3">
          <TextInput name="title" label="Title" required />
          <TextArea label="Markdown" name="markdown" rows={50} />
        </div>
        <div className="flex flex-shrink-0 space-x-2">
          <button
            name="_action"
            value="draft"
            className="btn bg-white hover:bg-gray-100 border border-black text-black"
          >
            Save as Draft
          </button>
          <button name="_action" value="publish" className="btn">
            Publish
          </button>
        </div>
      </div>
    </Form>
  )
}

export default NewPost
