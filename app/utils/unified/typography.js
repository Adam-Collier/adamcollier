const visit = require('unist-util-visit')

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (node.tagName === 'h1') {
      node.properties.className = 'text-3xl'
    }
    if (node.tagName === 'h2') {
      node.properties.className = 'text-2xl'
    }
    if (node.tagName === 'h3') {
      node.properties.className = 'text-xl'
    }
    if (node.tagName === 'h4') {
      node.properties.className = 'text-lg'
    }
    if (node.tagName === 'p') {
      node.properties.className = 'indent-4'
    }
  }
}
