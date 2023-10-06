import { Dispatch, SetStateAction, useCallback } from 'react'
import { Crop } from 'react-image-crop'
import Form from 'react-bootstrap/Form'

type Props = {
  setCrop: Dispatch<SetStateAction<Crop | undefined>>
  setImgSrc: Dispatch<SetStateAction<string>>
}

export function ImageCropInputFile({ setCrop, setImgSrc }: Props): JSX.Element {
  const onSelectFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files && e.target.files.length > 0) {
        setCrop(undefined) // Makes crop preview update between images.
        const reader = new FileReader()
        reader.addEventListener('load', () =>
          setImgSrc(reader?.result?.toString() || '')
        )
        reader.readAsDataURL(e.target.files[0])
      }
    },
    [setCrop, setImgSrc]
  )

  return <Form.Control type="file" accept="image/*" onChange={onSelectFile} />
}
