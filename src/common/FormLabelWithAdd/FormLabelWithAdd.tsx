import { ButtonAdd, FormLabel } from 'common'

type Props = {
  text?: string;
  callback: ()=>void;
  [x:string]: any;
}

export function FormLabelWithAdd({ text, callback, ...rest }: Props): JSX.Element {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <FormLabel {...rest}>{text}</FormLabel>
      <ButtonAdd callback={callback} />
    </div>
  )
}
