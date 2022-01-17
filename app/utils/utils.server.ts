const unified = require('unified')

const remarkParse = require('remark-parse')
const remarkRehype = require('remark-rehype')
const remarkStringify = require('remark-stringify')
const remarkExternalLinks = require('remark-external-links')

const rehypeStringify = require('rehype-stringify')
const rehypeRemark = require('rehype-remark')
const rehypeParse = require('rehype-parse')

const highlight = require('~/utils/unified/highlight')

export const toHTML = async (markdown: string) => {
  let processor = unified()
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(await highlight)
    .use(remarkExternalLinks)
    .use(rehypeStringify)

  let html = await processor.process(markdown)

  // make sure to return a string otherwise Typescript will throw an error regarding VFile
  return html.contents
}

export const toMarkdown = async (html: string) => {
  const processor = unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)

  const markdown = await processor.process(html)

  return markdown.value.toString()
}
