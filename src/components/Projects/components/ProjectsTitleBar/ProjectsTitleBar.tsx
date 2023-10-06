
import { ButtonFilter, ButtonSelectAll } from 'common'

export function ProjectsTitleBar() {
  return (
    <div className='d-flex gap-1 align-items-center mb-4'>
      <div>
        <h5 className='display-5'>Projects</h5>
      </div>
      <div className='ms-auto'>
        <ButtonFilter />
      </div>
      <div>
        <ButtonSelectAll />
      </div>
    </div>
  ) 
}
