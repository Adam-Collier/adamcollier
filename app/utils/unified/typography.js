const visit = require('unist-util-visit')
const {toSlug} = require("../utils");

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (node.tagName === 'h2') {
      node.properties.className = 'text-xl'
      node.properties.id = toSlug(node.children[0].value);
    }
    if (node.tagName === 'h3') {
      node.properties.className = 'text-lg'
      node.properties.id = toSlug(node.children[0].value);
    }
    if (node.tagName === 'h4') {
      node.properties.className = 'text-md'
      node.properties.id = toSlug(node.children[0].value);
    }
    if(node.tagName === "p") {
      node.properties.className = 'leading-7'
    }
    if(node.tagName === "ol") {
      node.properties.className = 'list-decimal pl-8 space-y-2'
    }
    if(node.tagName === "ul") {
      node.properties.className = 'list-disc pl-8 space-y-2'
    }
    if(parentNode.tagName !== "pre" && node.tagName === "code") {
        node.properties.className = 'bg-gray-100 dark:bg-gray-700 text-sm px-1.5 py-1 rounded'
    }
    if(node.tagName === "a") {
      node.properties.className =
        'underline text-indigo-600'
    }
  }
}
