import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent } from 'store/slices/local'
import { ButtonRemove, PopoverInfo } from 'common'
import { IListSelectItem } from 'common/ListSelect/ListSelect'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'

const attachedScripts: IListSelectItem[] = [
  {_id: '0', name: 'First Draft', selected: true },
  {_id: '1', name: 'Blue Draft', selected: false },
  {_id: '2', name: 'Pink Draft', selected: true },
  {_id: '3', name: 'Yellow Draft', selected: false },
  {_id: '4', name: 'Green Draft', selected: false },
]
const unattachedScripts: IDropdownTCItem[] = [
  {eventKey: '5', value: 'Goldenrod Draft' },
  {eventKey: '6', value: 'Buff Draft' },
  {eventKey: '7', value: 'Cherry Draft' },
  {eventKey: '8', value: 'Tan Draft' },
]
const listStyle = { height: '7em', maxHeight: '7em' }

export function ManageScheduleScripts(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClickRemove = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const id = e.currentTarget.dataset.id
    if(id) {
      console.log('remove', id)
    }
  },[])

  const handleAddScript = useCallback((eventKey: string|null): void => {
    if(eventKey) {
      if(eventKey==='navigate') {
        navigate('/user/scripts')
        dispatch(updateOffcanvasComponent('newScript'))
        return
      }
      console.log('add', eventKey)
    }
  },[])

  return (
    <Form.Group>
      <div className='d-flex justify-content-between mb-2'>
        <div className='d-flex gap-2 align-items-center'>
          <Form.Label className='text-muted small mb-0'>{t('Scripts')}</Form.Label>
          <PopoverInfo>
            These scripts are currently integrated into your schedule. You can remove them at any time or add new scripts you've already uploaded. To upload new scripts, go to the Scripts page.
          </PopoverInfo>
        </div>
        <div className='d-flex gap-1'>
          <Dropdown onSelect={handleAddScript}>
            <Dropdown.Toggle size='sm' variant="info">
              Add existing script
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {unattachedScripts.map(item=>(
                <Dropdown.Item key={item.eventKey} eventKey={item.eventKey}>{item.value}</Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item eventKey='navigate'>Go to script upload</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Card className='border-gray-300 border-1 m-0'>
        <Card.Body>
          <div className='h-100 overflow-scroll' style={listStyle}>
            {attachedScripts.length===0 
              ? <p className='text-muted small p-2'>{t('You don\'t have any scripts')}</p>
              : <div className='d-flex flex-column gap-2'>
                  {attachedScripts.map(item=>(
                    <div key={item._id} className='d-flex justify-content-between'>
                      <div>{item.name}</div>
                      <ButtonRemove callback={handleClickRemove} data-id={item._id} />
                    </div>
                  ))}
                </div>
            }
          </div>
        </Card.Body>
      </Card>
    </Form.Group>
  )
}
