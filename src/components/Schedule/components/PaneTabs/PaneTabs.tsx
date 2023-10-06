import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useTranslation } from 'react-i18next'

import { Board, Breakdown, Dood, Elements, ScriptSchedule } from '../index'

export function PaneTabs(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='schedule-pane-tabs'>
      <Tabs defaultActiveKey='breakdown' id='schedule-pane-tabs'>
        <Tab eventKey='breakdown' title={t('Breakdown')}>
          <Breakdown />
        </Tab>
        <Tab eventKey='elements' title={t('Elements')}>
          <Elements />
        </Tab>
        <Tab eventKey='script' title={t('Script')}>
          <ScriptSchedule />
        </Tab>
        <Tab eventKey='board1' title={t('Board 1')}>
          <Board boardId='ABC123' />
        </Tab>
        <Tab eventKey='board2' title={t('Board 2')}>
          <Board boardId='ABC125' />
        </Tab>
        <Tab eventKey='recycle' title={t('Recycle')}>
          <Board boardId='ABC124' />
        </Tab>
        <Tab eventKey='dood' title={t('Dood')}>
          <Dood />
        </Tab>
      </Tabs>
    </div>
  )
}
