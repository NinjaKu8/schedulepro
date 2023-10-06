import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

type Props = {
  link: string;
  subtitle?: string;
  title: string;
}

const titleStyle = { maxHeight: '2.5em' }

export function CardTitle({ link, subtitle, title }: Props): JSX.Element {
  return (
    <div className='d-flex flex-column gap-1 align-self-center title-column'>
      <div className='overflow-hidden lh-sm' style={titleStyle}>
        <Link to={link} className='mb-0 overflow-hidden plain-link fw-bold text-wrap text-break'>
          {title}
        </Link>
      </div>
      {subtitle &&
        <Card.Text className='small text-muted m-0'>{subtitle}</Card.Text>
      }
    </div>
  )
}
