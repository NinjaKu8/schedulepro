
import { FormatBoldItalic } from 'common/FormatBoldItalic'

export function DesignStripButtonBoldItalic(): JSX.Element {
  
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    const value = e.currentTarget?.value
    if(value==='bold') {
      console.log('bold was clicked')
    }
    if(value==='italic') {
      console.log('italic was clicked')
    }
  }

  return (
    <FormatBoldItalic callback={handleClick} disabled={false} isBoldSelected={false} isItalicSelected={true} />
  )
}