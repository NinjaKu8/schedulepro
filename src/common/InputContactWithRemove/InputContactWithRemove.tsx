
import { InputContact, ButtonRemove } from 'common'

type Props = {
  contactId: string;
  callback: ()=>void;
  [x:string]: any;
}

export function InputContactWithRemove({ contactId, callback, ...rest }: Props): JSX.Element {
  return (
    <div className='d-flex gap-2 align-items-center'>
      <InputContact contactId='ABC123' {...rest} />
      <ButtonRemove callback={callback} />
    </div>
  )
}
