import { useRef } from 'react'
import { useEditorEffect, useEditorEventCallback } from '@nytimes/react-prosemirror'
import { toggleMark } from 'prosemirror-commands'
import { EditorView } from 'prosemirror-view'
import Overlay from 'react-bootstrap/Overlay'

import { InputElementTag } from 'common'
import { proseMirrorSetSelectionToCurrentMark } from 'helpers'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setScr_selectedElementId, setScr_createTagName } from 'store/slices/local'
import { ScriptSceneEditorTagEdit } from './components'

const popperConfig = { // align the overlay a little down and to the right
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: () => [20, 10],
      },
    },
    {
      name: 'flip',
      options: {
        padding: 8,
      },
    },
  ],
}
const overlayStyle = { width: '14em', zIndex: 1 }
const overlayStyleCreate = { ...overlayStyle, height: '25em' }

export function ScriptSceneEditorTag(): JSX.Element {
  const elementId = useAppSelector(state=>state.local.scr_selectedElementId)
  const tagName = useAppSelector(state=>state.local.scr_createTagName)
  const dispatch = useAppDispatch()

  const ref = useRef<HTMLDivElement>(null)
  const show = !!elementId || !!tagName

  useEditorEffect((view: EditorView|null): void => {
    // set the position of a utility div to the position of the most recent click
    if (!view || !ref.current) return
    const viewClientRect = view.dom.getBoundingClientRect()
    const coords = view.coordsAtPos(view.state.selection.anchor) 
    const top = coords.top - viewClientRect.top
    const left = coords.left - viewClientRect.left
    ref.current.style.top = `${top}px`
    ref.current.style.left = `${left}px`

    // if user clicked on an element, set the selection to that element
    const marks = view?.state?.doc?.resolve(view?.state?.selection?.from)?.marks()
    if(marks?.some(mark=>mark?.type?.name==='element')) {
      proseMirrorSetSelectionToCurrentMark(view, 'element')
      const elementId = marks[0]?.attrs['elem-id']
      if(elementId) dispatch(setScr_selectedElementId(elementId))
    }
  })

  const handleCloseOverlay = useEditorEventCallback((view: EditorView|null): void => {
    if(!view) return
    // if creating a new tag, tag the element
    if(tagName?.length) {
      const pm_state = view?.state
      const pm_dispatch = view?.dispatch
      if(!pm_state || !pm_dispatch) return
      toggleMark(pm_state.schema.marks.element, { 'category-id': 'ABC123', 'elem-id': 'ABC123', 'elem-name': tagName })(pm_state, pm_dispatch)
    }
    // cleanup store
    dispatch(setScr_createTagName(null))
    dispatch(setScr_selectedElementId(null))
  })
 
  return (
    <>
      {/* This div is positioned where the user last clicked. It is used as the ref for the placement of the Overlay component. */}
      <div ref={ref} className='position-absolute'></div>

      <Overlay target={ref.current} show={show} onHide={handleCloseOverlay} popperConfig={popperConfig} placement='auto-start' flip rootClose rootCloseEvent='mousedown'> 
        {({ placement: _placement, arrowProps: _arrowProps, show: _show, popper: _popper, hasDoneInitialMeasure: _hasDoneInitialMeasure, ...props }) => {

          let style = {...props.style}
          if(elementId) style = {...style, ...overlayStyle}
          if(tagName) style = {...style, ...overlayStyleCreate}

          return (
            <div {...props} className='rounded shadow bg-white border border-primary' style={style}>

              {elementId && <ScriptSceneEditorTagEdit />}
              {tagName && <InputElementTag callback={handleCloseOverlay} />}

            </div>
          )
        }}
      </Overlay>
    </>
  )
}