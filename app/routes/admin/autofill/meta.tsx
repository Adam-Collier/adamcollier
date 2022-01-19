import { ActionFunction, json, LoaderFunction } from 'remix'
import { parse, walk, SyntaxKind } from 'html5parser'

export const action: ActionFunction = async ({ request }) => {
  let { url } = await request.json()

  const response = await fetch(url)
  const html = await response.text()
  const ast = parse(html, { setAttributeMap: true })

  let data: { [key: string]: string } = {}

  if (url.startsWith('https://open.spotify.com')) {
    let meta: { [key: string]: string } = {}
    // parse the html here
    walk(ast, {
      enter: (node) => {
        // match only the og:title, og:description or og:image meta tags
        if (
          node.type === SyntaxKind.Tag &&
          node.name === 'meta' &&
          node.attributes[0].value?.value.match(
            /^(og:title|og:description|og:image)$/,
          )
        ) {
          // remove the og: bit of the string
          let property = node.attributes[0].value.value.slice(3)
          // if there's no value return
          if (!node.attributes[1].value?.value) return
          // add to the meta object
          meta[property] = node.attributes[1].value?.value
        }
      },
    })

    const { title, description, image } = meta
    // sort into the data we need
    data = {
      artist: description.split(' · ')[0],
      album: title,
      image,
    }
  } else if (url.startsWith('https://soundcloud.com')) {
    let meta: { [key: string]: string } = {}
    // parse the html here
    walk(ast, {
      enter: (node) => {
        // match only the og:title, og:description or og:image meta tags
        if (
          node.type === SyntaxKind.Tag &&
          node.name === 'meta' &&
          node.attributes[0].value?.value.match(
            /^(og:title|og:description|og:image)$/,
          )
        ) {
          // remove the og: bit of the string
          let property = node.attributes[0].value.value.slice(3)
          // if there's no value return
          if (!node.attributes[1].value?.value) return
          // add to the meta object
          meta[property] = node.attributes[1].value?.value
        }

        if (node.type === SyntaxKind.Tag && node.name === 'h1') {
          if (node.body) {
            // @ts-ignore .body does exist so I don't know why thy ist complaining
            meta['artist'] = node.body[2].body[0].value
          }
        }
      },
    })

    const { title, artist, image } = meta
    // sort into the data we need
    data = {
      title,
      artist,
      image,
    }
  } else {
    // if it isn't a spotify or soundcloud link assume it is a radio station
    let meta: { [key: string]: string } = {}

    walk(ast, {
      enter: (node) => {
        // match only the og:title, og:description or og:image meta tags
        if (
          node.type === SyntaxKind.Tag &&
          node.name === 'meta' &&
          node.attributes[0].value?.value.match(/^(og:title|og:description)$/)
        ) {
          // remove the og: bit of the string
          let property = node.attributes[0].value.value.slice(3)
          // if there's no value return
          if (!node.attributes[1].value?.value) return
          // add to the meta object
          meta[property] = node.attributes[1].value?.value
        }
      },
    })

    const { title, image, description } = meta
    // sort into the data we need
    data = {
      title: title,
      description: description,
      image: image,
    }
  }

  return json(data)
}

export const loader: LoaderFunction = async () => {
  return null
}
