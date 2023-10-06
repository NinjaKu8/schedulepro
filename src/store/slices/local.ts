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
    {
      _id: '647cd7e2e416c649a3183a2f',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c3a',
      valueType: 'strip',
      scene: '2',
      description: null,
      bannerText: null,
      scriptPage: '4',
      pages: 1.625,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a29',
      set: '647cd7e2e416c649a3183a2d',
      dn: '647cd7e2e416c649a3183a2b',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a39',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c3e',
      valueType: 'strip',
      scene: '4',
      description: null,
      bannerText: null,
      scriptPage: '7',
      pages: 3.875,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a33',
      set: '647cd7e2e416c649a3183a37',
      dn: '647cd7e2e416c649a3183a35',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a43',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c40',
      valueType: 'strip',
      scene: '5',
      description: null,
      bannerText: null,
      scriptPage: '11',
      pages: 1.375,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a3d',
      set: '647cd7e2e416c649a3183a41',
      dn: '647cd7e2e416c649a3183a3f',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a4d',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c46',
      valueType: 'strip',
      scene: '8',
      description: null,
      bannerText: null,
      scriptPage: '13',
      pages: 1.375,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a47',
      set: '647cd7e2e416c649a3183a4b',
      dn: '647cd7e2e416c649a3183a49',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a57',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c48',
      valueType: 'strip',
      scene: '9',
      description: null,
      bannerText: null,
      scriptPage: '14',
      pages: 2.375,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a51',
      set: '647cd7e2e416c649a3183a55',
      dn: '647cd7e2e416c649a3183a53',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a61',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c4a',
      valueType: 'strip',
      scene: '10',
      description: null,
      bannerText: null,
      scriptPage: '17',
      pages: 0.5,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a5b',
      set: '647cd7e2e416c649a3183a5f',
      dn: '647cd7e2e416c649a3183a5d',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a6b',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c4c',
      valueType: 'strip',
      scene: '11',
      description: null,
      bannerText: null,
      scriptPage: '17',
      pages: 0.875,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a65',
      set: '647cd7e2e416c649a3183a69',
      dn: '647cd7e2e416c649a3183a67',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a75',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c4e',
      valueType: 'strip',
      scene: '12',
      description: null,
      bannerText: null,
      scriptPage: '18',
      pages: 0.125,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a6f',
      set: '647cd7e2e416c649a3183a73',
      dn: '647cd7e2e416c649a3183a71',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a7f',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c50',
      valueType: 'strip',
      scene: '13',
      description: null,
      bannerText: null,
      scriptPage: '18',
      pages: 1.25,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a79',
      set: '647cd7e2e416c649a3183a7d',
      dn: '647cd7e2e416c649a3183a7b',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a89',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c52',
      valueType: 'strip',
      scene: '14',
      description: null,
      bannerText: null,
      scriptPage: '20',
      pages: 2.375,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a83',
      set: '647cd7e2e416c649a3183a87',
      dn: '647cd7e2e416c649a3183a85',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a93',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c54',
      valueType: 'strip',
      scene: '15',
      description: null,
      bannerText: null,
      scriptPage: '22',
      pages: 0.75,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a8d',
      set: '647cd7e2e416c649a3183a91',
      dn: '647cd7e2e416c649a3183a8f',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183a9d',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c56',
      valueType: 'strip',
      scene: '16',
      description: null,
      bannerText: null,
      scriptPage: '23',
      pages: 0.5,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183a97',
      set: '647cd7e2e416c649a3183a9b',
      dn: '647cd7e2e416c649a3183a99',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183aa7',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c58',
      valueType: 'strip',
      scene: '17',
      description: null,
      bannerText: null,
      scriptPage: '24',
      pages: 1.875,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183aa1',
      set: '647cd7e2e416c649a3183aa5',
      dn: '647cd7e2e416c649a3183aa3',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183ab1',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c5a',
      valueType: 'strip',
      scene: '18',
      description: null,
      bannerText: null,
      scriptPage: '25',
      pages: 6.875,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183aab',
      set: '647cd7e2e416c649a3183aaf',
      dn: '647cd7e2e416c649a3183aad',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183abb',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c5c',
      valueType: 'strip',
      scene: '19',
      description: null,
      bannerText: null,
      scriptPage: '33',
      pages: 6.25,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183ab5',
      set: '647cd7e2e416c649a3183ab9',
      dn: '647cd7e2e416c649a3183ab7',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183ac5',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c5e',
      valueType: 'strip',
      scene: '20',
      description: null,
      bannerText: null,
      scriptPage: '40',
      pages: 2.875,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183abf',
      set: '647cd7e2e416c649a3183ac3',
      dn: '647cd7e2e416c649a3183ac1',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183acf',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c60',
      valueType: 'strip',
      scene: '21',
      description: null,
      bannerText: null,
      scriptPage: '43',
      pages: 0.125,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183ac9',
      set: '647cd7e2e416c649a3183acd',
      dn: '647cd7e2e416c649a3183acb',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183ad9',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c62',
      valueType: 'strip',
      scene: '22',
      description: null,
      bannerText: null,
      scriptPage: '43',
      pages: 5.25,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183ad3',
      set: '647cd7e2e416c649a3183ad7',
      dn: '647cd7e2e416c649a3183ad5',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183ae3',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c64',
      valueType: 'strip',
      scene: '24',
      description: null,
      bannerText: null,
      scriptPage: '49',
      pages: 3.25,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183add',
      set: '647cd7e2e416c649a3183ae1',
      dn: '647cd7e2e416c649a3183adf',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183aed',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c66',
      valueType: 'strip',
      scene: '25',
      description: null,
      bannerText: null,
      scriptPage: '53',
      pages: 2.125,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183ae7',
      set: '647cd7e2e416c649a3183aeb',
      dn: '647cd7e2e416c649a3183ae9',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183af7',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c68',
      valueType: 'strip',
      scene: '26',
      description: null,
      bannerText: null,
      scriptPage: '56',
      pages: 0.375,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183af1',
      set: '647cd7e2e416c649a3183af5',
      dn: '647cd7e2e416c649a3183af3',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b01',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c6a',
      valueType: 'strip',
      scene: '27',
      description: null,
      bannerText: null,
      scriptPage: '56',
      pages: 0.875,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183afb',
      set: '647cd7e2e416c649a3183aff',
      dn: '647cd7e2e416c649a3183afd',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b0b',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c6c',
      valueType: 'strip',
      scene: '28',
      description: null,
      bannerText: null,
      scriptPage: '57',
      pages: 3,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b05',
      set: '647cd7e2e416c649a3183b09',
      dn: '647cd7e2e416c649a3183b07',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b15',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c6e',
      valueType: 'strip',
      scene: '29',
      description: null,
      bannerText: null,
      scriptPage: '60',
      pages: 1.25,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b0f',
      set: '647cd7e2e416c649a3183b13',
      dn: '647cd7e2e416c649a3183b11',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b1f',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c70',
      valueType: 'strip',
      scene: '30',
      description: null,
      bannerText: null,
      scriptPage: '62',
      pages: 2.5,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b19',
      set: '647cd7e2e416c649a3183b1d',
      dn: '647cd7e2e416c649a3183b1b',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b29',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c72',
      valueType: 'strip',
      scene: '31',
      description: null,
      bannerText: null,
      scriptPage: '64',
      pages: 0.125,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b23',
      set: '647cd7e2e416c649a3183b27',
      dn: '647cd7e2e416c649a3183b25',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b33',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c74',
      valueType: 'strip',
      scene: '32',
      description: null,
      bannerText: null,
      scriptPage: '64',
      pages: 2.25,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b2d',
      set: '647cd7e2e416c649a3183b31',
      dn: '647cd7e2e416c649a3183b2f',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b3d',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c76',
      valueType: 'strip',
      scene: '33',
      description: null,
      bannerText: null,
      scriptPage: '67',
      pages: 0.125,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b37',
      set: '647cd7e2e416c649a3183b3b',
      dn: '647cd7e2e416c649a3183b39',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b47',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c78',
      valueType: 'strip',
      scene: '34',
      description: null,
      bannerText: null,
      scriptPage: '67',
      pages: 0.625,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b41',
      set: '647cd7e2e416c649a3183b45',
      dn: '647cd7e2e416c649a3183b43',
      scriptDay: null,
      unit: null,
      location: null,
      sequence: null,
      groupCode: null,
      modified: '2023-06-04T18:16:00.164+0000',
      __v: 0,
    },
    {
      _id: '647cd7e2e416c649a3183b51',
      isComplete: false,
      completedTime: null,
      status: null,
      scriptSceneId: '6251fbe0b67b0c000d429c7a',
      valueType: 'strip',
      scene: '35',
      description: null,
      bannerText: null,
      scriptPage: '68',
      pages: 0.5,
      duration: null,
      comments: null,
      elementIds: [],
      ie: '647cd7e2e416c649a3183b4b',
      set: '647cd7e2e416c649a3183b4f',
      dn: '647cd7e2e416c649a3183b4d',
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
        '[{"type":"heading","content":[{"type":"text","text":"NIGHT SEQUENCE"}]},{"type":"action","content":[{"type":"text","text":"Series of shots of various streets and buildings in the town of Bedford Falls, somewhere in "},{"type":"text","text":"New York State","marks":[{"type":"revision","revision":""}]},{"type":"text","text":". The streets are deserted, and snow is falling. "},{"type":"text","text":"It is Christmas Eve. Over the above scenes","marks":[{"type":"revision","revision":""}]},{"type":"text","text":" we hear voices praying:"}]},{"type":"character","content":[{"type":"text","text":"GOWER\'S VOICE","marks":[{"type":"revision","revision":""}]}]},{"type":"dialogue","content":[{"type":"text","text":"I owe everything to George Bailey. Help him, dear Father."}]},{"type":"character","content":[{"type":"text","text":"MARTINI\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Joseph, Jesus and Mary. Help my friend Mr. Bailey."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Help my son George tonight."}]},{"type":"character","content":[{"type":"text","text":"BERT\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"He never thinks about himself, God; that\'s why he\'s in trouble."}]},{"type":"character","content":[{"type":"text","text":"ERNIE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"George is a good guy. Give him a break, God."}]},{"type":"character","content":[{"type":"text","text":"MARY\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"I love him, dear Lord. Watch over him tonight."}]},{"type":"character","content":[{"type":"text","text":"JANIE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Please, God. Something\'s the matter with Daddy."}]},{"type":"character","content":[{"type":"text","text":"ZUZU\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Please bring Daddy back."}]},{"type":"action","content":[{"type":"text","text":"CAMERA PULLS UP from the Bailey home and travels up through the sky until it is above the falling snow and moving slowly toward a firmament full of stars. As the camera stops we hear the following heavenly voices talking, and as each voice is heard, one of the stars twinkles brightly:"}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Joseph, trouble?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Looks like we\'ll have to send someone down – a lot of people are asking for help for a man named George Bailey."}]},{"type":"character","content":[{"type":"text","text":"NULL"}]},{"type":"dialogue","content":[{"type":"text","text":"Looks like we\'ll have to send someone down – a lot of people are asking for help for a man named George Bailey. "}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"George Bailey. Yes, tonight\'s his crucial night. You\'re right, we\'ll have to send someone down immediately. Whose turn is it?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s why I came to see you, sir. It\'s that clock-maker\'s turn again."}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh – Clarence. Hasn\'t got his wings yet, has he? We\'ve passed him up right along."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Because, you know, sir, he\'s got the I.Q. "},{"type":"text","text":"of"},{"type":"text","text":" a rabbit."}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, but he\'s got the faith of a child – simple. Joseph, send for Clarence."}]},{"type":"action","content":[{"type":"text","text":"A small star flies in from left of screen and stops. It twinkles as Clarence speaks:"}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"You sent for me, sir?"}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, Clarence. A man down on earth needs our help."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Splendid! Is he sick?"}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"No, worse. He\'s discouraged. At exactly ten-forty-five PM tonight, Earth time, that man will be thinking seriously of throwing away God\'s greatest gift."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, dear, dear! His life! Then I\'ve only got an hour to dress. What are they wearing now?"}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"You will spend that hour getting acquainted with George Bailey."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Sir... If I should accomplish this mission – I mean – might I perhaps win my wings?  I\'ve been waiting for over two hundred years now, sir – and people are beginning to talk."}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'s that book you\'ve got there?"}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"The Adventures of Tom Sawyer."}]},{"type":"character","content":[{"type":"text","text":"FRANKLIN\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Clarence, you do a good job with George Bailey, and you\'ll get your wings."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, thank you, sir. Thank you."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Poor George... Sit down."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Sit down? What are..."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"If you\'re going to help a man, you want to know something about him, don\'t you?"}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, naturally. Of course."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, keep your eyes open. See the town?"}]},{"type":"action","content":[{"type":"text","text":"The stars fade out from the screen, and a light, indistinguishable blur is seen."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Where? I don\'t see a thing."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, I forgot. You haven\'t got your wings yet. Now look, I\'ll help you out.  Concentrate. Begin to see something?"}]},{"type":"character","content":[{"type":"text","text":"NULL"}]},{"type":"dialogue","content":[{"type":"text","text":"You haven\'t got your wings yet. "}]},{"type":"action","content":[{"type":"text","text":"The blur on the screen slowly begins to take form. We see a group of young boys on top of a snow-covered hill."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Why, yes. This is amazing."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"If you ever get your wings, you\'ll see all by yourself."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, wonderful!"}]}]',
      modified: '2022-04-09T21:34:24.564+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c3a',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. FROZEN RIVER AND HILL – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Group of boys. They are preparing to slide down the hill on large shovels. One of them makes the slide and shoots out onto the ice of a frozen river at the bottom of the hill."}]},{"type":"character","content":[{"type":"text","text":"BOY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(as he slides)"}]},{"type":"dialogue","content":[{"type":"text","text":"Yippee!!"}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, who\'s that?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s your problem, George Bailey."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"A boy?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s him when he was twelve, back in 1919. Something happens here you\'ll have to remember later on."}]},{"type":"action","content":[{"type":"text","text":"Series of shots as four or five boys make the slide down the hill and out onto the ice. As each boy comes down the others applaud."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George Bailey at bottom of slide."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(through megaphone)"}]},{"type":"dialogue","content":[{"type":"text","text":"And here comes the scare-baby, my kid brother, Harry Bailey."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – HARRY"}]},{"type":"action","content":[{"type":"text","text":"On top of hill, preparing to make his slide."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m not scared."}]},{"type":"character","content":[{"type":"text","text":"BOYS"}]},{"type":"parenthetical","content":[{"type":"text","text":"(ad lib)"}]},{"type":"dialogue","content":[{"type":"text","text":"Come on, Harry! "},{"type":"text","text":"Attaboy"},{"type":"text","text":", Harry!"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"Harry makes his slide very fast. He passes the marks made by the other boys, and his shovel takes him onto the thin ice at the bend of the river. The ice breaks, and Harry disappears into the water."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m coming, Harry."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"George jumps into the water and grabs Harry. As he starts to pull him out he yells:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Make a chain, gang! A chain!"}]},{"type":"shot","content":[{"type":"text","text":"WIDER ANGLE"}]},{"type":"action","content":[{"type":"text","text":"The other boys lie flat on the ice, forming a human chain. When George reaches the edge with Harry in his arms, they pull them both to safety."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"George saved his brother\'s life that day.  But he caught a bad cold which infected his left ear. Cost him his hearing in that ear. It was weeks before he could return to his after-school job at old man Gower\'s drugstore."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"George saved his brother\'s life that day. "}]},{"type":"transition","content":[{"type":"text","text":"DISSOLVE"}]}]',
      modified: '2022-04-09T21:34:24.570+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c3e',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INTERIOR DRUGSTORE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"George comes in and crosses to an old-fashioned cigar lighter on the counter. He shuts his eyes and makes a wish:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Wish I had a million dollars."}]},{"type":"action","content":[{"type":"text","text":"He clicks the lighter and the flame springs up."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hot dog!"}]},{"type":"shot","content":[{"type":"text","text":"WIDER ANGLE"}]},{"type":"action","content":[{"type":"text","text":"George crosses over to the soda fountain, at which Mary Hatch, a small girl, is seated, watching him. George goes on to get his apron from behind the fountain."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(calling toward back room)"}]},{"type":"dialogue","content":[{"type":"text","text":"It\'s me, Mr. Gower. George Bailey."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Mr. Gower, the druggist, peering from a window in back room. We see him take a drink from a bottle."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"You\'re late."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"George behind soda fountain. He is putting on his apron."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, sir."}]},{"type":"shot","content":[{"type":"text","text":"WIDER ANGLE"}]},{"type":"action","content":[{"type":"text","text":"Violet "},{"type":"text","text":"Bick"},{"type":"text","text":" enters the drugstore and sits on one of the stools at the fountain. She is the same height as Mary and the same age, but she is infinitely older in her approach to people."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(with warm friendliness)"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, George."}]},{"type":"parenthetical","content":[{"type":"text","text":"(then, flatly, as she sees Mary)"}]},{"type":"dialogue","content":[{"type":"text","text":"\'Lo, Mary."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(primly)"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Violet."}]},{"type":"action","content":[{"type":"text","text":"George regards the two of them with manly disgust. They are two kids to him, and a nuisance. He starts over for the candy counter."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Two cents worth of shoelaces?"}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"She was here first."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m still thinking."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Violet)"}]},{"type":"dialogue","content":[{"type":"text","text":"Shoelaces?"}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Please, "},{"type":"text","text":"Georgie."}]},{"type":"action","content":[{"type":"text","text":"George goes over to the candy counter."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Mary)"}]},{"type":"dialogue","content":[{"type":"text","text":"I like him."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"You like every boy."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(happily)"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'s wrong with that?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Here you are."}]},{"type":"action","content":[{"type":"text","text":"George gives Violet a paper sack containing licorice shoelaces.  Violet gives him the money."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(the vamp)"}]},{"type":"dialogue","content":[{"type":"text","text":"Help me down?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(disgusted)"}]},{"type":"dialogue","content":[{"type":"text","text":"Help you down!"}]},{"type":"action","content":[{"type":"text","text":"Violet jumps down off her stool and exits. Mary, watching, sticks out her tongue as she passes."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND MARY AT FOUNTAIN"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Made up your mind yet?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'ll take chocolate."}]},{"type":"action","content":[{"type":"text","text":"George puts some chocolate ice cream in a dish."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"With coconuts?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"I don\'t like coconuts."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"You don\'t like coconuts!  Say, brainless, don\'t you know where coconuts come from?  "},{"type":"text","text":"Lookit"},{"type":"text","text":" here – from Tahiti – Fiji Islands, the Coral Sea!"}]},{"type":"action","content":[{"type":"text","text":"He pulls a magazine from his pocket and shows it to her."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"A new magazine! I never saw it before."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Of course you never. Only us explorers can get it. I\'ve been nominated for membership in the National Geographic Society."}]},{"type":"action","content":[{"type":"text","text":"He leans down to finish scooping out the ice cream, his deaf ear toward her.  She leans over, speaking softly."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"shot","content":[{"type":"text","text":"Mary, whispering."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Is this the ear you can\'t hear on? George Bailey, I\'ll love you till the day I die."}]},{"type":"action","content":[{"type":"text","text":"She draws back quickly and looks down, terrified at what she has said."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND MARY"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m going out exploring some day, you watch. And I\'m going to have a couple of harems, and maybe three or four wives.  Wait and see."}]},{"type":"action","content":[{"type":"text","text":"He turns back to the cash register, whistling."}]},{"type":"shot","content":[{"type":"text","text":"ANOTHER ANGLE"}]},{"type":"action","content":[{"type":"text","text":"Taking in entrance to prescription room at end of fountain. Gower comes to the entrance. He is bleary-eyed, unshaven, chewing an old unlit cigar. His manner is gruff and mean. It is evident he has been drinking."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"George! George!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, sir."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"You\'re not paid to be a canary."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"No, sir."}]},{"type":"action","content":[{"type":"text","text":"He turns back to the cash register when he notices an open telegram on the shelf. He is about to toss it aside when he starts to read it."}]},{"type":"shot","content":[{"type":"text","text":"INSERT: THE TELEGRAM"}]},{"type":"action","content":[{"type":"text","text":"It reads: \\"We regret to inform you that your son, Robert, died very suddenly this morning of influenza stop. Everything possible was done for his comfort stop. We await instructions from you.  EDWARD "},{"type":"text","text":"MELLINGTON"},{"type":"text","text":" Pres. "},{"type":"text","text":"HAMMERTON"},{"type":"text","text":" COLLEGE.\\""}]},{"type":"shot","content":[{"type":"text","text":"BACK TO SHOT"}]},{"type":"action","content":[{"type":"text","text":"George puts the telegram down. A goodness of heart expresses itself in a desire to do something for Gower. He gives the ice cream to Mary without comment and sidles back toward Gower."}]}]',
      modified: '2022-04-09T21:34:24.584+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c40',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. PRESCRIPTION ROOM OF DRUGSTORE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Gower, drunk, is intent on putting some capsules into a box."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Gower, do you want something... Anything?"}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"No."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Anything I can do back here?"}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"No."}]},{"type":"action","content":[{"type":"text","text":"George looks curiously at Gower, realizing that he is quite drunk.  Gower fumbles and drops some of the capsules to the floor."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Capsules spilling on floor at their feet."}]},{"type":"shot","content":[{"type":"text","text":"BACK TO SHOT"}]},{"type":"shot","content":[{"type":"text","text":"George and Gower."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'ll get them, sir."}]},{"type":"action","content":[{"type":"text","text":"He picks up the capsules and puts them in the box. Gower waves George aside, takes his old wet cigar, shoves it in his mouth and sits in an old Morris chair in the background. George turns a bottle around from which Gower has taken the powder for the capsules. Its label reads \\"POISON.\\" George stands still, horrified."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Take these capsules over to Mrs. Blaine\'s.  She\'s waiting for them."}]},{"type":"action","content":[{"type":"text","text":"George picks up the capsule box, not knowing what to do or say.  His eyes go, harassed, to the bottle labeled poison. "}]},{"type":"action","content":[{"type":"text","text":"George\'s fingers fumble."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, sir. They have the diphtheria there, haven\'t they, sir?"}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Ummmm..."}]},{"type":"action","content":[{"type":"text","text":"Gower stares moodily ahead, sucking his cigar. George turns to him, the box in his hand."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Is it a charge, sir?"}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes – charge."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Gower, I think..."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Aw, get going!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, sir."}]}]',
      modified: '2022-04-09T21:34:24.591+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c46',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. OUTER OFFICE BLDG. AND LOAN – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"FULL SHOT"}]},{"type":"action","content":[{"type":"text","text":"The offices are ancient and a bit on the rickety side. There is a counter with a grill, something like a bank. Before a door marked:"}]},{"type":"action","content":[{"type":"text","text":"\\"PETER BAILEY, PRIVATE\\", George\'s Uncle Billy stands, obviously trying to hear what is going on inside. He is a very good-humored man of about fifty, in shirt-sleeves. With him at the door, also listening, are Cousin "},{"type":"text","text":"Tilly"},{"type":"text","text":" Bailey, a waspish-looking woman, who is the telephone operator, and Cousin "},{"type":"text","text":"Eustace"},{"type":"text","text":" Bailey, the clerk.  The office vibrates with an aura of crisis as George enters and proceeds directly toward his father\'s office."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Uncle Billy listening at the door. As George is about to enter his father\'s office, uncle Billy grabs him by the arm."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Avast, there, Captain Cook! Where you "},{"type":"text","text":"headin\'?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Got to see Pop, Uncle Billy."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Some other time, George."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"It\'s important."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"There\'s a squall in there that\'s "},{"type":"text","text":"shapin\'"},{"type":"text","text":" up into a storm."}]},{"type":"action","content":[{"type":"text","text":"During the foregoing, Cousin "},{"type":"text","text":"Tilly"},{"type":"text","text":" has answered the telephone, and now she calls out:"}]},{"type":"character","content":[{"type":"text","text":"COUSIN "},{"type":"text","text":"TILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Uncle Billy... telephone."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Who is it?"}]},{"type":"character","content":[{"type":"text","text":"COUSIN "},{"type":"text","text":"TILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Bank examiner."}]},{"type":"shot","content":[{"type":"text","text":"INSERT"}]},{"type":"action","content":[{"type":"text","text":"CLOSEUP – UNCLE BILLY\'S LEFT HAND There are pieces of string tied around two of the fingers, obviously to remind him of things he has to do."}]},{"type":"shot","content":[{"type":"text","text":"BACK TO SHOT"}]},{"type":"action","content":[{"type":"text","text":"Uncle Billy looking at his hand."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Bank examiner! I should have called him yesterday. Switch it inside."}]},{"type":"action","content":[{"type":"text","text":"He enters a door marked: \\"WILLIAM BAILEY, PRIVATE\\". George stands irresolute a moment, aware of crisis in the affairs of the Bailey Building and Loan Association, but aware more keenly of his personal crisis. He opens the door of his father\'s office and enters."}]}]',
      modified: '2022-04-09T21:34:24.599+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c48',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. BAILEY\'S PRIVATE OFFICE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"George\'s father is seated behind his desk, nervously drawing swirls on a pad. He looks tired and worried. He is a gentle man in his forties, an idealist, stubborn only for other people\'s rights.  Nearby, in a throne-like wheelchair, behind which stands the goon who furnishes the motive power, sits Henry F. Potter, his squarish derby hat on his head. The following dialogue is fast and heated, as though the argument had been in process for some time."}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m not crying, Mr. Potter."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, you\'re begging, and that\'s a whole lot worse."}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"All I\'m asking is thirty days more..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(interrupting)"}]},{"type":"dialogue","content":[{"type":"text","text":"Pop!"}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Just a minute, son."}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Potter)"}]},{"type":"dialogue","content":[{"type":"text","text":"Just thirty short days. I\'ll dig up that five thousand somehow."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to his goon)"}]},{"type":"dialogue","content":[{"type":"text","text":"Shove me up..."}]},{"type":"action","content":[{"type":"text","text":"Goon pushes his wheelchair closer to the desk."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Pop!"}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Have you put any real pressure on those people of yours to pay those mortgages?"}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Times are bad, Mr. Potter. A lot of these people are out of work."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Then foreclose!"}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"I can\'t do that. These families have children."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT – POTTER AND BAILEY"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Pop!"}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"They\'re not my children."}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"But they\'re somebody\'s children."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Are you running a business or a charity ward?"}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, all right..."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"parenthetical","content":[{"type":"text","text":"(interrupting)"}]},{"type":"dialogue","content":[{"type":"text","text":"Not with my money!"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – POTTER AND BAILEY"}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Potter, what makes you such a "},{"type":"text","text":"hardskulled"},{"type":"text","text":" character? You have no family – no children. You can\'t begin to spend all the money you\'ve got."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"You can\'t begin to spend all the money you\'ve got. "}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"So I suppose I should give it to miserable failures like you and that idiot brother of yours to spend for me."}]},{"type":"action","content":[{"type":"text","text":"George cannot listen any longer to such libel about his father. He comes around in front of the desk."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"He\'s not a failure! You can\'t say that about my father!"}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"George, "},{"type":"text","text":"George"},{"type":"text","text":"..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"You\'re not! You\'re the biggest man in town!"}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Run along."}]},{"type":"action","content":[{"type":"text","text":"He pushes George toward the door."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Bigger\'n him!"}]},{"type":"action","content":[{"type":"text","text":"As George passes Potter\'s wheelchair he pushes the old man\'s shoulder. The goon puts out a restraining hand."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Bigger\'n everybody."}]},{"type":"action","content":[{"type":"text","text":"George proceeds toward the door, with his father\'s hand on his shoulder. As they go:"}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Gives you an idea of the "},{"type":"text","text":"Baileys."}]}]',
      modified: '2022-04-09T21:34:24.602+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c4a',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. OUTER OFFICE BLDG. AND LOAN – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George and his father at the door."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Don\'t let him say that about you, Pop."}]},{"type":"character","content":[{"type":"text","text":"BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"All right, son, thanks. I\'ll talk to you tonight."}]},{"type":"action","content":[{"type":"text","text":"Bailey closes the door on George and turns back to Potter. "}]},{"type":"action","content":[{"type":"text","text":"George stands outside the door with the capsules in his hand."}]},{"type":"transition","content":[{"type":"text","text":"WIPE TO:"}]},{"type":"shot","content":[{"type":"text","text":"BACK TO DRUGSTORE"}]}]',
      modified: '2022-04-09T21:34:24.606+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c4c',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. BACK ROOM – GOWER\'S DRUGSTORE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Gower talking on the telephone. George stands in the doorway."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"parenthetical","content":[{"type":"text","text":"(drunkenly)"}]},{"type":"dialogue","content":[{"type":"text","text":"Why, that medicine should have been there an hour ago. It\'ll be over in five minutes, Mrs. Blaine."}]},{"type":"action","content":[{"type":"text","text":"He hangs up the phone and turns to George."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Where\'s Mrs. Blaine\'s box of capsules?"}]},{"type":"action","content":[{"type":"text","text":"He grabs George by the shirt and drags him into the back room."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Capsules..."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"parenthetical","content":[{"type":"text","text":"(shaking him)"}]},{"type":"dialogue","content":[{"type":"text","text":"Did you hear what I said?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(frightened)"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, sir, I..."}]},{"type":"action","content":[{"type":"text","text":"Gower starts hitting George about the head with his open hands.  George tries to protect himself as best he can."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"What kind of tricks are you playing, anyway? Why didn\'t you deliver them right away? Don\'t you know that boy\'s very sick?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(in tears)"}]},{"type":"dialogue","content":[{"type":"text","text":"You\'re hurting my sore ear."}]}]',
      modified: '2022-04-09T21:34:24.608+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c4e',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. FRONT ROOM DRUGSTORE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Mary is still seated at the soda fountain. Each time she hears George being slapped, she winces."}]}]',
      modified: '2022-04-09T21:34:24.611+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c50',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. BACK ROOM DRUGSTORE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND GOWER"}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"You lazy loafer!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(sobbing)"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Gower, you don\'t know what you\'re doing. You put something wrong in those capsules. I know you\'re unhappy. You got that telegram, and you\'re upset. You put something bad in those capsules. It wasn\'t your fault, Mr. Gower..."}]},{"type":"action","content":[{"type":"text","text":"George pulls the little box out of his pocket. Gower savagely rips it away from him, breathing heavily, staring at the boy venomously."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Just look and see what you did. Look at the bottle you took the powder from. It\'s poison!  I tell you, it\'s poison!  I know you feel bad... and..."}]},{"type":"action","content":[{"type":"text","text":"George falters off, cupping his aching ear with a hand. Gower looks at the large brown bottle which has not been replaced on the shelf. He tears open the package, shakes the powder out of one of the capsules, cautiously tastes it, then abruptly throws the whole mess to the table and turns to look at George again. The boy is whimpering, hurt, frightened. "}]},{"type":"action","content":[{"type":"text","text":"Gower steps toward him."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Don\'t hurt my sore ear again."}]},{"type":"action","content":[{"type":"text","text":"But this time Gower sweeps the boy to him in a hug and, sobbing hoarsely, crushes the boy in his embrace. George is crying too."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"No... "},{"type":"text","text":"No"},{"type":"text","text":"... No..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Don\'t hurt my ear again!"}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"parenthetical","content":[{"type":"text","text":"(sobbing)"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, George, "},{"type":"text","text":"George"},{"type":"text","text":"..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Gower, I won\'t ever tell anyone. I know what you\'re feeling. I won\'t ever tell a soul. Hope to die, I won\'t."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, George."}]},{"type":"transition","content":[{"type":"text","text":"DISSOLVE TO:"}]}]',
      modified: '2022-04-09T21:34:24.614+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c52',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. LUGGAGE SHOP –  – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"It is late afternoon. A young man is looking over an assortment of luggage. Across the counter stands Joe "},{"type":"text","text":"Hepner"},{"type":"text","text":", the proprietor of the store – he is showing a suitcase."}]},{"type":"character","content":[{"type":"text","text":"JOE"}]},{"type":"dialogue","content":[{"type":"text","text":"An overnight bag – genuine English cowhide, combination lock, fitted up with brushes, combs..."}]},{"type":"character","content":[{"type":"text","text":"CUSTOMER"}]},{"type":"dialogue","content":[{"type":"text","text":"Nope."}]},{"type":"action","content":[{"type":"text","text":"AS CAMERA MOVES UP CLOSER to him, he turns and we get our first glimpse of George as a young man. CAMERA HAS MOVED UP to a "},{"type":"text","text":"CLOSEUP"},{"type":"text","text":" by now."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Nope. "},{"type":"text","text":"Nope."},{"type":"text","text":" Nope. "},{"type":"text","text":"Nope."},{"type":"text","text":" Now, look, Joe.  Now, look, I... I want a big one."}]},{"type":"action","content":[{"type":"text","text":"Suddenly, in action, as George stands with his arms outstretched in illustration, the picture freezes and becomes a still. Over this hold-frame shot we hear the voices from Heaven:"}]},{"type":"action","content":[{"type":"text","text":"Over this hold-frame shot we hear the voices from Heaven: "}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"What did you stop it for?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"I want you to take a good look at that face."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Who is it?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"George Bailey."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, you mean the kid that had his ears slapped back by the druggist."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s the kid."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"It\'s a good face. I like it. I like George Bailey. Tell me, did he ever tell anyone about the pills?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Not a soul."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Did he ever marry the girl? Did he ever go exploring?"}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, wait and see."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – THE SCREEN"}]},{"type":"action","content":[{"type":"text","text":"The arrested "},{"type":"text","text":"CLOSEUP"},{"type":"text","text":" of George springs to life again."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Big - see!  I don\'t want one for one night.  I want something for a thousand and one nights, with plenty of room for labels from Italy and Baghdad, Samarkand... a great big one. "}]},{"type":"character","content":[{"type":"text","text":"JOE"}]},{"type":"dialogue","content":[{"type":"text","text":"I see, a flying carpet, huh? I don\'t suppose you\'d like this old second-hand job, would you?"}]},{"type":"action","content":[{"type":"text","text":"He brings a large suitcase up from under the counter."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Now you\'re "},{"type":"text","text":"talkin\'."},{"type":"text","text":" Gee whiz, I could use this as a raft in case the boat sunk. How much does this cost?"}]},{"type":"character","content":[{"type":"text","text":"JOE"}]},{"type":"dialogue","content":[{"type":"text","text":"No charge."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s my trick ear, Joe. It sounded as if you said no charge."}]},{"type":"character","content":[{"type":"text","text":"JOE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(indicating name on suitcase)"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s right."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(as he sees his name)"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'s my name doing on it?"}]},{"type":"character","content":[{"type":"text","text":"JOE"}]},{"type":"dialogue","content":[{"type":"text","text":"A little present from old man Gower. Came down and picked it out himself."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(admiring the bag)"}]},{"type":"dialogue","content":[{"type":"text","text":"He did? "},{"type":"text","text":"Whatta"},{"type":"text","text":" you know about that – my old boss..."}]},{"type":"character","content":[{"type":"text","text":"JOE"}]},{"type":"dialogue","content":[{"type":"text","text":"What boat you sailing on?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m working across on a cattle boat."}]},{"type":"character","content":[{"type":"text","text":"JOE"}]},{"type":"dialogue","content":[{"type":"text","text":"A cattle boat?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(as he exits)"}]},{"type":"dialogue","content":[{"type":"text","text":"Okay, I like cows."}]},{"type":"transition","content":[{"type":"text","text":"WIPE TO:"}]}]',
      modified: '2022-04-09T21:34:24.616+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c54',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. GOWER\'S DRUGSTORE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"The place is practically the same except that it is now full of school kids having sodas, etc. A "},{"type":"text","text":"juke"},{"type":"text","text":" box and many little tables have been added. It has become the hangout of the local small fry.  There are now three kids jerking sodas.  "}]},{"type":"action","content":[{"type":"text","text":"It has become the hangout of the local small fry. "}]},{"type":"action","content":[{"type":"text","text":"Gower is a different man now – sober, shaven and good-humored. He is behind the counter when George comes in. Gower\'s face lights up when he sees George."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Gower... Mr. Gower... thanks ever so much for the bag. It\'s just exactly what I wanted."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Aw, forget it."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, it\'s wonderful."}]},{"type":"character","content":[{"type":"text","text":"GOWER"}]},{"type":"dialogue","content":[{"type":"text","text":"Hope you enjoy it."}]},{"type":"action","content":[{"type":"text","text":"George suddenly sees the old cigar lighter on the counter. He closes his eyes and makes a wish."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh... "},{"type":"text","text":"Oh."},{"type":"text","text":" Wish I had a million dollars."}]},{"type":"action","content":[{"type":"text","text":"As he snaps the lighter the flame springs up."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hot dog!"}]},{"type":"action","content":[{"type":"text","text":"George shakes Gower\'s hand vigorously and exits."}]}]',
      modified: '2022-04-09T21:34:24.619+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c56',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. MAIN STREET BEDFORD FALLS – - DAY"}]},{"type":"action","content":[{"type":"text","text":"PAN SHOT as George crosses the street, Uncle Billy, cousin "},{"type":"text","text":"Tilly"},{"type":"text","text":" and Cousin "},{"type":"text","text":"Eustace"},{"type":"text","text":" are leaning out of the second floor window of the Building and Loan offices."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Avast there, Captain Cook. You got your sea legs yet?"}]},{"type":"character","content":[{"type":"text","text":"COUSIN "},{"type":"text","text":"EUSTACE"}]},{"type":"dialogue","content":[{"type":"text","text":"Parlez-vous "},{"type":"text","text":"francais?"},{"type":"text","text":" Hey, send us some of them picture postcards, will you, George?"}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, George, don\'t take any plugged nickels."}]},{"type":"character","content":[{"type":"text","text":"COUSIN "},{"type":"text","text":"TILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, George, your suitcase is leaking. George waves up at them and continues on across the street."}]}]',
      modified: '2022-04-09T21:34:24.628+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c58',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. MAIN STREET – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"As George crosses the street. He spots Ernie and his cab, and Bert the motor cop, parked alongside."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, Ernie!"}]},{"type":"character","content":[{"type":"text","text":"ERNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hiya, George!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hi, Bert."}]},{"type":"character","content":[{"type":"text","text":"BERT"}]},{"type":"dialogue","content":[{"type":"text","text":"George..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Ernie, I\'m a rich tourist today. How about driving me home in style?"}]},{"type":"action","content":[{"type":"text","text":"Bert opens the door of the cab and puts George\'s suitcase inside."}]},{"type":"character","content":[{"type":"text","text":"ERNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Sure, your highness, hop in. And, for the carriage trade, I puts on my hat."}]},{"type":"action","content":[{"type":"text","text":"As George is about to enter the cab, he stops suddenly as he sees Violet (now obviously a little sex machine) come toward him. Her walk and figure would stop anybody. She gives him a sultry look."}]},{"type":"shot","content":[{"type":"text","text":"REVERSE ANGLE"}]},{"type":"action","content":[{"type":"text","text":"The three men by the cab, but including Violet."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Good afternoon, Mr. Bailey."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Violet. Hey, you look good. That\'s some dress you got on there."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – VIOLET"}]},{"type":"action","content":[{"type":"text","text":"She reacts to this."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, this old thing? Why, I only wear it when I don\'t care how I look."}]},{"type":"action","content":[{"type":"text","text":"CAMERA PANS WITH HER AS VIOLET SWINGS ON DOWN THE SIDEWALK."}]},{"type":"shot","content":[{"type":"text","text":"REVERSE SHOT – CAB"}]},{"type":"action","content":[{"type":"text","text":"As Violet goes by, George and Bert raise their heads above the top of the cab."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"On Violet\'s back as she goes. As she crosses the street, an elderly man turns to look at her and is almost hit by a car that pulls up with screeching brakes."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND BERT AT CAB"}]},{"type":"action","content":[{"type":"text","text":"Ernie sticks his head out form the driver\'s seat."}]},{"type":"character","content":[{"type":"text","text":"ERNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"How would you like..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(as he enters cab)"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes..."}]},{"type":"character","content":[{"type":"text","text":"ERNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Want to come along, Bert?  We\'ll show you the town!"}]},{"type":"action","content":[{"type":"text","text":"Bert looks at his watch, then takes another look at Violet\'s retreating figure."}]},{"type":"character","content":[{"type":"text","text":"BERT"}]},{"type":"dialogue","content":[{"type":"text","text":"No, thanks. Think I\'ll go home and see what the wife\'s doing."}]},{"type":"character","content":[{"type":"text","text":"ERNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Family man."}]},{"type":"transition","content":[{"type":"text","text":"DISSOLVE TO:"}]}]',
      modified: '2022-04-09T21:34:24.631+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c5a',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. BAILEY DINING ROOM – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"Pop Bailey is seated at the dinner table. Mrs. Bailey and Annie, the cook, look up toward the vibrating ceiling. There are SOUNDS of terrific banging and scuffling upstairs. Annie pounds on the ceiling with a broom."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"parenthetical","content":[{"type":"text","text":"(calling out)"}]},{"type":"dialogue","content":[{"type":"text","text":"George! Harry! You\'re shaking the house down! Stop it!"}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, let \'em alone. I wish I was up there with them."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"Harry\'ll tear his dinner suit. George!"}]},{"type":"shot","content":[{"type":"text","text":"ANOTHER ANGLE"}]},{"type":"action","content":[{"type":"text","text":"Mrs. Bailey is calling up the stairs."}]},{"type":"character","content":[{"type":"text","text":"ANNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s why all children should be girls."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"But if they were all girls, there wouldn\'t be any... Oh, never mind."}]},{"type":"parenthetical","content":[{"type":"text","text":"(calling upstairs)"}]},{"type":"dialogue","content":[{"type":"text","text":"George! Harry! Come down to dinner this minute. Everything\'s getting cold and you know we\'ve been waiting for you."}]},{"type":"character","content":[{"type":"text","text":"GEORGE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Okay, Mom."}]},{"type":"action","content":[{"type":"text","text":"She goes up the stairs.  Pop is smiling and poking his plate. A commotion is heard on the stairs, the boys imitating fanfare MUSIC. Down they come, holding their mother high between them on their hands. They bring her into the dining room and deposit her gracefully into Pop\'s lap."}]},{"type":"character","content":[{"type":"text","text":"BOYS"}]},{"type":"dialogue","content":[{"type":"text","text":"Here\'s a present for you, Pop."}]},{"type":"action","content":[{"type":"text","text":"Pop kisses her. Mother gives Pop a quick hug, then turns with all the wrath she can muster on the two boys."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, you two idiots! George, sit down and have dinner."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'ve eaten."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, aren\'t you going to finish dressing for your graduation party? Look at you."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"I don\'t care. It\'s George\'s tux."}]},{"type":"action","content":[{"type":"text","text":"Annie crosses the room, holding her broom. Harry reaches out for her."}]},{"type":"character","content":[{"type":"text","text":"ANNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"If you lay a hand on me, I\'ll hit you with this broom."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Annie, I\'m in love with you. There\'s a moon out tonight."}]},{"type":"action","content":[{"type":"text","text":"As he pushes her through the kitchen door, he slaps her fanny. She screams. The noise is cut off by the swinging door. George and his mother sit down at the table."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Boy, oh, boy, oh, boy – my last meal at the old Bailey boarding house."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, my lands, my blood pressure!"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Harry, as he sticks his head through the kitchen door."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Pop, can I have the car? I\'m going to take over a lot of plates and things."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"What plates?"}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, Mom – I\'m chairman of the eats committee and we only need a couple of dozen."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, no you don\'t. Harry, now, not my best "},{"type":"text","text":"Haviland."}]},{"type":"action","content":[{"type":"text","text":"She follows Harry into the kitchen, leaving Pop and George. As she goes:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, let him have the plates, Mother."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George and his father, eating at the table. There is a great similarity and a great understanding between them."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Hope you have a good trip, George. Uncle Billy and I are going to miss you."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m going to miss you, too, Pop. What\'s the matter? You look tired."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, I had another tussle with Potter today."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh..."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"I thought when we put him on the Board of Directors, he\'d ease up on us a little bit."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I wonder what\'s eating that old money grubbing buzzard anyway?"}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, he\'s a sick man. Frustrated and sick.  Sick in his mind, sick in his soul, if he has one. Hates everybody that has anything that he can\'t have. Hates us mostly, I guess."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"The dining room. Harry and his mother come out of the kitchen, Harry carrying a pie in each hand and balancing one on his head.  CAMERA PANS WITH them as they cross."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Gangway! Gangway! So long, Pop."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"So long, son."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Got a match?"}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Very funny. Very funny."}]},{"type":"character","content":[{"type":"text","text":"MOTHER"}]},{"type":"dialogue","content":[{"type":"text","text":"Put those things in the car and I\'ll get your tie and studs together."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Okay, Mom. You coming later? You coming later, George?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"What do you mean, and be bored to death?"}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Couldn\'t want a better death. Lots of pretty girls, and we\'re going to use that new floor of yours tonight, too."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I hope it works."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"No gin tonight, son."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Aw, Pop, just a little."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"No, son, not one drop."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George and Pop at the table. Annie comes in with some dishes."}]},{"type":"character","content":[{"type":"text","text":"ANNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Boys and girls and music. Why do they need gin?"}]},{"type":"action","content":[{"type":"text","text":"She exits."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Father, did I act like that when I graduated from high school?"}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Pretty much. You know, George, wish we could send Harry to college with you. Your mother and I talked it over half the night."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"We have that all figured out. You see, "},{"type":"text","text":"Harry\'ll"},{"type":"text","text":" take my job at the Building and Loan, work there four years, then he\'ll go."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"He\'s pretty young for that job."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, no younger than I was."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Maybe you were born older, George."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"How\'s that?"}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"I say, maybe you were born older. I suppose you\'ve decided what you\'re going to do when you get out of college."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, well, you know what I\'ve always talked about – build things... design new buildings – plan modern cities – all that stuff I was talking about."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Still after that first million before you\'re thirty."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"No, I\'ll settle for half that in cash."}]},{"type":"action","content":[{"type":"text","text":"Annie comes in again from the kitchen."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Of course, it\'s just a hope, but you wouldn\'t consider coming back to the Building and Loan, would you?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Of course, it\'s just a hope, but you wouldn\'t consider coming back to the Building and Loan, would you? "}]},{"type":"action","content":[{"type":"text","text":"Annie stops serving to hear his answer."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I..."}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Annie)"}]},{"type":"dialogue","content":[{"type":"text","text":"Annie, why don\'t you draw up a chair? Then you\'d be more comfortable and you could hear everything that\'s going on."}]},{"type":"character","content":[{"type":"text","text":"ANNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"I would if I thought I\'d hear anything worth listening to."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"You would, huh?"}]},{"type":"action","content":[{"type":"text","text":"She gives George a look, and goes on out into the kitchen. Bailey smiles and turns to George."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"I know it\'s soon to talk about it."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, now, Pop, I couldn\'t. I couldn\'t face being cooped up for the rest of my life in a shabby little office."}]},{"type":"action","content":[{"type":"text","text":"He stops, realizing that he has hurt his father."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, I\'m sorry, Pop. I didn\'t mean that remark, but this business of nickels and dimes and spending all your life trying to figure out how to save three cents on a length of pipe... I\'d go crazy. I want to do something big and something important."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I want to do something big and something important. "}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"parenthetical","content":[{"type":"text","text":"(quietly)"}]},{"type":"dialogue","content":[{"type":"text","text":"You know, George, I feel that in a small way we are doing something important.  Satisfying a fundamental urge. It\'s deep in the race for a man to want his own roof and walls and fireplace, and we\'re helping him get those things in our shabby little office."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(unhappily)"}]},{"type":"dialogue","content":[{"type":"text","text":"I know, Dad. I wish I felt... But I\'ve been hoarding pennies like a miser in order to... Most of my friends have already finished college. I just feel like if I don\'t get away, I\'d bust."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes... "},{"type":"text","text":"Yes"},{"type":"text","text":"... You\'re right, son."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"You see what I mean, don\'t you, Pop?"}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"This town is no place for any man unless he\'s willing to crawl to Potter. You\'ve got talent, son. You get yourself an education. Then get out of here."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Pop, do you want a shock? I think you\'re a great guy."}]},{"type":"action","content":[{"type":"text","text":"To cover his embarrassment, he looks toward the kitchen door and calls:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, did you hear that, Annie?"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Annie listening through glass in door."}]},{"type":"character","content":[{"type":"text","text":"ANNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"I heard it. About time one of you lunkheads said it."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George and his father at the table."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m going to miss old Annie. Pop, I think I\'ll get dressed and go over to Harry\'s party."}]},{"type":"character","content":[{"type":"text","text":"POP"}]},{"type":"dialogue","content":[{"type":"text","text":"Have a good time, son."}]},{"type":"transition","content":[{"type":"text","text":"WIPE TO:"}]}]',
      modified: '2022-04-09T21:34:24.635+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c5c',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. HIGH SCHOOL GYM – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"At one end of the room an orchestra is playing. George wends his way through the dancing couples toward a supper table. He and Harry are carrying plates and pies."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Here you are."}]},{"type":"action","content":[{"type":"text","text":"Several of the boys take the plates from him. George looks at them, feeling very grown up and out of place."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(introducing George)"}]},{"type":"dialogue","content":[{"type":"text","text":"You know my kid brother, George. I\'m going to put him through college."}]},{"type":"action","content":[{"type":"text","text":"Sam Wainwright comes in behind Harry, waggles his hands at his ears as he talks."}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"Here comes George. Hello, hee-haw!"}]},{"type":"action","content":[{"type":"text","text":"George swings around, delighted to hear a familiar voice."}]},{"type":"shot","content":[{"type":"text","text":"WIDER ANGLE"}]},{"type":"action","content":[{"type":"text","text":"Including Sam and Marty Hatch. Sam is assured and breezy, wearing very collegiate clothes."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, "},{"type":"text","text":"oh."},{"type":"text","text":" Sam Wainwright! How are you? When did you get here?"}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, this afternoon. I thought I\'d give the kids a treat."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Old college graduate now, huh?"}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"Yeah – old Joe College Wainwright, they call me. Well, freshman, looks like you\'re going to make it after all."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yep."}]},{"type":"action","content":[{"type":"text","text":"Sam sees Harry and leaves George in the middle of a gesture."}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Harry)"}]},{"type":"dialogue","content":[{"type":"text","text":"Harry! You\'re the guy I want to see. Coach has heard all about you."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"He has?"}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"Yeah. He\'s followed every game and his mouth\'s watering. He wants me to find out if you\'re going to come along with us."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I gotta make some dough first."}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, you better make it fast. We need great ends like you – not broken down old guys like this one."}]},{"type":"action","content":[{"type":"text","text":"George and Sam wiggle their fingers at their ears, saluting Each other."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hee-haw!"}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"Hee-haw!"}]},{"type":"action","content":[{"type":"text","text":"An elderly, fussy school principal comes over to George."}]},{"type":"character","content":[{"type":"text","text":"PRINCIPAL"}]},{"type":"dialogue","content":[{"type":"text","text":"George, welcome back."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Mr. Partridge, how are you?"}]},{"type":"character","content":[{"type":"text","text":"PRINCIPAL"}]},{"type":"dialogue","content":[{"type":"text","text":"Putting a pool under this floor was a great idea. Saved us another building.  Now, Harry, Sam, have a lot of fun.  There\'s lots of stuff to eat and drink.  Lots of pretty girls around."}]},{"type":"action","content":[{"type":"text","text":"Violet "},{"type":"text","text":"Bick"},{"type":"text","text":" comes into the scene and turns to face George. She is waving her dance program at him."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, George..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Violet."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, what am I bid?"}]},{"type":"action","content":[{"type":"text","text":"Marty Hatch enters scene."}]},{"type":"character","content":[{"type":"text","text":"MARTY"}]},{"type":"dialogue","content":[{"type":"text","text":"George."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hiya, Marty. Well, it\'s old home week."}]},{"type":"character","content":[{"type":"text","text":"MARTY"}]},{"type":"dialogue","content":[{"type":"text","text":"Do me a favor, will you, George?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'s that?"}]},{"type":"character","content":[{"type":"text","text":"MARTY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, you remember my kid sister, Mary?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, yeah, "},{"type":"text","text":"yeah."}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"\\"Momma wants you, Marty.\\" \\"Momma wants you, Marty.\\" Remember?"}]},{"type":"character","content":[{"type":"text","text":"MARTY"}]},{"type":"dialogue","content":[{"type":"text","text":"Dance with her, will you?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh... me? Oh, well, I feel funny enough already, with all these kids."}]},{"type":"character","content":[{"type":"text","text":"MARTY"}]},{"type":"dialogue","content":[{"type":"text","text":"Aw, come on. Be a sport. Just dance with her one time and you\'ll give her the thrill of her life."}]},{"type":"character","content":[{"type":"text","text":"SAM"}]},{"type":"dialogue","content":[{"type":"text","text":"Aw, go on."}]},{"type":"character","content":[{"type":"text","text":"MARTY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(calling off)"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, "},{"type":"text","text":"sis."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, excuse me, Violet. Don\'t be long, Marty. I don\'t want to be a wet nurse for..."}]},{"type":"action","content":[{"type":"text","text":"He stops suddenly as he sees Mary, staring at her."}]},{"type":"shot","content":[{"type":"text","text":"CLOSEUP – MARY HATCH"}]},{"type":"action","content":[{"type":"text","text":"She is standing talking to one of the boys, Freddie, a glass of punch in her hand. For the first time, she is wearing an evening gown and she has gained assurance from the admiration of the boy with her. She turns around and for the first time she sees George.  For a second she loses her poise, staring at him."}]},{"type":"character","content":[{"type":"text","text":"FREDDIE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"And the next thing I know, some guy came up and tripped me. That\'s the reason why I came in fourth. If it hadn\'t been for that..."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George, staring at Mary."}]},{"type":"character","content":[{"type":"text","text":"FREDDIE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"...that race would have been a cinch. I tried to find out who it was later..."}]},{"type":"shot","content":[{"type":"text","text":"CLOSEUP – MARY"}]},{"type":"action","content":[{"type":"text","text":"Still staring at George, and smiling."}]},{"type":"character","content":[{"type":"text","text":"FREDDIE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"...but I couldn\'t find out. "},{"type":"text","text":"Nobody\'d"},{"type":"text","text":" ever tell you whoever it was because they\'d be scared. They know..."}]},{"type":"character","content":[{"type":"text","text":"FREDDIE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"...but I couldn\'t find out. "}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM "},{"type":"text","text":"CLOSEUP"}]},{"type":"action","content":[{"type":"text","text":"Mary and Freddie. Marty comes into scene, followed by George."}]},{"type":"character","content":[{"type":"text","text":"FREDDIE"}]},{"type":"dialogue","content":[{"type":"text","text":"...what kind of..."}]},{"type":"character","content":[{"type":"text","text":"MARTY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(interrupting)"}]},{"type":"dialogue","content":[{"type":"text","text":"You remember George? This is Mary. Well, I\'ll be seeing you."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well... "},{"type":"text","text":"Well"},{"type":"text","text":"... Well..."}]},{"type":"character","content":[{"type":"text","text":"FREDDIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Now, to get back to my story, see..."}]},{"type":"action","content":[{"type":"text","text":"Mary hands her punch cup to Freddie, and she and George start dancing."}]},{"type":"character","content":[{"type":"text","text":"FREDDIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, this is my dance!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, why don\'t you stop annoying people?"}]},{"type":"character","content":[{"type":"text","text":"FREDDIE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I\'m sorry. Hey!"}]},{"type":"shot","content":[{"type":"text","text":"MOVING SHOT"}]},{"type":"action","content":[{"type":"text","text":"Following George and Mary as they dance."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, hello."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello. You look at me as if you didn\'t know me."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I don\'t."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"You\'ve passed me on the street almost every day."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Me?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Uh-huh."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Uh-uh. That was a little girl named Mary Hatch. That wasn\'t you."}]},{"type":"action","content":[{"type":"text","text":"A WHISTLE is heard "},{"type":"text","text":"offscreen"},{"type":"text","text":", and the MUSIC stops."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Harry on the orchestra platform, whistle in hand."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oyez – oyez – oyez... The big Charleston contest. The prize? A genuine loving cup.  Those not tapped by the judges will remain on the floor. Let\'s go!"}]},{"type":"shot","content":[{"type":"text","text":"CLOSEUP – GEORGE AND MARY"}]},{"type":"action","content":[{"type":"text","text":"As the MUSIC starts and couples begin dancing once more, they look at each other."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m not very good at this."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Neither am I."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Okay – what can we lose?"}]},{"type":"action","content":[{"type":"text","text":"They start their Charleston. We see a SERIES OF SHOTS of various couples doing their routines, some good, some bad."}]},{"type":"shot","content":[{"type":"text","text":"CLOSEUP – FREDDIE"}]},{"type":"action","content":[{"type":"text","text":"Leaning against the railing around the dance floor, looking daggers at George. Mickey, a young punk who has had one too many, is beside him."}]},{"type":"character","content":[{"type":"text","text":"MICKEY"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'s the matter, "},{"type":"text","text":"Othello"},{"type":"text","text":" – jealous? Did you know there\'s a swimming pool under this floor? And did you know that button behind you causes this floor to open up?  And did you further know that George Bailey is dancing right over that crack?  And I\'ve got the key?"}]},{"type":"character","content":[{"type":"text","text":"FREDDIE"}]},{"type":"dialogue","content":[{"type":"text","text":"And did you know that button behind you causes this floor to open up? "}]},{"type":"action","content":[{"type":"text","text":"Freddie needs no more. He takes the key from Mickey and turns the switch. The floor begins to part in the middle, each half sliding under the bleacher seats. Pandemonium starts. Dancers begin to scream as they try to get off. Some are so engrossed in dancing they continue at top speed. Teachers and elders start to scurry off. As the floor opens, it reveals an attractive, lighted swimming pool.  George and Mary are so busy dancing they don\'t notice the floor opening. Spotlights concentrate on them. They mistake the screams for cheers."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George and Mary dancing."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"They\'re cheering us. We must be good."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"The crowd watching George and Mary dancing. They move backwards until finally they reach the edge of the floor and fall into the pool below."}]},{"type":"shot","content":[{"type":"text","text":"SERIES OF SHOTS"}]},{"type":"action","content":[{"type":"text","text":"George and Mary still trying to dance in the water – the crowd on the edge cheering them – some of the crowd leap into the pool – the principal trying to restore order, finally clasps his hands like a diver and leaps in himself."}]},{"type":"action","content":[{"type":"text","text":"FADE OUT"}]},{"type":"action","content":[{"type":"text","text":"FADE IN:"}]}]',
      modified: '2022-04-09T21:34:24.643+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c5e',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. TREE-LINED RESIDENTIAL STREET – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George and Mary. The night is warm with a bright moon. George is dressed in jersey sweater and oversize football pants that keep wanting to come down. Mary is in an old white bath robe. Each is carrying their wet clothes tied into a bundle that leaves a trail of dripping water. As they near the camera we hear them singing:"}]},{"type":"action","content":[{"type":"text","text":"George is dressed in jersey sweater and oversize football pants that keep wanting to come down. "}]},{"type":"character","content":[{"type":"text","text":"GEORGE AND MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(singing)"}]},{"type":"dialogue","content":[{"type":"text","text":"Buffalo Gals can\'t you come out tonight.  Can\'t you come out tonight. Can\'t you come out tonight. Buffalo Gals can\'t you come out tonight and dance by the light of the moon."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hot dog! Just like an organ."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Beautiful."}]},{"type":"action","content":[{"type":"text","text":"CAMERA MOVES WITH them as they proceed down the street."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"And I told Harry I thought I\'d be bored to death. You should have seen the commotion in that locker room. I had to knock down three people to get this stuff we\'re wearing here. Here, let me hold that old wet dress of yours."}]},{"type":"action","content":[{"type":"text","text":"He takes the bundle of clothes from Mary. They stop and look at each other."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Do I look as funny as you do?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I guess I\'m not quite the football type.  You... look wonderful. You know, if it wasn\'t me talking I\'d say you were the prettiest girl in town."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, why don\'t you say it?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I don\'t know. Maybe I will say it. How old are you anyway?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Eighteen."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Eighteen? Why, it was only last year you were seventeen."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Too young or too old?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, no. Just right. Your age fits you.  Yes, sir, you look a little older without your clothes on."}]},{"type":"action","content":[{"type":"text","text":"Mary stops. George, to cover his embarrassment, talks quickly on:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"action","content":[{"type":"text","text":"I mean, without a dress. You look older...  I mean, younger. You look just..."}]},{"type":"action","content":[{"type":"text","text":"In his confusion George steps on the end of the belt of Mary\'s bath robe, which is trailing along behind her. She gathers the robe around her."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"character","content":[{"type":"text","text":"OH-OH..."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(holding out her hand)"}]},{"type":"dialogue","content":[{"type":"text","text":"Sir, my train, please."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"A pox upon me for a clumsy lout."}]},{"type":"action","content":[{"type":"text","text":"He picks up the belt and throws it over her arm."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Your... your caboose, my lady."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"You may kiss my hand."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Ummmmm..."}]},{"type":"action","content":[{"type":"text","text":"Holding her hand, George moves in closer to Mary."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey – hey, Mary."}]},{"type":"action","content":[{"type":"text","text":"Mary turns away from him, singing \\"Buffalo Gals\\":"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(singing)"}]},{"type":"dialogue","content":[{"type":"text","text":"As I was lumbering down the street..."}]},{"type":"action","content":[{"type":"text","text":"George looks after her; then picks up a rock from the street."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Okay, then, I\'ll throw a rock at the old Granville house."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, no, don\'t. I love that old house."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM LONG SHOT – OLD HOUSE"}]},{"type":"action","content":[{"type":"text","text":"It is a weather-beaten, old-fashioned two-storied house that once was no doubt resplendent."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"No. You see, you make a wish and then try and break some glass. You got to be a pretty good shot nowadays, too."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM "},{"type":"text","text":"CLOSEUP"},{"type":"text","text":" – GEORGE AND MARY"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, no, George, don\'t. It\'s full of romance, that old place. I\'d like to live in it."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"In that place?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Uh-huh."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I wouldn\'t live in it as a ghost. Now watch... right on the second floor there."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM LONG SHOT – OLD HOUSE"}]},{"type":"action","content":[{"type":"text","text":"George hurls the rock at the house. We hear the SOUND of a window breaking."}]}]',
      modified: '2022-04-09T21:34:24.649+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c60',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. FRONT PORCH OF HOUSE – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"We see a grumpy old man in shirt sleeves in a rocking chair on the porch. He looks up as he hears the breaking glass."}]}]',
      modified: '2022-04-09T21:34:24.653+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c62',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. STREET – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"CLOSEUP – GEORGE AND MARY"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'d you wish, George?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, not just one wish. A whole "},{"type":"text","text":"hatful"},{"type":"text","text":", Mary. I know what I\'m going to do tomorrow and the next day and the next year and the year after that. I\'m shaking the dust of this crummy little town off my feet and I\'m going to see the world. Italy, Greece, the "},{"type":"text","text":"Parthenon"},{"type":"text","text":", the Colosseum. Then I\'m coming back here and go to college and see what they know... and then I\'m going to build things. I\'m "},{"type":"text","text":"gonna"},{"type":"text","text":" build air fields.  I\'m "},{"type":"text","text":"gonna"},{"type":"text","text":" build skyscrapers a hundred stories high. I\'m "},{"type":"text","text":"gonna"},{"type":"text","text":" build bridges a mile long..."}]},{"type":"action","content":[{"type":"text","text":"As he talks, Mary has been listening intently. She finally stoops down and picks up a rock, weighting it in her hand."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Are you "},{"type":"text","text":"gonna"},{"type":"text","text":" throw a rock?"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM LONG SHOT"}]},{"type":"action","content":[{"type":"text","text":"The old deserted house. Mary throws her rock, and once more we hear the SOUND of breaking glass."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, that\'s pretty good. "},{"type":"text","text":"What\'d"},{"type":"text","text":" you wish, Mary?"}]},{"type":"action","content":[{"type":"text","text":"Mary looks at him provocatively, then turns and shuffles off down the street, singing as she goes. George hurries after her."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(singing)"}]},{"type":"dialogue","content":[{"type":"text","text":"Buffalo Gals, can\'t you come out tonight..."}]},{"type":"action","content":[{"type":"text","text":"George joins her in the singing as they proceed down the street."}]},{"type":"character","content":[{"type":"text","text":"MARY AND GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(singing)"}]},{"type":"dialogue","content":[{"type":"text","text":"...can\'t you come out tonight, can\'t you come out tonight. Buffalo Gals can\'t you come out tonight and dance by the light of the moon."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'d you wish when you threw that rock?"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Man on the porch of house, listening to George and Mary."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM "},{"type":"text","text":"CLOSEUP"},{"type":"text","text":" – GEORGE AND MARY"}]},{"type":"action","content":[{"type":"text","text":"They have stopped walking and now face one another."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, no."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Come on, tell me."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"If I told you it might not come true."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"What is it you want, Mary? What do you want? You want the moon? Just say..."}]},{"type":"shot","content":[{"type":"text","text":"LONG SHOT"}]},{"type":"action","content":[{"type":"text","text":"Full moon shining through the trees."}]},{"type":"shot","content":[{"type":"text","text":"BACK TO SHOT – GEORGE AND MARY"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"...the word and I\'ll throw a lasso around it and pull it down. Hey, that\'s a pretty good idea. I\'ll give you the moon, Mary."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"...the word and I\'ll throw a lasso around it and pull it down. "}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'ll take it. And then what?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, then you could swallow it and it\'d all dissolve, see? And the "},{"type":"text","text":"moonbeams\'d"},{"type":"text","text":" shoot out of your fingers and your toes, and the ends of your hair."}]},{"type":"parenthetical","content":[{"type":"text","text":"(pauses)"}]},{"type":"dialogue","content":[{"type":"text","text":"Am I talking too much?"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM "},{"type":"text","text":"CLOSEUP"},{"type":"text","text":" – MAN ON PORCH OF HOUSE"}]},{"type":"action","content":[{"type":"text","text":"As George finishes talking, he jumps up out of his chair:"}]},{"type":"character","content":[{"type":"text","text":"MAN"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes!! Why don\'t you kiss her instead of talking her to death?"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND MARY"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"How\'s that?"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM "},{"type":"text","text":"CLOSEUP"},{"type":"text","text":" – MAN ON PORCH"}]},{"type":"character","content":[{"type":"text","text":"MAN"}]},{"type":"dialogue","content":[{"type":"text","text":"Why don\'t you kiss her instead of talking her to death?"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND MARY"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Want me to kiss her, huh?"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – PORCH OF HOUSE"}]},{"type":"character","content":[{"type":"text","text":"MAN"}]},{"type":"dialogue","content":[{"type":"text","text":"Aw, youth is wasted on the wrong people."}]},{"type":"action","content":[{"type":"text","text":"As he speaks, the man leaves the porch and goes into his house, slamming the front door."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND MARY"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, "},{"type":"text","text":"hey"},{"type":"text","text":", hold on. Hey, mister, come on back out here, and I\'ll show you some kissing "},{"type":"text","text":"that\'ll"},{"type":"text","text":" put hair back on your head. What are you..."}]},{"type":"action","content":[{"type":"text","text":"Mary runs off scene. George has been once more standing on the belt of her bath robe, so as she goes, her robe comes off."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(looking around)"}]},{"type":"dialogue","content":[{"type":"text","text":"Mary..."}]},{"type":"action","content":[{"type":"text","text":"He drops his bundle of clothes and picks up Mary\'s robe. He cannot see her anywhere."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Okay, I give up. Where are you?"}]},{"type":"shot","content":[{"type":"text","text":"CLOSEUP – BUSH AT EDGE OF SIDEWALK"}]},{"type":"action","content":[{"type":"text","text":"We see Mary\'s face peering out from the leaves."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Over here in the hydrangea bushes."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT – GEORGE AND MARY"}]},{"type":"action","content":[{"type":"text","text":"George walks toward the bush."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Here you are. Catch."}]},{"type":"action","content":[{"type":"text","text":"He is about to throw her the robe, when a thought strikes him."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Wait a minute. What am I doing? This is a very interesting situation."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(from the bushes)"}]},{"type":"dialogue","content":[{"type":"text","text":"Please give me my robe."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hmm... A man doesn\'t get in a situation like this every day."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(impatiently)"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'d like to have my robe."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Not in Bedford Falls, anyway."}]},{"type":"action","content":[{"type":"text","text":"Mary thrashes around in the bushes. We hear her say:"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Ouch!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Gesundheit. This requires a little thought here."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(getting mad)"}]},{"type":"dialogue","content":[{"type":"text","text":"George Bailey! Give me my robe!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'ve heard about things like this, but I\'ve never..."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(interrupting)"}]},{"type":"dialogue","content":[{"type":"text","text":"Shame on you. I\'m going to tell your mother on you."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, my mother\'s way up the corner there."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(desperate)"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'ll call the police."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"They\'re way downtown. They\'d be on my side, too."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m going to scream!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(thoughtfully)"}]},{"type":"dialogue","content":[{"type":"text","text":"Maybe I could sell tickets. Let\'s see. No, the point is, in order to get this robe...  I\'ve got it! I\'ll make a deal with you, Mary."}]},{"type":"action","content":[{"type":"text","text":"Headlights flash into the scene, and the old Bailey automobile drives in, with Harry at the wheel, and Uncle Billy beside him."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"George! George! Come on home, quick! Your father\'s had a stroke!"}]},{"type":"action","content":[{"type":"text","text":"George throws Mary\'s robe over the bush and gets into the car."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Mary... "},{"type":"text","text":"Mary"},{"type":"text","text":", I\'m sorry. I\'ve got to go."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Come on, George, let\'s hurry."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Did you get a doctor?"}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, Campbell\'s there now."}]},{"type":"shot","content":[{"type":"text","text":"CLOSEUP – THE HYDRANGEA BUSH"}]},{"type":"action","content":[{"type":"text","text":"As the car drives off, Mary, now wearing the robe, rises up from the bush and follows the car with her eyes."}]},{"type":"action","content":[{"type":"text","text":"FADE OUT"}]},{"type":"action","content":[{"type":"text","text":"FADE IN:"}]}]',
      modified: '2022-04-09T21:34:24.655+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c64',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. BAILEY BUILDING AND LOAN OFFICE – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – DIRECTORS MEETING"}]},{"type":"action","content":[{"type":"text","text":"There are about twelve directors seated around a long table. They are the substantial citizens of Bedford Falls: Dr. Campbell, a lawyer, an insurance agent, a real estate salesman, etc.  Prominently seated among them is Henry F. Potter, his goon beside his wheelchair. Uncle Billy and George are seated among the directors. The Chairman of the Board is Dr. Campbell. They have folders and papers before them, on which they have been reporting.  Before each of the directors there are individual reports for them to study."}]},{"type":"action","content":[{"type":"text","text":"They have folders and papers before them, on which they have been reporting. "}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"I think that\'s all we\'ll need you for, George. I know you\'re anxious to make a train."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(rising)"}]},{"type":"dialogue","content":[{"type":"text","text":"I have a taxi waiting downstairs."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"I want the Board to know that George gave up his trip to Europe to help straighten things out here these past few months.  Good luck to you at school, George."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Thanks."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"Now we come to the real purpose of this meeting – to appoint a successor to our dear friend, Peter Bailey."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Chairman, I\'d like to get to my real purpose."}]},{"type":"character","content":[{"type":"text","text":"MAN"}]},{"type":"dialogue","content":[{"type":"text","text":"Wait just a minute now."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Wait for what?  I claim this institution is not necessary to this town. Therefore, Mr. Chairman, I make a motion to dissolve this institution and turn its assets and liabilities over to the receiver."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(angrily)"}]},{"type":"dialogue","content":[{"type":"text","text":"George, you hear what that buzzard..."}]},{"type":"character","content":[{"type":"text","text":"LAWYER"}]},{"type":"dialogue","content":[{"type":"text","text":"Mr. Chairman, it\'s too soon after Peter Bailey\'s death to discuss chloroforming the Building and Loan."}]},{"type":"character","content":[{"type":"text","text":"MAN"}]},{"type":"dialogue","content":[{"type":"text","text":"Peter Bailey died three months ago. I second Mr. Potter\'s motion."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"Very well. In that case I\'ll ask the two executive officers to withdraw."}]},{"type":"action","content":[{"type":"text","text":"Dr. Campbell rises from his seat. George and Uncle Billy start to collect their papers and leave the table."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"But before you go, I\'m sure the whole board wishes to express its deep sorrow at the passing of Peter Bailey."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Thank you very much."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"It was his faith and devotion that are responsible for this organization."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'ll go further than that. I\'ll say that to the public Peter Bailey was the Building and Loan."}]},{"type":"action","content":[{"type":"text","text":"Everyone looks at him surprised."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(trying to control himself)"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, that\'s fine, Potter, coming from you, considering that you probably drove him to his grave."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Peter Bailey was not a business man. That\'s what killed him. Oh, I don\'t mean any disrespect to him, God rest his soul.  He was a man of high ideals, so-called, but ideals without common sense can ruin this town."}]},{"type":"parenthetical","content":[{"type":"text","text":"(picking up papers from table)"}]},{"type":"dialogue","content":[{"type":"text","text":"Now, you take this loan here to Ernie Bishop... You know, that fellow that sits around all day on his brains in his taxi.  You know... I happen to know the bank turned down this loan, but he comes here and we\'re building him a house worth five thousand dollars. Why?"}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"You know... I happen to know the bank turned down this loan, but he comes here and we\'re building him a house worth five thousand dollars. "}]},{"type":"action","content":[{"type":"text","text":"George is at the door of the office, holding his coat and papers, ready to leave."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I handled that, Mr. Potter. You have all the papers there. His salary, insurance. I can personally vouch for his character."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"parenthetical","content":[{"type":"text","text":"(sarcastically)"}]},{"type":"dialogue","content":[{"type":"text","text":"A friend of yours?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, sir."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"You see, if you shoot pool with some employee here, you can come and borrow money. What does that get us? A discontented, lazy rabble instead of a thrifty working class. And all because a few starry-eyed dreamers like Peter Bailey stir them up and fill their heads with a lot of impossible ideas. Now, I say..."}]},{"type":"action","content":[{"type":"text","text":"George puts down his coat and comes around to the table, incensed by what Potter is saying about his father."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Just a minute – just a minute. Now, hold on, Mr. Potter. You\'re right when you say my father was no business man. I know that. Why he ever started this cheap, penny-ante Building and Loan, I\'ll never know. But neither you nor anybody else can say anything against his character, because his whole life was... Why, in the twenty-five years since he and Uncle Billy started this thing, he never once thought of himself. Isn\'t that right, Uncle Billy?  He didn\'t save enough money to send Harry to school, let alone me. But he did help a few people get out of your slums, Mr. Potter. And what\'s wrong with that? Why... Here, you\'re all businessmen here. Doesn\'t it make them better citizens? Doesn\'t it make them better customers? You... "},{"type":"text","text":"you"},{"type":"text","text":" said... "},{"type":"text","text":"What\'d"},{"type":"text","text":" you say just a minute ago?... They had to wait and save their money before they even ought to think of a decent home. Wait! Wait for what? Until their children grow up and leave them?  Until they\'re so old and broken-down that they... Do you know how long it takes a working man to save five thousand dollars?  Just remember this, Mr. Potter, that this rabble you\'re talking about... they do most of the working and paying and living and dying in this community. Well, is it too much to have them work and pay and live and die in a couple of decent rooms and a bath? Anyway, my father didn\'t think so. People were human beings to him, but to you, a warped, frustrated old man, they\'re cattle. Well, in my book he died a much richer man than you\'ll ever be!"}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"They had to wait and save their money before they even ought to think of a decent home. "}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m not interested in your book. I\'m talking about the Building and Loan."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I know very well what you\'re talking about. You\'re talking about something you can\'t get your fingers on, and it\'s galling you. That\'s what you\'re talking about, I know."}]},{"type":"parenthetical","content":[{"type":"text","text":"(to the Board)"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I\'ve said too much. I... You\'re the Board here. You do what you want with this thing. Just one thing more, though. This town needs this measly one-horse institution if only to have some place where people can come without crawling to Potter. Come on, Uncle Billy!"}]},{"type":"action","content":[{"type":"text","text":"George leaves the room, followed by the jubilant Uncle Billy.  Potter\'s face is grim with hatred. The \\"frustrated old man\\" remark was gall in his veins."}]},{"type":"character","content":[{"type":"text","text":"POTTER"}]},{"type":"dialogue","content":[{"type":"text","text":"Sentimental hogwash! I want my motion..."}]},{"type":"action","content":[{"type":"text","text":"He is interrupted by a babble of talk, as the directors take up the argument"}]}]',
      modified: '2022-04-09T21:34:24.661+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c66',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. OUTER OFFICE – BUILDING AND LOAN – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George, visibly shaken, is busy with his bag, his papers. He is worried about the outcome of the meeting. Dissolving the Building and Loan will alter his plans. Uncle Billy follows him around, chattering."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Boy, oh, boy, that was telling him, George, old boy. You shut his big mouth."}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Cousin "},{"type":"text","text":"Tilly"},{"type":"text","text":" and Cousin "},{"type":"text","text":"Eustace"},{"type":"text","text":")"}]},{"type":"dialogue","content":[{"type":"text","text":"You should have heard him."}]},{"type":"character","content":[{"type":"text","text":"COUSIN "},{"type":"text","text":"EUSTACE"}]},{"type":"dialogue","content":[{"type":"text","text":"What happened? We heard a lot of yelling."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, we\'re being voted out of business after twenty-five years. Easy come, easy go."}]},{"type":"character","content":[{"type":"text","text":"COUSIN "},{"type":"text","text":"TILLY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(reading a newspaper)"}]},{"type":"dialogue","content":[{"type":"text","text":"Here it is, \\"Help Wanted – Female.\\""}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT – DOORWAY TO OFFICE"}]},{"type":"action","content":[{"type":"text","text":"Ernie is in the doorway."}]},{"type":"character","content":[{"type":"text","text":"ERNIE"}]},{"type":"dialogue","content":[{"type":"text","text":"You still want me to hang around, George?"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT – GEORGE AND THE OTHERS"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(looking at his watch)"}]},{"type":"dialogue","content":[{"type":"text","text":"Yeah, I\'ll be right down."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Hey, you\'ll miss your train. You\'re a week late for school already. Go on."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(indicating Board room)"}]},{"type":"dialogue","content":[{"type":"text","text":"I wonder what\'s going on in there?"}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, never mind. Don\'t worry about that.  They\'re putting us out of business. So what? I can get another job. I\'m only fifty-five."}]},{"type":"character","content":[{"type":"text","text":"COUSIN "},{"type":"text","text":"TILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Fifty-six!"}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Go on – go on. Hey, look, you gave up your boat trip, now you don\'t want to miss college too, do you?"}]},{"type":"action","content":[{"type":"text","text":"Dr. Campbell comes running out, all excited."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"George! George! They voted Potter down!  They want to keep it going!"}]},{"type":"action","content":[{"type":"text","text":"Cousin "},{"type":"text","text":"Eustace"},{"type":"text","text":", Cousin "},{"type":"text","text":"Tilly"},{"type":"text","text":" and Uncle Billy cheer wildly. Dr. Campbell and George shake hands."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Whoopee!"}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"But they\'ve got one condition – only one condition."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'s that?"}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s the best part of it. They\'ve appointed George here as executive secretary to take his father\'s place."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, no! But, Uncle Billy..."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"You can keep him on. That\'s all right. As secretary you can hire anyone you like."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(emphatically)"}]},{"type":"dialogue","content":[{"type":"text","text":"Dr. Campbell, now let\'s get this thing straight. I\'m leaving. I\'m leaving right now. I\'m going to school. This is my last chance. Uncle Billy here, he\'s your man."}]},{"type":"character","content":[{"type":"text","text":"DR. CAMPBELL"}]},{"type":"dialogue","content":[{"type":"text","text":"But, George, they\'ll vote with Potter otherwise."}]},{"type":"transition","content":[{"type":"text","text":"LAP DISSOLVE"}]}]',
      modified: '2022-04-09T21:34:24.665+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c68',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. SKY – - NIGHT"}]},{"type":"action","content":[{"type":"text","text":"The same stars we saw in the opening sequence are once more twinkling as we hear the voices form Heaven"}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"I know. I know. He didn\'t go."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s right. Not only that, but he gave his school money to his brother Harry, and sent him to college. Harry became a football star – made second team All American."}]},{"type":"character","content":[{"type":"text","text":"CLARENCE\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes, but what happened to George?"}]},{"type":"transition","content":[{"type":"text","text":"LAP DISSOLVE"}]}]',
      modified: '2022-04-09T21:34:24.668+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c6a',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. RAILROAD STATION – DAY – FOUR YEARS - LATER"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"Characteristic activity; a number of people waiting for the train.  Uncle Billy is seated on a baggage wagon eating peanuts as George paces up and down in front of him."}]},{"type":"character","content":[{"type":"text","text":"JOSEPH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"George got four years older, waiting for Harry to come back and take over the Building and Loan."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, there are plenty of jobs around for somebody that likes to travel. Look at this."}]},{"type":"parenthetical","content":[{"type":"text","text":"(takes some folders from his pocket)"}]},{"type":"dialogue","content":[{"type":"text","text":"There... Venezuela oil fields – wanted, man with construction experience. Here\'s the Yukon, right ere – wanted, man with engineering experience."}]},{"type":"action","content":[{"type":"text","text":"The WHISTLE of the approaching train is heard."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Thar she blows. You know what the three most exciting sounds in the world are?"}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Uh-huh. Breakfast is served; lunch is served; dinner..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"No, "},{"type":"text","text":"no"},{"type":"text","text":", no, "},{"type":"text","text":"no!"},{"type":"text","text":" Anchor chains, plane motors, and train whistles."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Peanut?"}]},{"type":"transition","content":[{"type":"text","text":"WIPE TO:"}]}]',
      modified: '2022-04-09T21:34:24.671+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c6c',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. TRAIN – - DAY"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"The train comes to a stop, and Harry is among the first to get off, followed by an attractive girl about the same age as he is.  George rushes into the shot, and as the brothers embrace:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(joyously)"}]},{"type":"dialogue","content":[{"type":"text","text":"There\'s the professor now! Old professor, Phi Beta Kappa Bailey! All American!"}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, if it isn\'t old George Geographic Explorer Bailey! What? No husky dogs? No sled?"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Uncle Billy)"}]},{"type":"dialogue","content":[{"type":"text","text":"Uncle Billy, you haven\'t changed a bit."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Nobody ever changes around here. You know that."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, am I glad to see you."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Say, where\'s Mother?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"She\'s home cooking the fatted calf. Come on, let\'s go."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, wait. Wait... "},{"type":"text","text":"Wait"},{"type":"text","text":" a minute."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"The group, including Ruth "},{"type":"text","text":"Dakin."},{"type":"text","text":" This is the young lady who came off the train with Harry. In the excitement of greetings she has been momentarily forgotten. She stands, smiling, waiting."}]},{"type":"action","content":[{"type":"text","text":"She stands, smiling, waiting. "}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"How do you do."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Ruth "},{"type":"text","text":"Dakin."}]},{"type":"character","content":[{"type":"text","text":"RUTH"}]},{"type":"dialogue","content":[{"type":"text","text":"Ruth "},{"type":"text","text":"Dakin"},{"type":"text","text":" Bailey, if you don\'t mind."}]},{"type":"action","content":[{"type":"text","text":"George and Uncle Billy stare, astounded."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Huh?"}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I wired you I had a surprise. Here she is. Meet the wife."}]},{"type":"action","content":[{"type":"text","text":"George is thunderstruck. He takes Ruth\'s hand."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, what do you know – wife."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, how do you do. Congratulations. "},{"type":"text","text":"Congratulations."},{"type":"text","text":" What am I doing?"}]},{"type":"action","content":[{"type":"text","text":"He kisses Ruth.  CAMERA MOVES WITH them down the platform."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Harry, why didn\'t you tell somebody?"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to Ruth)"}]},{"type":"dialogue","content":[{"type":"text","text":"What\'s a pretty girl like you doing marrying this two-headed brother of mine?"}]},{"type":"character","content":[{"type":"text","text":"RUTH"}]},{"type":"parenthetical","content":[{"type":"text","text":"(smiling)"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I\'ll tell you. It\'s purely mercenary. My father offered him a job."}]},{"type":"action","content":[{"type":"text","text":"George stops, with a sinking feeling. Uncle Billy and Ruth continue out of shot. Harry stops with George."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(as he moves off)"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, he gets you and a job? Well, Harry\'s cup "},{"type":"text","text":"runneth"},{"type":"text","text":" over."}]},{"type":"character","content":[{"type":"text","text":"HARRY"}]},{"type":"dialogue","content":[{"type":"text","text":"George... about that job. Ruth spoke out of turn. I never said I\'d take it. You\'ve been holding the bag here for four years, and... well, I won\'t let you down, George.  I would like to... Oh, wait a minute. I forgot the bags. I\'ll be right back."}]},{"type":"action","content":[{"type":"text","text":"He runs out of the shot, George watching him."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George slowly moves after Uncle Billy and Ruth. He is thinking deeply."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"It was a surprise to me. This is the new Mrs. Bailey, my nephew\'s wife. Old, "},{"type":"text","text":"old"},{"type":"text","text":" friend of the family."}]},{"type":"character","content":[{"type":"text","text":"RUTH\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, of course. I\'ve heard him speak of you."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"And I want to tell you, we\'re going to give the biggest party this town ever saw."}]},{"type":"action","content":[{"type":"text","text":"CAMERA MOVES WITH George as he comes into the scene. Ruth detaches herself from the group and offers George some popcorn."}]},{"type":"character","content":[{"type":"text","text":"RUTH"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to George)"}]},{"type":"dialogue","content":[{"type":"text","text":"Here, have some popcorn. George, "},{"type":"text","text":"George"},{"type":"text","text":", George... that\'s all Harry ever talks about."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(quietly)"}]},{"type":"dialogue","content":[{"type":"text","text":"Ruth, this... what about this job?"}]},{"type":"character","content":[{"type":"text","text":"RUTH"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, well, my father owns a glass factory in Buffalo. He wants to get Harry started in the research business."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"He wants to get Harry started in the research business. "}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Is it a good job?"}]},{"type":"character","content":[{"type":"text","text":"RUTH"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, yes, very. Not much money, but a good future, you know. Harry\'s a genius at research. My father fell in love with him."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"And you did, too?"}]},{"type":"action","content":[{"type":"text","text":"Ruth nods, smiling."}]},{"type":"transition","content":[{"type":"text","text":"WIPE TO:"}]}]',
      modified: '2022-04-09T21:34:24.674+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c6e',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. FRONT PORCH – BAILEY HOME – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Cousin "},{"type":"text","text":"Eustace"},{"type":"text","text":" is taking a photograph of the family group assembled on the porch. Flash bulbs go off, and the group breaks up. The crowd enters the front door of the house, leaving George and Uncle Billy on the porch."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT – GEORGE AND UNCLE BILLY"}]},{"type":"action","content":[{"type":"text","text":"The latter is tipsy. He feels very high."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, boy, oh boy, oh boy. I feel so good I could spit in Potter\'s eye. I think I will. What did you say, huh? Oh, maybe I\'d better go home."}]},{"type":"action","content":[{"type":"text","text":"He looks around for his hat, which is on his head."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Where\'s my hat? Where\'s my..."}]},{"type":"action","content":[{"type":"text","text":"George takes the hat from Uncle Billy\'s head and hands it to him."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, thank you, George. Which one is mine?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(laughing)"}]},{"type":"dialogue","content":[{"type":"text","text":"The middle one."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, thank you, George, old boy, old boy.  Now, look – if you\'ll point me in the right direction... would you do that?  George?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Right down here."}]},{"type":"action","content":[{"type":"text","text":"They descend the porch steps, and George turns his uncle around and heads him down the street."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"Old Building and Loan pal, huh..."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Now you just turn this way and go right straight down."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"That way, huh?"}]},{"type":"action","content":[{"type":"text","text":"He staggers out of the scene, and as George turns away, we hear Uncle Billy singing \\"My Wild Irish Rose.\\" There is a CRASH of cans and bottles, then:"}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY\'S VOICE"}]},{"type":"dialogue","content":[{"type":"text","text":"I\'m all right. I\'m all right. \\"...the sweetest flower that grows... \\""}]}]',
      modified: '2022-04-09T21:34:24.679+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c70',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. HOUSE – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George is standing at the garden gate. He takes some travel folders from his pocket, looks at them and throws them away. He is obviously disturbed about the latest turn of events. His mother comes out of the house and kisses him."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Mom."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(as she kisses him)"}]},{"type":"dialogue","content":[{"type":"text","text":"That\'s for nothing. How do you like her?"}]},{"type":"action","content":[{"type":"text","text":"She nods toward the house, where Harry and Ruth, among a crowd of other couples, are dancing to the MUSIC of a phonograph, and can be seen through the front door."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"She\'s swell."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Looks like she can keep Harry on his toes."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Keep him out of Bedford Falls, anyway."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Did you know that Mary Hatch is back from school?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Uh-huh."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Came back three days ago."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hmmmm..."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Nice girl, Mary."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hmmmm..."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Kind that will help you find the answers, George."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hmmm..."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, stop that grunting."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hmmm..."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Can you give me one good reason why you shouldn\'t call on Mary?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Sure – Sam Wainwright."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Hmmm?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes. Sam\'s crazy about Mary."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, she\'s not crazy about him."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, how do you know? Did she discuss it with you?"}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"No."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well then, how do you know?"}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, I\'ve got eyes, haven\'t I? Why, she lights up like a firefly whenever you\'re around."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh..."}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"And besides, Sam Wainwright\'s away in New York, and you\'re here in Bedford Falls."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"And all\'s fair in love and war?"}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"parenthetical","content":[{"type":"text","text":"(primly)"}]},{"type":"dialogue","content":[{"type":"text","text":"I don\'t know about war."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Mother, you know, I can see right through you – right back to your back collar button... trying to get rid of me, huh?"}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Uh-huh."}]},{"type":"action","content":[{"type":"text","text":"They kiss. Mrs. Bailey puts George\'s hat on his head."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Well, here\'s your hat, what\'s your hurry?  All right, Mother, old Building and Loan pal, I think I\'ll go out and find a girl and do a little passionate necking."}]},{"type":"character","content":[{"type":"text","text":"UNCLE BILLY"}]},{"type":"dialogue","content":[{"type":"text","text":"All right, Mother, old Building and Loan pal, I think I\'ll go out and find a girl and do a little passionate necking. "}]},{"type":"character","content":[{"type":"text","text":"MRS. BAILEY"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, George!"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Now, if you\'ll just point me in the right direction... This direction?"}]},{"type":"parenthetical","content":[{"type":"text","text":"(as he leaves)"}]},{"type":"dialogue","content":[{"type":"text","text":"Good night, Mrs. Bailey."}]},{"type":"transition","content":[{"type":"text","text":"WIPE TO:"}]}]',
      modified: '2022-04-09T21:34:24.681+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c72',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. MAIN STREET BEDFORD FALLS – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George is standing in the middle of the street, hands in his pockets. As a girl passes, he turns and watches her for a moment.  He is obviously undecided as to what he wants to do."}]}]',
      modified: '2022-04-09T21:34:24.685+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c74',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. VIOLET BICK\'S BEAUTY SHOP – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM SHOT"}]},{"type":"action","content":[{"type":"text","text":"Violet is locking up for the night. A couple of men are crowding around her, each one bent on taking her out. There is laughter, kidding and pawing. She looks up and sees George standing there."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to the two men)"}]},{"type":"dialogue","content":[{"type":"text","text":"Excuse me..."}]},{"type":"character","content":[{"type":"text","text":"MAN"}]},{"type":"dialogue","content":[{"type":"text","text":"Now, wait a minute."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"I think I got a date. But stick around, fellows, just in case, huh?"}]},{"type":"character","content":[{"type":"text","text":"MAN"}]},{"type":"dialogue","content":[{"type":"text","text":"We\'ll wait for you, baby."}]},{"type":"action","content":[{"type":"text","text":"CAMERA PANS WITH Violet as she crosses the street to George."}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM CLOSE SHOT – GEORGE AND VIOLET"}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, "},{"type":"text","text":"Georgie-Porgie."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Vi."}]},{"type":"action","content":[{"type":"text","text":"He looks her over. Violet takes her beauty shop seriously and she\'s an eyeful. She senses the fact that George is far from immune to her attractions. She links her arm in his and continues on down the street with him."}]},{"type":"shot","content":[{"type":"text","text":"CLOSE MOVING SHOT – GEORGE AND VIOLET"}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"What gives?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Nothing."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Where are you going?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, I\'ll probably end up down at the library."}]},{"type":"action","content":[{"type":"text","text":"They stop walking and face one another."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"George, don\'t you ever get tired of just reading about things?"}]},{"type":"action","content":[{"type":"text","text":"Her eyes are seductive and guileful as she looks up at him. He is silent for a moment, then blurts out:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Yes... what are you doing tonight?"}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(feigned surprise)"}]},{"type":"dialogue","content":[{"type":"text","text":"Not a thing."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Are you game, Vi? Let\'s make a night of it."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(just what she wanted)"}]},{"type":"dialogue","content":[{"type":"text","text":"Oh, I\'d love it, "},{"type":"text","text":"Georgie."},{"type":"text","text":" "},{"type":"text","text":"What\'ll"},{"type":"text","text":" we do?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Let\'s go out in the fields and take off our shoes and walk through the grass."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"dialogue","content":[{"type":"text","text":"Huh?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Then we can go up to the falls. It\'s beautiful up there in the moonlight, and there\'s a green pool up there, and we can swim in it. Then we can climb Mt. Bedford, and smell the pines, and watch the sunrise against the peaks, and... we\'ll stay up there the whole night, and "},{"type":"text","text":"everybody\'ll"},{"type":"text","text":" be talking and "},{"type":"text","text":"there\'ll"},{"type":"text","text":" be a terrific scandal..."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(interrupting)"}]},{"type":"dialogue","content":[{"type":"text","text":"George, have you gone crazy? Walk in the grass in my bare feet? Why, it\'s ten miles up to Mt. Bedford."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Shhh..."}]},{"type":"character","content":[{"type":"text","text":"VIOLET"}]},{"type":"parenthetical","content":[{"type":"text","text":"(angrily)"}]},{"type":"dialogue","content":[{"type":"text","text":"You think just because you..."}]},{"type":"action","content":[{"type":"text","text":"By this time a small crowd has collected to watch the above scene.  Violet is furious and talking in a loud voice, and George is trying to quiet her. Finally:"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Okay, just forget about the whole thing."}]},{"type":"action","content":[{"type":"text","text":"As George stalks off, the crowd breaks into laughter, and we"}]},{"type":"transition","content":[{"type":"text","text":"WIPE TO:"}]}]',
      modified: '2022-04-09T21:34:24.688+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c76',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. RESIDENTIAL STREET – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"George is walking slowly past the Hatch home. He stares meditatively at the simple dwelling, then he starts walking ahead.  But after a few steps he turns around and starts back. He walks past the house a few yards, turns, and starts back again."}]},{"type":"action","content":[{"type":"text","text":"He stares meditatively at the simple dwelling, then he starts walking ahead. "}]}]',
      modified: '2022-04-09T21:34:24.692+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c78',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"INT. BEDROOM WINDOW – HATCH HOME – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"CLOSE SHOT"}]},{"type":"action","content":[{"type":"text","text":"Mary is looking out the window, watching George walk back and forth."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"What are you doing, picketing?"}]},{"type":"action","content":[{"type":"text","text":"George stops, startled, and looks up."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"Hello, Mary. I just happened to be passing by."}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Yeah, so I noticed. Have you made up your mind?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"How\'s that?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Have you made up your mind?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"About what?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"About coming in. Your mother just phoned and said you were on your way over to pay me a visit."}]}]',
      modified: '2022-04-09T21:34:24.695+0000',
      __v: 0,
    },
    {
      _id: '6251fbe0b67b0c000d429c7a',
      isActive: false,
      isOmit: false,
      content:
        '[{"type":"heading","content":[{"type":"text","text":"EXT. STREET – - NIGHT"}]},{"type":"shot","content":[{"type":"text","text":"MEDIUM LONG SHOT"}]},{"type":"action","content":[{"type":"text","text":"George looks surprised at this."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"My mother just called you? Well, how did she know?"}]},{"type":"character","content":[{"type":"text","text":"MARY"}]},{"type":"dialogue","content":[{"type":"text","text":"Didn\'t you tell her?"}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"dialogue","content":[{"type":"text","text":"I didn\'t tell anybody. I just went for a walk and happened to be passing by..."}]},{"type":"action","content":[{"type":"text","text":"But Mary has disappeared from the window."}]},{"type":"character","content":[{"type":"text","text":"GEORGE"}]},{"type":"parenthetical","content":[{"type":"text","text":"(to himself)"}]},{"type":"dialogue","content":[{"type":"text","text":"What do you... went for a walk, that\'s all."}]}]',
      modified: '2022-04-09T21:34:24.697+0000',
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
