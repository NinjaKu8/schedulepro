import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PricingCard } from './components'
import { subscriptionPlans } from 'globals/subscriptionPlans'

export function PricingCards(): JSX.Element {
  return (
    <Row>
      {subscriptionPlans.map((plan,i): any => (
        <Col lg={4} key={plan.id} className='mb-4 mb-lg-0' >
          <PricingCard 
            plan={plan} 
            className={`me-lg-4 mb-3 mb-lg-0 mx-auto slide-down h-100 ${i===1 ? 'scale shadow-lg' : 'shadow'}`} 
          />
        </Col>
      ))}
    </Row>
  )
}
