import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import { FaImdb, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { MdOutlineComputer } from 'react-icons/md'

import { useAppSelector } from 'store/hooks'
import { selectUserAvatarCroppedURI } from 'selectors/userSelectors'

const imageStyle = { width: '13em', height: '13em' }
const socialStyle = { width: '1.9em', height: '1.9em' }

function Social({
  children,
  link,
}: {
  children: ReactNode
  link: string
}): JSX.Element {
  return (
    <a href={link}>
      <div
        className="rounded rounded-circle bg-success text-center text-white p-1"
        style={socialStyle}
      >
        {children}
      </div>
    </a>
  )
}

export function UserInfo() {
  const userAvatarCroppedURI = useAppSelector(selectUserAvatarCroppedURI)
  const { t } = useTranslation()

  return (
    <Card>
      <Card.Body>
        <div className="position-absolute">
          <Badge bg="success">{t('User')}</Badge>
        </div>
        <div className="d-flex flex-column gap-2 text-center">
          <Image
            src={userAvatarCroppedURI || undefined}
            className="fluid rounded rounded-circle mx-auto"
            style={imageStyle}
          />
          <h3 className="mb-0">Michael R. Williams</h3>
          <Card.Text>Line Producer</Card.Text>
          <Card.Text>
            Think Crew founder, feature film producer and DGA UPM.
          </Card.Text>
          <Card.Text>
            mw@michaelwilliams.com
            <br />
            (323) 360-3252
          </Card.Text>
          <div className="d-flex justify-content-around flex-wrap mb-4 fs-5">
            <Social link="https://pro.imdb.com/name/nm0931313">
              <FaImdb />
            </Social>
            <Social link="https://linkedin.com/name/nm0931313">
              <FaLinkedinIn />
            </Social>
            <Social link="https://twitter.com/@_michaelw">
              <BsTwitter />
            </Social>
            <Social link="https://instagram.com/@michaelwilliams">
              <BsInstagram />
            </Social>
            <Social link="https://www.facebook.com/filmman68">
              <FaFacebookF />
            </Social>
            <Social link="https://michaelwilliams.com">
              <MdOutlineComputer />
            </Social>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
