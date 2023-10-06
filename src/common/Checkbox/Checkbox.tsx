import Form from 'react-bootstrap/Form'

type Props = {
  callback: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  className?: string;
  size?: 'sm' | 'lg'| 'xl';
  [x: string]: any;
}

const checkboxSize = {
  sm: 'small',
  lg: 'fs-6',
  xl: 'fs-4',
}

export function Checkbox({ callback, className, size, ...rest }: Props): JSX.Element {
  return (
    <Form.Check type='checkbox' onChange={callback} className={`${size ? checkboxSize[size] : ''} ${className}`} {...rest} />
  )
}
