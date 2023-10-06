import { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { ImageCrop, OffcanvasTC } from 'common'

import { useAppDispatch } from 'store/hooks'
import { setUserAvatarCroppedURI } from 'selectors/userSelectors'

type Props = {
  show: boolean
  toggle: () => void
  toggleLoading: () => void
}

type ManageFooterProps = {
  handleClickSave: () => void
  toggle: () => void
}

function ManageFooter({ handleClickSave, toggle }: ManageFooterProps) {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSave} variant="success" className="me-2">
        {t('Save Cropped Image')}
      </Button>
      <Button onClick={toggle} variant="secondary">
        {t('Cancel')}
      </Button>
    </>
  )
}

export function ProfileUpdateImage({
  show,
  toggle,
  toggleLoading,
}: Props): JSX.Element {
  const [blob, setBlob] = useState<Blob | null>(null)
  const [imgSrc, setImgSrc] = useState<string>('')
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const fetchingCloudinary = (file, uploadPreset, cloudName, url, event) => {
    const data = new FormData()

    data.append('file', file)
    data.append('upload_preset', uploadPreset)
    data.append('cloud_name', cloudName)
    toggleLoading()

    fetch(url, {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((resData) => {
        console.log(event.name, resData.url)
        dispatch(event(resData.url))
        setImgSrc('')
        toggleLoading()
      })
      .catch((err) => {
        console.log(err)
        toggleLoading()
      })
  }

  const handleClickSave = useCallback((): void => {
    const localCroppedImg = localStorage.getItem('localCroppedImg')
    const uploadPreset = import.meta.env.VITE_APP_PRESET_NAME || 'mdtnx80w'
    const cloudName = import.meta.env.VITE_APP_CLOUD_NAME || 'de182yymt'
    const url =
      import.meta.env.VITE_APP_CLOUDINARY_URL ||
      'https://api.cloudinary.com/v1_1/de182yymt/image/upload'

    fetchingCloudinary(
      localCroppedImg,
      uploadPreset,
      cloudName,
      url,
      setUserAvatarCroppedURI
    )
    // fetchingCloudinary(imgSrc, uploadPreset, cloudName, url, setUserAvatarURI)

    toggle()
  }, [blob, toggle])

  return (
    <OffcanvasTC
      show={show}
      toggle={toggle}
      title={t('Update Image')}
      showClose={false}
      footer={
        <ManageFooter handleClickSave={handleClickSave} toggle={toggle} />
      }
    >
      <ImageCrop imgSrc={imgSrc} setImgSrc={setImgSrc} setBlob={setBlob} />
    </OffcanvasTC>
  )
}
