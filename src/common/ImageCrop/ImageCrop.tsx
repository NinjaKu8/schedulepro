import { Dispatch, SetStateAction, useState } from 'react'
import { Crop, PixelCrop } from 'react-image-crop'
import {
  ImageCropInputFile,
  ImageCropSliders,
  ImageCropEditor,
} from './components'

type Props = {
  setBlob: Dispatch<SetStateAction<Blob | null>>
  imgSrc: string
  setImgSrc: Dispatch<SetStateAction<string>>
}

export function ImageCrop({ setBlob, imgSrc, setImgSrc }: Props): JSX.Element {
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    unit: 'px',
  })
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)

  return (
    <div className="d-flex flex-column gap-3">
      <ImageCropInputFile setCrop={setCrop} setImgSrc={setImgSrc} />
      <ImageCropSliders
        disabled={!imgSrc}
        scale={scale}
        rotate={rotate}
        setScale={setScale}
        setRotate={setRotate}
      />
      <ImageCropEditor
        completedCrop={completedCrop}
        crop={crop}
        imgSrc={imgSrc}
        rotate={rotate}
        scale={scale}
        setBlob={setBlob}
        setCompletedCrop={setCompletedCrop}
        setCrop={setCrop}
      />
    </div>
  )
}
