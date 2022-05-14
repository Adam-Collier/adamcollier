import { ActionFunction, json, LoaderFunction } from "@remix-run/cloudflare";
import { parse, walk, SyntaxKind } from 'html5parser'

export const action: ActionFunction = async ({ request }) => {
  let { url } = await request.json()

  const response = await fetch(url)
  const html = await response.text()
  const ast = parse(html, { setAttributeMap: true })

  let data: { [key: string]: string } = {}

  let meta: { [key: string]: string } = {}

  walk(ast, {
    enter: (node) => {
      // match only the og:title, og:description or og:image meta tags
      if (
        node.type === SyntaxKind.Tag &&
        node.name === 'meta' &&
        node.attributes[0].value?.value.match(/^(og:title)$/)
      ) {
        // remove the og: bit of the string
        let property = node.attributes[0].value.value.slice(3)
        // if there's no value return
        if (!node.attributes[1].value?.value) return
        // add to the meta object
        meta[property] = node.attributes[1].value?.value
      }

      if (
        node.type === SyntaxKind.Tag &&
        node.name === 'link' &&
        node.attributeMap!.rel.value!.value === 'apple-touch-icon'
      ) {
        if (node.attributeMap) {
          let imagePath = node.attributeMap.href.value?.value

          let baseUrl = url.endsWith('/') ? url?.slice(0, -1) : url

          meta['image'] = baseUrl + imagePath
        }
      }
    },
  })

  const { title, image } = meta
  // sort into the data we need
  data = {
    name: title,
    image: image,
  }

  return json(data)
}

export const loader: LoaderFunction = async () => {
  return null
}
