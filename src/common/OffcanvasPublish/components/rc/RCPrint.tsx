import { forwardRef } from 'react'
import RcPrint from 'rc-print'
import Image from 'react-bootstrap/Image'

const imageStyle = { maxWidth: '90%', maxHeight: '90%' }

type Props = {
  text?: string
}

const RCComponent = forwardRef<RcPrint, Props>(({ text }, ref) => {
  // const componentRef = useRef<RcPrint>(null)

  return (
    <div>
      <RcPrint
        ref={ref}
        title="this is Demo1`s title"
        insertHead={false}
        otherStyles={false}
        // otherStyle="@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }"
      >
        <div className="printHide">
          <Image
            fluid
            src="/assets/img/TEMP_PublishPreview2.png"
            alt="temp"
            className="shadow"
            style={imageStyle}
          />
          <p className="red">first para</p>
          <Image
            fluid
            src="/assets/img/TEMP_PublishPreview2.png"
            alt="temp"
            className="shadow"
            style={imageStyle}
          />
          <p className="green">second para</p>
          <Image
            fluid
            src="/assets/img/TEMP_PublishPreview2.png"
            alt="temp"
            className="shadow"
            style={imageStyle}
          />
          <p className="pink">third para</p>
        </div>
      </RcPrint>
    </div>
  )
})

export const RCPrint = forwardRef<RcPrint | null, Props>((props, ref) => {
  return <RCComponent ref={ref} text={props.text} />
})
