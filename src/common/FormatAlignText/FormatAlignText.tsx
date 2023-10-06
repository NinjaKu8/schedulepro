import Nav from 'react-bootstrap/Nav'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { BsJustify, BsTextCenter, BsTextLeft, BsTextRight } from 'react-icons/bs'

type Props = {
  callback: (val: 'left'|'center'|'right'|'justify') => void;
  disabled?: boolean;
  selectedAlignment: string;
  [x:string]: any;
}

const alignments = [
  { name: 'left', icon: <BsTextLeft /> },
  { name: 'center', icon: <BsTextCenter /> },
  { name: 'right', icon: <BsTextRight /> },
  { name: 'justify', icon: <BsJustify /> }
]

export function FormatAlignText({ callback, disabled, selectedAlignment, ...rest }: Props): JSX.Element {
  return (
    <Nav.Item>
      <ToggleButtonGroup defaultValue={selectedAlignment} name='align-text-toggle-group' size='sm' type='radio' onChange={callback} {...rest}>
        {alignments.map(align=>(
          <ToggleButton disabled={disabled} id={align.name} key={align.name} value={align.name} variant='light'>
            {align.icon}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Nav.Item>
  )
}