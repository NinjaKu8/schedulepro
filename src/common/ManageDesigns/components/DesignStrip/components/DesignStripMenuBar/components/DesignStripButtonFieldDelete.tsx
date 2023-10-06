import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export function DesignStripButtonFieldDelete(): JSX.Element {

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click')
  }

  return (
    <Nav.Item as={Button} disabled={false} size='sm' variant='danger' onClick={handleClick}>Delete Field...</Nav.Item>
  )
}
