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

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (parentNode.tagName === 'pre' && node.tagName === 'code') {
      // syntax highlight
      const lang = node.properties.className
        ? node.properties.className[0].split('-')[1]
        : 'md'
      let result = refractor.highlight(nodeToString(node), lang)
      parentNode.properties.className = "pre"
      //   // line highlight
      //   const linesToHighlight = rangeParser(node.properties.line || '0')
      //   result = highlightLine(result, linesToHighlight)

      // word highlight
      //   result = highlightWord(result)

      node.children = result
    }
  }
}
