
import { ICategory } from 'creators/createCategory'
import { IElement } from 'creators/createElement'
import { ScriptMoreContinued } from 'creators/createScript'
import { ICoordinates } from './types'
import { ICategoryGroup } from 'creators/createCategoryGroup';

export type ScriptSceneNumber = string | null | undefined;
export type ScriptPageNumber = string | null | undefined;

export interface IMark {
  type: string;
  [x:string]: any;
}

export interface IScriptSceneContentTextItem { 
  text: string; 
  marks: IMark[] | null; 
}

export interface IScriptSceneContentTextElement {
  pageCount: number; 
  x: number; 
  y: number; 
  w: number; 
  h: number; 
  str: string;
  pageDimensions?: ICoordinates;
  prevItemHasParagraphBreak?: boolean;
  prevItemIsSameColumn?: boolean; 
  prevItemOnSameLine?: boolean; 
}

export interface IScriptSceneItem {
  description?: string|null;
  sc?: ScriptSceneNumber;
  dn?: string|null|undefined;
  scriptElement: string|null; 
  scriptPage?: ScriptPageNumber;
  textArray?: IScriptSceneContentTextItem[]; 
  scriptSceneId?: string;
}

export interface IScriptSceneInfo extends Omit<IScriptSceneItem,'dn'>, IScriptSceneContentTextElement {
  isDualDialogueMode: boolean;
  omit: boolean;
  isRevsion?: boolean;
}

export interface IScriptImport {
  categories: ICategory[];
  categoryGroup: ICategoryGroup;
  content: IScriptSceneItem[];
  elements: IElement[];
  moreContinued?: ScriptMoreContinued | null;
  name: string | undefined;
  pageSize: string | null | undefined;
  revisionName?: string | null;
}

// TC Scene Content which eventually becomes ProseMiror state
export type ScriptSceneMark = {
  type: string; 
  attrs?: { [key: string]: any; } | null;
}

export interface IScriptSceneContentText {
  text: string;
  type: string;
  marks?: ScriptSceneMark[] | null;
}

export interface IScriptSceneContent {
  content: any[]; // TODO: fix 'any' type. Type can be either IScriptSceneContent | IScriptSceneContentText, but not both.
  type: string;
}