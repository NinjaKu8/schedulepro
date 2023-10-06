import { ReactNode, forwardRef } from 'react'

type CustomToggleProps = {
  children?: ReactNode;
  onClick: (e: any) => void;
}
type Ref = HTMLDivElement;

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
export const DropdownToggleCustom = forwardRef<Ref, CustomToggleProps>(({ children, onClick }, ref): JSX.Element => {

  function handleOnClick(e: React.MouseEvent): void {
    e.preventDefault()
    onClick(e)
  }

  return (
    <div ref={ref} onClick={handleOnClick} className='pointer'>
      {children}
    </div>
  )
})
