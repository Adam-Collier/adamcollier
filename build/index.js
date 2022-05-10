var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// app/utils/utils.ts
var utils_exports = {};
__export(utils_exports, {
  copyCodeToClipboard: () => copyCodeToClipboard,
  copyToClipboard: () => copyToClipboard,
  faviconAutofill: () => faviconAutofill,
  getHeadings: () => getHeadings,
  metaAutofill: () => metaAutofill,
  positionGridItems: () => positionGridItems,
  toReadableDate: () => toReadableDate,
  toSlug: () => toSlug,
  toTitleCase: () => toTitleCase
});
var toSlug, toReadableDate, conjunctions, articles, prepositions, lowers, toTitleCase, positionGridItems, metaAutofill, faviconAutofill, getHeadings, copyToClipboard, copyCodeToClipboard;
var init_utils = __esm({
  "app/utils/utils.ts"() {
    init_react();
    toSlug = (title) => title.toLowerCase().trim().replace(/ /g, "-").replace(/[^a-z0-9-\/]/g, "");
    toReadableDate = (date) => {
      const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("en-US", dateOptions);
    };
    conjunctions = ["for", "and", "nor", "but", "or", "yet", "so"];
    articles = ["a", "an", "the"];
    prepositions = [
      "aboard",
      "about",
      "above",
      "across",
      "after",
      "against",
      "along",
      "amid",
      "among",
      "anti",
      "around",
      "as",
      "at",
      "before",
      "behind",
      "below",
      "beneath",
      "beside",
      "besides",
      "between",
      "beyond",
      "but",
      "by",
      "concerning",
      "considering",
      "despite",
      "down",
      "during",
      "except",
      "excepting",
      "excluding",
      "following",
      "for",
      "from",
      "in",
      "inside",
      "into",
      "like",
      "minus",
      "near",
      "of",
      "off",
      "on",
      "onto",
      "opposite",
      "over",
      "past",
      "per",
      "plus",
      "regarding",
      "round",
      "save",
      "since",
      "than",
      "through",
      "to",
      "toward",
      "towards",
      "under",
      "underneath",
      "unlike",
      "until",
      "up",
      "upon",
      "versus",
      "via",
      "with",
      "within",
      "without"
    ];
    lowers = new Set([...conjunctions, ...articles, ...prepositions]);
    toTitleCase = (slug) => slug.split("-").map((word) => {
      if (lowers.has(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    positionGridItems = (grid, numberOfColumns, setNumberOfColumns) => {
      if (grid && getComputedStyle(grid).gridTemplateRows !== "masonry") {
        const gridItems = [...grid.childNodes];
        const rowGap = parseInt(window.getComputedStyle(grid).rowGap);
        const computedNumberOfColumns = window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;
        if (computedNumberOfColumns !== numberOfColumns) {
          setNumberOfColumns(computedNumberOfColumns);
          gridItems.forEach((item) => item.style.removeProperty("margin-top"));
          if (computedNumberOfColumns > 1) {
            gridItems.slice(computedNumberOfColumns).forEach((item, index) => {
              const imgAboveBottomPosition = gridItems[index].getBoundingClientRect().bottom;
              const topOfCurrentImage = item.getBoundingClientRect().top;
              item.style.marginTop = `${imgAboveBottomPosition + rowGap - topOfCurrentImage}px`;
            });
          }
        }
      }
    };
    metaAutofill = async (e) => {
      let { value } = e.target;
      if (!value)
        return;
      const response = await fetch("/admin/autofill/meta", {
        method: "POST",
        body: JSON.stringify({
          url: value
        })
      });
      const data = await response.json();
      for (const property in data) {
        if (document.getElementById(property)) {
          let input = document.getElementById(property);
          input.value = data[property];
        }
      }
    };
    faviconAutofill = async (e) => {
      let { value } = e.target;
      if (!value)
        return;
      const response = await fetch("/admin/autofill/favicon", {
        method: "POST",
        body: JSON.stringify({
          url: value
        })
      });
      const data = await response.json();
      for (const property in data) {
        if (document.getElementById(property)) {
          let input = document.getElementById(property);
          input.value = data[property];
        }
      }
    };
    getHeadings = (source) => {
      if (!source)
        return [];
      const headingLines = source.split("\n").filter((line) => line.match(/^###*\s/));
      const headings = [];
      let baseLevel;
      headingLines.forEach((line, index) => {
        var _a;
        const title = line.replace(/^###*\s/, "");
        const id = title.toLowerCase().replace(/[^a-zA-Z0-9 -]/gi, "").replace(/ /g, "-");
        const level = line.slice(0, 3) === "###" ? 3 : 2;
        if (index === 0)
          baseLevel = level;
        if (level === baseLevel) {
          headings.push({ id, title, items: [] });
        } else {
          (_a = headings[headings.length - 1].items) == null ? void 0 : _a.push({ id, title });
        }
      });
      return headings;
    };
    copyToClipboard = (content) => {
      if (typeof window !== "undefined") {
        const el = document.createElement(`textarea`);
        el.value = content;
        el.setAttribute(`readonly`, ``);
        el.style.position = `absolute`;
        el.style.left = `-9999px`;
        document.body.appendChild(el);
        el.select();
        document.execCommand(`copy`);
        document.body.removeChild(el);
      }
    };
    copyCodeToClipboard = () => {
      if (!window.copyCodeToClipboard) {
        window.copyCodeToClipboard = async (el) => {
          el.children[0].classList.remove("i-ri:clipboard-line");
          el.children[0].classList.add("i-ri:check-line");
          if (el.dataset.code) {
            copyToClipboard(el.dataset.code);
          }
          await new Promise((resolve) => setTimeout(resolve, 2e3));
          el.children[0].classList.remove("i-ri:check-line");
          el.children[0].classList.add("i-ri:clipboard-line");
        };
      }
    };
  }
});

// app/utils/unified/highlight.js
var require_highlight = __commonJS({
  "app/utils/unified/highlight.js"(exports, module2) {
    init_react();
    var visit = require("unist-util-visit");
    var nodeToString = require("hast-util-to-string");
    var refractor = require("refractor");
    module2.exports = () => {
      return (tree) => {
        visit(tree, "element", visitor);
      };
      function visitor(node, index, parentNode) {
        if (node.tagName === "pre") {
          node.properties.className = "pre";
          let code = nodeToString(node.children[0]);
          const wrapperNode = {
            type: "element",
            tagName: "div",
            properties: {
              className: "relative"
            },
            children: [
              __spreadValues({}, node),
              {
                type: "element",
                tagName: "button",
                properties: {
                  className: "absolute top-2 right-2 p-1 bg-[hsl(15_12.9%_20%)] hover:bg-[hsl(15_12.9%_25%)] rounded text-white",
                  dataCode: code,
                  onclick: "copyCodeToClipboard(this)",
                  ariaLabel: "copy to clipboard"
                },
                children: [
                  {
                    type: "element",
                    tagName: "span",
                    properties: {
                      className: "block i-ri:clipboard-line w-[14px] h-[14px]"
                    }
                  }
                ]
              }
            ]
          };
          parentNode.children[index] = wrapperNode;
        }
        if (parentNode.tagName === "pre" && node.tagName === "code") {
          const lang = node.properties.className ? node.properties.className[0].split("-")[1] : "md";
          let code = nodeToString(node);
          let result = refractor.highlight(code, lang);
          node.children = result;
        }
      }
    };
  }
});

// app/utils/unified/typography.js
var require_typography = __commonJS({
  "app/utils/unified/typography.js"(exports, module2) {
    init_react();
    var visit = require("unist-util-visit");
    var { toSlug: toSlug2 } = (init_utils(), utils_exports);
    module2.exports = (options = {}) => {
      return (tree) => {
        visit(tree, "element", visitor);
      };
      function visitor(node, index, parentNode) {
        if (node.tagName === "h2") {
          node.properties.className = "text-xl";
          node.properties.id = toSlug2(node.children[0].value);
        }
        if (node.tagName === "h3") {
          node.properties.className = "text-lg";
          node.properties.id = toSlug2(node.children[0].value);
        }
        if (node.tagName === "h4") {
          node.properties.className = "text-md";
          node.properties.id = toSlug2(node.children[0].value);
        }
        if (node.tagName === "p") {
          node.properties.className = "leading-7";
        }
        if (node.tagName === "ol") {
          node.properties.className = "list-decimal pl-8 space-y-2";
        }
        if (node.tagName === "ul") {
          node.properties.className = "list-disc pl-8 space-y-2";
        }
        if (parentNode.tagName !== "pre" && node.tagName === "code") {
          node.properties.className = "bg-gray-100 dark:bg-gray-700 text-sm px-1.5 py-1 rounded";
        }
        if (node.tagName === "a") {
          node.properties.className = "underline text-indigo-600 dark:text-indigo-400";
        }
      }
    };
  }
});

// app/utils/unified/resource.js
var require_resource = __commonJS({
  "app/utils/unified/resource.js"(exports, module2) {
    init_react();
    var visit = require("unist-util-visit");
    var { toSlug: toSlug2 } = (init_utils(), utils_exports);
    module2.exports = (options = {}) => {
      return (tree) => {
        visit(tree, "element", visitor);
      };
      function visitor(node, index, parentNode) {
        if (node.tagName === "p" && node.children[0].tagName === "a" && node.children[1].value.startsWith(" - ") && node.children[1].value.split(" - ").length === 3) {
          const [titleNode, firstContentNode, ...contentNode] = node.children;
          const link = titleNode.properties.href;
          const title = titleNode.children[0].value;
          const [, summary, ...restOfContent] = firstContentNode.value.split(" - ");
          firstContentNode.value = restOfContent.join("");
          const content = [firstContentNode, ...contentNode];
          const resourceNode = {
            type: "element",
            tagName: "div",
            properties: {
              className: [
                "flex",
                "flex-col",
                "md:flex-row",
                "space-y-2",
                "md:space-y-0",
                "md:space-x-8"
              ]
            },
            children: [
              {
                type: "element",
                tagName: "div",
                properties: {
                  className: "md:w-44 lg:w-48 md:shrink-0",
                  id: toSlug2(title)
                },
                children: [
                  {
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: link,
                      target: "_blank",
                      rel: ["noopener", "noreferrer"],
                      className: ["hover:underline", "text-indigo-600"]
                    },
                    children: [
                      {
                        type: "element",
                        tagName: "p",
                        properties: {
                          className: ["font-semibold"]
                        },
                        children: [
                          {
                            type: "text",
                            value: title
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "element",
                    tagName: "p",
                    properties: {
                      className: ["text-sm", "text-gray-500"]
                    },
                    children: [
                      {
                        type: "text",
                        value: summary
                      }
                    ]
                  }
                ]
              },
              {
                type: "element",
                tagName: "div",
                properties: {
                  className: ["href:text-indigo-600", "href:underline"]
                },
                children: content
              }
            ]
          };
          parentNode.children[index] = resourceNode;
        }
      }
    };
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/Adam/adamcollier/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/context.tsx
init_react();
var import_react = __toModule(require("react"));
var import_swr = __toModule(require("swr"));
var AuthContext = import_react.default.createContext({});
var fetcher = (url) => fetch(url, { method: "POST" }).then((r) => r.json());
var AuthProvider = ({ children }) => {
  const [user, setUser] = (0, import_react.useState)(null);
  const { data } = (0, import_swr.default)("/session", fetcher);
  if (data !== user)
    setUser(data);
  const updateUser = (value) => {
    setUser(value);
  };
  return /* @__PURE__ */ import_react.default.createElement(AuthContext.Provider, {
    value: { user, updateUser }
  }, children);
};
var useAuth = () => {
  return (0, import_react.useContext)(AuthContext);
};

// app/components/Header.tsx
init_react();
var import_remix2 = __toModule(require_remix());

// app/svgs.tsx
init_react();
var Home = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "inherit",
  d: "M19 21H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0L23 11h-3v9a1 1 0 01-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z"
}));
var Posts = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "inherit",
  d: "M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"
}));
var Snippets = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "inherit",
  d: "M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
}));
var Signout = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 018 4h-2.71a8 8 0 10.001 12h2.71A9.985 9.985 0 0112 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"
}));
var Resources = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "inherit",
  d: "M5 14h14V4H5v10zm0 2v4h14v-4H5zM4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zm11 15h2v2h-2v-2z"
}));
var Inspiration = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "inherit",
  d: "M22 20a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v16zm-11-5H4v4h7v-4zm9-4h-7v8h7v-8zm-9-6H4v8h7V5zm9 0h-7v4h7V5z"
}));
var Music = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "inherit",
  d: "M12 4a8 8 0 00-8 8h3a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-5a2 2 0 012-2h3a8 8 0 00-8-8zM4 14v5h3v-5H4zm13 0v5h3v-5h-3z"
}));
var Spotify = ({ className }) => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 4 1",
  className: className || ""
}, /* @__PURE__ */ React.createElement("path", {
  fill: "#1ED760",
  d: "M.5 0a.5.5 0 100 1 .5.5 0 000-1zm.23.721a.031.031 0 01-.044.01C.57.66.421.644.247.683a.031.031 0 01-.014-.06C.423.579.587.598.72.678c.015.01.02.028.01.043zM.79.585a.039.039 0 01-.053.013A.656.656 0 00.239.54.039.039 0 01.216.465a.73.73 0 01.562.066.039.039 0 01.013.054zM.797.443C.635.348.369.34.215.385a.047.047 0 11-.027-.09C.364.243.658.254.843.364a.047.047 0 11-.047.08zm.564.019C1.274.44 1.26.427 1.26.396c0-.029.027-.048.067-.048.039 0 .077.015.118.045l.004.001a.006.006 0 00.004-.002l.042-.06a.006.006 0 00-.001-.007.255.255 0 00-.166-.058c-.093 0-.158.056-.158.136 0 .086.056.116.153.14.083.019.097.035.097.063 0 .032-.029.052-.074.052A.199.199 0 011.208.6a.006.006 0 00-.005-.002L1.2.601l-.048.057a.006.006 0 000 .007c.054.048.12.073.191.073.1 0 .165-.054.165-.14 0-.071-.042-.11-.147-.136zm.376-.086a.136.136 0 00-.11.053v-.04a.006.006 0 00-.005-.005h-.077a.006.006 0 00-.006.005v.44c0 .003.003.005.006.005h.077A.006.006 0 001.627.83V.69a.14.14 0 00.109.05c.08 0 .163-.062.163-.181 0-.12-.082-.182-.163-.182zm.073.182c0 .06-.038.103-.091.103S1.625.616 1.625.558c0-.059.04-.103.093-.103.052 0 .09.043.09.103zm.3-.182a.182.182 0 00-.186.183c0 .101.08.18.184.18.105 0 .187-.08.187-.181a.181.181 0 00-.186-.182zm0 .285c-.056 0-.098-.044-.098-.103 0-.06.04-.103.096-.103s.098.045.098.104c0 .06-.04.102-.097.102zm.407-.277h-.085V.297A.006.006 0 002.425.29h-.077a.006.006 0 00-.006.006v.087h-.037A.006.006 0 002.3.389v.067c0 .003.002.005.005.005h.037v.172c0 .07.035.105.103.105A.14.14 0 002.517.72.006.006 0 002.52.715V.652a.006.006 0 00-.002-.005.005.005 0 00-.006 0 .098.098 0 01-.045.01c-.025 0-.036-.01-.036-.036v-.16h.085a.006.006 0 00.006-.005V.389a.005.005 0 00-.006-.005zm.296 0v-.01c0-.032.012-.046.04-.046a.13.13 0 01.043.008L2.9.335A.006.006 0 002.902.33V.265A.006.006 0 002.898.26a.212.212 0 00-.064-.01c-.071 0-.109.04-.109.117v.016h-.037a.006.006 0 00-.006.006v.067c0 .003.003.005.006.005h.037v.265c0 .004.003.006.006.006h.077a.006.006 0 00.006-.006V.461h.072l.11.265c-.012.028-.024.034-.041.034a.089.089 0 01-.043-.012h-.004a.006.006 0 00-.004.002l-.026.058a.006.006 0 00.002.007.163.163 0 00.083.021c.057 0 .089-.026.116-.098l.134-.346V.386a.006.006 0 00-.005-.002h-.08a.006.006 0 00-.006.004L3.04.623 2.95.388a.006.006 0 00-.006-.004h-.132zm-.171 0h-.078a.006.006 0 00-.005.005v.337c0 .004.002.006.005.006h.078a.006.006 0 00.005-.006V.39a.006.006 0 00-.005-.005zM2.602.23a.055.055 0 100 .11.055.055 0 000-.11zm.678.262a.054.054 0 01-.055-.054c0-.03.024-.055.055-.055a.055.055 0 010 .109zm0-.104a.049.049 0 00-.05.05c0 .027.022.048.05.048a.049.049 0 00.049-.049.048.048 0 00-.05-.049zm.012.055l.015.021h-.013L3.28.444h-.01v.02h-.011V.407h.025c.013 0 .022.007.022.018 0 .01-.005.016-.013.018zm-.01-.026H3.27v.018h.014c.007 0 .011-.003.011-.009 0-.006-.004-.009-.011-.009z"
}));
var Soundcloud = ({ className }) => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  className: className || "",
  viewBox: "0 0 152 18"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "#fff",
  d: "M16.782 17.325l-.23-4.275.23-10.575c0-.373.309-.675.69-.675.38 0 .689.302.689.675l.23 10.575-.23 4.275a.683.683 0 01-.69.675.683.683 0 01-.69-.675h.001zm-2.759 0l-.23-4.275.23-7.875c0-.373.309-.675.69-.675.38 0 .69.302.69.675l.23 7.875-.23 4.275a.683.683 0 01-.69.675.683.683 0 01-.69-.675zm-2.759 0l-.23-4.275.23-8.775c0-.373.31-.675.69-.675.38 0 .69.302.69.675l.23 8.775-.23 4.275a.683.683 0 01-.69.675.683.683 0 01-.69-.675zm-2.758 0l-.23-4.275.23-6.975c0-.373.309-.675.69-.675.38 0 .69.302.69.675l.229 6.975-.23 4.275a.683.683 0 01-.69.675.683.683 0 01-.69-.675h.001zm-2.759 0l-.23-4.275.23-3.375c0-.373.31-.675.69-.675.38 0 .69.302.69.675l.23 3.375-.23 4.275a.683.683 0 01-.69.675.683.683 0 01-.69-.675zm-2.758 0l-.23-4.275.23-4.275c0-.373.308-.675.69-.675.38 0 .689.302.689.675l.23 4.275-.23 4.275a.683.683 0 01-.69.675.683.683 0 01-.69-.675h.001zm-2.76-1.8L0 13.05l.23-2.475c0-.373.309-.675.69-.675.38 0 .69.302.69.675l.23 2.475-.23 2.475a.683.683 0 01-.69.675.683.683 0 01-.69-.675H.229zm32.296-7.974a5.608 5.608 0 011.958-.351C37.53 7.2 40 9.618 40 12.6S37.53 18 34.483 18H20.69c-.762 0-1.38-.606-1.38-1.351V2.25C19.31 0 23.448 0 23.448 0c4.575 0 8.369 3.27 9.077 7.551zm22.578 3.36c0-2.105-1.822-2.631-3.466-2.991-1.645-.36-2.089-.554-2.089-1.164 0-.43.37-.872 1.481-.872.949 0 1.69.36 2.356.997l1.496-1.357C53.903 4.568 52.718 4 51.103 4 49.06 4 47.4 5.08 47.4 6.84c0 1.91 1.333 2.479 3.244 2.894 1.956.416 2.311.693 2.311 1.316 0 .734-.578 1.052-1.807 1.052-.993 0-1.926-.318-2.652-1.108L47 12.241c.785 1.08 2.296 1.759 4.03 1.759 2.829 0 4.073-1.247 4.073-3.089zm11.013-1.925C66.116 5.856 64.265 4 61.57 4c-2.711 0-4.593 1.884-4.593 5.014 0 3.13 1.852 4.986 4.563 4.986 2.696 0 4.577-1.884 4.577-5.014h-.001zm-2.133.028c0 1.967-.963 3.06-2.414 3.06-1.452 0-2.46-1.121-2.46-3.088s.963-3.06 2.415-3.06 2.46 1.121 2.46 3.088h-.001zm12.88.554V4.152h-2.074v5.444c0 1.55-.815 2.506-2.133 2.506-1.319 0-2.119-.983-2.119-2.534V4.152h-2.074v5.444c0 2.825 1.69 4.404 4.193 4.404 2.637 0 4.207-1.62 4.207-4.432zm11.324 4.28V4.152h-2.044v4.1c0 .54.03 1.76.03 2.12-.134-.25-.474-.735-.726-1.095l-3.674-5.125h-1.985v9.696h2.044V9.582c0-.54-.03-1.76-.03-2.12.134.25.475.735.726 1.095l3.808 5.29h1.851v.001zM99.586 9c0-3.546-2.193-4.848-5.156-4.848h-3.244v9.696h3.096c2.667 0 5.304-1.44 5.304-4.848zm-2.134 0c0 1.773-.992 2.964-3.17 2.964H93.26V6.036h1.096c2.193 0 3.096.983 3.096 2.964zm12.391-2.853C109.192 4.887 108.006 4 106.051 4c-2.711 0-4.607 2.05-4.607 5 0 3.06 1.822 5 4.533 5 1.881 0 3.126-.817 3.837-2.188l-1.748-.97c-.548.859-1.097 1.233-2.03 1.233-1.555 0-2.459-1.33-2.459-3.075 0-1.8.889-3.075 2.444-3.075.934 0 1.526.388 1.897 1.053l1.925-.831zm9.68 7.7v-1.91h-5.2V4.151h-2.073v9.696h7.273zm10.406-4.86c0-3.131-1.852-4.987-4.548-4.987-2.71 0-4.592 1.884-4.592 5.014 0 3.13 1.852 4.986 4.563 4.986 2.696 0 4.577-1.884 4.577-5.014v.001zm-2.133.027c0 1.967-.963 3.06-2.415 3.06s-2.459-1.121-2.459-3.088.963-3.06 2.415-3.06 2.459 1.121 2.459 3.088zm12.88.554V4.152h-2.074v5.444c0 1.55-.815 2.506-2.133 2.506-1.319 0-2.119-.983-2.119-2.534V4.152h-2.074v5.444c0 2.825 1.689 4.404 4.193 4.404 2.636 0 4.207-1.62 4.207-4.432zM152 9c0-3.546-2.192-4.848-5.155-4.848H143.6v9.696h3.097c2.666 0 5.303-1.44 5.303-4.848zm-2.133 0c0 1.773-.993 2.964-3.17 2.964h-1.023V6.036h1.097c2.192 0 3.096.983 3.096 2.964z"
}));
var Twitter = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "#0083eb",
  d: "M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z"
}));

// app/components/Header.tsx
var NavLink = (props) => {
  const location = (0, import_remix2.useLocation)();
  const toProp = props.to;
  const activeClass = location.pathname === props.to || toProp.length > 1 && location.pathname.startsWith(toProp) ? "" : "hidden";
  return /* @__PURE__ */ React.createElement(import_remix2.Link, __spreadProps(__spreadValues({}, props), {
    className: "relative block"
  }), props.children, /* @__PURE__ */ React.createElement("span", {
    className: [
      activeClass,
      "bg-black absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-lg"
    ].join("")
  }));
};
var Header = () => {
  const { user } = useAuth();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex fixed bottom-8 w-full mx-auto left-1/2 -translate-x-1/2 justify-center px-8 z-10"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-around items-center p-4 space-x-3 sm:space-x-4 rounded-lg w-fit shadow-md z-10 bg-gray-200 bg-opacity-90 backdrop-filter backdrop-blur-sm"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "/",
    "aria-label": "Home"
  }, /* @__PURE__ */ React.createElement(Home, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "/blog",
    "aria-label": "Blog"
  }, /* @__PURE__ */ React.createElement(Posts, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "/snippets",
    "aria-label": "Snippets"
  }, /* @__PURE__ */ React.createElement(Snippets, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "/resources",
    "aria-label": "Resources"
  }, /* @__PURE__ */ React.createElement(Resources, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "/inspiration",
    "aria-label": "Inspiration"
  }, /* @__PURE__ */ React.createElement(Inspiration, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "/music",
    "aria-label": "Music"
  }, /* @__PURE__ */ React.createElement(Music, null))), /* @__PURE__ */ React.createElement("li", {
    className: "w-[1px] h-[20px] bg-zinc-400"
  }), user ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "block",
    type: "submit",
    "aria-label": "Log out"
  }, /* @__PURE__ */ React.createElement(Signout, null)))) : /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/CollierAdam",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(Twitter, null)))));
};

// node_modules/@unocss/reset/tailwind.css
var tailwind_default = "/build/_assets/tailwind-NPA2HWTD.css";

// app/styles/global.css
var global_default = "/build/_assets/global-X32LGJ5Y.css";

// app/styles/uno.css
var uno_default = "/build/_assets/uno-GUKE4ILB.css";

// route-module:/Users/Adam/adamcollier/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: uno_default },
  { rel: "alternate", type: "application/rss+xml", href: "/rss.xml" }
];
var meta = () => {
  const title = "Adam Collier";
  const description = "Adam Collier is a Creative UX Designer Developer from Manchester, UK. Creating content to come back to. Discover useful snippets, resources and blogposts.";
  const image = "https://adamcollier.co.uk/img/social.jpg";
  return {
    title,
    description,
    "og:type": "website",
    "og:url": "https://www.adamcollier.co.uk/",
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:image": image,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@CollierAdam",
    "twitter:site": "@CollierAdam",
    "twitter:title": title,
    "twitter:description": description,
    "google-site-verification": "kXoBZ3JPl4ac52Th5S3Jocx7XmmfMJZNQtkPTJZU4l8"
  };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", {
    async: true,
    defer: true,
    "data-website-id": "5e5ce6b5-3fb0-49eb-ae22-ab3cb1fa483b",
    src: "https://umami-production-7v-m.up.railway.app/umami.js"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(AuthProvider, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), false));
}
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex flex-col justify-center items-center"
  }, /* @__PURE__ */ React.createElement(AuthProvider, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg sm:text-2xl dark:text-white"
  }, "Oh no! There's been an error!"), /* @__PURE__ */ React.createElement("h2", {
    className: "dark:text-white"
  }, "Try reloading the page"))), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)));
};

// route-module:/Users/Adam/adamcollier/app/routes/sitemap[.]xml.ts
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader
});
init_react();

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (true) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route-module:/Users/Adam/adamcollier/app/routes/sitemap[.]xml.ts
init_utils();

// app/routes/inspiration/index.tsx
init_react();

// app/components/Masonry.tsx
init_react();
var import_react2 = __toModule(require("react"));
init_utils();
var Wrapper = (_a) => {
  var _b = _a, { url, children } = _b, props = __objRest(_b, ["url", "children"]);
  return url ? /* @__PURE__ */ import_react2.default.createElement("a", __spreadProps(__spreadValues({
    href: url,
    rel: "noopener noreferrer",
    target: "_blank"
  }, props), {
    "aria-label": "masonry inspiration item"
  }), children, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "text-white absolute top-1 right-1 p-0.5 bg-black"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "i-ri:arrow-right-up-line block w-3 h-3"
  }))) : /* @__PURE__ */ import_react2.default.createElement("div", __spreadValues({}, props), children);
};
var Masonry = ({ images }) => {
  const masonry = (0, import_react2.useRef)(null);
  const numberOfColumns = (0, import_react2.useRef)(0);
  const setNumberOfColumns = (updatedNumberOfColumns) => {
    numberOfColumns.current = updatedNumberOfColumns;
  };
  (0, import_react2.useEffect)(() => {
    setNumberOfColumns(0);
    positionGridItems(masonry.current, numberOfColumns.current, setNumberOfColumns);
  }, [images]);
  (0, import_react2.useEffect)(() => {
    const handleResize = () => positionGridItems(masonry.current, numberOfColumns.current, setNumberOfColumns);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "grid gap-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
    ref: masonry
  }, images.map(({ image, pageURL, color }, index) => /* @__PURE__ */ import_react2.default.createElement(Wrapper, {
    url: pageURL,
    style: {
      background: color,
      paddingTop: `${image.height / image.width * 100}%`
    },
    key: index,
    className: "relative text-0 self-start"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "absolute top-0 left-0 w-full h-full",
    src: image.thumbnail,
    alt: ""
  }))));
};
var Masonry_default = Masonry;

// app/routes/inspiration/index.tsx
var saveeBoards = {
  desktop: "5fb3c9cbf7c86a3ed1019f85",
  print: "5b17bb66ef494b6aa2686140",
  "3D": "5fb44c7eb074713f1d2189e1"
};

// route-module:/Users/Adam/adamcollier/app/routes/sitemap[.]xml.ts
var loader = async () => {
  const baseUrl = "https://www.adamcollier.co.uk";
  const staticRoutes = [
    "",
    "/blog",
    "/snippets",
    "/resources",
    "/inspiration",
    "/music"
  ];
  const staticRoutesXML = staticRoutes.map((staticRoute) => `
<url>
    <loc>${baseUrl}${staticRoute}</loc>
    <priority>1.0</priority>
</url>
  `).join("");
  const generateDynamicRouteXML = (arr, prefix, priority) => {
    return arr.map((obj) => `
<url>
  <loc>${baseUrl}${prefix + toSlug(Object.values(obj)[0])}</loc>
  <priority>${priority}</priority>
</url>
`);
  };
  const posts = generateDynamicRouteXML(await db.post.findMany({
    select: {
      slug: true
    }
  }), "/blog/", 0.7);
  const snippets = generateDynamicRouteXML(await db.snippetCollection.findMany({
    select: {
      name: true
    }
  }), "/snippets/", 0.8);
  const resources = generateDynamicRouteXML(await db.resourceCollection.findMany({
    select: {
      name: true
    }
  }), "/resources/", 0.8);
  const inspiration = Object.keys(saveeBoards).map((route) => `
<url>
  <loc>${baseUrl}/inspiration/${toSlug(route)}</loc>
  <priority>${0.5}</priority>
</url>
`);
  const dynamicRoutesXML = await Promise.all([
    posts,
    snippets,
    resources,
    inspiration
  ]);
  const xml = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[staticRoutesXML, dynamicRoutesXML.flat().join("")].join("")}
</urlset>
`;
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8"
    }
  });
};

// route-module:/Users/Adam/adamcollier/app/routes/inspiration.tsx
var inspiration_exports = {};
__export(inspiration_exports, {
  default: () => inspiration_default,
  headers: () => headers,
  meta: () => meta2
});
init_react();
var import_remix4 = __toModule(require_remix());
var Link2 = (props) => /* @__PURE__ */ React.createElement(import_remix4.NavLink, __spreadProps(__spreadValues({}, props), {
  className: ({ isActive }) => isActive ? "bg-gray-200 px-2 py-1 rounded text-sm" : "px-2 py-1 rounded text-sm"
}));
function headers({}) {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate"
  };
}
var meta2 = () => {
  const title = "Inspiration";
  const description = "A space for visual references and quickly exploring inspiration imagery and website layouts. All taken from my Saave";
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var Inspiration2 = () => /* @__PURE__ */ React.createElement("main", {
  className: "bg-black"
}, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement("nav", {
  className: "fixed shadow-md bottom-23 left-1/2 -translate-x-1/2"
}, /* @__PURE__ */ React.createElement("ul", {
  className: "flex px-2 py-2 bg-gray-100 rounded children:cursor-pointer"
}, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link2, {
  to: "/inspiration/"
}, "All")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link2, {
  to: "/inspiration/desktop"
}, "Desktop")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link2, {
  to: "/inspiration/print"
}, "Print")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link2, {
  to: "/inspiration/3D"
}, "3D")))));
var inspiration_default = Inspiration2;

// route-module:/Users/Adam/adamcollier/app/routes/inspiration/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => slug_default,
  headers: () => headers2,
  loader: () => loader2,
  meta: () => meta3
});
init_react();
var import_remix5 = __toModule(require_remix());
init_utils();
var loader2 = async ({ params }) => {
  const { slug } = params;
  if (!slug)
    throw new Response("Not Found", { status: 404 });
  const id = saveeBoards[slug];
  if (!id)
    throw new Response("Not Found", { status: 404 });
  const response = await fetch(`https://api.savee.it/user/adamcollier/boards/${id}/items/`);
  const { data } = await response.json();
  return (0, import_remix5.json)(data, {
    headers: { "Cache-Control": "s-maxage=1, stale-while-revalidate" }
  });
};
var meta3 = ({ params }) => {
  const { slug } = params;
  const title = `${toTitleCase(slug)} Inspiration`;
  const description = `A space for all of the ${title} references I have collected and screenshotted. All taken from my Saave`;
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var headers2 = () => ({
  "Cache-Control": "s-maxage=1, stale-while-revalidate"
});
var InspirationPage = () => {
  const data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Masonry_default, {
    images: data
  }));
};
var slug_default = InspirationPage;
function CatchBoundary() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full h-full items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, "We couldn't find that page!"));
}

// route-module:/Users/Adam/adamcollier/app/routes/inspiration/index.tsx
var inspiration_exports2 = {};
__export(inspiration_exports2, {
  default: () => inspiration_default2,
  headers: () => headers3,
  loader: () => loader3,
  saveeBoards: () => saveeBoards2
});
init_react();
var import_remix6 = __toModule(require_remix());
var saveeBoards2 = {
  desktop: "5fb3c9cbf7c86a3ed1019f85",
  print: "5b17bb66ef494b6aa2686140",
  "3D": "5fb44c7eb074713f1d2189e1"
};
var loader3 = async () => {
  const allBoardsData = await Promise.all(Object.values(saveeBoards2).map(async (id) => {
    const response = await fetch(`https://api.savee.it/user/adamcollier/boards/${id}/items/`);
    const { data } = await response.json();
    return data;
  }));
  const flattenedArr = allBoardsData.flat();
  const sortedByDate = flattenedArr.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return (0, import_remix6.json)(sortedByDate, {
    headers: { "Cache-Control": "s-maxage=1, stale-while-revalidate" }
  });
};
var headers3 = () => ({
  "Cache-Control": "s-maxage=1, stale-while-revalidate"
});
var Inspiration3 = () => {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Masonry_default, {
    images: data
  }));
};
var inspiration_default2 = Inspiration3;

// route-module:/Users/Adam/adamcollier/app/routes/resources.tsx
var resources_exports = {};
__export(resources_exports, {
  default: () => resources_default,
  loader: () => loader4,
  meta: () => meta4
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/components/NavSpacer.tsx
init_react();
var NavSpacer = () => /* @__PURE__ */ React.createElement("div", {
  className: "block h-32 sm:h-32"
});

// route-module:/Users/Adam/adamcollier/app/routes/resources.tsx
init_utils();
var loader4 = async () => {
  const data = await db.resourceCollection.findMany({
    select: {
      name: true,
      updatedAt: true
    }
  });
  return (0, import_remix7.json)(data);
};
var meta4 = () => {
  const title = "Resources";
  const description = "This is a group of resources I have either learned something from or thought could become useful in the future.";
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var Resources2 = () => {
  const data = (0, import_remix7.useLoaderData)();
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const { pathname } = (0, import_remix7.useLocation)();
  const { user } = useAuth();
  return /* @__PURE__ */ React.createElement("main", {
    className: `${user ? "pt-4" : ""} flex flex-col sm:flex-row gap-8 md:gap-16 block max-w-5xl mx-auto px-4 sm:pt-16`
  }, /* @__PURE__ */ React.createElement("aside", {
    className: "py-4 sm:py-0 md:flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex sm:flex-col gap-2 overflow-x-scroll overflow-y-hidden px-2 -mx-4 sm:px-0 sm:mx-0 w-screen sm:w-full no-scrollbar"
  }, data.map(({ name, updatedAt }, index) => {
    const slug = toSlug(name);
    let activeClass = pathname.endsWith(slug) ? "bg-gradient-to-l from-gray-50 to-gray-50 sm:to-transparent" : "";
    return /* @__PURE__ */ React.createElement("li", {
      key: index,
      className: [activeClass, "px-2 py-1 sm:py-2 rounded"].join(" ")
    }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
      to: `/resources/${slug}`,
      className: "group block"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "hover:underline group-hover:underline"
    }, name), /* @__PURE__ */ React.createElement("small", {
      className: "hidden sm:block text-gray-500 text-xs"
    }, /* @__PURE__ */ React.createElement("i", null, "Updated:", " ", new Date(updatedAt).toLocaleDateString("en-US", dateOptions)))));
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null), /* @__PURE__ */ React.createElement(NavSpacer, null)));
};
var resources_default = Resources2;

// route-module:/Users/Adam/adamcollier/app/routes/resources/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  CatchBoundary: () => CatchBoundary2,
  default: () => slug_default2,
  loader: () => loader5,
  meta: () => meta5
});
init_react();
var import_remix8 = __toModule(require_remix());
init_utils();

// app/components/AdminToolbar.tsx
init_react();
var AdminToolbar = ({ user, children }) => {
  return user ? /* @__PURE__ */ React.createElement("div", {
    className: "fixed top-0 block w-full left-0 z-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-2 px-4 space-x-4 flex text-xs bg-zinc-200 sm:bg-white backdrop-filter backdrop-blur-sm sm:backdrop-filter-none sm:backdrop-blur-none space-x-1 underline dark:bg-zinc-900 dark:text-zinc-200"
  }, children)) : null;
};
var AdminToolbar_default = AdminToolbar;

// app/utils/utils.server.ts
init_react();
var unified = require("unified");
var remarkParse = require("remark-parse");
var remarkRehype = require("remark-rehype");
var remarkStringify = require("remark-stringify");
var remarkExternalLinks = require("remark-external-links");
var rehypeStringify = require("rehype-stringify");
var rehypeRemark = require("rehype-remark");
var rehypeParse = require("rehype-parse");
var highlight = require_highlight();
var typography = require_typography();
var resource = require_resource();
var toHTML = async (markdown) => {
  let processor = unified().use(remarkParse).use(remarkRehype).use(await highlight).use(await typography).use(await resource).use(remarkExternalLinks).use(rehypeStringify);
  let html = await processor.process(markdown);
  return html.contents;
};

// route-module:/Users/Adam/adamcollier/app/routes/resources/$slug.tsx
var loader5 = async ({ params }) => {
  const { slug } = params;
  if (!slug)
    return;
  const data = await db.resourceCollection.findUnique({
    where: { name: toTitleCase(slug) },
    select: {
      id: true,
      name: true,
      description: true,
      resources: {
        select: {
          content: true,
          id: true,
          section: true
        },
        orderBy: [
          {
            section: "asc"
          }
        ]
      }
    }
  });
  if (!data)
    throw new Response("This Resource Collection doesn't exist", {
      status: 404
    });
  const formattedResources = await Promise.all(data.resources.map(async (resource2) => __spreadProps(__spreadValues({}, resource2), {
    content: await toHTML(resource2.content)
  })));
  return (0, import_remix8.json)(__spreadProps(__spreadValues({}, data), { resources: formattedResources }));
};
var meta5 = ({ data }) => {
  if (!data) {
    let errorMessage = "Resource Collection not found!";
    return {
      title: errorMessage,
      description: errorMessage,
      "twitter:title": errorMessage,
      "twitter:description": errorMessage
    };
  }
  const { name } = data;
  const title = toTitleCase(name);
  const description = `${title} resources I have either learned something from or thought could be useful in the future.`;
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var Resources3 = () => {
  const data = (0, import_remix8.useLoaderData)();
  const { user } = useAuth();
  const { name, description, resources, id } = data;
  let sectionName = "";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminToolbar_default, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/admin/resources/collection/new"
  }, "Add Collection"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: `/admin/resources/collection/edit/${id}`
  }, "Edit Collection"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/admin/resources/new"
  }, "Add Resource")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl"
  }, name), /* @__PURE__ */ React.createElement("p", null, description), resources.map(({ content, id: id2, section }) => {
    const resource2 = /* @__PURE__ */ React.createElement(React.Fragment, null, section !== sectionName && /* @__PURE__ */ React.createElement("h2", {
      className: "text-xl"
    }, section), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "space-y-4 children:no-underline",
      dangerouslySetInnerHTML: { __html: content }
    }), user && /* @__PURE__ */ React.createElement(import_remix8.Link, {
      to: `/admin/resources/edit/${id2}`,
      className: "hover:underline"
    }, /* @__PURE__ */ React.createElement("i", {
      className: "text-sm flex items-center gap-1 hover:underline"
    }, "Edit", " ", /* @__PURE__ */ React.createElement("span", {
      className: "inline-block i-ri:arrow-right-line"
    })))));
    sectionName = section;
    return resource2;
  })));
};
function CatchBoundary2() {
  const caught = (0, import_remix8.useCatch)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg sm:text-2xl"
  }, caught.status, "! ", caught.data));
}
var slug_default2 = Resources3;

// route-module:/Users/Adam/adamcollier/app/routes/resources/index.tsx
var resources_exports2 = {};
__export(resources_exports2, {
  default: () => resources_default2,
  loader: () => loader6
});
init_react();
var import_remix9 = __toModule(require_remix());
var loader6 = async () => {
  const latestResources = await db.resource.findMany({
    take: 5,
    select: {
      id: true,
      title: true,
      content: true
    },
    orderBy: [
      {
        updatedAt: "desc"
      }
    ]
  });
  const formattedData = await Promise.all(latestResources.map(async (resource2) => __spreadProps(__spreadValues({}, resource2), {
    content: await toHTML(resource2.content)
  })));
  return (0, import_remix9.json)(formattedData);
};
var Resources4 = () => {
  const data = (0, import_remix9.useLoaderData)();
  const { user } = useAuth();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminToolbar_default, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/admin/resources/collection/new"
  }, "Add Collection"), /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/admin/resources/new"
  }, "Add Resource")), /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl"
  }, "Resources"), /* @__PURE__ */ React.createElement("p", null, "This is a group of resources I have either learned something from or thought could become useful in the future."), /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl"
  }, "Latest Resources"), data.map(({ content, id }, index) => /* @__PURE__ */ React.createElement("div", {
    key: index
  }, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: content }
  }), user && /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: `/admin/resources/edit/${id}`,
    className: "hover:underline"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "text-sm flex items-center gap-1 hover:underline mt-0.5"
  }, "Edit ", /* @__PURE__ */ React.createElement("span", {
    className: "inline-block i-ri:arrow-right-line"
  })))))));
};
var resources_default2 = Resources4;

// route-module:/Users/Adam/adamcollier/app/routes/rss[.]xml.ts
var rss_xml_exports = {};
__export(rss_xml_exports, {
  loader: () => loader7
});
init_react();
function escapeCdata(s) {
  return s.replace(/\]\]>/g, "]]]]><![CDATA[>");
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
var loader7 = async ({ request }) => {
  const posts = await db.post.findMany({
    where: { published: true },
    take: 100,
    orderBy: { createdAt: "desc" }
  });
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;
  const postsUrl = `${domain}/blog`;
  const rssString = `
    <rss xmlns:blogChannel="${postsUrl}" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>Adam Collier's Blog</title>
        <link>${postsUrl}</link>
        <atom:link href="${postsUrl}/rss.xml" rel="self" type="application/rss+xml" />
        <description>Welcome to the blog! I hope you enjoy reading what I write and learn something a long the way</description>
        <language>en-gb</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${posts.map(({
    title,
    description,
    createdAt,
    slug
  }) => `
            <item>
              <title><![CDATA[${escapeCdata(title)}]]></title>
              <description><![CDATA[${escapeHtml(description)}]]></description>
              <pubDate>${createdAt.toUTCString()}</pubDate>
              <link>${postsUrl}/${slug}</link>
              <guid>${postsUrl}/${slug}</guid>
            </item>
          `.trim()).join("\n")}
      </channel>
    </rss>
  `.trim();
  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString))
    }
  });
};

// route-module:/Users/Adam/adamcollier/app/routes/snippets.tsx
var snippets_exports = {};
__export(snippets_exports, {
  default: () => snippets_default,
  links: () => links2,
  loader: () => loader8,
  meta: () => meta6
});
init_react();
var import_remix10 = __toModule(require_remix());
init_utils();

// app/components/Accordion.tsx
init_react();
var import_react3 = __toModule(require("react"));
var Accordion = ({
  children,
  title,
  className
}) => {
  const [sectionIsOpen, setAccorsionIsOpen] = (0, import_react3.useState)(false);
  const iconClass = sectionIsOpen ? "i-ri:checkbox-indeterminate-line" : "i-ri:add-box-line";
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: `${className || ""} space-y-2`
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "flex items-center gap-1.5",
    type: "button",
    onClick: () => setAccorsionIsOpen(!sectionIsOpen)
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: [iconClass, "h-3.5 w-3.5 block"].join(" ")
  }), /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "text-sm font-[400]"
  }, title)), sectionIsOpen && children);
};

// app/styles/prism.css
var prism_default = "/build/_assets/prism-CV26E3IK.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-T6A6ZKGW.css";

// route-module:/Users/Adam/adamcollier/app/routes/snippets.tsx
var import_react4 = __toModule(require("react"));

// app/utils/cache.server.ts
init_react();
var headers4 = {
  Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
  Accept: "application/json",
  "Content-Type": "application/json"
};
var get = async (key) => {
  try {
    const response = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/${key}`, {
      headers: headers4
    });
    const { result } = await response.json();
    return JSON.parse(result);
  } catch (error) {
    console.log(error);
  }
};
var has = async (key) => {
  try {
    const response = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/exists/${key}`, {
      headers: headers4
    });
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
var set = async (key, val) => {
  try {
    await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/${key}`, {
      headers: headers4,
      body: JSON.stringify(val),
      method: "POST"
    });
  } catch (error) {
    console.log(error);
  }
};
var del = async (key) => {
  try {
    await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/del/${key}`, {
      headers: headers4
    });
  } catch (error) {
    console.log(error);
  }
};
var cache = { get, set, del, has };

// route-module:/Users/Adam/adamcollier/app/routes/snippets.tsx
var loader8 = async () => {
  let cachedData = await cache.get("snippets-nav");
  if (cachedData)
    return (0, import_remix10.json)(cachedData);
  const data = await db.snippetCollection.findMany({
    select: {
      name: true,
      snippets: {
        select: {
          title: true
        }
      }
    }
  });
  await cache.set("snippets-nav", data);
  return (0, import_remix10.json)(data);
};
var links2 = () => [
  { rel: "stylesheet", href: prism_default },
  { rel: "stylesheet", href: dark_default }
];
var meta6 = () => {
  const title = "Snippets";
  const description = "There's nothing worse than almost remembering a bit of code you saw on stackoverflow on in a blogpost once. So I've collated all of the ones I find most useful.";
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var Snippets2 = () => {
  const data = (0, import_remix10.useLoaderData)();
  const { user } = useAuth();
  const { pathname } = (0, import_remix10.useLocation)();
  (0, import_react4.useEffect)(() => {
    copyCodeToClipboard();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "dark w-full bg-zinc-900"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${user ? "pt-6" : ""} flex flex-col sm:flex-row gap-8 block max-w-5xl mx-auto px-4 sm:pt-16`
  }, /* @__PURE__ */ React.createElement("aside", {
    className: "py-4 sm:space-y-4 lg:block sm:w-56 sm:flex-shrink-0 sm:self-start sm:sticky sm:top-0 sm:overflow-y-scroll sm:h-screen no-scrollbar sm:-my-16 sm:py-16"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex sm:flex-col gap-2 text-white overflow-x-scroll overflow-y-hidden px-2 -mx-4 sm:px-0 sm:mx-0 w-screen sm:w-full no-scrollbar"
  }, data.map(({
    name,
    snippets
  }, index) => {
    const slug = toSlug(name);
    let activeClass = pathname.endsWith(slug) ? "bg-zinc-800" : "";
    return /* @__PURE__ */ React.createElement("li", {
      key: index
    }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
      to: `/snippets/${toSlug(name)}`,
      className: [
        activeClass,
        "sm:hidden px-2 py-1 block rounded"
      ].join(" ")
    }, name), /* @__PURE__ */ React.createElement(Accordion, {
      title: name,
      className: "hidden sm:block"
    }, /* @__PURE__ */ React.createElement("ul", {
      className: "flex flex-col gap-2 pl-4.5",
      key: index
    }, snippets && snippets.map(({ title }, index2) => /* @__PURE__ */ React.createElement("li", {
      className: "text-sm hover:underline text-gray-400",
      key: index2
    }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
      to: `/snippets/${toSlug(name)}#${toSlug(title)}`
    }, title))))));
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "min-w-0"
  }, /* @__PURE__ */ React.createElement(import_remix10.Outlet, null), /* @__PURE__ */ React.createElement(NavSpacer, null))));
};
var snippets_default = Snippets2;

// route-module:/Users/Adam/adamcollier/app/routes/snippets/$slug.tsx
var slug_exports3 = {};
__export(slug_exports3, {
  CatchBoundary: () => CatchBoundary3,
  default: () => slug_default3,
  loader: () => loader9,
  meta: () => meta7
});
init_react();
var import_remix11 = __toModule(require_remix());
init_utils();
var loader9 = async ({ params }) => {
  const { slug } = params;
  let cachedData = await cache.get(`snippets-${slug}`);
  if (cachedData)
    return (0, import_remix11.json)(cachedData);
  if (!slug)
    return;
  const data = await db.snippetCollection.findUnique({
    where: { name: toTitleCase(slug) },
    select: {
      name: true,
      description: true,
      id: true,
      snippets: {
        select: {
          id: true,
          updatedAt: true,
          title: true,
          content: true
        }
      }
    }
  });
  if (!data) {
    throw new Response("This Snippet Collection doesn't exist", { status: 404 });
  }
  const snippetsWithHtmlContent = await Promise.all(data.snippets.map(async (snippet) => __spreadProps(__spreadValues({}, snippet), {
    content: await toHTML(snippet.content)
  })));
  let formattedData = __spreadProps(__spreadValues({}, data), {
    snippets: snippetsWithHtmlContent
  });
  cache.set(`snippets-${slug}`, formattedData);
  return (0, import_remix11.json)(formattedData);
};
var meta7 = ({ data }) => {
  if (!data) {
    let errorMessage = "Snippet Collection not found!";
    return {
      title: errorMessage,
      description: errorMessage,
      "twitter:title": errorMessage,
      "twitter:description": errorMessage
    };
  }
  const { name } = data;
  const title = name;
  const description = `${title} snippets which I like to use or refer back to when working on projects. Easily copy and paste them into your own projects.`;
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var Snippets3 = () => {
  const data = (0, import_remix11.useLoaderData)();
  const { user } = useAuth();
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const { name, description, id, snippets } = data;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminToolbar_default, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: `/admin/snippets/collection/edit/${id}`
  }, "Edit Collection"), /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/admin/snippets/collection/new"
  }, "Add Collection"), /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/admin/snippets/new"
  }, "Add Snippet")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl text-white"
  }, name), description && /* @__PURE__ */ React.createElement("p", {
    className: "text-white"
  }, description), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-8"
  }, snippets.map(({ title, content, updatedAt, id: id2 }, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "block space-y-3",
      key: index
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "text-lg text-white",
      id: toSlug(title)
    }, title), /* @__PURE__ */ React.createElement("div", {
      className: "text-white space-y-3",
      dangerouslySetInnerHTML: { __html: content }
    }), /* @__PURE__ */ React.createElement("div", {
      className: "flex space-x-4"
    }, /* @__PURE__ */ React.createElement("small", {
      className: "block text-gray-400"
    }, "Updated:", " ", new Date(updatedAt).toLocaleDateString("en-GB", dateOptions)), user && /* @__PURE__ */ React.createElement(import_remix11.Link, {
      to: `/admin/snippets/edit/${id2}`,
      className: "hover:underline"
    }, /* @__PURE__ */ React.createElement("i", {
      className: "text-sm text-white flex items-center gap-1 hover:underline"
    }, "Edit this Snippet", " ", /* @__PURE__ */ React.createElement("span", {
      className: "inline-block i-ri:arrow-right-line"
    })))));
  }))));
};
function CatchBoundary3() {
  const caught = (0, import_remix11.useCatch)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg sm:text-2xl text-white"
  }, caught.status, "! ", caught.data));
}
var slug_default3 = Snippets3;

// route-module:/Users/Adam/adamcollier/app/routes/snippets/index.tsx
var snippets_exports2 = {};
__export(snippets_exports2, {
  default: () => snippets_default2,
  loader: () => loader10
});
init_react();
var import_remix12 = __toModule(require_remix());
init_utils();
var loader10 = async () => {
  let cachedData = await cache.get("snippets");
  if (cachedData)
    return (0, import_remix12.json)(cachedData);
  const data = await db.snippet.findMany({
    take: 5,
    orderBy: {
      updatedAt: "desc"
    },
    select: {
      id: true,
      updatedAt: true,
      title: true,
      content: true,
      SnippetCollection: {
        select: {
          name: true
        }
      }
    }
  });
  const formattedData = await Promise.all(data.map(async (snippet) => __spreadProps(__spreadValues({}, snippet), {
    content: await toHTML(snippet.content)
  })));
  cache.set("snippets", formattedData);
  return (0, import_remix12.json)(formattedData);
};
var Snippets4 = () => {
  const data = (0, import_remix12.useLoaderData)();
  const { user } = useAuth();
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminToolbar_default, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: "/admin/snippets/collection/new"
  }, "Add Collection"), /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: "/admin/snippets/new"
  }, "Add Snippet")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl text-white"
  }, "Snippets"), /* @__PURE__ */ React.createElement("p", {
    className: "text-white"
  }, "There's nothing worse than almost remembering where you found that perfect snippet you desperately need in that moment. To reduce those moments I've started to collate the ones I've used or think could come handy."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl text-white"
  }, "Latest Snippets"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-8"
  }, data.map(({ title, content, SnippetCollection, updatedAt }, index) => {
    const slug = `${toSlug(SnippetCollection.name)}#${toSlug(title)}`;
    return /* @__PURE__ */ React.createElement("div", {
      className: "block space-y-3",
      key: index
    }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
      to: `/snippets/${slug}`
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "text-lg text-white",
      id: slug
    }, title)), /* @__PURE__ */ React.createElement("div", {
      className: "text-white space-y-3",
      dangerouslySetInnerHTML: { __html: content }
    }), /* @__PURE__ */ React.createElement("small", {
      className: "block text-gray-400"
    }, "Updated:", " ", new Date(updatedAt).toLocaleDateString("en-US", dateOptions)));
  }))));
};
var snippets_default2 = Snippets4;

// route-module:/Users/Adam/adamcollier/app/routes/session.tsx
var session_exports = {};
__export(session_exports, {
  action: () => action,
  loader: () => loader11
});
init_react();
var import_remix14 = __toModule(require_remix());

// app/utils/session.server.ts
init_react();
var import_remix13 = __toModule(require_remix());
var login = async ({ username, password }) => {
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    return { id: "1" };
  }
  return null;
};
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix13.createCookieSessionStorage)({
  cookie: {
    name: "a_sessiontastic_session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix13.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix13.redirect)("/", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
var getUserSession = async (request) => {
  return storage.getSession(request.headers.get("Cookie"));
};
var getUser = async (request) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
};

// route-module:/Users/Adam/adamcollier/app/routes/session.tsx
var action = async ({ request }) => {
  const user = await getUser(request);
  return user;
};
var loader11 = async () => {
  return (0, import_remix14.redirect)("/");
};

// route-module:/Users/Adam/adamcollier/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader12
});
init_react();
var import_remix15 = __toModule(require_remix());
var action2 = async ({ request }) => {
  return logout(request);
};
var loader12 = async () => {
  return (0, import_remix15.redirect)("/");
};

// route-module:/Users/Adam/adamcollier/app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  loader: () => loader13,
  meta: () => meta8
});
init_react();
var import_remix16 = __toModule(require_remix());
var meta8 = () => {
  return {
    robots: "noindex, nofollow"
  };
};
var loader13 = async ({ request }) => {
  const isAuthenticated = await getUser(request);
  if (!isAuthenticated)
    throw new Response("Unauthorized", { status: 401 });
  return null;
};
var adminLayout = () => /* @__PURE__ */ React.createElement("main", {
  className: "px-4 pt-8"
}, /* @__PURE__ */ React.createElement(import_remix16.Outlet, null), /* @__PURE__ */ React.createElement(NavSpacer, null));
var admin_default = adminLayout;

// route-module:/Users/Adam/adamcollier/app/routes/admin/resources/collection/edit.$id.tsx
var edit_id_exports = {};
__export(edit_id_exports, {
  action: () => action3,
  default: () => edit_id_default,
  loader: () => loader14
});
init_react();
var import_remix18 = __toModule(require_remix());

// app/components/Form.tsx
init_react();
var import_react5 = __toModule(require("react"));
var import_remix17 = __toModule(require_remix());
var Form = (props) => {
  const _a = props, { className, children, disabled } = _a, rest = __objRest(_a, ["className", "children", "disabled"]);
  return /* @__PURE__ */ import_react5.default.createElement(import_remix17.Form, __spreadProps(__spreadValues({}, rest), {
    className: [className, "rounded bg-white w-full"].join(" ")
  }), /* @__PURE__ */ import_react5.default.createElement("fieldset", {
    disabled,
    className: "flex flex-col items-start gap-3 w-full min-w-0"
  }, children));
};
var TextInput = ({
  name,
  label,
  defaultValue,
  required,
  onChange,
  type = "text"
}) => /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "flex flex-col gap-2 w-full"
}, /* @__PURE__ */ import_react5.default.createElement("label", {
  htmlFor: name,
  className: "font-medium"
}, label), /* @__PURE__ */ import_react5.default.createElement("input", {
  type,
  id: name,
  name,
  className: "border-slate-300 border w-full py-2 px-3 text-black leading-tight rounded text-base disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
  defaultValue,
  required,
  onChange,
  spellCheck: true
}));
var NumberInput = ({
  name,
  label,
  defaultValue,
  required
}) => /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "flex flex-col gap-2 w-full"
}, /* @__PURE__ */ import_react5.default.createElement("label", {
  htmlFor: name,
  className: "font-medium"
}, label), /* @__PURE__ */ import_react5.default.createElement("input", {
  type: "number",
  id: name,
  name,
  className: "border-slate-300 border w-full py-2 px-3 text-black leading-tight rounded text-base disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
  defaultValue,
  required,
  step: ".01"
}));
var TextArea = ({
  label,
  name,
  defaultValue,
  rows = 5,
  maxChar,
  minChar,
  onChange
}) => {
  const textarea = (0, import_react5.useRef)(null);
  const [characterCount, setCharacterCount] = (0, import_react5.useState)((defaultValue == null ? void 0 : defaultValue.length) || 0);
  let lineHeight = 1.75;
  let initialLimit = rows * (lineHeight * 16);
  const handleChange = (e) => {
    let scrollLeft = window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    e.target.style.height = "auto";
    e.target.style.height = `${Math.max(e.target.scrollHeight, initialLimit)}px`;
    window.scrollTo(scrollLeft, scrollTop);
  };
  (0, import_react5.useEffect)(() => {
    if (textarea.current) {
      textarea.current.style.height = "inherit";
      textarea.current.style.height = `${Math.max(textarea.current.scrollHeight, initialLimit)}px`;
    }
  }, []);
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col gap-2 w-full relative"
  }, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: name
  }, label), /* @__PURE__ */ import_react5.default.createElement("textarea", {
    ref: textarea,
    className: "border-slate-300 border w-full p-3 text-black leading-7 rounded text-base resize-none overflow-hidden disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
    name,
    id: name,
    rows,
    defaultValue,
    spellCheck: true,
    onChange: (e) => {
      handleChange(e);
      if (onChange)
        onChange(e);
      if (minChar || maxChar) {
        setCharacterCount(e.target.value.length);
      }
    }
  }), maxChar && /* @__PURE__ */ import_react5.default.createElement("p", {
    className: `text-xs absolute bottom-2 right-2 ${characterCount > maxChar ? "text-red-800" : ""} ${minChar && characterCount > minChar && characterCount < maxChar ? "text-green-500" : "text-amber-500"}`
  }, characterCount, "/", maxChar));
};
var RadioButton = ({
  name,
  value,
  label,
  defaultChecked
}) => /* @__PURE__ */ import_react5.default.createElement("label", null, /* @__PURE__ */ import_react5.default.createElement("input", {
  type: "radio",
  name,
  value,
  required: true,
  className: "sr-only checked:sibling:border-black",
  defaultChecked
}), /* @__PURE__ */ import_react5.default.createElement("p", {
  className: "text-xs rounded px-2.5 py-1.5 border border-gray-100 cursor-pointer	"
}, label));
var DatePicker = ({
  defaultValue,
  name,
  label
}) => {
  const value = defaultValue ? new Date(defaultValue).toISOString().split("T")[0] : "";
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col gap-2 w-full"
  }, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: name
  }, label), /* @__PURE__ */ import_react5.default.createElement("input", {
    id: name,
    name,
    className: "border-slate-300 border w-full py-2 px-3 text-black leading-tight rounded text-base disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
    type: "date",
    defaultValue: value,
    autoComplete: "off"
  }));
};

// route-module:/Users/Adam/adamcollier/app/routes/admin/resources/collection/edit.$id.tsx
init_utils();
var loader14 = async ({ params }) => {
  const { id } = params;
  const data = await db.resourceCollection.findUnique({
    where: {
      id: Number(id)
    }
  });
  return (0, import_remix18.json)(__spreadValues({}, data));
};
var action3 = async ({ request, params }) => {
  const formData = await request.formData();
  const button = formData.get("button");
  const name = formData.get("name");
  const description = formData.get("description");
  const excerpt = formData.get("excerpt");
  if (button === "delete") {
    const deleteCollection = db.resourceCollection.delete({
      where: {
        id: Number(params.id)
      }
    });
    const deleteResources = db.resource.deleteMany({
      where: {
        resourceCollectionId: Number(params.id)
      }
    });
    await db.$transaction([deleteResources, deleteCollection]);
    return (0, import_remix18.redirect)("/resources");
  }
  await db.resourceCollection.update({
    where: {
      id: Number(params.id)
    },
    data: {
      name,
      description,
      excerpt
    }
  });
  return (0, import_remix18.redirect)(`/resources/${toSlug(name)}`);
};
var EditSnippetCollection = () => {
  const transition = (0, import_remix18.useTransition)();
  const data = (0, import_remix18.useLoaderData)();
  const { name, description, excerpt } = data;
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "name",
    label: "Name",
    defaultValue: name,
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "description",
    label: "Description",
    defaultValue: description
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "excerpt",
    label: "Excerpt",
    defaultValue: excerpt
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    name: "button"
  }, transition.submission ? "Saving..." : "Edit Resource Collection"), /* @__PURE__ */ React.createElement("button", {
    className: "btn bg-transparent border border-color-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    type: "submit",
    name: "button",
    value: "delete"
  }, transition.submission ? "Deleting..." : "Delete Resource Collection")));
};
var edit_id_default = EditSnippetCollection;

// route-module:/Users/Adam/adamcollier/app/routes/admin/snippets/collection/edit.$id.tsx
var edit_id_exports2 = {};
__export(edit_id_exports2, {
  action: () => action4,
  default: () => edit_id_default2,
  loader: () => loader15
});
init_react();
var import_remix19 = __toModule(require_remix());
init_utils();
var loader15 = async ({ params }) => {
  const { id } = params;
  const data = await db.snippetCollection.findUnique({
    where: {
      id: Number(id)
    }
  });
  return (0, import_remix19.json)(__spreadValues({}, data));
};
var action4 = async ({ request, params }) => {
  const formData = await request.formData();
  const button = formData.get("button");
  const name = formData.get("name");
  const description = formData.get("description");
  if (button === "delete") {
    const deleteCollection = db.snippetCollection.delete({
      where: {
        id: Number(params.id)
      }
    });
    const deleteSnippets = db.snippet.deleteMany({
      where: {
        snippetCollectionId: Number(params.id)
      }
    });
    await db.$transaction([deleteSnippets, deleteCollection]);
    await cache.del("snippets-nav");
    return (0, import_remix19.redirect)("/snippets");
  }
  await db.snippetCollection.update({
    where: {
      id: Number(params.id)
    },
    data: {
      name,
      description
    }
  });
  await cache.del("snippets-nav");
  return (0, import_remix19.redirect)(`/snippets/${toSlug(name)}`);
};
var EditSnippetCollection2 = () => {
  const transition = (0, import_remix19.useTransition)();
  const data = (0, import_remix19.useLoaderData)();
  const { name, description } = data;
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "name",
    label: "Name",
    defaultValue: name,
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "description",
    label: "Description",
    defaultValue: description
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    name: "button"
  }, transition.submission ? "Saving..." : "Edit Snippet Collection"), /* @__PURE__ */ React.createElement("button", {
    className: "btn bg-transparent border border-color-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    type: "submit",
    name: "button",
    value: "delete"
  }, transition.submission ? "Deleting..." : "Delete Snippet Collection")));
};
var edit_id_default2 = EditSnippetCollection2;

// route-module:/Users/Adam/adamcollier/app/routes/admin/resources/collection/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action5,
  default: () => new_default
});
init_react();
var import_remix20 = __toModule(require_remix());
var action5 = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const excerpt = formData.get("excerpt");
  await db.resourceCollection.create({
    data: {
      name,
      description,
      excerpt
    }
  });
  return (0, import_remix20.redirect)("/resources");
};
var NewResourceCollection = () => {
  const transition = (0, import_remix20.useTransition)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "name",
    label: "Name",
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "description",
    label: "Description"
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "excerpt",
    rows: 2,
    label: "Excerpt"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn"
  }, transition.submission ? "Creating..." : "Create Resource Collection"));
};
var new_default = NewResourceCollection;

// route-module:/Users/Adam/adamcollier/app/routes/admin/snippets/collection/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action6,
  default: () => new_default2
});
init_react();
var import_remix21 = __toModule(require_remix());
var action6 = async ({ request }) => {
  var _a, _b;
  const formData = await request.formData();
  const name = ((_a = formData.get("name")) == null ? void 0 : _a.toString()) || "";
  const description = ((_b = formData.get("description")) == null ? void 0 : _b.toString()) || "";
  await db.snippetCollection.create({
    data: {
      name,
      description
    }
  });
  await cache.del("snippets-nav");
  return (0, import_remix21.redirect)("/snippets");
};
var NewSnippetCollection = () => {
  const transition = (0, import_remix21.useTransition)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "name",
    label: "Name",
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "description",
    label: "Description"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn"
  }, transition.submission ? "Creating..." : "Create Snippet Collection"));
};
var new_default2 = NewSnippetCollection;

// route-module:/Users/Adam/adamcollier/app/routes/admin/resources/edit.$id.tsx
var edit_id_exports3 = {};
__export(edit_id_exports3, {
  action: () => action7,
  default: () => edit_id_default3,
  loader: () => loader16
});
init_react();
var import_remix22 = __toModule(require_remix());
init_utils();
var loader16 = async ({ params }) => {
  const { id } = params;
  const resource2 = await db.resource.findUnique({
    where: {
      id: Number(id)
    }
  });
  const collections = await db.resourceCollection.findMany({
    select: {
      id: true,
      name: true
    }
  });
  return (0, import_remix22.json)({
    resource: resource2,
    collections
  });
};
var action7 = async ({ request, params }) => {
  const formData = await request.formData();
  const button = formData.get("button");
  const title = formData.get("title");
  const content = formData.get("markdown");
  const collection = formData.get("collection");
  const section = formData.get("section");
  const [collectionId, ...collectionName] = collection.split(" ");
  if (button === "delete") {
    await db.resource.delete({
      where: {
        id: Number(params.id)
      }
    });
    return (0, import_remix22.redirect)("/resources");
  }
  await db.resource.update({
    where: {
      id: Number(params.id)
    },
    data: {
      title,
      content,
      resourceCollectionId: Number(collectionId),
      section
    }
  });
  return (0, import_remix22.redirect)(`/resources/${toSlug(collectionName.join(" "))}`);
};
var Edit = () => {
  const transition = (0, import_remix22.useTransition)();
  const data = (0, import_remix22.useLoaderData)();
  const {
    resource: resource2,
    collections
  } = data;
  const { title, content, resourceCollectionId, section } = resource2;
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title",
    defaultValue: title,
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "markdown",
    label: "Markdown",
    defaultValue: content
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "section",
    label: "Section",
    defaultValue: section,
    required: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap w-full gap-2 py-2"
  }, collections.map(({ id, name }) => /* @__PURE__ */ React.createElement(RadioButton, {
    key: name,
    name: "collection",
    label: name,
    value: `${id} ${name}`,
    defaultChecked: id === resourceCollectionId
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    name: "button"
  }, transition.submission ? "Saving..." : "Edit Resource"), /* @__PURE__ */ React.createElement("button", {
    className: "btn-delete",
    type: "submit",
    name: "button",
    value: "delete"
  }, transition.submission ? "Deleting..." : "Delete Resource")));
};
var edit_id_default3 = Edit;

// route-module:/Users/Adam/adamcollier/app/routes/admin/snippets/edit.$id.tsx
var edit_id_exports4 = {};
__export(edit_id_exports4, {
  action: () => action8,
  default: () => edit_id_default4,
  loader: () => loader17
});
init_react();
var import_remix23 = __toModule(require_remix());
init_utils();
var loader17 = async ({ params }) => {
  const { id } = params;
  const snippet = await db.snippet.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      SnippetCollection: {
        select: {
          id: true,
          name: true
        }
      }
    }
  });
  const collections = await db.snippetCollection.findMany({
    select: {
      id: true,
      name: true
    }
  });
  return (0, import_remix23.json)({
    snippet,
    collections
  });
};
var action8 = async ({ request, params }) => {
  const formData = await request.formData();
  const button = formData.get("button");
  const title = formData.get("title");
  const content = formData.get("content");
  const collectionName = formData.get("collection-name");
  if (button === "delete") {
    await db.snippet.delete({
      where: {
        id: Number(params.id)
      }
    });
  } else {
    await db.snippet.update({
      where: {
        id: Number(params.id)
      },
      data: {
        title,
        content
      }
    });
  }
  await Promise.all([
    cache.del("snippets"),
    cache.del(`snippets-${toSlug(collectionName)}`),
    cache.del("snippets-nav")
  ]);
  return (0, import_remix23.redirect)(`/snippets/${toSlug(collectionName)}`);
};
var EditSnippet = () => {
  const transition = (0, import_remix23.useTransition)();
  const { snippet, collections } = (0, import_remix23.useLoaderData)();
  const { title, content, SnippetCollection } = snippet;
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title",
    defaultValue: title,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "collection-name",
    defaultValue: SnippetCollection.name,
    hidden: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "content",
    label: "Content",
    defaultValue: content,
    rows: 5
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap w-full gap-2 py-4"
  }, collections.map(({ id, name }) => /* @__PURE__ */ React.createElement(RadioButton, {
    name: "collectionId",
    label: name,
    value: id,
    defaultChecked: id === SnippetCollection.id
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    name: "button"
  }, transition.submission ? "Saving..." : "Edit Snippet"), /* @__PURE__ */ React.createElement("button", {
    className: "btn bg-transparent border border-color-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    type: "submit",
    name: "button",
    value: "delete"
  }, transition.submission ? "Deleting..." : "Delete Snippet")));
};
var edit_id_default4 = EditSnippet;

// route-module:/Users/Adam/adamcollier/app/routes/admin/autofill/favicon.tsx
var favicon_exports = {};
__export(favicon_exports, {
  action: () => action9,
  loader: () => loader18
});
init_react();
var import_remix24 = __toModule(require_remix());
var import_html5parser = __toModule(require("html5parser"));
var action9 = async ({ request }) => {
  let { url } = await request.json();
  const response = await fetch(url);
  const html = await response.text();
  const ast = (0, import_html5parser.parse)(html, { setAttributeMap: true });
  let data = {};
  let meta13 = {};
  (0, import_html5parser.walk)(ast, {
    enter: (node) => {
      var _a, _b, _c, _d;
      if (node.type === import_html5parser.SyntaxKind.Tag && node.name === "meta" && ((_a = node.attributes[0].value) == null ? void 0 : _a.value.match(/^(og:title)$/))) {
        let property = node.attributes[0].value.value.slice(3);
        if (!((_b = node.attributes[1].value) == null ? void 0 : _b.value))
          return;
        meta13[property] = (_c = node.attributes[1].value) == null ? void 0 : _c.value;
      }
      if (node.type === import_html5parser.SyntaxKind.Tag && node.name === "link" && node.attributeMap.rel.value.value === "apple-touch-icon") {
        if (node.attributeMap) {
          let imagePath = (_d = node.attributeMap.href.value) == null ? void 0 : _d.value;
          let baseUrl = url.endsWith("/") ? url == null ? void 0 : url.slice(0, -1) : url;
          meta13["image"] = baseUrl + imagePath;
        }
      }
    }
  });
  const { title, image } = meta13;
  data = {
    name: title,
    image
  };
  return (0, import_remix24.json)(data);
};
var loader18 = async () => {
  return null;
};

// route-module:/Users/Adam/adamcollier/app/routes/admin/posts/edit.$slug.tsx
var edit_slug_exports = {};
__export(edit_slug_exports, {
  action: () => action10,
  default: () => edit_slug_default,
  loader: () => loader19
});
init_react();
var import_react6 = __toModule(require("react"));
var import_remix25 = __toModule(require_remix());
init_utils();
var action10 = async ({ request, params }) => {
  const { slug } = params;
  const formData = await request.formData();
  const action21 = formData.get("_action");
  const title = formData.get("title");
  const description = formData.get("description");
  const content = formData.get("markdown");
  const publishedDate = formData.get("published-date");
  cache.del(`blog-${toSlug(title)}`);
  if (action21 === "update") {
    await db.post.update({
      where: {
        slug
      },
      data: {
        title,
        description,
        content,
        slug: toSlug(title),
        createdAt: String(new Date(publishedDate).toISOString())
      }
    });
    return (0, import_remix25.redirect)(`/blog/${toSlug(title)}`);
  }
  if (action21 === "delete") {
    await db.post.delete({
      where: {
        slug
      }
    });
  }
  return (0, import_remix25.redirect)("/blog");
};
var loader19 = async ({ params }) => {
  const { slug } = params;
  const data = await db.post.findUnique({
    where: {
      slug
    }
  });
  return (0, import_remix25.json)(data);
};
var EditPost = () => {
  var _a, _b;
  const data = (0, import_remix25.useLoaderData)();
  const { title, description, content, createdAt } = data;
  const transition = (0, import_remix25.useTransition)();
  const [currentContent, setCurrentContent] = (0, import_react6.useState)(content);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-5xl mx-auto",
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-8 sm:items-start w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow flex flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title",
    required: true,
    defaultValue: title
  }), /* @__PURE__ */ React.createElement(TextArea, {
    label: "Description",
    name: "description",
    rows: 2,
    minChar: 120,
    maxChar: 155,
    defaultValue: description
  }), /* @__PURE__ */ React.createElement(TextArea, {
    label: "Markdown",
    name: "markdown",
    defaultValue: content,
    onChange: (e) => setCurrentContent(e.target.value)
  })), /* @__PURE__ */ React.createElement("aside", {
    className: "p-4 bg-gray-50 rounded flex flex-col space-y-4 sm:min-w-72 sm:sticky sm:top-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "delete",
    className: "btn-delete"
  }, ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "delete" && transition.state === "submitting" ? "Deleting" : "Delete"), /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "update",
    className: "btn"
  }, ((_b = transition.submission) == null ? void 0 : _b.formData.get("_action")) === "update" && transition.state === "submitting" ? "Updating" : "Update")), /* @__PURE__ */ React.createElement(DatePicker, {
    defaultValue: createdAt,
    name: "published-date",
    label: "Published"
  }), currentContent !== content && /* @__PURE__ */ React.createElement("p", {
    className: "bg-amber-50 border border-amber-500 rounded px-4 py-2 text-amber-600 text-sm"
  }, "Your content needs saving!")))));
};
var edit_slug_default = EditPost;

// route-module:/Users/Adam/adamcollier/app/routes/admin/autofill/meta.tsx
var meta_exports = {};
__export(meta_exports, {
  action: () => action11,
  loader: () => loader20
});
init_react();
var import_remix26 = __toModule(require_remix());
var import_html5parser2 = __toModule(require("html5parser"));
var action11 = async ({ request }) => {
  let { url } = await request.json();
  const response = await fetch(url);
  const html = await response.text();
  const ast = (0, import_html5parser2.parse)(html, { setAttributeMap: true });
  let data = {};
  if (url.startsWith("https://open.spotify.com")) {
    let meta13 = {};
    (0, import_html5parser2.walk)(ast, {
      enter: (node) => {
        var _a, _b, _c;
        if (node.type === import_html5parser2.SyntaxKind.Tag && node.name === "meta" && ((_a = node.attributes[0].value) == null ? void 0 : _a.value.match(/^(og:title|og:description|og:image)$/))) {
          let property = node.attributes[0].value.value.slice(3);
          if (!((_b = node.attributes[1].value) == null ? void 0 : _b.value))
            return;
          meta13[property] = (_c = node.attributes[1].value) == null ? void 0 : _c.value;
        }
      }
    });
    const { title, description, image } = meta13;
    data = {
      artist: description.split(" \xB7 ")[0],
      album: title,
      image
    };
  } else if (url.startsWith("https://soundcloud.com")) {
    let meta13 = {};
    (0, import_html5parser2.walk)(ast, {
      enter: (node) => {
        var _a, _b, _c;
        if (node.type === import_html5parser2.SyntaxKind.Tag && node.name === "meta" && ((_a = node.attributes[0].value) == null ? void 0 : _a.value.match(/^(og:title|og:description|og:image)$/))) {
          let property = node.attributes[0].value.value.slice(3);
          if (!((_b = node.attributes[1].value) == null ? void 0 : _b.value))
            return;
          meta13[property] = (_c = node.attributes[1].value) == null ? void 0 : _c.value;
        }
        if (node.type === import_html5parser2.SyntaxKind.Tag && node.name === "h1") {
          if (node.body) {
            meta13["artist"] = node.body[2].body[0].value;
          }
        }
      }
    });
    const { title, artist, image } = meta13;
    data = {
      title,
      artist,
      image
    };
  } else {
    let meta13 = {};
    (0, import_html5parser2.walk)(ast, {
      enter: (node) => {
        var _a, _b, _c;
        if (node.type === import_html5parser2.SyntaxKind.Tag && node.name === "meta" && ((_a = node.attributes[0].value) == null ? void 0 : _a.value.match(/^(og:title|og:description)$/))) {
          let property = node.attributes[0].value.value.slice(3);
          if (!((_b = node.attributes[1].value) == null ? void 0 : _b.value))
            return;
          meta13[property] = (_c = node.attributes[1].value) == null ? void 0 : _c.value;
        }
      }
    });
    const { title, image, description } = meta13;
    data = {
      title,
      description,
      image
    };
  }
  return (0, import_remix26.json)(data);
};
var loader20 = async () => {
  return null;
};

// route-module:/Users/Adam/adamcollier/app/routes/admin/resources/new.tsx
var new_exports3 = {};
__export(new_exports3, {
  action: () => action12,
  default: () => new_default3,
  loader: () => loader21
});
init_react();
var import_remix27 = __toModule(require_remix());
init_utils();
var loader21 = async () => {
  const collections = await db.resourceCollection.findMany({
    select: {
      id: true,
      name: true
    }
  });
  return (0, import_remix27.json)({ collections });
};
var action12 = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("markdown");
  const section = formData.get("section");
  const collection = formData.get("collection");
  const [collectionId, ...collectionName] = collection.split(" ");
  await db.resource.create({
    data: {
      resourceCollectionId: Number(collectionId),
      title,
      content,
      section
    }
  });
  return (0, import_remix27.redirect)(`/resources/${toSlug(collectionName.join(" "))}`);
};
var NewResource = () => {
  const transition = (0, import_remix27.useTransition)();
  const { collections } = (0, import_remix27.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title",
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "markdown",
    label: "Markdown"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "section",
    label: "Section",
    required: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap w-full gap-2 py-2"
  }, collections.map(({ id, name }) => /* @__PURE__ */ React.createElement(RadioButton, {
    name: "collection",
    label: name,
    value: `${id} ${name}`
  }))), /* @__PURE__ */ React.createElement("button", {
    className: "btn"
  }, transition.submission ? "Creating..." : "Create Resource"));
};
var new_default3 = NewResource;

// route-module:/Users/Adam/adamcollier/app/routes/admin/posts/drafts.tsx
var drafts_exports = {};
__export(drafts_exports, {
  default: () => drafts_default,
  loader: () => loader22
});
init_react();
var import_remix28 = __toModule(require_remix());
init_utils();
var loader22 = async () => {
  const drafts = await db.post.findMany({
    where: {
      published: false
    }
  });
  return (0, import_remix28.json)(drafts);
};
var PostDrafts = () => {
  const data = (0, import_remix28.useLoaderData)();
  const location = (0, import_remix28.useLocation)();
  const isSidebar = location.pathname.endsWith("drafts") ? "flex flex-col" : "hidden sm:flex sm:flex-col";
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-8 block max-w-6xl mx-auto"
  }, /* @__PURE__ */ React.createElement("aside", {
    className: `${isSidebar} sm:w-44 sm:flex-shrink-0 gap-4`
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md"
  }, "Drafts"), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-4"
  }, data.map(({ slug, title, createdAt }, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: slug
  }, /* @__PURE__ */ React.createElement("h3", null, title), /* @__PURE__ */ React.createElement("small", null, "created: ", toReadableDate(createdAt))))))), /* @__PURE__ */ React.createElement(import_remix28.Outlet, {
    context: data
  }));
};
var drafts_default = PostDrafts;

// route-module:/Users/Adam/adamcollier/app/routes/admin/posts/drafts/$slug.tsx
var slug_exports4 = {};
__export(slug_exports4, {
  action: () => action13,
  default: () => slug_default4,
  loader: () => loader23
});
init_react();
var import_react7 = __toModule(require("react"));
var import_remix29 = __toModule(require_remix());
init_utils();
var action13 = async ({ request, params }) => {
  const { slug } = params;
  const formData = await request.formData();
  const action21 = formData.get("_action");
  const title = formData.get("title");
  const description = formData.get("description") || "";
  const content = formData.get("markdown") || "";
  const publishedDate = formData.get("published-date");
  if (action21 === "draft") {
    await db.post.update({
      where: {
        slug
      },
      data: {
        slug: toSlug(title),
        title,
        description,
        content,
        published: false,
        createdAt: String(new Date(publishedDate).toISOString())
      }
    });
    return (0, import_remix29.json)({ success: "The draft has been saved!" });
  }
  if (action21 === "publish") {
    await db.post.update({
      where: {
        slug
      },
      data: {
        slug: toSlug(title),
        title,
        description,
        content,
        published: true,
        createdAt: String(new Date(publishedDate).toISOString())
      }
    });
    return (0, import_remix29.redirect)(`/blog/${slug}`);
  }
};
var loader23 = async ({ params }) => {
  const { slug } = params;
  const data = await db.post.findUnique({
    where: {
      slug
    }
  });
  return (0, import_remix29.json)(data);
};
var EditDraft = () => {
  var _a, _b;
  const data = (0, import_remix29.useLoaderData)();
  const { title, content, description, createdAt } = data;
  const transition = (0, import_remix29.useTransition)();
  const [currentContent, setCurrentContent] = (0, import_react7.useState)(content);
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full min-w-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-8 sm:items-start w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-grow flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title",
    required: true,
    defaultValue: title
  }), /* @__PURE__ */ React.createElement(TextArea, {
    label: "Description",
    name: "description",
    rows: 2,
    minChar: 120,
    maxChar: 155,
    defaultValue: description
  }), /* @__PURE__ */ React.createElement(TextArea, {
    label: "Markdown",
    name: "markdown",
    defaultValue: content,
    onChange: (e) => setCurrentContent(e.target.value)
  })), /* @__PURE__ */ React.createElement("aside", {
    className: "p-4 bg-gray-50 rounded flex flex-col space-y-4 sm:min-w-72 sm:sticky sm:top-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "draft",
    className: "btn bg-white hover:bg-gray-100 border border-black text-black"
  }, ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "draft" && transition.state === "submitting" ? "Saving" : "Save Draft"), /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "publish",
    className: "btn"
  }, ((_b = transition.submission) == null ? void 0 : _b.formData.get("_action")) === "publish" && transition.state === "submitting" ? "Publishing" : "Publish")), /* @__PURE__ */ React.createElement(DatePicker, {
    defaultValue: createdAt,
    name: "published-date",
    label: "Published"
  }), currentContent === content ? /* @__PURE__ */ React.createElement("p", {
    className: "bg-green-100 border border-green-500 rounded px-4 py-2 text-green-700 text-sm"
  }, "Content is saved and up to date") : /* @__PURE__ */ React.createElement("p", {
    className: "bg-amber-50 border border-amber-500 rounded px-4 py-2 text-amber-600 text-sm"
  }, "Remember to save before leaving"))));
};
var slug_default4 = EditDraft;

// route-module:/Users/Adam/adamcollier/app/routes/admin/posts/drafts/index.tsx
var drafts_exports2 = {};
__export(drafts_exports2, {
  default: () => drafts_default2
});
init_react();
var import_remix30 = __toModule(require_remix());
var Drafts = () => {
  const context = (0, import_remix30.useOutletContext)();
  if (context.length === 0) {
    return /* @__PURE__ */ React.createElement("p", null, "There are currently no drafts!", " ", /* @__PURE__ */ React.createElement(import_remix30.Link, {
      className: "underline",
      to: "/admin/posts/new"
    }, "Create a New Post"), " ", "instead");
  } else {
    return null;
  }
};
var drafts_default2 = Drafts;

// route-module:/Users/Adam/adamcollier/app/routes/admin/snippets/new.tsx
var new_exports4 = {};
__export(new_exports4, {
  action: () => action14,
  default: () => new_default4,
  loader: () => loader24
});
init_react();
var import_remix31 = __toModule(require_remix());
init_utils();
var loader24 = async () => {
  const collections = await db.snippetCollection.findMany({
    select: {
      id: true,
      name: true
    }
  });
  return (0, import_remix31.json)({ collections });
};
var action14 = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const collection = formData.get("collection");
  const [collectionId, collectionName] = collection.split(" - ");
  await db.snippet.create({
    data: {
      snippetCollectionId: Number(collectionId),
      title,
      content
    }
  });
  await Promise.all([
    cache.del("snippets"),
    cache.del(`snippets-${toSlug(collectionName)}`),
    cache.del("snippets-nav")
  ]);
  return (0, import_remix31.redirect)(`/snippets/${toSlug(collectionName)}`);
};
var NewSnippet = () => {
  const transition = (0, import_remix31.useTransition)();
  const { collections } = (0, import_remix31.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title",
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    name: "content",
    label: "Content",
    rows: 15
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap w-full gap-2 py-4"
  }, collections.map(({ id, name }) => /* @__PURE__ */ React.createElement(RadioButton, {
    name: "collection",
    label: name,
    value: `${id} - ${name}`
  }))), /* @__PURE__ */ React.createElement("button", {
    className: "btn"
  }, transition.submission ? "Creating..." : "Create Snippet"));
};
var new_default4 = NewSnippet;

// route-module:/Users/Adam/adamcollier/app/routes/admin/music/new.tsx
var new_exports5 = {};
__export(new_exports5, {
  default: () => new_default5
});
init_react();
var import_remix32 = __toModule(require_remix());
var Link11 = (props) => /* @__PURE__ */ React.createElement(import_remix32.NavLink, __spreadProps(__spreadValues({}, props), {
  className: ({ isActive }) => isActive ? "block bg-gray-200 px-2 py-1 rounded text-sm" : "block px-2 py-1 rounded text-sm"
}));
var NewMusic = () => {
  return /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-col sm:flex-row gap-8 sm:gap-16 block max-w-4xl mx-auto min-h-[100vh]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex sm:flex-col gap-2 md:gap-4"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link11, {
    to: "spotify"
  }, "Spotify")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link11, {
    to: "soundcloud"
  }, "SoundCloud")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link11, {
    to: "radio"
  }, "Radio")))), /* @__PURE__ */ React.createElement(import_remix32.Outlet, null));
};
var new_default5 = NewMusic;

// route-module:/Users/Adam/adamcollier/app/routes/admin/music/new/soundcloud.tsx
var soundcloud_exports = {};
__export(soundcloud_exports, {
  action: () => action15,
  default: () => soundcloud_default
});
init_react();
var import_remix33 = __toModule(require_remix());

// app/utils/notion.server.ts
init_react();
var import_client2 = __toModule(require("@notionhq/client"));
var notion = new import_client2.Client({
  auth: process.env.NOTION_TOKEN
});
var notion_server_default = notion;

// route-module:/Users/Adam/adamcollier/app/routes/admin/music/new/soundcloud.tsx
init_utils();
var action15 = async ({ request }) => {
  const form = await request.formData();
  const link = form.get("link");
  const artist = form.get("artist");
  const title = form.get("title");
  const image = form.get("image");
  const database_id = process.env.NOTION_SOUNDCLOUD_MIXES;
  await notion_server_default.pages.create({
    parent: {
      database_id
    },
    properties: {
      link: {
        rich_text: [
          {
            text: {
              content: link
            }
          }
        ]
      },
      title: {
        title: [
          {
            text: {
              content: title
            }
          }
        ]
      },
      artist: {
        rich_text: [
          {
            text: {
              content: artist
            }
          }
        ]
      },
      image: {
        rich_text: [
          {
            text: {
              content: image
            }
          }
        ]
      }
    }
  });
  if (await cache.has("music"))
    await cache.del("music");
  return (0, import_remix33.redirect)("/music");
};
var NewSoundcloudMix = () => {
  const transition = (0, import_remix33.useTransition)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "link",
    label: "Link",
    onChange: metaAutofill
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "artist",
    label: "Artist"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "image",
    label: "Image"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn mt-2"
  }, transition.submission ? "Submitting..." : "Submit"));
};
var soundcloud_default = NewSoundcloudMix;

// route-module:/Users/Adam/adamcollier/app/routes/admin/music/new/spotify.tsx
var spotify_exports = {};
__export(spotify_exports, {
  action: () => action16,
  default: () => spotify_default
});
init_react();
var import_remix34 = __toModule(require_remix());
init_utils();
var action16 = async ({ request }) => {
  const form = await request.formData();
  const link = form.get("link");
  const artist = form.get("artist");
  const album = form.get("album");
  const image = form.get("image");
  const rating = form.get("rating");
  const database_id = process.env.NOTION_SPOTIFY_ALBUMS;
  await notion_server_default.pages.create({
    parent: {
      database_id
    },
    properties: {
      link: {
        rich_text: [
          {
            text: {
              content: link
            }
          }
        ]
      },
      rating: {
        number: Number(rating)
      },
      artist: {
        title: [
          {
            text: {
              content: artist
            }
          }
        ]
      },
      album: {
        rich_text: [
          {
            text: {
              content: album || ""
            }
          }
        ]
      },
      image: {
        rich_text: [
          {
            text: {
              content: image
            }
          }
        ]
      }
    }
  });
  if (await cache.has("music"))
    await cache.del("music");
  return (0, import_remix34.redirect)("/music");
};
var NewMusic2 = () => {
  const transition = (0, import_remix34.useTransition)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "link",
    label: "Link",
    onChange: metaAutofill
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "artist",
    label: "Artist"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "album",
    label: "Album"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "image",
    label: "Image"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    name: "rating",
    label: "Rating"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn mt-2"
  }, transition.submission ? "Submitting..." : "Submit"));
};
var spotify_default = NewMusic2;

// route-module:/Users/Adam/adamcollier/app/routes/admin/music/new/radio.tsx
var radio_exports = {};
__export(radio_exports, {
  action: () => action17,
  default: () => radio_default
});
init_react();
var import_remix35 = __toModule(require_remix());
init_utils();
var action17 = async ({ request }) => {
  const form = await request.formData();
  const link = form.get("link");
  const name = form.get("name");
  const image = form.get("image");
  const database_id = process.env.NOTION_INTERNET_RADIO_STATIONS;
  await notion_server_default.pages.create({
    parent: {
      database_id
    },
    properties: {
      link: {
        rich_text: [
          {
            text: {
              content: link
            }
          }
        ]
      },
      name: {
        title: [
          {
            text: {
              content: name
            }
          }
        ]
      },
      image: {
        rich_text: [
          {
            text: {
              content: image
            }
          }
        ]
      }
    }
  });
  if (await cache.has("music"))
    await cache.del("music");
  return (0, import_remix35.redirect)("/music");
};
var NewRadioShow = () => {
  const transition = (0, import_remix35.useTransition)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "link",
    label: "Link",
    onChange: faviconAutofill
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "name",
    label: "Name"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "image",
    label: "Image"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn mt-2"
  }, transition.submission ? "Submitting..." : "Submit"));
};
var radio_default = NewRadioShow;

// route-module:/Users/Adam/adamcollier/app/routes/admin/posts/new.tsx
var new_exports6 = {};
__export(new_exports6, {
  action: () => action18,
  default: () => new_default6
});
init_react();
var import_remix36 = __toModule(require_remix());
init_utils();
var action18 = async ({ request }) => {
  const formData = await request.formData();
  const action21 = formData.get("_action");
  const title = formData.get("title");
  const description = formData.get("description") || "";
  const content = formData.get("markdown") || "";
  const publishedDate = formData.get("published-date");
  if (action21 === "draft") {
    await db.post.create({
      data: {
        title,
        slug: toSlug(title),
        content,
        description,
        published: false
      }
    });
    return (0, import_remix36.redirect)("/admin/posts/drafts");
  }
  if (action21 === "publish") {
    await db.post.create({
      data: __spreadValues({
        title,
        slug: toSlug(title),
        content,
        description,
        published: true
      }, publishedDate && {
        createdAt: new Date(publishedDate).toISOString()
      })
    });
    return (0, import_remix36.redirect)(`/blog/${toSlug(title)}`);
  }
};
var NewPost = () => {
  var _a, _b;
  const transition = (0, import_remix36.useTransition)();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full max-w-5xl mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-8 sm:items-start w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow flex flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "title",
    label: "Title",
    required: true
  }), /* @__PURE__ */ React.createElement(TextArea, {
    label: "Description",
    name: "description",
    rows: 2,
    minChar: 120,
    maxChar: 155
  }), /* @__PURE__ */ React.createElement(TextArea, {
    label: "Markdown",
    name: "markdown"
  })), /* @__PURE__ */ React.createElement("aside", {
    className: "p-4 bg-gray-50 rounded flex flex-col space-y-4 sm:min-w-72 sm:sticky sm:top-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "draft",
    className: "btn bg-white hover:bg-gray-100 border border-black text-black"
  }, ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "draft" && transition.state === "submitting" ? "Saving" : "Save Draft"), /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "publish",
    className: "btn"
  }, ((_b = transition.submission) == null ? void 0 : _b.formData.get("_action")) === "publish" && transition.state === "submitting" ? "Publishing" : "Publish")), /* @__PURE__ */ React.createElement(DatePicker, {
    name: "published-date",
    label: "Published"
  }))));
};
var new_default6 = NewPost;

// route-module:/Users/Adam/adamcollier/app/routes/image.ts
var image_exports = {};
__export(image_exports, {
  loader: () => loader25
});
init_react();
var import_sharp = __toModule(require("sharp"));
var import_node = __toModule(require("@remix-run/node"));
var badImageBase64 = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
function badImageResponse() {
  let buffer = Buffer.from(badImageBase64, "base64");
  return new import_node.Response(buffer, {
    status: 500,
    headers: {
      "Cache-Control": "max-age=0",
      "Content-Type": "image/gif;base64",
      "Content-Length": buffer.length.toFixed(0)
    }
  });
}
function getIntOrNull(value) {
  if (value === null) {
    return null;
  }
  return Number.parseInt(value);
}
var loader25 = async ({ request }) => {
  let url = new URL(request.url);
  let src = url.searchParams.get("src");
  if (!src) {
    return badImageResponse();
  }
  let width = getIntOrNull(url.searchParams.get("width"));
  let height = getIntOrNull(url.searchParams.get("height"));
  let fit = url.searchParams.get("fit") || "cover";
  try {
    let response = await fetch(src.toString());
    const data = await response.arrayBuffer();
    let status = response.status;
    if (!data) {
      return badImageResponse();
    }
    let sharpInstance = await (0, import_sharp.default)(Buffer.from(data)).resize(width, height, { fit }).webp({ reductionEffort: 6 }).toBuffer().catch((e) => {
      console.log(e);
    });
    if (!sharpInstance)
      return badImageResponse();
    return new import_node.Response(sharpInstance, {
      status,
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch (error) {
    console.error(error);
    return badImageResponse();
  }
};

// route-module:/Users/Adam/adamcollier/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers5,
  loader: () => loader26
});
init_react();
var import_remix37 = __toModule(require_remix());

// app/home.ts
init_react();
var import_rss_parser = __toModule(require("rss-parser"));
var getBooks = async () => {
  const urls = [process.env.BOOKS_READ, process.env.BOOKS_CURRENTLY_READING];
  const parser = new import_rss_parser.default();
  const [read, reading] = await Promise.all(urls.map(async (url) => {
    const feed = await parser.parseURL(url);
    const { items } = feed;
    const books = items.slice(0, 3);
    const filteredPropertied = books.map(({
      link,
      title,
      creator
    }) => ({
      link,
      title,
      creator
    }));
    return filteredPropertied;
  }));
  return { read, reading: reading[0] };
};
var getLatestFilms = async () => {
  const parser = new import_rss_parser.default();
  const feed = await parser.parseURL(process.env.LETTERBOXD_LATEST);
  const { items } = feed;
  const filteredFilms = items.slice(0, 8).map((film) => {
    const { content, title, link } = film;
    const formattedFilmLink = link == null ? void 0 : link.replace(/\/mistapolnareff/g, "");
    const src = content == null ? void 0 : content.split('"')[1];
    let lastCommaIndex = title == null ? void 0 : title.lastIndexOf(",");
    const filmTitle = title == null ? void 0 : title.substring(0, lastCommaIndex);
    const rest = title == null ? void 0 : title.substring(lastCommaIndex);
    const [year, rating] = rest == null ? void 0 : rest.split("-");
    return {
      link: formattedFilmLink,
      title: filmTitle,
      year: year.trim(),
      rating: rating.trim(),
      src
    };
  });
  return filteredFilms;
};
var getAccessToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const queryBody = new URLSearchParams();
  if (!refreshToken) {
    console.log("there is current no Spotify refresh token");
    return;
  }
  queryBody.append("grant_type", "refresh_token");
  queryBody.append("refresh_token", refreshToken);
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: queryBody
  });
  return response.json();
};
var getTopTracks = async () => {
  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=12`;
  const { access_token: accessToken } = await getAccessToken();
  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const data = await response.json();
  const tracks = data.items.map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    url: track.external_urls.spotify,
    title: track.name,
    image: track.album.images[0].url
  }));
  return tracks;
};
var getLatestPosts = async () => await db.post.findMany({
  where: { published: true },
  take: 5,
  orderBy: {
    createdAt: "desc"
  },
  select: {
    title: true,
    createdAt: true,
    updatedAt: true,
    slug: true
  }
});
var getLatestResources = async () => await db.resource.findMany({
  take: 5,
  select: {
    title: true,
    createdAt: true,
    ResourceCollection: {
      select: {
        name: true
      }
    }
  },
  orderBy: [
    {
      updatedAt: "desc"
    }
  ]
});

// route-module:/Users/Adam/adamcollier/app/routes/index.tsx
var import_remix38 = __toModule(require_remix());
init_utils();
var loader26 = async () => {
  const [books, latestFilms, topTracks, latestPosts, latestResources] = await Promise.allSettled([
    getBooks(),
    getLatestFilms(),
    getTopTracks(),
    getLatestPosts(),
    getLatestResources()
  ]);
  const data = {
    books: (books == null ? void 0 : books.value) ?? null,
    latestFilms: (latestFilms == null ? void 0 : latestFilms.value) ?? null,
    topTracks: (topTracks == null ? void 0 : topTracks.value) ?? null,
    latestPosts: (latestPosts == null ? void 0 : latestPosts.value) ?? null,
    latestResources: (latestResources == null ? void 0 : latestResources.value) ?? null
  };
  return (0, import_remix37.json)(data);
};
var headers5 = () => {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate"
  };
};
function Index() {
  const data = (0, import_remix38.useLoaderData)();
  const { books, latestFilms, latestPosts, latestResources, topTracks } = data;
  const { reading, read } = books;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", {
    className: "block flex flex-col gap-10 sm:gap-20 children:w-full children:mx-auto children:px-4"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "max-w-2xl pt-24 pb-16 mx-auto flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl"
  }, "Hey, I'm Adam "), /* @__PURE__ */ React.createElement("p", {
    className: "text-lg leading-relaxed"
  }, "A designer and developer from Manchester, UK. Instead of the traditional portfolio site that never gets updated I wanted to make something functional, practical and useful in my day to day. It will exist as an ever growing repository of ideas, productivity helpers and things I enjoy.")), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-5xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-16 sm:children:basis-1/2 sm:children:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6 sm:rounded-xl sm:border sm:border-dashed sm:border-gray-600"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, "Latest Posts"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, latestPosts.map(({
    title,
    slug,
    createdAt
  }) => /* @__PURE__ */ React.createElement(import_remix37.Link, {
    to: `/blog/${slug}`,
    className: "block group"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-md group-hover:underline"
  }, title), /* @__PURE__ */ React.createElement("small", {
    className: "text-slate-500"
  }, toReadableDate(createdAt)))))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, "Latest Resources"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, latestResources.map(({
    createdAt,
    title,
    ResourceCollection
  }) => /* @__PURE__ */ React.createElement("a", {
    href: `/resources/${toSlug(ResourceCollection.name)}#${toSlug(title)}`,
    className: "block group"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-md group-hover:underline"
  }, title), /* @__PURE__ */ React.createElement("small", {
    className: "text-slate-500"
  }, toReadableDate(createdAt))))))), /* @__PURE__ */ React.createElement("section", {
    className: "w-full bg-gradient-to-t from-zinc-100 to-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4 rounded-xl max-w-7xl mx-auto py-4 sm:py-12 sm:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[24px] flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement(Spotify, {
    className: "h-full w-auto"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 sm:pt-4"
  }, topTracks.map(({
    artist,
    url,
    title,
    image
  }, index) => /* @__PURE__ */ React.createElement("a", {
    className: "block w-full flex items-start",
    href: url,
    target: "_blank",
    rel: "noreferrer noopener",
    key: index
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block w-full relative rounded overflow-hidden shadow-lg basis-16 sm:basis-20 shrink-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block w-full pt-full"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "rounded absolute top-0 left-0 bottom-0 right-0 bg-gray-100/20 text-xs text-gray-400",
    src: image,
    alt: `${title}, ${artist}`,
    loading: "lazy"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "p-1 sm:p-2 space-y-0.5"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm sm:text-base leading-4 sm:leading-5 text-clamp-2"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "text-xs leading-4 text-clamp-1"
  }, artist))))))), /* @__PURE__ */ React.createElement("section", {
    className: "max-w-5xl flex-col space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl "
  }, "Activity"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row gap-8 sm:gap-16"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col gap-4 sm:basis-2/5"
  }, /* @__PURE__ */ React.createElement("p", null, "Looking for a new book to read? Check out what I'm reading and the last few I've finished. All pulled from my", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline text-indigo-600",
    href: "https://oku.club/user/mistapolnareff",
    target: "_blank"
  }, "Oku.club"), " ", "feed."), /* @__PURE__ */ React.createElement("p", {
    className: "block bg-amber-50 text-amber-700 self-start px-2 py-1 text-sm flex gap-1 items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "i-ri:bookmark-line"
  }), "Currently Reading..."), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: reading.link,
    className: "group"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "group-hover:underline"
  }, reading.title), /* @__PURE__ */ React.createElement("p", {
    className: "text-slate-500 text-sm"
  }, reading.creator)), /* @__PURE__ */ React.createElement("p", {
    className: "block bg-lime-50 text-lime-800 self-start px-2 py-1 text-sm flex gap-1 items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "i-ri:check-double-line"
  }), "Last few I've finished"), read.map((book, index) => /* @__PURE__ */ React.createElement("a", {
    href: book.link,
    key: index,
    className: "group"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "group-hover:underline"
  }, book.title), /* @__PURE__ */ React.createElement("p", {
    className: "text-slate-500 text-sm"
  }, book.creator))))), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col gap-4 sm:basis-3/5"
  }, /* @__PURE__ */ React.createElement("p", null, "Struggling for a film to watch? Here's the latest eight from my", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline text-indigo-600",
    href: "https://letterboxd.com/mistapolnareff/"
  }, "Letterboxd")), latestFilms ? /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-2"
  }, latestFilms.map(({
    link,
    src,
    title
  }) => {
    return /* @__PURE__ */ React.createElement("a", {
      href: link,
      className: "block overflow-hidden rounded relative w-full",
      "aria-label": `${title} film`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "block pt-[150%]"
    }), /* @__PURE__ */ React.createElement("img", {
      src,
      alt: title,
      className: "absolute top-0 left-0 w-full h-full object-cover"
    }));
  })) : /* @__PURE__ */ React.createElement("p", {
    className: "text-red-700 bg-red-100 px-3 py-2 rounded"
  }, "Oh no! Letterboxd films can't currently be fetched! :'("))))), /* @__PURE__ */ React.createElement(NavSpacer, null));
}

// route-module:/Users/Adam/adamcollier/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action19,
  default: () => login_default,
  meta: () => meta9
});
init_react();
var import_remix39 = __toModule(require_remix());
var meta9 = () => {
  return {
    robots: "noindex, nofollow"
  };
};
var badRequest = (data) => (0, import_remix39.json)(data, { status: 400 });
var action19 = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const user = await login({ username, password });
  if (!user) {
    return badRequest({
      formError: `Username/Password combination is incorrect`
    });
  }
  return createUserSession(user.id, "/");
};
var Login = () => {
  const actionData = (0, import_remix39.useActionData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "noise w-full h-full flex justify-center items-center bg-gradient-to-t from-neutral-50 to-rose-50"
  }, /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
    method: "post",
    className: "max-w-sm w-full shadow-sm p-8"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    name: "username",
    label: "Username"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    name: "password",
    label: "Password",
    type: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    type: "submit"
  }, "Submit"), (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xs text-red-500 bg-red-100 py-2 px-3 rounded",
    role: "alert"
  }, actionData == null ? void 0 : actionData.formError)) : null));
};
var login_default = Login;

// route-module:/Users/Adam/adamcollier/app/routes/music.tsx
var music_exports = {};
__export(music_exports, {
  CatchBoundary: () => CatchBoundary4,
  action: () => action20,
  default: () => music_default,
  loader: () => loader27,
  meta: () => meta10
});
init_react();
var import_remix40 = __toModule(require_remix());

// app/music.ts
init_react();
var getMusicData = async () => {
  if (!process.env.NOTION_SPOTIFY_ALBUMS) {
    throw new Response("notion spotify album id needed", { status: 500 });
  }
  if (!process.env.NOTION_SOUNDCLOUD_MIXES) {
    throw new Response("notion soundcloud mixes id needed", { status: 500 });
  }
  if (!process.env.NOTION_INTERNET_RADIO_STATIONS) {
    throw new Response("notion internet radio station id needed", {
      status: 500
    });
  }
  const [albumData, soundcloudData, radioData] = await Promise.all([
    await notion_server_default.databases.query({
      database_id: process.env.NOTION_SPOTIFY_ALBUMS
    }),
    await notion_server_default.databases.query({
      database_id: process.env.NOTION_SOUNDCLOUD_MIXES
    }),
    await notion_server_default.databases.query({
      database_id: process.env.NOTION_INTERNET_RADIO_STATIONS
    })
  ]);
  const spotifyAlbums = albumData.results.map(({ properties }) => {
    return {
      artist: properties.artist.title[0].plain_text,
      link: properties.link.rich_text[0].plain_text,
      album: properties.album.rich_text[0].plain_text,
      rating: properties.rating.number,
      image: properties.image.rich_text[0].plain_text
    };
  });
  const soundcloudMixes = soundcloudData.results.map(({ properties }) => ({
    artist: properties.artist.rich_text[0].plain_text,
    title: properties.title.title[0].plain_text,
    link: properties.link.rich_text[0].plain_text,
    image: properties.image.rich_text[0].plain_text
  }));
  const radioStations = radioData.results.map(({ properties }) => {
    return {
      name: properties.name.title[0].plain_text,
      link: properties.link.rich_text[0].plain_text,
      image: properties.image.rich_text[0].plain_text
    };
  });
  return {
    spotifyAlbums,
    soundcloudMixes,
    radioStations
  };
};

// app/components/Image.tsx
init_react();
function Image(_a) {
  var _b = _a, {
    optimizerUrl = "/image",
    responsive,
    src
  } = _b, rest = __objRest(_b, [
    "optimizerUrl",
    "responsive",
    "src"
  ]);
  let url = src ? optimizerUrl + "?src=" + encodeURIComponent(src) : src;
  let props = {
    src: url + `&width=${rest.width || ""}&height=${rest.height || ""}`
  };
  let largestImageWidth = 0;
  let largestImageSrc;
  if (responsive && responsive.length) {
    let srcSet = "";
    let sizes = "";
    for (let { maxWidth, size } of responsive) {
      if (srcSet) {
        srcSet += ", ";
      }
      let srcSetUrl = url + `&width=${size.width}&height=${size.height || ""} ${size.width}w`;
      srcSet += srcSetUrl;
      if (maxWidth) {
        if (sizes) {
          sizes += ", ";
        }
        sizes += `(max-width: ${maxWidth}px) ${size.width}px`;
      }
      if (size.width > largestImageWidth) {
        largestImageWidth = size.width;
        largestImageSrc = srcSetUrl;
      }
    }
    props.srcSet = srcSet;
    props.sizes = sizes;
    props.src = "";
  }
  if (largestImageSrc && (!rest.width || largestImageWidth > rest.width)) {
    props.src = largestImageSrc;
  }
  return /* @__PURE__ */ React.createElement("img", __spreadValues(__spreadValues({}, rest), props));
}

// route-module:/Users/Adam/adamcollier/app/routes/music.tsx
var action20 = async ({ request }) => {
  const form = await request.formData();
  const deleteCache = form.get("delete-cache");
  if (deleteCache) {
    if (await cache.has("music"))
      await cache.del("music");
  }
  return null;
};
var loader27 = async () => {
  let cachedData = await cache.get("music");
  if (cachedData)
    return (0, import_remix40.json)(cachedData);
  let data = await getMusicData();
  await cache.set("music", data);
  return (0, import_remix40.json)(__spreadValues({}, data));
};
var meta10 = () => {
  const title = "Music";
  const description = "All the music I love to listen to online. Including Spotify albums, Soundcloud mixes and my favourite Radio Stations.";
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var Music2 = () => {
  const data = (0, import_remix40.useLoaderData)();
  const { spotifyAlbums, soundcloudMixes, radioStations } = data;
  const { user } = useAuth();
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col sm:flex-row sm:h-full p-2 sm:p-4 gap-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-11/12 lg:w-8/12 p-4 pb-0 space-y-4 rounded-xl bg-gradient-to-t from-[#121212] to-gray-100 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[24px] flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement(Spotify, {
    className: "h-full w-auto"
  }), user && /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2 place-items-center"
  }, /* @__PURE__ */ React.createElement(import_remix40.Link, {
    to: "/admin/music/new/spotify",
    className: "text-xs"
  }, "Add an Album"), /* @__PURE__ */ React.createElement("span", {
    className: "text-xs"
  }, "|"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "flex place-items-center"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "text-xs",
    name: "delete-cache",
    value: "delete"
  }, "Delete the cache")))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:overflow-y-scroll self-stretch pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2"
  }, spotifyAlbums.map(({
    image,
    link,
    artist,
    album
  }, index) => /* @__PURE__ */ React.createElement("a", {
    className: "block w-full relative pt-full rounded overflow-hidden shadow-lg",
    href: link,
    target: "_blank",
    rel: "noreferrer noopener",
    key: index
  }, /* @__PURE__ */ React.createElement(Image, {
    className: "rounded absolute top-0 left-0 w-full h-full bg-gray-100/20 text-xs text-gray-400",
    src: image.replace(/b273/g, "1e02"),
    alt: `${album}, ${artist}`,
    loading: "lazy",
    height: 218,
    width: 218
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 bg-gradient-to-t from-[#f30] to-[#ffab61] rounded-xl space-y-4 flex flex-col flex-grow flex-shrink min-w-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[24px] flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement(Soundcloud, {
    className: "h-[18px]"
  }), user && /* @__PURE__ */ React.createElement(import_remix40.Link, {
    to: "/admin/music/new/soundcloud",
    className: "text-white text-xs"
  }, "Add a mix")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-2 w-full"
  }, soundcloudMixes.map(({
    artist,
    title,
    link,
    image
  }, index) => {
    return /* @__PURE__ */ React.createElement("a", {
      className: "block relative flex items-start text-white bg-gradient-to-r to-white/3 hover:to-white/10 from-transparent rounded overflow-hidden",
      href: link,
      target: "_blank",
      rel: "noreferrer noopener",
      key: index
    }, /* @__PURE__ */ React.createElement("div", {
      className: "w-13 h-13 relative rounded overflow-hidden flex-shrink-0 bg-orange-100/20 text-xs text-orange-300"
    }, /* @__PURE__ */ React.createElement(Image, {
      className: "absolute top-0 left-0 w-full h-full",
      src: image,
      alt: `${title}, ${artist}`,
      loading: "lazy",
      height: 104,
      width: 104
    })), /* @__PURE__ */ React.createElement("div", {
      className: "p-2 flex flex-col w-full min-w-0"
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "text-sm truncate"
    }, title), /* @__PURE__ */ React.createElement("p", {
      className: "text-xs truncate"
    }, artist)));
  })), /* @__PURE__ */ React.createElement(NavSpacer, null)), /* @__PURE__ */ React.createElement("div", {
    className: "order-first rounded-xl sm:order-last bg-black p-2 flex sm:flex-col justify-between items-center bg-gradient-to-t sm:bg-gradient-to-t from-orange-200 to-orange-100 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex sm:flex-col gap-2"
  }, user && /* @__PURE__ */ React.createElement(import_remix40.Link, {
    className: "w-10 h-10 bg-orange-200 flex items-center justify-center rounded",
    to: "/admin/music/new/radio",
    "aria-label": "add radio station"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block w-6 h-6 i-ri:add-line"
  })), radioStations.map(({
    name,
    link,
    image
  }, index) => /* @__PURE__ */ React.createElement("a", {
    href: link,
    className: "relative block rounded w-10 h-10 sm:w-10 overflow-hidden sm:h-10 bg-orange-200",
    target: "_blank",
    rel: "noreferrer noopener",
    key: index
  }, /* @__PURE__ */ React.createElement(Image, {
    className: "absolute top-0 left-0 w-full h-full",
    src: image,
    alt: name,
    loading: "lazy",
    height: 80,
    width: 80
  }))))));
};
var music_default = Music2;
function CatchBoundary4() {
  const caught = (0, import_remix40.useCatch)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full h-full items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, caught.data));
}

// route-module:/Users/Adam/adamcollier/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default,
  loader: () => loader28,
  meta: () => meta11
});
init_react();
var import_react8 = __toModule(require("react"));
var import_remix41 = __toModule(require_remix());
init_utils();
var meta11 = () => {
  const title = "Blog";
  const description = "A diverse collection of writing which ranges from code, design and life in general.";
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var loader28 = async () => {
  const data = await db.post.findMany({
    where: { published: true },
    orderBy: [
      {
        createdAt: "desc"
      }
    ],
    select: {
      title: true,
      createdAt: true
    }
  });
  return (0, import_remix41.json)(data);
};
var Blog = () => {
  const data = (0, import_remix41.useLoaderData)();
  const location = (0, import_remix41.useLocation)();
  const slugClasses = location.pathname.endsWith("blog") ? "" : "hidden";
  (0, import_react8.useEffect)(() => {
    copyCodeToClipboard();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col-reverse min-w-0 sm:flex-row sm:max-w-7xl sm:mx-auto gap-8 lg:gap-x-16 w-full px-4 justify-between py-8 sm:py-16"
  }, /* @__PURE__ */ React.createElement("aside", {
    className: `${slugClasses} lg:block sm:w-56 sm:flex-shrink-0 sm:self-start sm:sticky sm:top-0 sm:overflow-y-scroll h-screen no-scrollbar sm:-my-16 sm:py-16`
  }, /* @__PURE__ */ React.createElement("ul", null, data.map((post, index) => /* @__PURE__ */ React.createElement("li", {
    className: "hover:bg-gray-50 p-2 rounded",
    key: index
  }, /* @__PURE__ */ React.createElement(import_remix41.Link, {
    to: toSlug(post.title)
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md sm:text-sm leading-5 text-gray-700"
  }, post.title), /* @__PURE__ */ React.createElement("small", {
    className: "text-xs text-gray-500"
  }, toReadableDate(post.createdAt))))))), /* @__PURE__ */ React.createElement(import_remix41.Outlet, null));
};
var blog_default = Blog;

// route-module:/Users/Adam/adamcollier/app/routes/blog/$slug.tsx
var slug_exports5 = {};
__export(slug_exports5, {
  CatchBoundary: () => CatchBoundary5,
  default: () => slug_default5,
  links: () => links3,
  loader: () => loader29,
  meta: () => meta12
});
init_react();
var import_remix42 = __toModule(require_remix());
init_utils();
var loader29 = async ({ params }) => {
  const { slug } = params;
  let cachedData = await cache.get(`blog-${slug}`);
  if (cachedData)
    return (0, import_remix42.json)(cachedData);
  const data = await db.post.findUnique({
    where: {
      slug
    }
  });
  if (!data) {
    throw new Response("This page doesn't exist", { status: 404 });
  }
  const headings = getHeadings(data == null ? void 0 : data.content);
  let formattedData = __spreadProps(__spreadValues({}, data), {
    content: await toHTML(data == null ? void 0 : data.content),
    headings
  });
  cache.set(`blog-${slug}`, formattedData);
  return (0, import_remix42.json)(formattedData);
};
var meta12 = ({ data }) => {
  if (!data) {
    let errorMessage = "No post found";
    return {
      title: errorMessage,
      description: errorMessage,
      "twitter:title": errorMessage,
      "twitter:description": errorMessage
    };
  }
  return {
    title: data.title,
    description: data.description,
    "twitter:title": data.title,
    "twitter:description": data.description
  };
};
var links3 = () => [{ rel: "stylesheet", href: prism_default }];
var createTableItems = (items, pathname) => items && items.map((item, key) => {
  var _a;
  let href = `${pathname}#${toSlug(item.title)}`;
  return ((_a = item.items) == null ? void 0 : _a.length) ? /* @__PURE__ */ React.createElement("li", {
    key,
    className: "text-sm sm:text-gray-600 hover:underline"
  }, /* @__PURE__ */ React.createElement("a", {
    href
  }, item.title), item.items && /* @__PURE__ */ React.createElement("ul", null, createTableItems(item.items, pathname))) : /* @__PURE__ */ React.createElement("li", {
    key,
    className: "text-sm sm:text-gray-600 hover:underline"
  }, /* @__PURE__ */ React.createElement("a", {
    href
  }, item.title));
});
var Post = () => {
  const data = (0, import_remix42.useLoaderData)();
  const { headings, title, content } = data;
  const { user } = useAuth();
  const location = (0, import_remix42.useLocation)();
  let TableOfContents = () => /* @__PURE__ */ React.createElement("ul", {
    className: "w-full sm:w-44 sm:flex-shrink-0 space-y-2 sm:sticky sm:top-18 sm:self-start min-w-0"
  }, createTableItems(headings, location.pathname));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminToolbar_default, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix42.Link, {
    to: `/admin/posts/new`
  }, "Create New Post"), /* @__PURE__ */ React.createElement(import_remix42.Link, {
    to: `/admin/posts/edit/${toSlug(title)}`
  }, "Edit Post"), /* @__PURE__ */ React.createElement(import_remix42.Link, {
    to: `/admin/posts/drafts`
  }, "Drafts")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-4 sm:flex-grow w-full min-w-0 max-w-[65ch] pb-24"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl"
  }, title), headings.length !== 0 && /* @__PURE__ */ React.createElement("div", {
    className: "sm:hidden rounded p-4 space-y-3 bg-gray-50"
  }, /* @__PURE__ */ React.createElement("h2", null, "Table of Contents"), /* @__PURE__ */ React.createElement(TableOfContents, null)), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4",
    dangerouslySetInnerHTML: { __html: content }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block "
  }, /* @__PURE__ */ React.createElement(TableOfContents, null)));
};
function CatchBoundary5() {
  const caught = (0, import_remix42.useCatch)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg sm:text-2xl"
  }, caught.status, "! ", caught.data));
}
var slug_default5 = Post;

// route-module:/Users/Adam/adamcollier/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => blog_default2
});
init_react();
var import_remix43 = __toModule(require_remix());
var Blog2 = () => {
  const { user } = useAuth();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AdminToolbar_default, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix43.Link, {
    to: `/admin/posts/new`
  }, "Create New Post"), /* @__PURE__ */ React.createElement(import_remix43.Link, {
    to: `/admin/posts/drafts`
  }, "Drafts")), /* @__PURE__ */ React.createElement("div", {
    className: " hidden mr-auto bg-gradient-to-t from-red-400 to-amber-100 rounded sm:rounded-xl sm:flex justify-center items-center w-full p-8 flex-col space-y-2 sm:space-y-4 noise text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl sm:text-5xl text-white"
  }, "Welcome to the blog"), /* @__PURE__ */ React.createElement("p", {
    className: "text-base sm:text-xl text-white max-w-md font-semibold"
  }, "I hope you enjoy reading what I write and learn something a long the way")));
};
var blog_default2 = Blog2;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sitemap[.]xml": {
    id: "routes/sitemap[.]xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/inspiration": {
    id: "routes/inspiration",
    parentId: "root",
    path: "inspiration",
    index: void 0,
    caseSensitive: void 0,
    module: inspiration_exports
  },
  "routes/inspiration/$slug": {
    id: "routes/inspiration/$slug",
    parentId: "routes/inspiration",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/inspiration/index": {
    id: "routes/inspiration/index",
    parentId: "routes/inspiration",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: inspiration_exports2
  },
  "routes/resources": {
    id: "routes/resources",
    parentId: "root",
    path: "resources",
    index: void 0,
    caseSensitive: void 0,
    module: resources_exports
  },
  "routes/resources/$slug": {
    id: "routes/resources/$slug",
    parentId: "routes/resources",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/resources/index": {
    id: "routes/resources/index",
    parentId: "routes/resources",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: resources_exports2
  },
  "routes/rss[.]xml": {
    id: "routes/rss[.]xml",
    parentId: "root",
    path: "rss.xml",
    index: void 0,
    caseSensitive: void 0,
    module: rss_xml_exports
  },
  "routes/snippets": {
    id: "routes/snippets",
    parentId: "root",
    path: "snippets",
    index: void 0,
    caseSensitive: void 0,
    module: snippets_exports
  },
  "routes/snippets/$slug": {
    id: "routes/snippets/$slug",
    parentId: "routes/snippets",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports3
  },
  "routes/snippets/index": {
    id: "routes/snippets/index",
    parentId: "routes/snippets",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: snippets_exports2
  },
  "routes/session": {
    id: "routes/session",
    parentId: "root",
    path: "session",
    index: void 0,
    caseSensitive: void 0,
    module: session_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/resources/collection/edit.$id": {
    id: "routes/admin/resources/collection/edit.$id",
    parentId: "routes/admin",
    path: "resources/collection/edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_id_exports
  },
  "routes/admin/snippets/collection/edit.$id": {
    id: "routes/admin/snippets/collection/edit.$id",
    parentId: "routes/admin",
    path: "snippets/collection/edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_id_exports2
  },
  "routes/admin/resources/collection/new": {
    id: "routes/admin/resources/collection/new",
    parentId: "routes/admin",
    path: "resources/collection/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/admin/snippets/collection/new": {
    id: "routes/admin/snippets/collection/new",
    parentId: "routes/admin",
    path: "snippets/collection/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/admin/resources/edit.$id": {
    id: "routes/admin/resources/edit.$id",
    parentId: "routes/admin",
    path: "resources/edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_id_exports3
  },
  "routes/admin/snippets/edit.$id": {
    id: "routes/admin/snippets/edit.$id",
    parentId: "routes/admin",
    path: "snippets/edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_id_exports4
  },
  "routes/admin/autofill/favicon": {
    id: "routes/admin/autofill/favicon",
    parentId: "routes/admin",
    path: "autofill/favicon",
    index: void 0,
    caseSensitive: void 0,
    module: favicon_exports
  },
  "routes/admin/posts/edit.$slug": {
    id: "routes/admin/posts/edit.$slug",
    parentId: "routes/admin",
    path: "posts/edit/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: edit_slug_exports
  },
  "routes/admin/autofill/meta": {
    id: "routes/admin/autofill/meta",
    parentId: "routes/admin",
    path: "autofill/meta",
    index: void 0,
    caseSensitive: void 0,
    module: meta_exports
  },
  "routes/admin/resources/new": {
    id: "routes/admin/resources/new",
    parentId: "routes/admin",
    path: "resources/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports3
  },
  "routes/admin/posts/drafts": {
    id: "routes/admin/posts/drafts",
    parentId: "routes/admin",
    path: "posts/drafts",
    index: void 0,
    caseSensitive: void 0,
    module: drafts_exports
  },
  "routes/admin/posts/drafts/$slug": {
    id: "routes/admin/posts/drafts/$slug",
    parentId: "routes/admin/posts/drafts",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports4
  },
  "routes/admin/posts/drafts/index": {
    id: "routes/admin/posts/drafts/index",
    parentId: "routes/admin/posts/drafts",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: drafts_exports2
  },
  "routes/admin/snippets/new": {
    id: "routes/admin/snippets/new",
    parentId: "routes/admin",
    path: "snippets/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports4
  },
  "routes/admin/music/new": {
    id: "routes/admin/music/new",
    parentId: "routes/admin",
    path: "music/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports5
  },
  "routes/admin/music/new/soundcloud": {
    id: "routes/admin/music/new/soundcloud",
    parentId: "routes/admin/music/new",
    path: "soundcloud",
    index: void 0,
    caseSensitive: void 0,
    module: soundcloud_exports
  },
  "routes/admin/music/new/spotify": {
    id: "routes/admin/music/new/spotify",
    parentId: "routes/admin/music/new",
    path: "spotify",
    index: void 0,
    caseSensitive: void 0,
    module: spotify_exports
  },
  "routes/admin/music/new/radio": {
    id: "routes/admin/music/new/radio",
    parentId: "routes/admin/music/new",
    path: "radio",
    index: void 0,
    caseSensitive: void 0,
    module: radio_exports
  },
  "routes/admin/posts/new": {
    id: "routes/admin/posts/new",
    parentId: "routes/admin",
    path: "posts/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports6
  },
  "routes/image": {
    id: "routes/image",
    parentId: "root",
    path: "image",
    index: void 0,
    caseSensitive: void 0,
    module: image_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/music": {
    id: "routes/music",
    parentId: "root",
    path: "music",
    index: void 0,
    caseSensitive: void 0,
    module: music_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports5
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
