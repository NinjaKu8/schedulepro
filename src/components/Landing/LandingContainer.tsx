import { Outlet } from 'react-router-dom'

import { LandingNavigation } from './LandingNavigation'
import { Footer } from 'common'

export default function LandingContainer(): JSX.Element {
  return (
    <section className='d-flex flex-column min-vh-100'>
      <LandingNavigation />
      <section className='flex-grow-1 align-items-stretch'>
        <Outlet />
      </section>
      <Footer />
    </section>  
  )
}
