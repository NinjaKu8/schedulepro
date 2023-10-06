import { ReactNode, useCallback } from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next'

const overflowFix = {height: 'calc(100% - 2.4em)'}

export interface ManagerTab {
  id: string;
  label: string;
  component: ReactNode;
}

type Props = {
  active?: string;
  managerTabs: ManagerTab[];
  setActive?: (eventKey: string) => void;
}

// active and setActive are optional if you want to use this component as a controlled component
export function ManagerTabs({ active, setActive, managerTabs }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((eventKey: string|null): void => {
    if(eventKey && setActive) setActive(eventKey)
  },[setActive])

  return (
    <div className='h-100'>
      <Tab.Container activeKey={active} onSelect={handleClick} defaultActiveKey={active ? undefined : managerTabs[0]?.id} >
        <Nav variant='tabs' justify>
          {managerTabs.map(tab=>(
            <Nav.Item key={tab.id}>
              <Nav.Link eventKey={tab.id}>{t(tab.label)}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content className='h-100'>
          {managerTabs.map(tab=>(
            <Tab.Pane key={tab.id} eventKey={tab.id} style={overflowFix}>
              <div className='d-flex flex-column p-absolute h-100'>
                {tab.component}
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}
