import { useCallback, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { EditorState, Transaction } from 'prosemirror-state'
import { ProseMirror } from "@nytimes/react-prosemirror"
import { useAppDispatch } from 'store/hooks'

import { ScriptSceneEditorMenu, ScriptSceneEditorTag, ScriptSceneNumber} from 'common'
import { useAppSelector } from 'store/hooks'
import { selectScriptSceneByIdContent, updateTemp_scriptScenes, selectScriptSceneByIdIsOmit, selectBreakdownSceneByScriptSceneId } from 'store/slices/local'
import { initialScriptState } from 'globals/initialScriptState'
import { createScriptState } from 'creators'

type Props = {
  disabled?: boolean;
  scriptSceneId: string;
  showMenu?: boolean;
}

function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

export function ScriptSceneEdit({ disabled, scriptSceneId, showMenu=true }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const sceneNumber = useAppSelector(state=>selectBreakdownSceneByScriptSceneId(state,scriptSceneId))
  const scr_currentSceneId = useAppSelector(state=>state.local.scr_currentSceneId)
  const currentScriptSceneContent = useAppSelector(state=>selectScriptSceneByIdContent(state,scriptSceneId))
  const isOmit = useAppSelector(state=>selectScriptSceneByIdIsOmit(state,scriptSceneId))
  const editorRef = useRef<HTMLDivElement>(null)

  const windowWidth = useWindowWidth()

  // ProseMirror
  const [mount, setMount] = useState<HTMLElement | null>(null)
	const [editorState, setEditorState] = useState(EditorState.create(initialScriptState))
  const editable = useCallback((): boolean => disabled||false,[disabled]) // ProseMirror editiable expects a function

  const handleTransaction = useCallback((tr: Transaction): void => { 
    setEditorState((state: EditorState) => state.apply(tr)) 
  },[setEditorState])

  const handleSaveContent = useCallback((): void => {
    if(!isOmit) dispatch(updateTemp_scriptScenes({_id: scr_currentSceneId, content: JSON.stringify(editorState.doc.content) }))
  },[dispatch, editorState, isOmit, scr_currentSceneId])

  useEffect(()=>{
    const state = EditorState.create(createScriptState(currentScriptSceneContent))
    setEditorState(state)
  },[currentScriptSceneContent, setEditorState, windowWidth])

  useEffect(() => {
    if (editorRef.current) {
      const revisions = editorRef.current.getElementsByClassName("revision")
      for (let i = 0; i < revisions.length; i++) {
        const revision = revisions[i] as HTMLSpanElement;
        const lineCnt = Math.round(revision.offsetHeight / +window.getComputedStyle(revision).getPropertyValue('line-height').replace(/[a-z]/ig, ''))
        const revisionIcons = revision.getElementsByClassName("revision-icon")
        if (revisionIcons[0]) {
          revisionIcons[0].innerHTML = Array(lineCnt).fill("*").join("\n");
        }
      }
    }
  }, [editorState])
 
  return (
    <ProseMirror
      mount={mount}
      state={editorState}
      dispatchTransaction={handleTransaction}
      editable={editable}
    >
      <>
        {showMenu && <ScriptSceneEditorMenu handleSaveContent={handleSaveContent} scriptSceneId={scriptSceneId} />}
        <div className='script-scene position-relative overflow-auto' ref={editorRef}>
          <ScriptSceneEditorTag /> {/* Overlay for tagging elements */}
          <ScriptSceneNumber value={sceneNumber ?? ''} side='left' />
          <ScriptSceneNumber value={sceneNumber ?? ''} side='right' />
          <div ref={setMount} /> {/* This is the mount point for the ProseMirror editor */}            
        </div>
      </>
    </ProseMirror>
  )
}