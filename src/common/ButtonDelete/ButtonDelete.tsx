import { ReactNode } from 'react'

import { useToggle } from 'hooks'
import { ModalDelete } from 'common'

type Props = {
  disabled?: boolean;
  callback: () => void;
  children: ReactNode;
}

export function ButtonDelete({ callback, children, disabled }: Props): JSX.Element {
  const [ show, toggle ] = useToggle(false)
  return (
    <>
      {disabled
        ? <div>{children}</div>
        : <div onClick={toggle}>{children}</div>
      }
      <ModalDelete callback={callback} show={show} toggle={toggle} />
    </>
  )
}
