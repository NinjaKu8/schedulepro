import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export function DesignStripButtonFieldAdd(): JSX.Element {

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click')
  }
  
  return (
    <Nav.Item as={Button} disabled={false} size='sm' variant='success' onClick={handleClick}>Add Field</Nav.Item>
  )
}
