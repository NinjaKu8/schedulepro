
import Dropdown from 'react-bootstrap/Dropdown'
import { dropdownStyle } from 'globals/dropdownStyle'

type Props = {
  callback: (e: string|null) => void;
  disabled?: boolean;
  selectedId: string;
  [x:string]: any;
}
type Fonts = {
  [x:string]: string;
}

const fonts: Fonts = {
  '0': 'Arial',
  '1': 'Times New Roman',
}

export function FormatFont({ callback, disabled, selectedId, ...rest }: Props): JSX.Element {
  return (
    <Dropdown onSelect={callback}>
      <Dropdown.Toggle disabled={disabled} size='sm' variant='light' {...rest}>
        {fonts[selectedId]}
      </Dropdown.Toggle>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>Font</Dropdown.Header>
        {Object.keys(fonts).map(font=>(
          <Dropdown.Item 
            active={font===selectedId}
            eventKey={font}
            key={font}
          >
            <span style={{fontFamily: fonts[selectedId]}}>{fonts[selectedId]}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}