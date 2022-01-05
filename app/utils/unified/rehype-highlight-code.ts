// import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import { refractor } from "refractor";

// const { visit } = await import("unist-util-visit");
// const { toString } = await import("hast-util-to-string");
// const { refractor } = await import("refractor");

const rehypeHighlightCode = async (options = {}) => {
  const { visit } = await import("unist-util-visit");
  // console.log(visit, "this is the visit");
  function visitor(node, index, parentNode) {
    console.log(node, "this is the node");
    // if (parentNode.tagName === "pre" && node.tagName === "code") {
    //   // syntax highlight
    //   const lang = node.properties.className
    //     ? node.properties.className[0].split("-")[1]
    //     : "md";
    //   console.log(lang, "this is the language");
    //   let result = refractor.highlight(toString(node), lang);

    //   // node.children = result;
    // }
  }

  return (tree) => {
    console.log(tree, "this is the tree");
    visit(tree, "element", visitor);
  };
};

export default rehypeHighlightCode;
