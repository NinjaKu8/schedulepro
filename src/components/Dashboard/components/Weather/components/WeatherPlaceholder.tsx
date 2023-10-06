import Placeholder from "react-bootstrap/Placeholder"
import Card from "react-bootstrap/Card"

type WeatherSectionProps = {
  className: string;
}

const weatherSectionStyle = { minHeight: '12em'}

function WeatherSection({ className }: WeatherSectionProps): JSX.Element {
  return (
    <div className={`d-flex flex-column justify-content-around w-50 p-2 ${className}`} style={weatherSectionStyle}>
      <Placeholder as={Card.Title} animation="glow" className='d-flex justify-content-around'>
        <Placeholder xs={3} /> <Placeholder xs={3} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={4} /> <Placeholder xs={2} /> <Placeholder xs={4} />  <Placeholder xs={1} />
        <Placeholder xs={2} /> <Placeholder xs={3} /> <Placeholder xs={2} />  <Placeholder xs={4} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow" className='d-flex justify-content-between'>
        <Placeholder xs={3} /> <Placeholder xs={3} />
      </Placeholder>
    </div>
  )
}

export function WeatherPlaceholder(): JSX.Element {
  return(
    <Card className='p-0 rounded overflow-hidden'>
      <Card.Body className='d-flex flex-column gap-3 p-0'>
        <div className='d-flex'>
          <WeatherSection className='bg-light' />
          <WeatherSection className='bg-secondary-25' />
        </div>
        <div className='d-flex'>
          <WeatherSection className='bg-light' />
          <WeatherSection className='bg-secondary-25' />
        </div>
      </Card.Body>
    </Card>
  )
}
