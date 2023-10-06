import { Mark, MarkSpec, NodeSpec, Schema } from "prosemirror-model"

// :: Object
// [Specs](#model.NodeSpec) for the nodes defined in this schema.
export const nodes: NodeSpec = {
  // :: NodeSpec The top level document node.
  doc: {
    content: "block+"
  },

  // :: NodeSpec A plain paragraph textblock. Represented in the DOM
  // as a `<p>` element.
  paragraph: {
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", 0];
    }
  },
  // :: NodeSpec The text node.
  text: {
    group: "inline"
  },
  
  horizontal_rule: {
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "hr" }],
    toDOM() {
      return ["hr", 0];
    }
  },

  heading: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "heading" }, 0];
    }
  },
  action: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "action" }, 0];
    }
  },
  character: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "character" }, 0];
    }
  },
  parenthetical: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "parenthetical" }, 0];
    }
  },
  dialogue: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "dialogue" }, 0];
    }
  },
  shot: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "shot" }, 0];
    }
  },
  transition: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "transition" }, 0];
    }
  },
  general: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", { class: "general" }, 0];
    }
  },
  dualdialogue: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "div" }],
    toDOM() {
      return ["div", { class: "dual-dialogue" }, 0];
    }
  },
  dualdialogueleft: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "div" }],
    toDOM() {
      return ["div", { class: "dual-dialogue-left" }, 0];
    }
  },
  dualdialogueright: {
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "div" }],
    toDOM() {
      return ["div", { class: "dual-dialogue-right" }, 0];
    }
  }
};

// :: Object [Specs](#model.MarkSpec) for the marks in the schema.
export const marks: MarkSpec = {
  // :: MarkSpec An emphasis mark. Rendered as an `<em>` element.
  // Has parse rules that also match `<i>` and `font-style: italic`.
  em: {
    parseDOM: [{ tag: "i" }, { tag: "em" }, { style: "font-style=italic" }],
    toDOM() {
      return ["em", 0];
    }
  },

  // :: MarkSpec A strong mark. Rendered as `<strong>`, parse rules
  // also match `<b>` and `font-weight: bold`.
  strong: {
    parseDOM: [
      { tag: "strong" },
      // This works around a Google Docs misbehavior where
      // pasted content will be inexplicably wrapped in `<b>`
      // tags with a font-weight normal.
      {
        tag: "b",
        getAttrs: (node: HTMLElement) => node.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (value: string) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
      }
    ],
    toDOM() {
      return ["strong", 0];
    }
  },
  underline: {
    parseDOM: [
      { tag: "u" },
      { tag: "span" },
      { style: "text-decoration=underline" }
    ],
    toDOM() {
      return ["u", 0];
    }
  },
  strikethrough: {
    parseDOM: [
      { tag: "s" },
      { tag: "span" },
      { style: "text-decoration=line-through" }
    ],
    toDOM() {
      return ["s", 0];
    }
  },
  element: {
    parseDOM: [{ tag: "span" }],
    attrs: {"elem-id": {default: ""}, "elem-name": {default: ""}},
    toDOM: (node: Mark) => ["span", { class: "element", "elem-id": node.attrs["elem-id"], "elem-name": node.attrs["elem-name"], title: node.attrs["elem-name"] }, 0],
  },
  revision: {
    parseDOM: [{ tag: "span" }],
    attrs: {"revision-id": {default: ""}, "revision-name": {default: ""}},
    toDOM: (node: Mark) => ["span", { class: "revision", "revision-id": node.attrs[""], "revision-name": node.attrs["revision"], title: node.attrs["revision"] }, 0],
  }
}

export const scriptSchema: Schema<string, string> = new Schema({ nodes, marks })
