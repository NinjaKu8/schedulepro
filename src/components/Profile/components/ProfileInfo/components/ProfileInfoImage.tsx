import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { ProfileUpdateImage } from './index'
import { AvatarUser } from 'common'
import { useToggle } from 'hooks'

const userId = 'ABC123'

export function ProfileInfoImage(): JSX.Element {
  const [showUpdateImage, toggleUpdateImage] = useToggle(false)
  const [loading, toggleLoading] = useToggle(false)

  const { t } = useTranslation()

  return (
    <>
      <div className="d-flex flex-column align-items-center gap-2">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <h5>{t('Image')}</h5>
            <div onClick={toggleUpdateImage}>
              <AvatarUser
                className="pointer"
                userId={userId}
                size="xl"
                grow={false}
              />
            </div>
            <div>
              <Button
                className="me-2"
                variant="info"
                size="sm"
                onClick={toggleUpdateImage}
              >
                {t('Edit')}
              </Button>
            </div>
          </>
        )}
      </div>
      <ProfileUpdateImage
        show={showUpdateImage}
        toggle={toggleUpdateImage}
        toggleLoading={toggleLoading}
      />
    </>
  )
}
