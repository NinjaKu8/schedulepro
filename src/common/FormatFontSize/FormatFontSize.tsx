
import Dropdown from 'react-bootstrap/Dropdown'
import { dropdownStyle } from 'globals/dropdownStyle'

type Props = {
  callback: (e: string|null) => void;
  disabled?: boolean;
  selectedSize: string;
  [x:string]: any;
}

const sizes = ['6','7','8','9','10','11','12','13','14','18','20','24','28','32','64','72']

export function FormatFontSize({ callback, disabled, selectedSize, ...rest }: Props): JSX.Element {
  return (
    <Dropdown onSelect={callback}>
      <Dropdown.Toggle variant='light' size='sm' disabled={disabled} {...rest}>
        {selectedSize ?? 'Size'}
      </Dropdown.Toggle>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>Font Size</Dropdown.Header>
        {sizes.map(size=>(
          <Dropdown.Item 
            active={size===selectedSize}
            eventKey={size}
            key={size}
          >
            {size}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}