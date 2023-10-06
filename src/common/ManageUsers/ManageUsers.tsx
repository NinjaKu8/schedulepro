import { useCallback, useState } from 'react'
import Card from 'react-bootstrap/Card'

import { ManageUserItem, ManageUserNav } from './components'

type User = {
  id?: string;
  name: string;
  userId: string;
}
const users: User[] = [
  { id: '1', name: 'Michael R. Williams', userId: 'ABC123'},
  { id: '2', name: 'Bernie Boscoe', userId: 'ABC124'},
  { id: '3', name: 'Peter Etzweiler', userId: 'ABC125'},
  { id: '4', name: 'John Mattingly', userId: 'ABC126'},
  { id: '5', name: 'Jason C. Brown', userId: 'ABC127'},
  { id: '6', name: 'Sarah J. Donohue', userId: 'ABC128'},
]

export function ManageUsers(): JSX.Element {

  const [ selectedIds, setSelectedIds ] = useState<string[]>([])

  const handleClickCheckbox = useCallback((): void => {
    setSelectedIds(selectedIds => users.length===selectedIds.length
      ? [] 
      : users.map(user=>user.userId)
    )
  },[selectedIds])

  const handleSelectUser = useCallback((id: string): void => {
    setSelectedIds(selectedIds => selectedIds.includes(id)
      ? selectedIds.filter(selectedId => selectedId !== id)
      : [...selectedIds, id]
    )
  },[selectedIds])

  const handleClickAdd = useCallback((): void => {
    console.log('add')
  },[selectedIds])

  const handleClickDelete = useCallback((): void => {
    console.log('delete', selectedIds)
  },[selectedIds])
  
  return (
    <Card className='border-gray-300 border-1 overflow-hidden mt-0'>
      <ManageUserNav
        handleClickCheckbox={handleClickCheckbox}
        handleClickAdd={handleClickAdd}
        handleClickDelete={handleClickDelete}
        checked={users.length===selectedIds.length}
        isSelectSome={selectedIds.length>0}
      />
      <Card.Body>
        <div className='d-flex flex-column gap-2 mx-1'>
          {users.map(user=>(
            <ManageUserItem 
              key={user.id} 
              name={user.name} 
              userId={user.userId} 
              checked={selectedIds.includes(user.userId)}
              callback={handleSelectUser} 
            />
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}
