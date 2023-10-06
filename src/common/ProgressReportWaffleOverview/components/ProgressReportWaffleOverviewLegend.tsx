import { ProgressReportWaffleOverviewChip } from './index'

function LegendItem({ episode }: { episode: string }): JSX.Element {
  return (
    <div className='d-flex ms-3 align-items-center gap-2 small'>
      <ProgressReportWaffleOverviewChip episode={episode} size='sm'>{`\u00a0`}</ProgressReportWaffleOverviewChip> Episode {episode}
    </div>
  )
}

export function ProgressReportWaffleOverviewLegend(): JSX.Element {
  return (
    <div className='d-flex justify-content-center gap-2'>
      <LegendItem episode='1' />
      <LegendItem episode='2' />
    </div>
  )
}