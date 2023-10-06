import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from 'store/hooks'
import { Sidebar } from './components'
import { NotifyProvider, OffcanvasExport, OffcanvasFindReplace, OffcanvasImport, OffcanvasManageCalendars, OffcanvasManageCategories, OffcanvasManageDesigns, OffcanvasManageElements, OffcanvasManagePanes, OffcanvasManageProject, OffcanvasManageScenarios, OffcanvasManageSchedule, OffcanvasManageScheduleSettings, OffcanvasManageScript, OffcanvasManageUsers, OffcanvasNewProject, OffcanvasNewSchedule, OffcanvasNewScript, OffcanvasPublish, OffcanvasSortAddDays, OffcanvasRenumberBreakdowns } from 'common'

export default function PrivateContainer(): JSX.Element {
  /* The use of isSidebarWide is a fix for an issue with the schedule panes. Schedule container won't resize properly on its own,
  so forcing its parent to resize manually with the below styles. There might be a good flex fix for this, but I can't find it.  */
  const isSidebarWide = useAppSelector(state=>state.local.isSidebarWide)
  const isLoggedIn = true
  return (
    !isLoggedIn
      ? <Navigate to='/' />
      : <NotifyProvider>
          <main className='user-container d-flex h-100 w-100 bg-light'>
            <Sidebar />
            <div className={`flex-fill mx-2 ${isSidebarWide ?  'is-wide' : 'is-narrow'}`}>
              <Outlet />
            </div>
          </main>
          <OffcanvasExport />
          <OffcanvasFindReplace />
          <OffcanvasImport />
          <OffcanvasManageScenarios />
          <OffcanvasManageCalendars />
          <OffcanvasManageCategories />
          <OffcanvasManageDesigns />
          <OffcanvasManageElements />
          <OffcanvasManagePanes />
          <OffcanvasManageProject />
          <OffcanvasManageSchedule />
          <OffcanvasManageScheduleSettings />
          <OffcanvasManageScript />
          <OffcanvasManageUsers />
          <OffcanvasNewProject />
          <OffcanvasNewSchedule />
          <OffcanvasNewScript />
          <OffcanvasPublish />
          <OffcanvasSortAddDays />
          <OffcanvasRenumberBreakdowns />
        </NotifyProvider>
  )
}
