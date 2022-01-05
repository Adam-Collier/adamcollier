const rehypeMetaAttribute = async (options = {}) => {
  let re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

  const { visit } = await import("unist-util-visit");

  return (tree) => {
    visit(tree, "element", visitor);
  };

  function visitor(node, index, parentNode) {
    var match;

    if (node.tagName === "code" && node.data && node.data.meta) {
      re.lastIndex = 0; // Reset regex.

      while ((match = re.exec(node.data.meta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || "";
        parentNode.properties[match[1]] =
          match[2] || match[3] || match[4] || "";
      }
    }
  }
};

export default rehypeMetaAttribute;
