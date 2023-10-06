import { ReactElement } from 'react'

export interface TabData {
  id: string;
  name: string;
  content: ReactElement;
}

export interface ITabPane {
  flex?: number;
  id: string;
  parentId?: string;
  parentIsVertical: boolean;
  selectedTabId: string;
  tabs: TabData[];
}

export interface IPaneGroup {
  id: string
  isVertical: boolean
  parentId: string | null
  primaryAxis: (ITabPane | IPaneGroup)[] // array of windows that stack along the primary axis
}