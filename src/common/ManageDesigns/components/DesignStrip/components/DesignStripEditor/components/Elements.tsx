import { CSSProperties } from 'react'

import style from './style.json'

type Props = {
  content: string
  addedClass?: string
  style: CSSProperties
}

function Element({ content, addedClass, style }: Props) {
  return (
    <div className={`target ${addedClass}`} style={style}>
      {content}
    </div>
  )
}

export function Elements() {
  return (
    <>
      <Element content="Scene Number" style={style.element1 as CSSProperties} />
      <Element content="INT/EXTSet" style={style.element2 as CSSProperties} />
      <Element content="Description" style={style.element3 as CSSProperties} />
      <Element content="Pages Pgs." style={style.element4 as CSSProperties} />
      <Element content="Duration" style={style.element5 as CSSProperties} />

      <Element
        content="BG: Background (Grouped)"
        addedClass="grouped"
        style={style.element6 as CSSProperties}
      />
      <Element
        content="Scene Number"
        addedClass="grouped"
        style={style.element7 as CSSProperties}
      />
    </>
  )
}
