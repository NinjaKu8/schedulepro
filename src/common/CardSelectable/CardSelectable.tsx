import { ReactNode } from 'react'
import { useAppSelector } from 'store/hooks'
import Card from 'react-bootstrap/Card'
import { CardSelector } from 'common'
import classnames from 'classnames'

type Props = {
  children?: ReactNode;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

function CardOverlay() {
  const isCardsSelect = useAppSelector(state=>state.local.isCardsSelect)
  return (
    <div 
      className={classnames('w-100 h-100 position-absolute bg-white bg-opacity-25',{ 'd-block': isCardsSelect, 'd-none': !isCardsSelect })} 
    />
  )
}

export function CardSelectable({ children, className, color, style }: Props): JSX.Element {
  return (
    <Card className={`card-selectable shadow overflow-hidden ${className}`} style={style}>
      <CardSelector color={color} />
      <CardOverlay />
      {children}
    </Card> 
  )
}
