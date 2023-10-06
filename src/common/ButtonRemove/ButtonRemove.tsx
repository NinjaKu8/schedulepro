import Button from 'react-bootstrap/Button'
import { BiMinus } from 'react-icons/bi'

type Props = {
  className?: string;
  callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
  [x:string]: any;
}

const addButtonStyles = { width: '1.8em', height: '1.8em', flex: '0 0 1.8em' }

export function ButtonRemove({ className, callback, ...rest }: Props): JSX.Element {
  return (
    <Button 
      size='sm' 
      variant='outline-danger'
      className={`rounded rounded-circle text-center my-auto p-0 ${className}`}
      style={addButtonStyles}
      onClick={callback}
      {...rest}
    >
      <BiMinus className='fs-5' />
    </Button>
  )
}
