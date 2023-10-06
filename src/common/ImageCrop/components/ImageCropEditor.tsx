import { Dispatch, SetStateAction, useCallback, useRef } from 'react'
import ReactCrop, { PixelCrop, PercentCrop, Crop } from 'react-image-crop'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { centerAspectCrop, canvasPreview } from '../helpers'
import { useDebounceEffect } from 'hooks'
import 'react-image-crop/dist/ReactCrop.css'

import { useAppDispatch } from 'store/hooks'

type Props = {
  completedCrop: PixelCrop
  crop?: Crop
  imgSrc: string
  rotate: number
  scale: number
  setBlob: Dispatch<SetStateAction<Blob | null>>
  setCompletedCrop: Dispatch<SetStateAction<PixelCrop>>
  setCrop: Dispatch<SetStateAction<Crop | undefined>>
}

const boxStyle = { border: '.6em solid white' }

export function ImageCropEditor({
  completedCrop,
  crop,
  imgSrc,
  rotate,
  scale,
  setBlob,
  setCompletedCrop,
  setCrop,
}: Props): JSX.Element {
  const { t } = useTranslation()

  const imgRef = useRef<HTMLImageElement>(null)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)

  const dispatch = useAppDispatch()

  function handleImageOnLoad(e: React.SyntheticEvent<HTMLImageElement>): void {
    const { width, height } = e.currentTarget
    setCrop(centerAspectCrop(width, height, 1))
  }

  const handleCropOnChange = useCallback(
    (crop: PixelCrop, percentCrop: PercentCrop): void => {
      setCrop(percentCrop)
    },
    [setCrop]
  )

  const handleCropOnComplete = useCallback(
    (crop: PixelCrop, percentCrop: PercentCrop): void => {
      setCompletedCrop(crop)
    },
    [setCompletedCrop]
  )

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
          setBlob
        )

        const croppedImgSrc = previewCanvasRef.current.toDataURL()
        // console.log('croppedImgSrc - before ls - ', croppedImgSrc)
        localStorage.setItem('localCroppedImg', croppedImgSrc)
      }
    },
    100,
    [completedCrop, scale, rotate]
  )

  return (
    <>
      {Boolean(imgSrc) && (
        <div className="d-flex gap-3 justify-content-center">
          <div className="d-flex flex-column">
            <Form.Label className="text-center">{t('Original')}</Form.Label>
            <div
              className="bg-light shadow-lg overflow-hidden"
              style={boxStyle}
            >
              <ReactCrop
                ruleOfThirds
                circularCrop
                crop={crop}
                onChange={handleCropOnChange}
                onComplete={handleCropOnComplete}
                aspect={1}
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{
                    transform: `scale(${scale}) rotate(${rotate}deg)`,
                    width: '15em',
                  }}
                  onLoad={handleImageOnLoad}
                />
              </ReactCrop>
            </div>
          </div>
          {Boolean(completedCrop) && (
            <div className="d-flex flex-column">
              <Form.Label className="text-center">{t('Cropped')}</Form.Label>
              <div
                className="bg-light shadow-lg overflow-hidden rounded-circle"
                style={boxStyle}
              >
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    display: 'block',
                    objectFit: 'contain',
                    width: '15em',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
