import type { LoaderFunction } from 'remix'
import { imageLoader, MemoryCache, pureTransformer } from 'remix-image/server'

const config = {
  selfUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://www.adamcollier.co.uk/'
      : 'http://localhost:3000',
  cache: new MemoryCache(),
}

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(config, request)
}
