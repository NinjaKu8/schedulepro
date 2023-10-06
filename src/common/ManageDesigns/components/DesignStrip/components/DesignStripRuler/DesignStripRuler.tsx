import { Ruler } from 'common/Ruler'

type Props = {
  children: React.ReactNode
}

const rulerSize = '2.5em'
const junctionStyle = { height: rulerSize, width: rulerSize }
const rulerVerticalStyle = {
  height: `calc(100% - ${rulerSize})`,
  width: rulerSize,
}
const rulerHorizontalStyle = {
  height: rulerSize,
  width: `calc(100% - ${rulerSize})`,
}

export function DesignStripRuler({ children }: Props): JSX.Element {
  return (
    <div className="d-flex bg-secondary h-100">
      <div className="d-flex flex-column h-100">
        <div
          className="bg-dark opacity-50 border-end border-bottom"
          style={junctionStyle}
        ></div>
        <div style={rulerVerticalStyle}>
          <Ruler
            direction="vertical"
            unit="inch"
            className="bg-dark opacity-50 text-light"
          />
        </div>
      </div>
      <div className="d-flex flex-column h-100" style={rulerHorizontalStyle}>
        <Ruler
          direction="horizontal"
          unit="inch"
          className="bg-dark opacity-50 text-light"
        />
        {children}
      </div>
    </div>
  )
}
