import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const imageStyle = { maxWidth: '90%', maxHeight: '90%' }
const buttonStyle = { width: '2.2em' }

export function PublishPreview(): JSX.Element {
  return (
    <div className="d-flex flex-column gap-3 align-items-center p-4">
      <Image
        fluid
        src="/assets/img/TEMP_PublishPreview2.png"
        alt="temp"
        className="shadow"
        style={imageStyle}
      />

      <div className="flex-shrink-0 d-flex gap-3 justify-content-center align-items-center">
        <div>
          <Button style={buttonStyle} variant="secondary" size="sm">
            -
          </Button>
        </div>
        <div>1 of 12</div>
        <div>
          <Button style={buttonStyle} variant="secondary" size="sm">
            +
          </Button>
        </div>
      </div>
    </div>
  )
}
