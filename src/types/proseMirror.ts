import { Transaction } from 'prosemirror-state'

export type ProseMirrorDispatch = ((tr: Transaction) => void) | undefined