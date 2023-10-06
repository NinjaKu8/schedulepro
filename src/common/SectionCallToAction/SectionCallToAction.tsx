import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { SectionSkewed } from 'common'

type Props = {
  title: string;
  children: JSX.Element;
}

const sectionCallToActionStyle = { maxWidth: '60em' }

export function SectionCallToAction({ title, children }: Props): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    navigate('/createaccount')
  },[navigate])

  return (
    <SectionSkewed className='gradient-background' color='#AA4DD4'>
      <Container style={sectionCallToActionStyle}>
        <div className='d-flex flex-column align-items-center gap-4'>
          <h1 className='fw-bold lh-base text-light'>{title}</h1>
          <p className='lh-base text-light'>
            {children}
          </p>
          <div>
            <Button onClick={handleClick} variant='primary' size='lg' className='rounded-pill p-3 shadow-lg text-light drift-y'>{t('Join now for free')}</Button>
          </div>
        </div>
      </Container>
    </SectionSkewed>
  )
}
