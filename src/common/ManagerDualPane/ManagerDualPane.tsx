import { ReactNode } from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next'

import { useMediaQuery } from 'hooks'

type Props = {
  menuBar?: ReactNode;
  left: ReactNode;
  right: ReactNode;
}

const overflowFixMenuBar = { height: 'calc(100% - 2.4em)' }
const overflowFix = { height: '100%' }

function DualPanes({ menuBar, left, right }: Props): JSX.Element {
  return (
    <div className='d-flex flex-column p-absolute h-100'>
      {menuBar &&
        <div className='flex-shrink-0'>
          {menuBar}
        </div>
      }
      <div className='d-flex p-absolute' style={menuBar ? overflowFixMenuBar : overflowFix}>
        <div className='d-flex flex-column w-50 shadow'>
          {left}
        </div>
        <div className='d-flex flex-column w-50'>
          {right}
        </div>
      </div>
    </div>
  )
}

function TabPanes({ menuBar, left, right }: Props): JSX.Element { // have to manually create tabs for overflow to work
  const { t } = useTranslation()
  return (
    <div className='h-100'>
      <Tab.Container defaultActiveKey='list'>
        <Nav variant='tabs' justify>
          <Nav.Item>
            <Nav.Link eventKey='list'>{t('List')}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='edit'>{t('Edit')}</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className='h-100'>
          <Tab.Pane eventKey='list' style={menuBar ? overflowFixMenuBar : overflowFix}>
            <div className='d-flex flex-column p-absolute h-100'>
              {menuBar &&
                <div className='flex-shrink-0'>
                  {menuBar}
                </div>
              }
              <div className='overflow-auto'>
                {left}
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey='edit' style={menuBar ? overflowFixMenuBar : overflowFix}>
            <div className='d-flex flex-column p-absolute h-100'>
              {menuBar &&
                <div className='flex-shrink-0'>
                  {menuBar}
                </div>
              }
              <div className='overflow-auto'>
                {right}
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}

export function ManagerDualPane({ menuBar, left, right }: Props): JSX.Element {
  const matches = useMediaQuery('(min-width: 600px)') // switch to tab panes on small screens
  return (
    matches
      ? <DualPanes menuBar={menuBar} left={left} right={right} />
      : <TabPanes menuBar={menuBar} left={left} right={right} />
  )
}
