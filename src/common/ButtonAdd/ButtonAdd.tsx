import Button from 'react-bootstrap/Button'
import { BsPlus } from 'react-icons/bs'

type Props = {
  className?: string;
  callback: ()=>void;
  [x:string]: any;
}

const addButtonStyles = { width: '1.8em', height: '1.8em', flex: '0 0 1.8em' }

export function ButtonAdd({ className, callback, ...rest }: Props): JSX.Element {
  return (
    <Button 
      size='sm' 
      variant='outline-success'
      className={`rounded rounded-circle text-center my-auto p-0 ${className}`}
      style={addButtonStyles}
      onClick={callback}
      {...rest}
    >
      <BsPlus className='fs-5' />
    </Button>
  )
}
