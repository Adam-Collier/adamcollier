const visit = require('unist-util-visit')
const { toSlug } = require('~/utils/utils')

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    // make sure we only target elements with the resource structure
    if (
      node.tagName === 'p' &&
      node.children[0].tagName === 'a' &&
      node.children[1].value.startsWith(' - ') &&
      node.children[1].value.split(' - ').length === 3
    ) {
      const [titleNode, firstContentNode, ...contentNode] = node.children
      const link = titleNode.properties.href
      const title = titleNode.children[0].value

      const [, summary, ...restOfContent] = firstContentNode.value.split(' - ')
      firstContentNode.value = restOfContent.join('')

      const content = [firstContentNode, ...contentNode]

      // the markup we have transferred to hast
      // used this to generate the hast for ease https://stackblitz.com/edit/node-nmakiy?file=index.json

      //   <div class="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-4 sm:gap-8">
      //       <div>
      //           <a
      //               href="${link}"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //               class="hover:underline text-indigo-600"
      //           >
      //               <p class="font-semibold">${title}</p>
      //           </a>
      //           <p class="text-sm text-gray-400">${summary}</p>
      //       </div>
      //       <div class="href:text-indigo-500 href:underline">
      //         ${content}
      //       </div>
      //   </div>

      const resourceNode = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: [
            'flex',
            'flex-col',
            'md:flex-row',
            'space-y-2',
            'md:space-y-0',
            'md:space-x-8',
          ],
        },
        children: [
          {
            type: 'element',
            tagName: 'div',
            properties: {
              className: 'md:w-44 lg:w-48 md:shrink-0',
              id: toSlug(title),
            },
            children: [
              {
                type: 'element',
                tagName: 'a',
                properties: {
                  href: link,
                  target: '_blank',
                  rel: ['noopener', 'noreferrer'],
                  className: ['hover:underline', 'text-indigo-600'],
                },
                children: [
                  {
                    type: 'element',
                    tagName: 'p',
                    properties: {
                      className: ['font-semibold'],
                    },
                    children: [
                      {
                        type: 'text',
                        value: title,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                tagName: 'p',
                properties: {
                  className: ['text-sm', 'text-gray-500'],
                },
                children: [
                  {
                    type: 'text',
                    value: summary,
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            tagName: 'div',
            properties: {
              className: ['href:text-indigo-600', 'href:underline'],
            },
            children: content,
          },
        ],
      }

      parentNode.children[index] = resourceNode
    }
  }
}
