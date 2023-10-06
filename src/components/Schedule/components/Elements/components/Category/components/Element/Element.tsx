import { RiCloseFill } from 'react-icons/ri'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'

type Props = {
  elementId: string;
}

const elements = [
  { _id: '26', name: '1. GEORGE', categoryId: '1' },
  { _id: '27', name: '2. MARY', categoryId: '1' },
  { _id: '28', name: '5. MR. POTTER', categoryId: '1' },
  { _id: '29', name: '5 ND Pedestrians have a very long name indeed', categoryId: '2' },
  { _id: '30', name: 'Store Owner', categoryId: '2' },
  { _id: '31', name: 'George\'s Car', categoryId: '4' },
]

const elementStyle = { width: '16em', marginLeft: '1em' }
const removeStyle = { width: '1.5em' }

export function Element({ elementId }: Props): JSX.Element {
  const toggleManageElements = useDispatchUpdateOffcanvasComponent('manageElements')
  const element = elements.find(e=>e._id===elementId)

  function handleClickRemove(e: React.MouseEvent<HTMLDivElement>): void {
    e.preventDefault()
    console.log('remove element',elementId)
  }

  return (
    <div 
      id={elementId} 
      key={elementId} 
      className='element pointer d-flex justify-content-between bg-primary-25 rounded-1 px-2 me-2' 
      style={elementStyle}
    >
      <div className='py-1 flex-fill' onClick={toggleManageElements}>{element?.name}</div>
      <div className='text-end py-1' style={removeStyle} onClick={handleClickRemove}><RiCloseFill className='element-remove-icon' /></div>
    </div>
  )
}
