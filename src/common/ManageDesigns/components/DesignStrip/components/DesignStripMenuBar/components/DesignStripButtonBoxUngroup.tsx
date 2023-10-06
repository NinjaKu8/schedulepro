import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export function DesignStripButtonBoxUngroup(): JSX.Element {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click')
  }

  return (
    <Nav.Item
      as={Button}
      disabled={false}
      size="sm"
      variant="secondary"
      onClick={handleClick}
    >
      Ungroup
    </Nav.Item>
  )
}
