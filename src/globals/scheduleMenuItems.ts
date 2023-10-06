import { IFileMenu } from 'common/FileMenu/FileMenu'

type Props = {
  linkDocumentation: ()=>void;
  linkFeature: ()=>void;
  linkIssue: ()=>void;
  linkKeyboard: ()=>void;
  linkSchedules: ()=>void;
  linkVideos: ()=>void;
  toggleExport: ()=>void;
  toggleFindReplace: ()=>void;
  toggleImport: ()=>void;
  toggleManageScenarios: ()=>void;
  toggleManageCalendars: ()=>void;
  toggleManageCategories: ()=>void;
  toggleManageDesigns: ()=>void;
  toggleManageElements: ()=>void;
  toggleManageSchedule: ()=>void;
  toggleManageUsers: ()=>void;
  toggleNewSchedule: ()=>void;
  togglePublish: ()=>void;
  toggleSettings: ()=>void;
  toggleSortAddDays: ()=>void;
  toggleRenumberBreakdowns: ()=>void;
}

export function scheduleMenuItems({ linkDocumentation, linkFeature, linkIssue, linkKeyboard, linkSchedules, linkVideos, toggleExport, toggleFindReplace, toggleImport, toggleManageScenarios, toggleManageCalendars, toggleManageCategories, toggleManageDesigns, toggleManageElements, toggleManageSchedule, toggleManageUsers, toggleNewSchedule, togglePublish, toggleSortAddDays, toggleRenumberBreakdowns, toggleSettings }: Props) {
  const menu: IFileMenu[] = [
    { id: '1', name: 'File', items: [
      { id: '1', name: 'New Schedule', shortcut: '⌘ N', hasEllipsis: true, isDivider: false, onClick: toggleNewSchedule},
      { id: '3', name: '', isDivider: true },
      { id: '4', name: 'Open', shortcut: '⌘ O', hasEllipsis: true, isDivider: false, onClick: ()=>{}},
      { id: '5', name: 'Open Recent', shortcut: '', hasEllipsis: true, isDivider: false, items: [
        { id: '1', name: 'Blue Revision', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '2', name: 'Work in progress', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '3', name: 'Pink Script', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      ]},
      { id: '6', name: '', isDivider: true},
      { id: '7', name: 'Duplicate Schedule', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '8', name: '', isDivider: true},
      { id: '9', name: 'Add Script', shortcut: '', hasEllipsis: true, isDivider: false, onClick: ()=>{}},
      { id: '10', name: '', isDivider: true},
      { id: '11', name: 'Share', shortcut: '', hasEllipsis: true, isDivider: false, onClick: ()=>{}},
      { id: '12', name: '', isDivider: true},
      { id: '13', name: 'Import', shortcut: '⇧ ⌘ I', hasEllipsis: true, isDivider: false, onClick: toggleImport},
      { id: '14', name: 'Export', shortcut: '⇧ ⌘ X', hasEllipsis: true, isDivider: false, onClick: toggleExport},
      { id: '15', name: 'Publish', shortcut: '⌘ P', hasEllipsis: true, isDivider: false, onClick: togglePublish},
      { id: '16', name: '', isDivider: true},
      { id: '17', name: 'Settings', shortcut: '', hasEllipsis: true, isDivider: false, onClick: toggleSettings},
      { id: '18', name: '', isDivider: true},
      { id: '19', name: 'Delete Schedule', shortcut: '', hasEllipsis: true, isDivider: false, onClick: ()=>{}},
      { id: '20', name: 'Close Schedule', shortcut: '⌘ W', hasEllipsis: false, isDivider: false, onClick: linkSchedules},
    ]},
    { id: '2', name: 'Edit', items: [
      { id: '1', name: 'Undo', shortcut: '⌘ Z', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '2', name: 'Redo', shortcut: '⇧ ⌘ W', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '3', name: '', isDivider: true},
      { id: '4', name: 'Cut', shortcut: '⌘ X', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '5', name: 'Copy', shortcut: '⌘ C', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '6', name: 'Paste', shortcut: '⌘ V', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '7', name: '', isDivider: true},
      { id: '8', name: 'Find & Replace', shortcut: '⌘ F', hasEllipsis: true, isDivider: false, onClick: toggleFindReplace},
    ]},
    { id: '3', name: 'Breakdowns', items: [
      { id: '1', name: 'New Breakdown', shortcut: '⌘ 1', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '2', name: 'Delete Breakdown', shortcut: '⌫', hasEllipsis: true, isDivider: false, onClick: ()=>{}},
      { id: '3', name: 'Add Day', shortcut: '⌥ ⌘ 3', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '4', name: 'Add Banner', shortcut: '⌥ ⌘ 4', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '5', name: 'Duplicate', shortcut: '⌥ ⌘ D', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '6', name: 'Split', shortcut: '⌥ ⌘ S', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '7', name: 'Merge', shortcut: '⌥ ⌘ M', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '8', name: 'Group', shortcut: '⌥ ⌘ G', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '9', name: 'Recycle', shortcut: '⌥ ⌘ 0', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      { id: '10', name: '', isDivider: true},
      { id: '11', name: 'Renumber Breakdowns', shortcut: '', hasEllipsis: true, isDivider: false, onClick: toggleRenumberBreakdowns},
      { id: '12', name: 'Sort & Add Days', shortcut: '', hasEllipsis: true, isDivider: false, onClick: toggleSortAddDays},
    ]},
    { id: '4', name: 'Manage', items: [
      { id: '1', name: 'Elements', shortcut: '⇧ ⌘ E', hasEllipsis: true, isDivider: false, onClick: toggleManageElements},
      { id: '2', name: 'Categories', shortcut: '⇧ ⌘ C', hasEllipsis: true, isDivider: false, onClick: toggleManageCategories},
      { id: '3', name: 'Scenarios', shortcut: '⇧ ⌘ B', hasEllipsis: true, isDivider: false, onClick: toggleManageScenarios},
      { id: '4', name: 'Calendars', shortcut: '⇧ ⌘ R', hasEllipsis: true, isDivider: false, onClick: toggleManageCalendars},
      { id: '5', name: 'Schedule', shortcut: '⇧ ⌘ S', hasEllipsis: true, isDivider: false, onClick: toggleManageSchedule},
      { id: '9', name: 'Users', shortcut: '⇧ ⌘ U', hasEllipsis: true, isDivider: false, onClick: toggleManageUsers},
      { id: '6', name: '', isDivider: true},
      { id: '7', name: 'Designs', shortcut: '⇧ ⌘ D', hasEllipsis: true, isDivider: false, onClick: toggleManageDesigns},
    ]},
    { id: '5', name: 'Window', items: [
      { id: '1', name: 'New Pane', shortcut: '⇧ ⌘ P', hasEllipsis: false, isDivider: false, items: [
        { id: '1', name: 'Breakdown', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '2', name: 'Script', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '3', name: 'Day Out of Days', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '4', name: 'Board 1', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '5', name: 'Board 2', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '6', name: 'Recycle', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
      ]},
      { id: '2', name: 'Pane Groups', shortcut: '', hasEllipsis: false, isDivider: false, items: [
        { id: '1', name: 'Default', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '2', name: 'Breakdown', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '3', name: 'Scheduling', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '4', name: 'Cross Boarding', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '5', name: 'Cast Avail', shortcut: '', hasEllipsis: false, isDivider: false, onClick: ()=>{}},
        { id: '6', name: '', isDivider: true},
        { id: '7', name: 'Save Current Pane Layout', shortcut: '', hasEllipsis: true, isDivider: false, onClick: ()=>{}},
      ]},
    ]},
    { id: '6', name: 'Help', items: [
      { id: '1', name: 'Documentation', shortcut: '', hasEllipsis: true, isDivider: false, onClick: linkDocumentation},
      { id: '2', name: 'Keyboard Shortcut Reference', shortcut: '', hasEllipsis: true, isDivider: false, onClick: linkKeyboard},
      { id: '3', name: 'Video Tutorials', shortcut: '', hasEllipsis: true, isDivider: false, onClick: linkVideos},
      { id: '4', name: '', isDivider: true},
      { id: '5', name: 'Feature Request', shortcut: '', hasEllipsis: true, isDivider: false, onClick: linkFeature},
      { id: '6', name: 'Report Issue', shortcut: '', hasEllipsis: true, isDivider: false, onClick: linkIssue},
    ]},
  ]
  return menu
}