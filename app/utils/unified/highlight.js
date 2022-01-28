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
    if (parentNode.tagName === 'pre' && node.tagName === 'code') {
      // syntax highlight
      const lang = node.properties.className
        ? node.properties.className[0].split('-')[1]
        : 'md'
      let code = nodeToString(node)
      let result = refractor.highlight(code, lang)
      parentNode.properties.className = 'pre relative'
      //   // line highlight
      //   const linesToHighlight = rangeParser(node.properties.line || '0')
      //   result = highlightLine(result, linesToHighlight)

      // word highlight
      //   result = highlightWord(result)

      parentNode.children.push({
        type: 'element',
        tagName: 'button',
        properties: {
          className: 'absolute top-4 right-4',
          dataCode: code,
          onclick: 'copyCodeToClipboard(this)',
        },
        children: [
          {
            type: 'element',
            tagName: 'span',
            properties: {
              className: 'block i-ri:clipboard-line',
            },
          },
        ],
      })

      node.children = result
    }
  }
}
