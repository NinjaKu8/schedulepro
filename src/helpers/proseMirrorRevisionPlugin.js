import { Plugin, TextSelection } from "prosemirror-state"
import { Decoration, DecorationSet } from "prosemirror-view"

export const proseMirrorRevisionPlugin = new Plugin({
  state: {
    init(_, { doc }) { return revisionDeco(doc) },
    apply(tr, old) { return tr.docChanged ? revisionDeco(tr.doc) : old }
  },
  props: {
    decorations(state) { return this.getState(state) },
    handleClick(view, _, event) {
      if(/revision-icon/.test(event.target.className)) {
        let {from, to} = event.target.problem
        view.dispatch(
          view.state.tr
            .setSelection(TextSelection.create(view.state.doc, from, to))
            .scrollIntoView()
        )
        return true
      }
    }
  }
})

function revisionDeco(doc) {
  let decos = []
  revision(doc).forEach(prob => {
    decos.push(Decoration.widget(prob.from, revisionIcon(prob)))
  })
  return DecorationSet.create(doc, decos)
}

function revisionIcon(prob) {
  let icon = document.createElement("div")
  icon.appendChild(document.createTextNode("*"))
  icon.className = "revision-icon"
  icon.title = prob.msg
  icon.problem = prob
  return icon
}

function revision(doc) {
  let result = []

  function record(msg, from, to) {
    result.push({ msg, from, to })
  }

  // For each node in the document
  doc.descendants((node, pos) => {
    if(node.isText && node?.marks[0]?.type?.name==='revision') {
      record(`Revision '${node.text}'`, pos, pos + node.text.length)
    }
  })

  return result
}