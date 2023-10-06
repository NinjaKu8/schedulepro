import { createSelector } from '@reduxjs/toolkit'

import { scriptOmitContent } from 'globals/scriptOmitContent'
import { RootState } from 'store/store'
import { IScriptScene } from 'creators/createScriptScene'

const selectScriptScenes = (state: RootState): IScriptScene[] =>
  state.local.temp_scriptScenes

export const selectIsScriptScenesEditId = createSelector(
  (state: RootState) => state.local.scriptScenesEditId,
  (state: RootState, scriptSceneId: string) => scriptSceneId,
  (scriptScenesEditId, scriptSceneId) => scriptScenesEditId === scriptSceneId
)

export const selectScriptSceneById = createSelector(
  selectScriptScenes,
  (state: RootState, scriptSceneId: string) => scriptSceneId,
  (scriptScenes, scriptSceneId) =>
    scriptScenes.find((s) => s._id === scriptSceneId)
)

export const selectScriptSceneByIdContent = createSelector(
  selectScriptSceneById,
  (scriptScene: IScriptScene | undefined) =>
    scriptScene?.isOmit
      ? scriptOmitContent
      : scriptScene?.content
      ? JSON.parse(scriptScene.content)
      : undefined
)
