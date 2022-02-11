import { ActionFunction, redirect, useTransition } from 'remix'
import { Form, TextInput } from '~/components/Form'
import notion from '~/utils/notion.server'
import { cache } from '~/utils/cache.server'
import { faviconAutofill } from '~/utils/utils'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const link = form.get('link') as string
  const name = form.get('name') as string
  const image = form.get('image') as string

  const database_id: string = process.env.NOTION_INTERNET_RADIO_STATIONS!

  await notion.pages.create({
    parent: {
      database_id,
    },
    properties: {
      link: {
        rich_text: [
          {
            text: {
              content: link,
            },
          },
        ],
      },
      name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      image: {
        rich_text: [
          {
            text: {
              content: image,
            },
          },
        ],
      },
    },
  })

  if (await cache.has('music')) await cache.del('music')

  return redirect('/music')
}

const NewRadioShow = () => {
  const transition = useTransition()

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="link" label="Link" onChange={faviconAutofill} />
      <TextInput name="name" label="Name" />
      <TextInput name="image" label="Image" />
      <button className="btn mt-2">
        {transition.submission ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  )
}

export default NewRadioShow
