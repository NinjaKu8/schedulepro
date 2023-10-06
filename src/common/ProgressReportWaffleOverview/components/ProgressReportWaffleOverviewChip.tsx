
type Props = {
  children: React.ReactNode;
  isComplete?: boolean;
  episode: string;
  size?: 'sm'
}

const itemStyle = {
  width: '2.6em',
  height: '2.6em',
}
const itemStyleSmall = {
  width: '1.6em',
  height: '1.6em',
}

export function ProgressReportWaffleOverviewChip({ children, isComplete, episode, size }: Props): JSX.Element {
  return (
    <div className={`d-flex bg-warning rounded-1 align-items-center justify-content-center small overflow-hidden ${isComplete && 'opacity-25'} ${episode==='1' ? 'bg-warning' : 'bg-danger'}`} style={size ? itemStyleSmall :itemStyle}>
      {children}
    </div>
  )
}