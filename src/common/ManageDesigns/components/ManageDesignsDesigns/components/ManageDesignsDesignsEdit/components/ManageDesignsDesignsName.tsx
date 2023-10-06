import { AutoInput } from "common"

export function ManageDesignsDesignsName(): JSX.Element {
  return (
    <div>
      <p className='lead mb-2'>Name</p>
      <AutoInput value='MW Custom Design' callback={()=>{}} size='lg' />
    </div>
  )
}
