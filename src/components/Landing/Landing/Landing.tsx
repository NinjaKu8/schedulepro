import { Navigate } from 'react-router-dom'

import { LandingBoards, LandingCollaborate, LandingDood, LandingEndorsements, LandingGetStarted, LandingHeader, LandingInterface, LandingToolsPrimary, LandingToolsSecondary } from './components'

export default function Landing(): JSX.Element {
  const isLoggedIn = false
  return (
    isLoggedIn
      ? <Navigate to='/user' />
      : <div className='d-flex flex-column gap-5'>
          <LandingHeader />
          <LandingToolsPrimary />
          <LandingInterface />
          <LandingCollaborate />
          <LandingDood />
          <LandingBoards />
          <LandingToolsSecondary />
          <LandingEndorsements />
          <LandingGetStarted />
        </div>
  )
}
