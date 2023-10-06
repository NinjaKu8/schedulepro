import { useNavigate } from 'react-router-dom'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { scheduleMenuItems } from 'globals/scheduleMenuItems'
import { FileMenuGroup } from "./components"

export interface IFileMenu {
  id: string;
  name: string;
  items: IFileMenuItem[];
}

export interface IFileMenuItem {
  id: string;
  name: string;
  hasEllipsis?: boolean;
  isDivider: boolean;
  shortcut?: string;
  items?: IFileMenuItem[];
  onClick?: ()=>void;
}

export function FileMenu(): JSX.Element {
  const navigate = useNavigate()
  const linkDocumentation = () => window.open('https://docs.thinkcrew.com', '_blank')
  const linkFeature = () => navigate('/featurerequest')
  const linkIssue = () => navigate('/reportissue')
  const linkKeyboard = () => navigate('/keyboardreference')
  const linkSchedules = () => navigate('/user/schedule')
  const linkVideos = () => window.open('https://www.youtube.com/c/thinkcrewmedia/playlists', '_blank')
  const toggleExport = useDispatchUpdateOffcanvasComponent('export')
  const toggleFindReplace = useDispatchUpdateOffcanvasComponent('findReplace')
  const toggleImport = useDispatchUpdateOffcanvasComponent('import')
  const toggleManageScenarios = useDispatchUpdateOffcanvasComponent('manageScenarios')
  const toggleManageCalendars = useDispatchUpdateOffcanvasComponent('manageCalendars')
  const toggleManageCategories = useDispatchUpdateOffcanvasComponent('manageCategories')
  const toggleManageDesigns = useDispatchUpdateOffcanvasComponent('manageDesigns')
  const toggleManageElements = useDispatchUpdateOffcanvasComponent('manageElements')
  const toggleManageSchedule = useDispatchUpdateOffcanvasComponent('manageSchedule')
  const toggleManageUsers = useDispatchUpdateOffcanvasComponent('manageUsers')
  const toggleNewSchedule = useDispatchUpdateOffcanvasComponent('newSchedule')
  const togglePublish = useDispatchUpdateOffcanvasComponent('publish')
  const toggleSortAddDays = useDispatchUpdateOffcanvasComponent('sortAddDays')
  const toggleRenumberBreakdowns = useDispatchUpdateOffcanvasComponent('renumberBreakdowns')
  const toggleSettings = useDispatchUpdateOffcanvasComponent('manageScheduleSettings')

  const menuGroups = scheduleMenuItems({ linkDocumentation, linkFeature, linkIssue, linkKeyboard, linkSchedules, linkVideos, toggleExport, toggleFindReplace, toggleImport, toggleManageScenarios, toggleManageCalendars, toggleManageCategories, toggleManageDesigns, toggleManageElements, toggleManageSchedule, toggleManageUsers, toggleNewSchedule, togglePublish, toggleSortAddDays, toggleRenumberBreakdowns, toggleSettings })

  return (
    <div className='no-arrow file-menu d-flex'>
      {menuGroups.map(menuGroup=>(
        <FileMenuGroup
          key={menuGroup.id}
          menuGroup={menuGroup}
        />
      ))}
    </div>
  )
}
