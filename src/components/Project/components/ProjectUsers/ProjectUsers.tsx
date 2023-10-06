import { AvatarNameTitle, ButtonManage, CardSmall } from 'common'

export function ProjectUsers(): JSX.Element {
  return (
    <div className='d-flex flex-column gap-2'>
      <CardSmall>
        <div className='d-flex flex-column gap-2'>
          <AvatarNameTitle userId='ABC123' />
          <div className='ms-auto'>
            <ButtonManage managerName='manageProject' color='success' />
          </div>
        </div>
      </CardSmall>
    </div>
  )
}
