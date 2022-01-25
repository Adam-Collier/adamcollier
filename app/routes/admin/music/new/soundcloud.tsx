import { ActionFunction, redirect, useTransition } from 'remix'
import { Form, TextInput } from '~/components/Form'
import { lruCache } from '~/utils/cache.server'
import notion from '~/utils/notion.server'
import { metaAutofill } from '~/utils/utils'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const link = form.get('link') as string
  const artist = form.get('artist') as string
  const title = form.get('title') as string
  const image = form.get('image') as string

  const database_id: string = process.env.NOTION_SOUNDCLOUD_MIXES!

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
      title: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      artist: {
        rich_text: [
          {
            text: {
              content: artist,
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

  if (lruCache.has('musicData')) lruCache.del('musicData')

  return redirect('/music')
}

const NewSoundcloudMix = () => {
  const transition = useTransition()

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="link" label="Link" onChange={metaAutofill} />
      <TextInput name="artist" label="Artist" />
      <TextInput name="title" label="Title" />
      <TextInput name="image" label="Image" />
      <button className="btn mt-2">
        {transition.submission ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  )
}

export default NewSoundcloudMix
