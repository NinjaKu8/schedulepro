
type Props = {
  strokeWidth?: number;
  percentage: number;
}

const backgroundPathStyle = { stroke: '#d6d6d6' }
const strokeColor = '#007dbc'

export function ProgressCircle({ strokeWidth=8, percentage }: Props): JSX.Element {
	const radius = (50 - strokeWidth / 2)
  const pathDescription = `
    M 50,50 m 0,-${radius}
    a ${radius},${radius} 0 1 1 0,${2 * radius}
    a ${radius},${radius} 0 1 1 0,-${2 * radius}
  `
  const diameter = Math.PI * 2 * radius

  return (
    <svg
      viewBox="0 0 100 100"
      width={100}
      height={100}
    >
      <path
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={backgroundPathStyle}
      />

      <path
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: strokeColor,
          strokeLinecap: 'round',
          strokeDasharray: `${diameter}px ${diameter}px`,
          strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
        }}
      />

      <text
        x={50}
        y={50}
        style={{
          fill: strokeColor,
          fontSize: '1.2em',
          dominantBaseline: 'central',
          textAnchor: 'middle',
        }}
      >
        {`${percentage}%`}
      </text>
    </svg>
  )
}
