
import { Units } from 'types/types'
import { RulerSection, RulerTick } from './components'

type Props = {
  direction?: 'horizontal' | 'vertical';
  unit?: Units;
  className?: string;
  style?: React.CSSProperties;
}

const unitObjects = {
  inch: { name: 'in', relative: false, divisions: 17, divisionPixels: 96, ticks: 8, step: 1, showTicks: true },
  centimeter: { name: 'cm', relative: false, divisions: 50, divisionPixels: 37.8, ticks: 10, step: 1, showTicks: true },
  pixel: { name: 'px', relative: false, divisions: 163, divisionPixels: 25, ticks: 10, step: 25, showTicks: false },
  time: { name: 'hr', relative: true, divisions: 12, divisionPixels: null, ticks: 4, step: 1, showTicks: true },
  percent: { name: '%', relative: true, divisions: 10, divisionPixels: null, ticks: 10, step: 10, showTicks: true },
}

export function Ruler({ direction='vertical', unit='inch', className, style }: Props): JSX.Element {
  const isHoriz = direction==='horizontal'
  const sections = new Array(unitObjects[unit].divisions).fill(0).map((_,i) => ((i+1)*unitObjects[unit].step))
  const ticks = new Array(unitObjects[unit].ticks).fill(0).map((_,i) => i+1)

  const sectionSizeCSS = unitObjects[unit].relative ? `calc(100% / ${unitObjects[unit].divisions})` : `${unitObjects[unit].divisionPixels}px`

  const containerStyle = { height: isHoriz ? '2.5em' : 'auto' }
  const dividerClass = isHoriz ? 'border-end' : 'border-bottom'
  const directionClass = isHoriz ? 'd-flex flex-row w-100' : 'd-flex flex-column h-100'
  const sectionClass = isHoriz ? 'd-flex flex-column' : 'd-flex flex-row'
  const sectionStyle = { minHeight: isHoriz ? 'auto' : sectionSizeCSS, minWidth: isHoriz ? sectionSizeCSS : 'auto' }

  return (
    <div className={`${directionClass} ${className}`} style={style ? style : containerStyle}>
      {sections.map((sectionCount,s) => (
        <div className={`${sectionClass} align-items-center justify-content-between overflow-hidden ${s<sections.length-1 && (dividerClass)}`} style={sectionStyle}>
          <RulerSection key={sectionCount} isHoriz={isHoriz} sectionCount={sectionCount} />
          {unitObjects[unit].showTicks && (
            <div className={directionClass}>
              {ticks.map((tick,t) => (
                <RulerTick key={tick} isHoriz={isHoriz} isLast={t>=ticks.length-1} ticks={unitObjects[unit].ticks} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}