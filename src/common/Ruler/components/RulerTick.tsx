
type Props = {
  isHoriz: boolean;
  isLast: boolean;
  ticks: number;
}

export function RulerTick({ isHoriz, isLast, ticks }: Props): JSX.Element {
  const tickSizeCSS = `${100 / ticks}%`
  const tickStyle = { height: isHoriz ? '.5em' : tickSizeCSS, width: isHoriz ? tickSizeCSS : '.5em' }
  const dividerClass = isHoriz ? 'border-end' : 'border-bottom'

  return (
    <div className={`${isLast ? '' : dividerClass}`} style={tickStyle} />
  )
}
