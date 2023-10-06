import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Card from 'react-bootstrap/Card'
import { FaArrowRight } from "react-icons/fa"
import { BsCheck } from "react-icons/bs"
import { useTranslation } from 'react-i18next'

import { ISubscriptionPlan } from 'globals/subscriptionPlans'

type Props = {
  plan: ISubscriptionPlan;
  className: string;
}

type Point = {
  id: string;
  pay: boolean;
  text: string;
  isBreak: boolean;
}

const points: Point[] = [
  { id: '1', pay: true, text: 'Create as many projects as you want', isBreak: false },
  { id: '2', pay: true, text: 'Collaborate with other users', isBreak: false },
  { id: '3', pay: true, text: 'Invite users to your projects', isBreak: false },
  { id: '4', pay: true, text: 'Import FDX and PDF scripts', isBreak: false },
  { id: '5', pay: true, text: 'Create as many schedules as you want', isBreak: false },
  { id: '6', pay: true, text: 'Directly import a script into your schedules', isBreak: false },
  { id: '7', pay: true, text: 'Utilize multiple unit boards in a schedule', isBreak: false },
  { id: '8', pay: true, text: 'Drag & drop columns in Day Out of Days', isBreak: false },
  { id: '9', pay: false, text: 'PLUS', isBreak: true },
  { id: '10', pay: false, text: 'Export your data to USS, Excel, Casper & CSV', isBreak: false },
  { id: '11', pay: false, text: 'Publish your schedules as PDFs', isBreak: false },
]

const planStyles = { maxWidth: '22em' }
const billingStyles = { height: '1.8em' }

export function PricingCard({ plan, className }: Props): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    navigate('/createaccount')
  },[navigate])

  return (
    <Card className={className} style={planStyles}>
      <Card.Header className={`bg-${plan.color} text-center text-light p-3 border-0`}>{t(plan.header)}</Card.Header>
      <Card.Body className='py-4'>
        <div className='text-center mb-3'>
          <Card.Text className='text-muted fw-bolder'>{plan.id}</Card.Text>
          <h1 className={`mb-3 text-${plan.color}`}><strong>{plan.monthlyPrice}</strong></h1>
          <Card.Text className='small text-muted mb-4' style={billingStyles}>{t(plan.billing)}</Card.Text>
        </div>
        <div className='d-flex flex-column gap-2 mb-2'>
          {points.map(point=>(
            point.isBreak && plan.id!=='Free'
              ? <div key={point.id} className='text-center fw-bolder'>{t('PLUS')}</div>
              : <div key={point.id} className={classNames('d-flex small align-items-start', {'text-muted': !point.pay && plan.id==='Free'})}>
                  <div className={classNames('text-success', {'d-none': !point.pay && plan.id==='Free'})}><BsCheck className='fs-4' /></div> 
                  <div className={classNames('mt-1 ms-3', {'d-none': !point.pay && plan.id==='Free'})}>{t(point.text)}</div>
                </div>
          ))}
        </div>
      </Card.Body>
      <Card.Footer onClick={handleClick} className={`bg-${plan.color} text-center text-light p-3 pointer border-0`}>
        <div className='grow'>{t(plan.buttonText)} <FaArrowRight /></div>
      </Card.Footer>
    </Card>
  )
}
