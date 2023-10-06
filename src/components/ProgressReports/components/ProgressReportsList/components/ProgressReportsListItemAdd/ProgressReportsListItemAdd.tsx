import { Tip } from 'common'
import { IoMdAddCircleOutline } from 'react-icons/io'

const addStyle = { minHeight: '5em', maxWidth: '40em' }

export function ProgressReportsListItemAdd(): JSX.Element {

  function handleClick(): void {
    console.log('clicked')
  }

  return (
    <Tip text='Add a project to your progress reports'>
      <div 
        className='d-flex align-self-center justify-content-center rounded text-secondary text-hover-dark hover-highlight pointer' 
        style={addStyle} 
        onClick={handleClick}
      >
        <p className='display-1'>
          <IoMdAddCircleOutline />
        </p>
      </div>
    </Tip>
  )
}