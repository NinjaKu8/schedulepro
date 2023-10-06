import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

type Props = {
  active?: boolean;
  callback: () => void;
  disabled?: boolean;
  name: JSX.Element | string;
  [x: string]: any;
}

export function ScriptSceneEditorMenuNavItem({ active, callback, disabled, name, ...rest }: Props): JSX.Element {
  return (
    <Nav.Item 
      active={active} 
      as={Button} 
      className='text-dark' 
      disabled={disabled} 
      onClick={callback}
      size='sm' 
      variant='light' 
      {...rest}
    >
      {name}
    </Nav.Item>
  )
}