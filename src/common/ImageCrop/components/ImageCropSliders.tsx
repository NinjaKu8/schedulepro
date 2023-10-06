import { Dispatch, SetStateAction, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ImageCropSlider } from "./index"

type Props = {
  disabled: boolean;
  scale: number;
  rotate: number;
  setScale: Dispatch<SetStateAction<number>>;
  setRotate: Dispatch<SetStateAction<number>>;
}

export function ImageCropSliders({ disabled, scale, rotate, setScale, setRotate }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleScaleChange = useCallback((e: React.FormEvent<HTMLInputElement>): void => {
    setScale(Number(e.currentTarget.value))
  },[setScale])

  const handleRotateChange = useCallback((e: React.FormEvent<HTMLInputElement>): void => {
    setRotate(Math.min(180, Math.max(-180, Number(e.currentTarget.value))))
  },[setRotate])

  const resetRotate = useCallback((): void => {
    setRotate(0)
  },[setRotate])

  const resetScale = useCallback((): void => {
    setScale(1)
  },[setScale])

  return (
    <div className='d-flex gap-5 mx-5'>
      <div className='flex-fill'>
        <ImageCropSlider 
          disabled={disabled}
          id='scale-input'
          labelText={t('Scale')}
          max='5'
          min='1'
          onChange={handleScaleChange}
          onClickTip={resetScale}
          step='0.1'
          tipText={t('Reset scale')}
          value={scale}
          valueDecoration='x'
        />
      </div>
      <div className='flex-fill'>
        <ImageCropSlider 
          disabled={disabled}
          id='rotate-input'
          labelText={t('Scale')}
          max='180'
          min='-180'
          onChange={handleRotateChange}
          onClickTip={resetRotate}
          tipText={t('Reset rotation')}
          value={rotate}
          valueDecoration='°'
        />
      </div>
    </div>
  )
}