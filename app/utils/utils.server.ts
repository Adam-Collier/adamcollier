export const toHTML = async (markdown: string) => {
  const { unified } = await import('unified')
  const { default: remarkParse } = await import('remark-parse')
  const { default: remarkRehype } = await import('remark-rehype')
  const { default: rehypeExternalLinks } = await import('rehype-external-links')
  const { default: rehypeSanitize } = await import('rehype-sanitize')
  const { default: rehypeStringify } = await import('rehype-stringify')

  let processor = unified()
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(rehypeExternalLinks)
    .use(rehypeSanitize)
    .use(rehypeStringify) // Serialize HTML syntax tree

  let html = await processor.process(markdown)

  // make sure to return a string otherwise Typescript will throw an error regarding VFile
  return html.value.toString()
}

export const toMarkdown = async (html: string) => {
  const { unified } = await import('unified')
  const { default: rehypeParse } = await import('rehype-parse')
  const { default: rehypeRemark } = await import('rehype-remark/index.js')
  const { default: remarkStringify } = await import('remark-stringify')

  const processor = unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)

  const markdown = await processor.process(html)

  return markdown.value.toString()
}
