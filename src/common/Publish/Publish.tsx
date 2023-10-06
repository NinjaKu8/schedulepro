import { ManagerTabs } from 'common'
import { ManagerTab } from '../ManagerTabs/ManagerTabs'

import { PublishBoards, PublishDood, PublishReports } from './components'

const managerTabs: ManagerTab[] = [
  { id: 'boards', label: 'Boards', component: <PublishBoards /> },
  { id: 'dood', label: 'Dood', component: <PublishDood /> },
  { id: 'reports', label: 'Reports', component: <PublishReports /> },
]

export function Publish(): JSX.Element {
  return <ManagerTabs managerTabs={managerTabs} />
}
