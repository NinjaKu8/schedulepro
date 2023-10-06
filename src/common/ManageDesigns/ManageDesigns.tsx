import { useState } from 'react'
import { useAppSelector } from 'store/hooks'
import { ManagerTabs } from 'common'
import { ManagerTab } from '../ManagerTabs/ManagerTabs'
import { DesignStrip, ManageDesignsDesigns, ManageDesignsStrips, ManageDesignsPalettes } from './components'

const managerTabs: ManagerTab[] = [
  { id: 'designs', label: 'Designs', component: <ManageDesignsDesigns /> },
  { id: 'strips', label: 'Strips', component: <ManageDesignsStrips /> },
  { id: 'palettes', label: 'Palettes', component: <ManageDesignsPalettes /> },
]

export function ManageDesigns():JSX.Element {
  const isWide = useAppSelector(state=>state.local.sch_managedesignsstrips_isWide)

  const [ active, setActive ] = useState(managerTabs[0].id)

  return (
    isWide
      ? <DesignStrip />
      : <ManagerTabs active={active} managerTabs={managerTabs} setActive={setActive} />
    
  )
}
