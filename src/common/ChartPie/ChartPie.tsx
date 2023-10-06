import { Margin } from '@nivo/core'
import { InheritedColorConfig, OrdinalColorScaleConfig } from '@nivo/colors'
import { ComputedDatum, MayHaveLabel, ResponsivePie } from '@nivo/pie'
import { LegendProps } from '@nivo/legends'

type Props = {
  data: any;
  valueFormat?: (value: number) => string;
  [x: string]: any;
}

const chartStyle = { height: '34em', width: '99%' }
const defs = [
  {
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    size: 4,
    padding: 1,
    stagger: true
  },
  {
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
  }
]
const colors: OrdinalColorScaleConfig<Omit<ComputedDatum<MayHaveLabel>, "color" | "fill" | "arc">> = { datum: 'data.color' }
const margin: Margin = { top: 40, right: 80, bottom: 80, left: 80 }
const borderColor: InheritedColorConfig<ComputedDatum<MayHaveLabel>> = { from: 'color', modifiers: [[ 'darker', 0.2 ]] }
const arcLinkLabelsColor: InheritedColorConfig<ComputedDatum<MayHaveLabel>> = { from: 'color' }
const arcLabelsTextColor: InheritedColorConfig<ComputedDatum<MayHaveLabel>> = { from: 'color', modifiers: [[ 'darker', 2 ]] }
const legend: LegendProps = {
  anchor: 'bottom',
  direction: 'row',
  justify: false,
  translateX: 0,
  translateY: 38,
  itemWidth: 0,
  itemHeight: 0,
  itemTextColor: '#999',
  itemDirection: 'left-to-right',
  itemOpacity: 1,
  symbolSize: 18,
  symbolShape: 'circle',
  effects: [{ on: 'hover', style: { itemTextColor: '#000' } }]
}

export function ChartPie({ data, ...rest }: Props): JSX.Element {
  const itemsSpacing = data.length / 2 * 10
  return (
    <div style={chartStyle}>
      <ResponsivePie
        data={data}
        colors={colors}
        margin={margin}
        innerRadius={0.6}
        padAngle={1}
        cornerRadius={10}
        activeOuterRadiusOffset={8}
        borderWidth={2}
        borderColor={borderColor}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={arcLinkLabelsColor}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={arcLabelsTextColor}
        defs={defs}
        legends={[{ ...legend, itemsSpacing }]}
        {...rest}
      />
    </div>
  )
}