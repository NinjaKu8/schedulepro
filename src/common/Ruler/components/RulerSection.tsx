
type Props = {
  isHoriz: boolean;
  sectionCount: number;
}

export function RulerSection({ isHoriz, sectionCount }: Props): JSX.Element {
  const sectionNameClass = isHoriz ? 'align-items-center justify-content-end' : 'align-items-end justify-content-center'
  const sectionNameStyle = { width: '1.8em', fontSize: '.8em' }

  return (
    <div className={`d-flex h-100 w-100 px-1 ${sectionNameClass}`} style={sectionNameStyle}>
      {sectionCount}
    </div>
  )
}