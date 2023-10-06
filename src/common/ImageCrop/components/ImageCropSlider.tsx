import Form from 'react-bootstrap/Form'

import { Tip } from 'common'

type Props = {
  disabled: boolean
  id: string
  labelText: string
  max: string
  min: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  onClickTip: () => void
  step?: string
  tipText: string
  value: number
  valueDecoration?: string
}

export function ImageCropSlider({
  disabled,
  id,
  labelText,
  max,
  min,
  onChange,
  onClickTip,
  step,
  tipText,
  value,
  valueDecoration,
}: Props): JSX.Element {
  return (
    <>
      <Tip text={tipText}>
        <Form.Label htmlFor={id} onClick={onClickTip}>
          {labelText}: {value}
          {valueDecoration}
        </Form.Label>
      </Tip>
      <Form.Range
        disabled={disabled}
        id={id}
        max={max}
        min={min}
        onChange={onChange}
        step={step}
        value={value}
      />
    </>
  )
}
