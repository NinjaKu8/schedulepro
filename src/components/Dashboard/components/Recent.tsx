import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { useTranslation } from 'react-i18next'

import { DashboardCardHeader } from 'common'

const recentCol1 = { width: '6em' }

export function Recent(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <DashboardCardHeader left={t('Your Recent Work')} right="It's a Wonderful Life" />
      <Card className='shadow'>
        <Card.Body>
          <div className='d-flex flex-column gap-4'>
            <div className='d-flex flex-column align-items-center flex-md-row'>
              <div className='d-flex gap-2 me-auto align-items-center'>
                <div className='me-2' style={recentCol1}><Badge className='d-block' bg='primary'>{t('Schedule')}</Badge></div>
                <div><Link to='/user/schedule/ABC123'>IAWL Schedule Pink Draft</Link></div>
              </div>
              <div className='d-none d-xl-block'>Fri, Mar 14, 2022 - 10:23AM</div>
            </div>
            <div className='d-flex flex-column align-items-center flex-md-row'>
              <div className='d-flex gap-2 me-auto align-items-center'>
                <div className='me-2' style={recentCol1}><Badge className='d-block' bg='warning'>{t('Script')}</Badge></div>
                <div><Link to='/user/script/ABC123'>It's A Wonderful Life</Link></div>
              </div>
              <div className='d-none d-xl-block'>Thu, Mar 13, 2022 - 7:32AM</div>
            </div>
            <div className='d-flex flex-column align-items-center flex-md-row'>
              <div className='d-flex gap-2 me-auto align-items-center'>
                <div className='me-2' style={recentCol1}><Badge className='d-block' bg='primary'>{t('Schedule')}</Badge></div>
                <div><Link to='/user/schedule/ABC123'>Blue Draft</Link></div>
              </div>
              <div className='d-none d-xl-block'>Wed, Mar 12, 2022 - 11:45AM</div>
            </div>
            <div className='d-flex flex-column align-items-center flex-md-row'>
              <div className='d-flex gap-2 me-auto align-items-center'>
                <div className='me-2' style={recentCol1}><Badge className='d-block' bg='primary'>{t('Schedule')}</Badge></div>
                <div><Link to='/user/schedule/ABC123'>First Draft</Link></div>
              </div>
              <div className='d-none d-xl-block'>Tue, Mar 11, 2022 - 1:11PM</div>
            </div>
            <div className='d-flex flex-column align-items-center flex-md-row'>
              <div className='d-flex gap-2 me-auto align-items-center'>
                <div className='me-2' style={recentCol1}><Badge className='d-block' bg='primary'>{t('Schedule')}</Badge></div>
                <div><Link to='/user/schedule/ABC123'>First Draft</Link></div>
              </div>
              <div className='d-none d-xl-block'>Mon, Mar 10, 2022 - 10:23AM</div>
            </div>
          </div>          
        </Card.Body>
      </Card> 
    </div>
  )
}
