import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next'

import { InitiativesEducation, InitiativesUss } from './components'

export default function Initiatives(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Tab.Container defaultActiveKey="education">

      <Nav className='initiatives justify-content-center gap-5 mt-5'>
        <Nav.Item>
          <Nav.Link eventKey="education">{t('Education Initiative')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="uss">{t('Universal Schedule Standard')}</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="education">
          <InitiativesEducation />
        </Tab.Pane>
        <Tab.Pane eventKey="uss">
          <InitiativesUss />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  )
}
