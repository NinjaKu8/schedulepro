import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { useTranslation } from 'react-i18next'

import { ContactCard } from './components'

const containerStyle = { maxWidth: '60em' }
const contactImageStyle = { top: '30px', right: '20%', zIndex: 0 }
const contactContentStyle = { zIndex: 1 }

export default function Contact(): JSX.Element {
  const { t } = useTranslation()

  const emails = [
    { id: '1', name: t('Support'), func: () => 'support@thinkcrew.com' },
    { id: '2', name: t('General Info'), func: () => 'info@thinkcrew.com'},
    { id: '3', name: t('Press Inquiries'), func: () => 'press@thinkcrew.com'},
  ]

  const links = [
    { id: '0', name: t('Documentation'), target: 'https://docs.thinkcrew.com'},
    { id: '1', name: t('Blog'), target: 'https://blog.thinkcrew.com'},
    { id: '2', name: t('Downloads'), target: 'https://store.thinkcrew.com'},
    { id: '3', name: t('Videos'), target: 'https://www.youtube.com/user/thinkcrewmedia'},
    { id: '4', name: t('Twitter'), target: 'https://twitter.com/thinkcrew'},
    { id: '5', name: t('Instagram'), target: 'https://www.instagram.com/thinkcrewmedia'},
    { id: '6', name: t('Facebook'), target: 'https://www.facebook.com/thinkcrewmedia'},
  ]

  return (
    <Container className='slide-down' style={containerStyle}>
      <div className='position-relative d-none d-md-block'>
        <Image src='/assets/img/landing/blob1.png' className='position-absolute opacity-25 drift1' style={contactImageStyle} />
      </div>
      <div className='position-relative' style={contactContentStyle}>
        <h1 className='display-5 my-4'>{t('Contact')}</h1>
        <Row>
          <Col md={6} className='mb-4 mb-md-0'>
            <ContactCard title={t('Email')} description={t('You can contact Think Crew directly at any of these email addresses')}>
              {emails.map(email=>(
                <Row key={email.id}>
                  <Col md={4} className='text-break'>{email.name}</Col>
                  <Col md={8} className='text-break'>{typeof window!=='undefined' && <a href={`mailto:${email.func()}`}>{email.func()}</a>}</Col>
                </Row>
              ))}
            </ContactCard>
          </Col>

          <Col md={6}>
            <ContactCard title={t('Links')} description={t('Here are useful links to various related Think Crew sites')}>
              {links.map(link=>(
                <Row key={link.id}>
                  <Col md={4} className='text-break'>{link.name}</Col>
                  <Col md={8} className='text-break'><a href={link.target}>{link.target}</a></Col>
                </Row>
              ))}
            </ContactCard>
          </Col>
        </Row>
      </div>

    </Container>
  )
}
