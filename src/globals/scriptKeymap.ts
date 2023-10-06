import { baseKeymap, toggleMark, setBlockType, splitBlockAs } from 'prosemirror-commands'
import { redo, undo } from 'prosemirror-history'
import { Command, EditorState } from 'prosemirror-state'
import { ProseMirrorDispatch } from 'types/proseMirror'

import { scriptSchema } from './scriptSchema'

export const scriptKeymap: {[x: string]: Command} = {
  ...baseKeymap,
  'Enter': splitBlockAs(determineNextLine),
  'Tab': determineTab,
  'Mod-z': undo,
  'Mod-y': redo,
  'Mod-Shift-z': redo,
  'Mod-b': toggleMark(scriptSchema.marks.strong),
  'Mod-i': toggleMark(scriptSchema.marks.em),
  'Mod-u': toggleMark(scriptSchema.marks.underline),
  'Cmd-Shift-x': toggleMark(scriptSchema.marks.strikethrough),
  'Alt-Ctrl-e': toggleMark(scriptSchema.marks.element, { "elem-id": "1", "elem-name": "Umbrella" }),
  'Alt-Ctrl-h': setBlockType(scriptSchema.nodes.heading),
  'Alt-Ctrl-a': setBlockType(scriptSchema.nodes.action),
  'Alt-Ctrl-c': setBlockType(scriptSchema.nodes.character),
  'Alt-Ctrl-p': setBlockType(scriptSchema.nodes.parenthetical),
  'Alt-Ctrl-d': setBlockType(scriptSchema.nodes.dialogue),
  'Alt-Ctrl-s': setBlockType(scriptSchema.nodes.shot),
  'Alt-Ctrl-g': setBlockType(scriptSchema.nodes.general),
  'Alt-Ctrl-t': setBlockType(scriptSchema.nodes.transition),
}

// determine a new node type when the user hits tab
function determineTab(state: EditorState, dispatch: ProseMirrorDispatch): boolean {
  switch(state.selection.$from.parent.type.name) {
    case 'action': return setBlockType(scriptSchema.nodes.character)(state, dispatch)
    case 'character': return setBlockType(scriptSchema.nodes.transition)(state, dispatch)
    case 'dialogue': return setBlockType(scriptSchema.nodes.parenthetical)(state, dispatch)
    case 'shot': return setBlockType(scriptSchema.nodes.character)(state, dispatch)
    case 'general': return setBlockType(scriptSchema.nodes.character)(state, dispatch)
    default: return setBlockType(scriptSchema.nodes.character)(state, dispatch)
  }
}

// determine the node type for the next line when the user hits enter
function determineNextLine(node: any, atEnd: boolean): {type: any, attrs: any} {
  let type 
  switch(node.type.name) {
    case 'heading': type = scriptSchema.nodes.action; break;
    case 'action': type = scriptSchema.nodes.action; break;
    case 'character': type = scriptSchema.nodes.dialogue; break;
    case 'parenthetical': type = scriptSchema.nodes.dialogue; break;
    case 'dialogue': type = scriptSchema.nodes.action; break;
    case 'shot': type = scriptSchema.nodes.action; break;
    case 'transition': type = scriptSchema.nodes.heading; break;
    case 'general': type = scriptSchema.nodes.general; break;
    case 'dualdialogue': type = scriptSchema.nodes.action; break;
    case 'dualdialogueleft': type = scriptSchema.nodes.action; break;
    case 'dualdialogueright': type = scriptSchema.nodes.action; break;
    default: type = scriptSchema.nodes.action
  }
  return {type, attrs: { ...node.attrs, empty: true } }
}
