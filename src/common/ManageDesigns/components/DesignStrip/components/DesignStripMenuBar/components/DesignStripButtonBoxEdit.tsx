import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export function DesignStripButtonBoxEdit(): JSX.Element {

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click')
  }
  
  return (
    <Nav.Item as={Button} disabled={false} size='sm' variant='info' onClick={handleClick}>Edit Box</Nav.Item>
  )
}
