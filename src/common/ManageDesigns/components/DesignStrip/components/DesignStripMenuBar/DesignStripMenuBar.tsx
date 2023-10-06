import Form from 'react-bootstrap/Form'

import { NavSimple } from 'common'
import {
  DesignStripButtonBoxUngroup,
  DesignStripButtonBoxGroup,
  DesignStripButtonBoxAdd,
  DesignStripButtonAlignText,
  DesignStripButtonBoldItalic,
  DesignStripButtonBoxDelete,
  DesignStripButtonBoxDuplicate,
  DesignStripDropdownAlignVertical,
  DesignStripDropdownFont,
  DesignStripDropdownFontSize,
  DesignStripDropdownLineHeight,
  DesignStripDropdownCase,
  DesignStripDropdownAlign,
  DesignStripDropdownBorders,
  DesignStripButtonLevel,
  DesignStripButtonLock,
  DesignStripButtonContinue,
  DesignStripButtonFieldAdd,
  DesignStripButtonFieldDelete,
  DesignStripButtonFieldType,
  DesignStripButtonFieldContent,
  DesignStripButtonFieldSizing,
  DesignStripButtonBoxEdit,
} from './components'

type Props = {
  label: string
}

const labelStyle = { width: '4em' }

function MenuBarLabel({ label }: Props): JSX.Element {
  return (
    <div style={labelStyle}>
      <Form.Label className="my-auto">{label}:</Form.Label>
    </div>
  )
}

export function DesignStripMenuBar(): JSX.Element {
  return (
    <>
      <NavSimple className="ps-3">
        <MenuBarLabel label="Box" />
        <DesignStripButtonBoxAdd />
        <DesignStripButtonBoxEdit />
        <DesignStripButtonBoxDuplicate />
        <DesignStripButtonBoxDelete />
        <DesignStripDropdownAlign />
        <DesignStripDropdownBorders />
        <DesignStripButtonLevel />
        <DesignStripButtonLock />
        |
        <DesignStripButtonBoxGroup />
        <DesignStripButtonBoxUngroup />
      </NavSimple>
      <NavSimple className="ps-3">
        <MenuBarLabel label="Field" />
        <DesignStripButtonFieldAdd />
        <DesignStripButtonFieldDelete />
        <DesignStripButtonFieldType />
        <DesignStripButtonFieldContent />
        <DesignStripButtonFieldSizing />
      </NavSimple>
      <NavSimple className="ps-3">
        <MenuBarLabel label="Text" />
        <DesignStripDropdownFont />
        <DesignStripDropdownFontSize />
        <DesignStripButtonBoldItalic />
        <DesignStripButtonAlignText />
        <DesignStripDropdownCase />
        <DesignStripDropdownAlignVertical />
        <DesignStripDropdownLineHeight />
        <DesignStripButtonContinue />
      </NavSimple>
    </>
  )
}
