import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

import { AutoInput, DropdownTC } from 'common'
import { useState } from 'react'

const boards = [
  {eventKey: 'ABC123', value: 'First Unit'},
  {eventKey: 'DEF456', value: 'Second Unit'},
  {eventKey: 'GHI789', value: 'VFX Unit'},
]

const renumberStyle = { maxWidth: '15em' }

export function RenumberBreakdowns() {

  const [ selectedBoardId, setSelectedBoardId ] = useState<string>(boards[0].eventKey)
  const [ value, setValue ] = useState<string>('1')

  const handleSelectBoard = (id: string | null): void => {
    if(id) setSelectedBoardId(id)
  }

  return (
    <Container>
      <div className='d-flex flex-column'>
        <p className='lead'>This will renumber all of the breakdowns/strips in the selected board. Please use caution when doing this as it cannot be undone.</p>

        <div className='d-flex flex-column gap-3' style={renumberStyle}>
          <div>
            <Form.Label className='text-muted'>Select Board</Form.Label>
            <DropdownTC
              variant='warning'
              toggleClassName='w-100'
              callback={handleSelectBoard}
              items={boards}
              selectedItem={boards.find(b=>b.eventKey===selectedBoardId) ?? boards[0]}
            />
          </div>
          <div>
            <Form.Label className='text-muted'>Renumber from</Form.Label>      
            <AutoInput value={value} callback={setValue} className='text-center' type='text' inputMode='numeric' pattern='[0-9]' />
          </div>
        
        </div>

      </div>
    </Container>
  )
}
