import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

export function Footer(): JSX.Element {
  const { t } = useTranslation()
  return (
    <footer className='flex-shrink-0 my-2 bg-white rounded'>
      <Nav className='d-flex justify-content-center align-items-center gap-3 my-2'>
        <Nav.Item>
          <Nav.Link href='http://support.thinkcrew.com/' className='text-uppercase'>{t('Support')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='http://docs.thinkcrew.com/' className='text-uppercase'>{t('Docs')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='https://download.thinkcrew.com/' className='text-uppercase'>{t('Downloads')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/terms' className='text-uppercase'>{t('Terms of Use')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/privacy' className='text-uppercase'>{t('Privacy')}</Nav.Link>
        </Nav.Item>
        <div className='d-flex gap-3'>
          <Nav.Item>
            <Nav.Link href='https://www.facebook.com/thinkcrewmedia'><FaFacebookSquare /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://twitter.com/thinkcrew'><FaTwitterSquare /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.youtube.com/user/thinkcrewmedia'><FaYoutubeSquare /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.instagram.com/thinkcrewmedia'><FaInstagramSquare /></Nav.Link>
          </Nav.Item>
        </div>
        <div>
          <Badge bg='secondary'>{t('version')} {import.meta.env.VITE_APP_VERSION}</Badge>
        </div>
        <div className='my-auto text-muted'>
          &copy; Think Crew, LLC
        </div>
        
      </Nav>
    </footer>
  )
}
