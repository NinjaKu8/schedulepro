import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

type Props = {
  placement?: any,
  text?: string,
  children?: any,
  [x: string]: any;
}

export function Tip({ placement, text, children, ...rest }: Props): JSX.Element {
  return (
    text
      ? <OverlayTrigger
          placement={placement}
          overlay={<Tooltip>{text}</Tooltip>}
          {...rest}
        >
          {children}
        </OverlayTrigger>
      : <>
          {children}
        </>
  )
}
