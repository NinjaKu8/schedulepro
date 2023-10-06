import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from 'react-bootstrap/Navbar'
import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { AiOutlineMenu } from 'react-icons/ai'

import { LanguageDropdown, ModalLogin, GradientBackground } from 'common'
import { useToggle } from 'hooks'

const landingNavigationStyle = { zIndex: 10 }

const navItems = [
  { id: 0, to: '/', text: 'Home' },
  { id: 1, to: 'features', text: 'Features' },
  { id: 2, to: 'pricing', text: 'Pricing' },
  { id: 3, to: 'initiatives', text: 'Initiatives' },
  { id: 4, to: 'about', text: 'About' },
  { id: 5, to: 'contact', text: 'Contact' },
]

export function LandingNavigation(): JSX.Element {
  const [ show, toggle ] = useToggle(false)
  const { t } = useTranslation()

  const handleClickLogin = useCallback((): void => {
    toggle()
  },[toggle])

  return (
    <GradientBackground>
      <Navbar className='landing-navbar flex-shrink-0' expand='lg' style={landingNavigationStyle}>
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
            <Image src='/assets/img/brand/tc_logo_01_horizontal_white.svg' width='140' alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='border-light border border-2 p-2'>
            <AiOutlineMenu className='text-light' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='d-flex justify-content-between w-100' variant='pills' activeKey='/home'>
              {navItems.map(navItem=>(
                <Nav.Item key={navItem.id}>
                  <Nav.Link as={NavLink} to={navItem.to} className='text-light px-4'>{t(navItem.text)}</Nav.Link>
                </Nav.Item>
              ))}
              <div className='vr text-light d-none d-sm-inline-block' />
              <Nav.Item>
                <Nav.Link onClick={handleClickLogin} className='text-light px-4'>{t('Login')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to='/createaccount' className='text-light px-4'>{t('Sign Up')}</Nav.Link>
              </Nav.Item>
              <Nav.Item className='landing-navbar__language'>
                <LanguageDropdown className='border-0 bg-none rounded text-light px-4 fs-6' />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin show={show} toggle={toggle} />
    </GradientBackground>
  )
}
