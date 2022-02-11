const visit = require('unist-util-visit')
const nodeToString = require('hast-util-to-string')
const refractor = require('refractor')
// import type { Root } from 'mdast'
// import type { Node, Parent } from 'unist'
// const highlightLine = require('./rehype-highlight-line')
// const highlightWord = require('./rehype-highlight-word')

// interface Element extends Parent {
//   type: 'element'
//   tagName: string
//   properties: {
//     [key: string]: string
//   }
//   content: Node
//   children: Node[]
// }

module.exports = () => {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (node.tagName === 'pre') {
      node.properties.className = 'pre'
      let code = nodeToString(node.children[0])

      const wrapperNode = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: 'relative',
        },
        children: [
          { ...node },
          {
            type: 'element',
            tagName: 'button',
            properties: {
              className:
                'absolute top-2 right-2 p-1 bg-[hsl(15_12.9%_20%)] hover:bg-[hsl(15_12.9%_25%)] rounded text-white',
              dataCode: code,
              onclick: 'copyCodeToClipboard(this)',
              ariaLabel: 'copy to clipboard',
            },
            children: [
              {
                type: 'element',
                tagName: 'span',
                properties: {
                  className: 'block i-ri:clipboard-line w-[14px] h-[14px]',
                },
              },
            ],
          },
        ],
      }

      parentNode.children[index] = wrapperNode
    }

    if (parentNode.tagName === 'pre' && node.tagName === 'code') {
      // syntax highlight
      const lang = node.properties.className
        ? node.properties.className[0].split('-')[1]
        : 'md'
      let code = nodeToString(node)
      let result = refractor.highlight(code, lang)

      node.children = result
    }
  }
}
