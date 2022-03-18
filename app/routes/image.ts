import type { LoaderFunction } from 'remix'
import type { FitEnum } from 'sharp'
import sharp from 'sharp'
import { Response } from '@remix-run/node'
import { join } from 'path'
import { promises } from 'fs'
import { createHash } from 'crypto'

let badImageBase64 = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

// taken from https://github.com/vercel/next.js/blob/d3a53a6f018d572371f3ca41d0148c8329b59b33/packages/next/server/image-optimizer.ts#L633-L643
export const getHash = (items: (string | number | Buffer)[]) => {
  const hash = createHash('sha256')
  for (let item of items) {
    if (typeof item === 'number') hash.update(String(item))
    else {
      hash.update(item)
    }
  }
  // See https://en.wikipedia.org/wiki/Base64#Filenames
  return hash.digest('base64').replace(/\//g, '-')
}

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
  let cacheDir = join(__dirname, 'cache', 'images')
  let url = new URL(request.url)
  let src = url.searchParams.get('src')

  let filename = getHash([src as string])
  let cachedFilePath = `${cacheDir}/${filename}`

  try {
    // check if the cache has the image
    const buffer = await promises.readFile(cachedFilePath)
    console.info('served from the file cache')
    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (err) {
    console.info('cache skipped for', src)
  }

  // otherwise fetch the image and store in the cache
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

    // cache the transformed image here
    // similar to how next handles it here:
    // https://github.com/vercel/next.js/blob/d3a53a6f018d572371f3ca41d0148c8329b59b33/packages/next/server/image-optimizer.ts#L534-L543
    await promises.mkdir(cacheDir, { recursive: true })
    await promises.writeFile(cachedFilePath, sharpInstance)

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
