import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { scriptOmitContent } from 'globals/scriptOmitContent'

import { RootState } from 'store/store'
import { IBreakdown } from 'creators/createBreakdown'
import { IScriptScene } from 'creators/createScriptScene'
import {
  DNDDraggingId,
  DNDItems,
  DNDItem,
  DNDSelectedIds,
  IProgressReportGroup,
  IProgressReport,
  ScriptView,
} from 'types/types'

interface LocalState {
  isSidebarWide: boolean
  isCardsSelect: boolean
  isViewCard: boolean
  isProgressReportEdit: boolean
  isScriptEdit: boolean
  scriptView: ScriptView
  scriptScenesEditId: string | null
  offcanvasComponent: string | null
  sch_dood_isShow_grid: boolean
  sch_dood_isShow_solo: boolean
  sch_dood_isShow_daysoff: boolean
  sch_dood_isShow_count: boolean
  sch_dood_isShow_color: boolean
  sch_dood_show_types: string[]
  sch_dood_view: string
  sch_sort: DNDItems
  sch_sort_selectedIds: DNDSelectedIds
  sch_sort_draggingId: DNDDraggingId
  sch_breakdown_selectedIds: DNDSelectedIds
  sch_breakdown_draggingId: DNDDraggingId
  sch_doodheader_selectedIds: DNDSelectedIds
  sch_doodheader_draggingId: DNDDraggingId
  sch_doodcalendar_selectedIds: DNDSelectedIds
  sch_doodcalendar_draggingId: DNDDraggingId
  sch_manageelements_selectedIds: DNDSelectedIds
  sch_manageelements_draggingId: DNDDraggingId
  sch_managecategories_selectedIds: DNDSelectedIds
  sch_managecategories_draggingId: DNDDraggingId
  sch_managecalendars_selectedIds: DNDSelectedIds
  sch_managecalendars_draggingId: DNDDraggingId
  sch_managepanes_selectedIds: DNDSelectedIds
  sch_managepanes_draggingId: DNDDraggingId
  sch_manageboards_selectedIds: DNDSelectedIds
  sch_manageboards_draggingId: DNDDraggingId
  sch_managedesignsdesigns_selectedIds: DNDSelectedIds
  sch_managedesignsdesigns_draggingId: DNDDraggingId
  sch_managedesignspalettes_selectedIds: DNDSelectedIds
  sch_managedesignspalettes_draggingId: DNDDraggingId
  sch_managedesignsstrips_selectedIds: DNDSelectedIds
  sch_managedesignsstrips_draggingId: DNDDraggingId
  sch_managedesignsstrips_isWide: boolean
  sch_dood_selectedElementIds: string[]
  scr_currentSceneId: string
  scr_createTagName: string | null
  scr_selectedElementId: string | null
  temp_boards: DNDItems
  temp_board_views: Record<DNDItem, string>
  temp_doodheader: DNDItems
  temp_doodcalendar: DNDItems
  temp_manageelements: DNDItems
  temp_managecategories: DNDItems
  temp_managecalendars: DNDItems
  temp_managepanes: DNDItems
  temp_manageboards: DNDItems
  temp_managedesignsdesigns: DNDItems
  temp_managedesignspalettes: DNDItems
  temp_managedesignsstrips: DNDItems
  temp_progressreportgroups: IProgressReportGroup[]
  temp_progressreports: IProgressReport[]
  temp_breakdowns: IBreakdown[]
  temp_scripts: DNDItems
  temp_scriptScenes: IScriptScene[]
}

const initialState: LocalState = {
  isSidebarWide: true,
  isCardsSelect: false,
  isViewCard: true,
  isProgressReportEdit: false,
  isScriptEdit: false,
  scriptView: 'scene',
  scriptScenesEditId: null,
  offcanvasComponent: null,
  sch_dood_isShow_grid: true,
  sch_dood_isShow_solo: false,
  sch_dood_isShow_daysoff: true,
  sch_dood_isShow_count: false,
  sch_dood_isShow_color: true,
  sch_dood_show_types: ['isWork'],
  sch_dood_view: '0',
  sch_sort: {
    categories: ['0', '1', '2', '3'],
    sortorder: ['4', '5', '6', '7'],
  },
  sch_sort_selectedIds: [],
  sch_sort_draggingId: null,
  sch_breakdown_selectedIds: ['0'],
  sch_breakdown_draggingId: null,
  sch_doodheader_selectedIds: [],
  sch_doodheader_draggingId: null,
  sch_doodcalendar_selectedIds: [],
  sch_doodcalendar_draggingId: null,
  sch_manageelements_selectedIds: ['1'],
  sch_manageelements_draggingId: null,
  sch_managecategories_selectedIds: ['1'],
  sch_managecategories_draggingId: null,
  sch_managecalendars_selectedIds: ['1'],
  sch_managecalendars_draggingId: null,
  sch_managepanes_selectedIds: ['1'],
  sch_managepanes_draggingId: null,
  sch_manageboards_selectedIds: ['1'],
  sch_manageboards_draggingId: null,
  sch_managedesignsdesigns_selectedIds: ['1'],
  sch_managedesignsdesigns_draggingId: null,
  sch_managedesignspalettes_selectedIds: ['1'],
  sch_managedesignspalettes_draggingId: null,
  sch_managedesignsstrips_selectedIds: ['1'],
  sch_managedesignsstrips_draggingId: null,
  sch_managedesignsstrips_isWide: false,
  sch_dood_selectedElementIds: [],
  scr_currentSceneId: '6251fbe0b67b0c000d429c38',
  scr_createTagName: null,
  scr_selectedElementId: null,
  temp_boards: {
    ABC123: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    ABC124: ['94', '95', '96', '97', '98', '99'],
    ABC125: ['65', '66', '67', '68', '69', '70', '71'],
  },
  temp_board_views: {
    ABC123: '0',
    ABC124: '0',
    ABC125: '0',
  },
  temp_doodheader: {
    doodheader: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
    ],
  },
  temp_doodcalendar: {
    doodcalendar: [
      '2023-02-26T00:00:00.000',
      '2023-02-27T00:00:00.000',
      '2023-02-28T00:00:00.000',
      '2023-03-01T00:00:00.000',
      '2023-03-02T00:00:00.000',
      '2023-03-03T00:00:00.000',
      '2023-03-04T00:00:00.000',
      '2023-03-05T00:00:00.000',
      '2023-03-06T00:00:00.000',
      '2023-03-07T00:00:00.000',
      '2023-03-08T00:00:00.000',
      '2023-03-09T00:00:00.000',
      '2023-03-10T00:00:00.000',
      '2023-03-11T00:00:00.000',
      '2023-03-12T00:00:00.000',
      '2023-03-13T00:00:00.000',
      '2023-03-14T00:00:00.000',
      '2023-03-15T00:00:00.000',
      '2023-03-16T00:00:00.000',
      '2023-03-17T00:00:00.000',
      '2023-03-18T00:00:00.000',
      '2023-03-19T00:00:00.000',
      '2023-03-20T00:00:00.000',
      '2023-03-21T00:00:00.000',
      '2023-03-22T00:00:00.000',
      '2023-03-23T00:00:00.000',
      '2023-03-24T00:00:00.000',
      '2023-03-25T00:00:00.000',
      '2023-03-26T00:00:00.000',
      '2023-03-27T00:00:00.000',
      '2023-03-28T00:00:00.000',
      '2023-03-29T00:00:00.000',
      '2023-03-30T00:00:00.000',
      '2023-03-31T00:00:00.000',
      '2023-04-01T00:00:00.000',
    ],
  },
  temp_manageelements: {
    manageelements: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
    ],
  },
  temp_managecategories: {
    managecategories: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
    ],
  },
  temp_managecalendars: {
    managecalendars: ['1', '2', '3', '4'],
  },
  temp_managepanes: {
    managepanes: ['1', '2', '3', '5'],
  },
  temp_manageboards: {
    manageboards: ['1', '2', '3', '4'],
  },
  temp_managedesignsdesigns: {
    managedesignsdesigns: ['1', '2', '3', '4'],
  },
  temp_managedesignspalettes: {
    managedesignspalettes: ['1', '2', '3', '4'],
  },
  temp_managedesignsstrips: {
    managedesignsstrips: ['1', '2', '3', '4'],
  },
  temp_progressreportgroups: [
    { _id: '5', projectId: 'ABC123', progressReportIds: ['1', '2', '3', '4'] },
    { _id: '6', projectId: 'ABC124', progressReportIds: ['1'] },
    { _id: '7', projectId: 'ABC125', progressReportIds: ['1', '4'] },
    { _id: '8', projectId: 'ABC126', progressReportIds: ['3', '4'] },
  ],
  temp_progressreports: [
    { _id: '1', boardId: 'ABC123', visualizationId: 'stripProgress' },
    { _id: '2', boardId: 'ABC124', visualizationId: 'stripDurationProgress' },
    { _id: '3', boardId: 'ABC125', visualizationId: 'waffleOverview' },
    { _id: '4', boardId: 'ABC126', visualizationId: 'circleDurationProgress' },
  ],
  temp_breakdowns: [
    {
      _id: '647cd7e2e416c649a3183a25',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c38',
      valueType: 'strip',
      scene: '1',
      description: null,
      bannerText: null,
      scriptPage: '1',
      pages: 3,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a1f',
      set: '647cd7e2e416c649a3183a23',
      dn: '647cd7e2e416c649a3183a21',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
  ],
  temp_scripts: {
    scenesOrdered: [
      '6251fbe0b67b0c000d429c38',
      '6251fbe0b67b0c000d429c3a',
      '6251fbe0b67b0c000d429c3e',
      '6251fbe0b67b0c000d429c40',
      '6251fbe0b67b0c000d429c46',
      '6251fbe0b67b0c000d429c48',
      '6251fbe0b67b0c000d429c4a',
      '6251fbe0b67b0c000d429c4c',
      '6251fbe0b67b0c000d429c4e',
      '6251fbe0b67b0c000d429c50',
      '6251fbe0b67b0c000d429c52',
      '6251fbe0b67b0c000d429c54',
      '6251fbe0b67b0c000d429c56',
      '6251fbe0b67b0c000d429c58',
      '6251fbe0b67b0c000d429c5a',
      '6251fbe0b67b0c000d429c5c',
      '6251fbe0b67b0c000d429c5e',
      '6251fbe0b67b0c000d429c60',
      '6251fbe0b67b0c000d429c62',
      '6251fbe0b67b0c000d429c64',
      '6251fbe0b67b0c000d429c66',
      '6251fbe0b67b0c000d429c68',
      '6251fbe0b67b0c000d429c6a',
      '6251fbe0b67b0c000d429c6c',
      '6251fbe0b67b0c000d429c6e',
      '6251fbe0b67b0c000d429c70',
      '6251fbe0b67b0c000d429c72',
      '6251fbe0b67b0c000d429c74',
      '6251fbe0b67b0c000d429c76',
      '6251fbe0b67b0c000d429c78',
      '6251fbe0b67b0c000d429c7a',
    ],
  },
  temp_scriptScenes: [
    {
      _id: '6251fbe0b67b0c000d429c38',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"NIGHT SEQUENCE"}]}]',
      modified: '2022-04-09T21:34:24.564+0000',
      __v: 0,
    },
  ],
}

const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    toggleIsSidebarWide: (state: LocalState) => {
      state.isSidebarWide = !state.isSidebarWide
    },
    setIsSidebarWide: (state: LocalState, action: PayloadAction<boolean>) => {
      state.isSidebarWide = action.payload
    },
    setIsCardsSelect: (state: LocalState, action: PayloadAction<boolean>) => {
      state.isCardsSelect = action.payload
    },
    toggleIsCardsSelect: (state: LocalState) => {
      state.isCardsSelect = !state.isCardsSelect
    },
    setIsViewCard: (state: LocalState, action: PayloadAction<boolean>) => {
      state.isViewCard = action.payload
    },
    toggleIsViewCard: (state: LocalState) => {
      state.isViewCard = !state.isViewCard
    },
    setIsProgressReportEdit: (
      state: LocalState,
      action: PayloadAction<boolean>
    ) => {
      state.isProgressReportEdit = action.payload
    },
    toggleIsProgressReportEdit: (state: LocalState) => {
      state.isProgressReportEdit = !state.isProgressReportEdit
    },
    setIsScriptEdit: (state: LocalState, action: PayloadAction<boolean>) => {
      state.isScriptEdit = action.payload
    },
    toggleIsScriptEdit: (state: LocalState) => {
      state.isScriptEdit = !state.isScriptEdit
    },
    setScriptView: (state: LocalState, action: PayloadAction<ScriptView>) => {
      state.scriptView = action.payload
    },
    setScriptScenesEditId: (
      state: LocalState,
      action: PayloadAction<string | null>
    ) => {
      state.scriptScenesEditId = action.payload
    },
    updateOffcanvasComponent: (
      state: LocalState,
      action: PayloadAction<string | null>
    ) => {
      state.offcanvasComponent =
        state.offcanvasComponent === action.payload ? null : action.payload
    },
    setSch_dood_show_types: (
      state: LocalState,
      action: PayloadAction<string[]>
    ) => {
      state.sch_dood_show_types = action.payload
    },
    setSch_dood_view: (state: LocalState, action: PayloadAction<string>) => {
      state.sch_dood_view = action.payload
    },
    toggleSch_dood_isShow_grid: (state: LocalState) => {
      state.sch_dood_isShow_grid = !state.sch_dood_isShow_grid
    },
    toggleSch_dood_isShow_solo: (state: LocalState) => {
      state.sch_dood_isShow_solo = !state.sch_dood_isShow_solo
    },
    toggleSch_dood_isShow_daysoff: (state: LocalState) => {
      state.sch_dood_isShow_daysoff = !state.sch_dood_isShow_daysoff
    },
    toggleSch_dood_isShow_count: (state: LocalState) => {
      state.sch_dood_isShow_count = !state.sch_dood_isShow_count
    },
    toggleSch_dood_isShow_color: (state: LocalState) => {
      state.sch_dood_isShow_color = !state.sch_dood_isShow_color
    },
    setSch_sort: (state: LocalState, action: PayloadAction<DNDItems>) => {
      state.sch_sort = action.payload
    },
    setSch_sort_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_sort_selectedIds = action.payload
    },
    setSch_sort_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_sort_draggingId = action.payload
    },
    setSch_breakdown_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_breakdown_selectedIds = action.payload
    },
    setSch_breakdown_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_breakdown_draggingId = action.payload
    },
    setSch_doodheader_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_doodheader_selectedIds = action.payload
    },
    setSch_doodheader_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_doodheader_draggingId = action.payload
    },
    setSch_doodcalendar_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_doodcalendar_selectedIds = action.payload
    },
    setSch_doodcalendar_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_doodcalendar_draggingId = action.payload
    },
    setSch_dood_selectedElementIds: (
      state: LocalState,
      action: PayloadAction<string[]>
    ) => {
      state.sch_dood_selectedElementIds = action.payload
    },
    setSch_manageelements_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_manageelements_selectedIds = action.payload
    },
    setSch_manageelements_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_manageelements_draggingId = action.payload
    },
    setSch_managecategories_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_managecategories_selectedIds = action.payload
    },
    setSch_managecategories_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_managecategories_draggingId = action.payload
    },
    setSch_managecalendars_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_managecalendars_selectedIds = action.payload
    },
    setSch_managecalendars_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_managecalendars_draggingId = action.payload
    },
    setSch_managepanes_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_managepanes_selectedIds = action.payload
    },
    setSch_managepanes_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_managepanes_draggingId = action.payload
    },
    setSch_manageboards_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_manageboards_selectedIds = action.payload
    },
    setSch_manageboards_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_manageboards_draggingId = action.payload
    },
    setSch_managedesignsdesigns_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_managedesignsdesigns_selectedIds = action.payload
    },
    setSch_managedesignsdesigns_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_managedesignsdesigns_draggingId = action.payload
    },
    setSch_managedesignspalettes_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_managedesignspalettes_selectedIds = action.payload
    },
    setSch_managedesignspalettes_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_managedesignspalettes_draggingId = action.payload
    },
    setSch_managedesignsstrips_selectedIds: (
      state: LocalState,
      action: PayloadAction<DNDSelectedIds>
    ) => {
      state.sch_managedesignsstrips_selectedIds = action.payload
    },
    setSch_managedesignsstrips_draggingId: (
      state: LocalState,
      action: PayloadAction<DNDDraggingId>
    ) => {
      state.sch_managedesignsstrips_draggingId = action.payload
    },
    setSch_managedesignsstrips_isWide: (
      state: LocalState,
      action: PayloadAction<boolean>
    ) => {
      state.sch_managedesignsstrips_isWide = action.payload
    },
    setScr_currentSceneId: (
      state: LocalState,
      action: PayloadAction<string>
    ) => {
      state.scr_currentSceneId = action.payload
    },
    setScr_createTagName: (
      state: LocalState,
      action: PayloadAction<string | null>
    ) => {
      state.scr_createTagName = action.payload
    },
    setScr_selectedElementId: (
      state: LocalState,
      action: PayloadAction<string | null>
    ) => {
      state.scr_selectedElementId = action.payload
    },
    setTemp_boards: (state: LocalState, action: PayloadAction<DNDItems>) => {
      state.temp_boards = action.payload
    },
    setTemp_board_views: (
      state: LocalState,
      action: PayloadAction<Record<DNDItem, string>>
    ) => {
      state.temp_board_views = action.payload
    },
    setTemp_doodheader: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_doodheader = action.payload
    },
    setTemp_doodcalendar: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_doodcalendar = action.payload
    },
    setTemp_manageelements: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_manageelements = action.payload
    },
    setTemp_managecategories: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_managecategories = action.payload
    },
    setTemp_managecalendars: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_managecalendars = action.payload
    },
    setTemp_managepanes: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_managepanes = action.payload
    },
    setTemp_manageboards: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_manageboards = action.payload
    },
    setTemp_managedesignsdesigns: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_managedesignsdesigns = action.payload
    },
    setTemp_managedesignspalettes: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_managedesignspalettes = action.payload
    },
    setTemp_managedesignsstrips: (
      state: LocalState,
      action: PayloadAction<DNDItems>
    ) => {
      state.temp_managedesignsstrips = action.payload
    },
    updateTemp_progressreports: (
      state: LocalState,
      action: PayloadAction<IProgressReport>
    ) => {
      state.temp_progressreports = state.temp_progressreports.map((p) =>
        p._id === action.payload._id ? { ...p, ...action.payload } : p
      )
    },
    setTemp_scripts: (state: LocalState, action: PayloadAction<DNDItems>) => {
      state.temp_scripts = action.payload
    },
    updateTemp_scriptScenes: (
      state: LocalState,
      action: PayloadAction<Partial<IScriptScene>>
    ) => {
      state.temp_scriptScenes = state.temp_scriptScenes.map((s) =>
        s._id === action.payload._id ? { ...s, ...action.payload } : s
      )
    },
  },
})

const selectScriptScenes = (state: RootState): IScriptScene[] =>
  state.local.temp_scriptScenes
const getId = (_: RootState, id: string): string => id

const selectBreakdowns = (state: RootState): IBreakdown[] =>
  state.local.temp_breakdowns

export const selectIsScriptScenesEditId = createSelector(
  (state: RootState) => state.local.scriptScenesEditId,
  getId,
  (scriptScenesEditId, scriptSceneId) => scriptScenesEditId === scriptSceneId
)

export const selectScriptSceneById = createSelector(
  selectScriptScenes,
  getId,
  (scriptScenes, scriptSceneId) =>
    scriptScenes.find((s) => s._id === scriptSceneId)
)
export const selectScriptSceneByIdIsOmit = createSelector(
  selectScriptSceneById,
  (scriptScene) => scriptScene?.isOmit ?? false
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

const selectBreakdownByCurrentScriptSceneId = createSelector(
  (state: RootState) => state.local.scr_currentSceneId,
  (state: RootState) => state.local.temp_breakdowns,
  (currentSceneId, breakdowns) =>
    breakdowns.find((s) => s.scriptSceneId === currentSceneId)
)
export const selectBreakdownSceneByCurrentScriptSceneId = createSelector(
  selectBreakdownByCurrentScriptSceneId,
  (breakdown) => (breakdown?.scene ? breakdown.scene : null)
)
export const selectBreakdownByScriptSceneId = createSelector(
  selectBreakdowns,
  getId,
  (breakdowns, scriptSceneId) =>
    breakdowns.find((b) => b.scriptSceneId === scriptSceneId)
)
export const selectBreakdownSceneByScriptSceneId = createSelector(
  selectBreakdownByScriptSceneId,
  (breakdown) => breakdown?.scene ?? ''
)
export const selectBreakdownPagesByScriptSceneId = createSelector(
  selectBreakdownByScriptSceneId,
  (breakdown) => breakdown?.pages ?? 0
)
export const selectBreakdownsWithSceneAndScriptSceneIds = createSelector(
  (state: RootState) => state.local.temp_breakdowns,
  (breakdowns) =>
    breakdowns.map((b) => ({ scene: b.scene, scriptSceneId: b.scriptSceneId }))
)

export const {
  toggleIsSidebarWide,
  setIsSidebarWide,
  setIsCardsSelect,
  toggleIsCardsSelect,
  setIsViewCard,
  setIsProgressReportEdit,
  toggleIsProgressReportEdit,
  setIsScriptEdit,
  toggleIsScriptEdit,
  setScriptView,
  setScriptScenesEditId,
  toggleIsViewCard,
  updateOffcanvasComponent,

  setSch_dood_show_types,
  setSch_dood_view,
  toggleSch_dood_isShow_grid,
  toggleSch_dood_isShow_solo,
  toggleSch_dood_isShow_daysoff,
  toggleSch_dood_isShow_count,
  toggleSch_dood_isShow_color,
  setSch_sort,
  setSch_sort_selectedIds,
  setSch_sort_draggingId,
  setSch_breakdown_selectedIds,
  setSch_breakdown_draggingId,
  setSch_doodheader_selectedIds,
  setSch_doodheader_draggingId,
  setSch_doodcalendar_selectedIds,
  setSch_doodcalendar_draggingId,
  setSch_dood_selectedElementIds,
  setSch_manageelements_selectedIds,
  setSch_manageelements_draggingId,
  setSch_managecategories_selectedIds,
  setSch_managecategories_draggingId,
  setSch_managecalendars_selectedIds,
  setSch_managecalendars_draggingId,
  setSch_managepanes_selectedIds,
  setSch_managepanes_draggingId,
  setSch_manageboards_selectedIds,
  setSch_manageboards_draggingId,
  setSch_managedesignsdesigns_selectedIds,
  setSch_managedesignsdesigns_draggingId,
  setSch_managedesignspalettes_selectedIds,
  setSch_managedesignspalettes_draggingId,
  setSch_managedesignsstrips_selectedIds,
  setSch_managedesignsstrips_draggingId,
  setSch_managedesignsstrips_isWide,
  setScr_currentSceneId,
  setScr_createTagName,
  setScr_selectedElementId,

  setTemp_boards,
  setTemp_board_views,
  setTemp_doodheader,
  setTemp_doodcalendar,
  setTemp_manageelements,
  setTemp_managecategories,
  setTemp_managecalendars,
  setTemp_managepanes,
  setTemp_manageboards,
  setTemp_managedesignsdesigns,
  setTemp_managedesignspalettes,
  setTemp_managedesignsstrips,
  updateTemp_progressreports,
  setTemp_scripts,
  updateTemp_scriptScenes,
} = localSlice.actions

export default localSlice.reducer
