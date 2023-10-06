import { ReactNode} from 'react'

type Props = {
  children?: ReactNode;
  className?: string;
  color?: string;
  height?: number;
  isRising?: boolean;
}

export function SectionSkewed({ children, className, color, height=6, isRising=false }: Props): JSX.Element {
  const clipPath = isRising 
    ? `polygon(0 ${height}vw, 100% 0, 100% calc(100% - ${height}vw), 0 100%`
    : `polygon(0 0, 100% ${height}vw, 100% 100%, 0 calc(100% - ${height}vw)`
  const sectionStyle = { clipPath, backgroundColor: `${color}` }
  const contentStyle = { marginTop: `${height*2}vw`, marginBottom: `${height*2}vw` }
  return (
    <section className={className} style={sectionStyle}>
      <div style={contentStyle}>
        {children}
      </div>
    </section>
  )
}
