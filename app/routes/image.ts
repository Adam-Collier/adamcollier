import type { LoaderFunction } from 'remix'
import type { FitEnum } from 'sharp'
import sharp from 'sharp'
import { Response } from '@remix-run/node'

let badImageBase64 = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

// return a transparent png if the request is bad
function badImageResponse() {
  let buffer = Buffer.from(badImageBase64, 'base64')
  return new Response(buffer, {
    status: 500,
    headers: {
      'Cache-Control': 'max-age=0',
      'Content-Type': 'image/gif;base64',
      'Content-Length': buffer.length.toFixed(0),
    },
  })
}

function getIntOrNull(value: string | null) {
  if (value === null) {
    return null
  }

  return Number.parseInt(value)
}

export let loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url)

  let src = url.searchParams.get('src')
  if (!src) {
    return badImageResponse()
  }

  let width = getIntOrNull(url.searchParams.get('width'))
  let height = getIntOrNull(url.searchParams.get('height'))
  let fit = (url.searchParams.get('fit') || 'cover') as keyof FitEnum

  try {
    // fetch the image data
    let response = await fetch(src.toString())
    // store the body data
    const data = await response.arrayBuffer()
    // store the status
    let status = response.status

    // if the image has no data, return a bad image response
    if (!data) {
      return badImageResponse()
    }

    let sharpInstance = await sharp(Buffer.from(data))
      // resize to the supplied width and height
      .resize(width, height, { fit })
      // transform to webp
      .webp({ reductionEffort: 6 })
      // return a buffer
      .toBuffer()
      .catch((e: any) => {
        console.log(e)
      })

    if (!sharpInstance) return badImageResponse()

    return new Response(sharpInstance, {
      status: status,
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error(error)
    return badImageResponse()
  }
}
