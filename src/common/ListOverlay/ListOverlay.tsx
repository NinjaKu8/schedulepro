import { ReactNode } from 'react'
import Overlay from 'react-bootstrap/Overlay'

import { ListOverlayUpdate } from './components'

type Props = {
  children?: ReactNode;
  show: boolean;
  target: any;
}

const popperConfig = { // align the overlay a little down and to the right
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: () => [7, 4],
      },
    },
  ],
}

export function ListOverlay({ children, show, target }: Props): JSX.Element {
  return (
    <Overlay target={target} show={show} placement='bottom-start' popperConfig={popperConfig}>
      <ListOverlayUpdate>
        {children}
      </ListOverlayUpdate>
    </Overlay>
  )
}
