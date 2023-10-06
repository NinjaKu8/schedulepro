import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { useTranslation } from 'react-i18next'

import { DashboardCardHeader } from 'common'

export function Videos(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <DashboardCardHeader left={t('Recent Videos')} />
      <Card className='shadow'>
        <Card.Body>
          <div className='d-flex flex-column gap-3'>
            <div>
              <Image className='rounded me-3 border' src='/assets/img/blog/video_4.png' alt='video' width='75' height='45' />
              <a href='https://youtu.be/KYYQnj_0Mgg'>Introduction to Think Crew</a>
            </div>
            <div>
              <Image className='rounded me-3 border' src='/assets/img/blog/video_2.png' alt='video' width='75' height='45' />
              <a href='https://youtu.be/KYYQnj_0Mgg'>What's new in Think Crew 2.0</a>
            </div>
            <div>
              <Image className='rounded me-3 border' src='/assets/img/blog/video_3.png' alt='video' width='75' height='45' />
              <a href='https://youtu.be/KYYQnj_0Mgg'>Top 10 Tricks in the new Think Crew</a>
            </div>
            <div>
              <Image className='rounded me-3 border' src='/assets/img/blog/video_1.png' alt='video' width='75' height='45' />
              <a href='https://youtu.be/KYYQnj_0Mgg'>A Message from the Founder</a>
            </div>       
          </div>
        </Card.Body>
      </Card>  
    </div>
  )
}
