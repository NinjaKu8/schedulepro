import { ButtonManage, CardProjectFooter } from 'common'

export function CurrentProjectInfo() {

  return (
    <div className='d-flex flex-column h-100 gap-2 p-3 bg-primary-25'>
      <div className='flex-grow-1'>
        <p className='overflow-hidden text-wrap mb-0 px-3' style={{ maxHeight: '4em' }}>This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project </p>
      </div>
      <div className='flex-shrink-0'>
        <div className='text-center mb-3'>
          <ButtonManage color='primary' managerName='manageProject' />
        </div>
        <CardProjectFooter projectId='ABC123' color='primary' />
      </div>
    </div>
  )
}
