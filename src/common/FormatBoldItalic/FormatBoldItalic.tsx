import Nav from 'react-bootstrap/Nav'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BsTypeBold, BsTypeItalic, BsTypeUnderline, BsTypeStrikethrough } from 'react-icons/bs'

type Props = {
  callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  isBoldSelected?: boolean;
  isItalicSelected?: boolean;
  isUnderlineSelected?: boolean;
  isStrikethroughSelected?: boolean;
}

export function FormatBoldItalic({ callback, disabled, bold=true, italic=true, underline=false, strikethrough=false, isBoldSelected=false, isItalicSelected=false, isUnderlineSelected=false, isStrikethroughSelected=false }: Props): JSX.Element {
  return (
    <>
      { (bold || italic || underline || strikethrough) &&
        <Nav.Item as={ButtonGroup}>
          {bold &&
            <Button disabled={disabled} size='sm' variant='light' value='bold' active={isBoldSelected} onClick={callback}><BsTypeBold /></Button>
          }
          {italic &&
            <Button disabled={disabled} size='sm' variant='light' value='italic' active={isItalicSelected} onClick={callback}><BsTypeItalic /></Button>
          }
          {underline &&
            <Button disabled={disabled} size='sm' variant='light' value='underline' active={isUnderlineSelected} onClick={callback}><BsTypeUnderline /></Button>
          }
          {strikethrough &&
            <Button disabled={disabled} size='sm' variant='light' value='strikethrough' active={isStrikethroughSelected} onClick={callback}><BsTypeStrikethrough /></Button>
          }
        </Nav.Item>
      }
    </>
  )
}