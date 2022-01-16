import React from 'react'
import { ActionFunction, redirect, useTransition } from 'remix'
import { Form, TextInput, NumberInput } from '~/components/Form'
import { lruCache } from '~/utils/cache.server'
import notion from '~/utils/notion.server'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const link = form.get('link') as string
  const artist = form.get('artist') as string
  const album = form.get('album') as string
  const image = form.get('image') as string
  const rating = form.get('rating')

  const database_id: string = process.env.NOTION_SPOTIFY_ALBUMS!

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
      rating: {
        number: Number(rating),
      },
      artist: {
        title: [
          {
            text: {
              content: artist,
            },
          },
        ],
      },
      album: {
        rich_text: [
          {
            text: {
              content: album || '',
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

const NewMusic = () => {
  const transition = useTransition()

  const handleChange = async (e: React.ChangeEvent<any>): Promise<void> => {
    let { value } = e.target as HTMLInputElement

    if (!value) return

    const response = await fetch('/admin/music/autofill', {
      method: 'POST',
      body: JSON.stringify({
        url: value,
      }),
    })

    const data = await response.json()

    for (const property in data) {
      if (document.querySelector(`input[name="${property}"]`)) {
        let input = document.querySelector(
          `input[name="${property}"]`,
        ) as HTMLInputElement
        input.value = data[property]
      }
    }
  }

  return (
    <Form method="post" className="w-full max-w-xl mx-auto">
      <TextInput name="link" label="Link" onChange={handleChange} />
      <TextInput name="artist" label="Artist" />
      <TextInput name="album" label="Album" />
      <TextInput name="image" label="Image" />
      <NumberInput name="rating" label="Rating" />
      <button className="btn">
        {transition.submission ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  )
}

export default NewMusic
