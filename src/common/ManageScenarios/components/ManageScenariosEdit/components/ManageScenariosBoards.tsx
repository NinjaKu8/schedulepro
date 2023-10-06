import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { AutoInput, ButtonDelete, ManagerListItem } from 'common'
import { useToggle } from 'hooks'

type Board = {
  id?: string;
  name: string;
  isRecycle?: boolean;
}
const boards: Board[] = [
  {id: '1', name: 'Board 1', isRecycle: false},
  {id: '2', name: 'Recycle', isRecycle: true},
  {id: '3', name: 'Second Unit', isRecycle: false},
  {id: '4', name: 'VFX Unit', isRecycle: false},
  {id: '5', name: 'Insert Unit', isRecycle: false},
]

function BoardEdit({ name }: Board): JSX.Element {
  return (
    <AutoInput value={name} callback={()=>{}} />
  )
}

function BoardItem({ name }: Board): JSX.Element {
  return (
    <ManagerListItem className='flex-grow-1 bg-light'><div>{name}</div></ManagerListItem>
  )
}
function BoardItemGroup({ name, isRecycle }: Board): JSX.Element {
  const [ editMode, toggleEditMode ] = useToggle(false)
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2 align-items-center'>
      {editMode
        ? <BoardEdit name={name} />
        : <BoardItem name={name} />
      }
      <Button variant={editMode ? 'success' : 'primary'} size='sm' onClick={toggleEditMode}>{editMode ? t('Save') : t('Edit')}</Button>
      {editMode
        ? <Button variant='secondary' size='sm' onClick={toggleEditMode}>{t('Cancel')}</Button>
        : <ButtonDelete disabled={isRecycle} callback={()=>{}}><Button disabled={isRecycle} variant='danger' size='sm'>{t('Delete')}</Button></ButtonDelete>
      }
    </div>
  )
}

export function ManageScenariosBoards(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <p className='lead mb-2'>{t('Boards')}</p>
        <Button variant='success' size='sm'>{t('New Board')}</Button>
      </div>
      {boards.map(board=>(
        <BoardItemGroup
          key={board.id}
          name={board.name}
          isRecycle={board.isRecycle}
        />  
      ))}    
    </div>
    
  )
}
