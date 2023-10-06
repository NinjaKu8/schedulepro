import Nav from 'react-bootstrap/Nav'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { ScriptSceneEditorMenuAction, ScriptSceneEditorMenuBold, ScriptSceneEditorMenuCharacter, ScriptSceneEditorMenuDialogue, ScriptSceneEditorMenuEdit, ScriptSceneEditorMenuHeading, ScriptSceneEditorMenuItalic, ScriptSceneEditorMenuParenthetical, ScriptSceneEditorMenuShot, ScriptSceneEditorMenuStrikethrough, ScriptSceneEditorMenuTag, ScriptSceneEditorMenuTransition, ScriptSceneEditorMenuUnderline } from './components'
import { NavSimple } from 'common'
import { ScriptSceneEditorMenuOmit } from './components/ScriptSceneEditorMenuOmit'

type Props = {
  handleSaveContent: () => void;
  scriptSceneId: string;
}

export function ScriptSceneEditorMenu({ scriptSceneId, handleSaveContent }: Props): JSX.Element {
  return (
    <NavSimple className='script-scene-menu shadow'>
      <ScriptSceneEditorMenuEdit handleSaveContent={handleSaveContent} scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuTag scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuOmit scriptSceneId={scriptSceneId} />
      <Nav.Item as={ButtonGroup}>
        <ScriptSceneEditorMenuBold scriptSceneId={scriptSceneId} />
        <ScriptSceneEditorMenuItalic scriptSceneId={scriptSceneId} />
        <ScriptSceneEditorMenuUnderline scriptSceneId={scriptSceneId} />
        <ScriptSceneEditorMenuStrikethrough scriptSceneId={scriptSceneId} />
      </Nav.Item>
      <ScriptSceneEditorMenuHeading scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuAction scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuCharacter scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuParenthetical scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuDialogue scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuShot scriptSceneId={scriptSceneId} />
      <ScriptSceneEditorMenuTransition scriptSceneId={scriptSceneId} />
    </NavSimple>
  )
}
