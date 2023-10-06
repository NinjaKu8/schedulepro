import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'
import { useCallback } from 'react'

type Props = {
  toggleWelcome: ()=>void;
}

export function Welcome({ toggleWelcome }: Props): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleCloseWelcome = useCallback((): void => {
    toggleWelcome()
  },[toggleWelcome])

  const handleClickTour = useCallback((): void => {
    console.log('click tour')
  },[])

  const handleClickVideo = useCallback((): void => {
    console.log('click video')
  },[])

  const handleClickProfile = useCallback((): void => {
    navigate('profile')
  },[navigate])

  const handleClickSubscribe = useCallback((): void => {
    navigate('subscription')
  },[navigate])

  return (
    <div>
      <Card className='shadow'>
        <Card.Body>
          <Card.Title className='d-flex'>
            <div className='me-auto'>{t('Welcome to Think Crew')}</div>
            <div><CloseButton onClick={handleCloseWelcome} /></div>
          </Card.Title>
          <Card.Text>
            <Trans i18nKey='welcome-message1'>
              You just joined the fastest growing scheduling community in the entertainment industry.
            </Trans>
          </Card.Text>   
          <Card.Text>
            <Trans i18nKey='welcome-message2'>
              What would you like to do first?
            </Trans>
          </Card.Text>   
          <div className='d-flex gap-3 flex-wrap'>
            <Button variant='warning' className='shadow' onClick={handleClickTour}>{t('Take a tour')}</Button>  
            <Button variant='info' className='shadow' onClick={handleClickVideo}>{t('Watch Intro Video')}</Button>  
            <Button variant='primary' className='shadow' onClick={handleClickProfile}>{t('Complete your user profile')}</Button>  
            <Button variant='success' className='shadow' onClick={handleClickSubscribe}>{t('Subscribe to get all features')}</Button>  
          </div>
        </Card.Body>
      </Card> 
    </div>
  )
}
