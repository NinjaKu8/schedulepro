import { ReactNode } from 'react'
import Image from 'react-bootstrap/Image'

type Props = {
  name: string;
  title: string;
  img: string;
  children: ReactNode;
}

const aboutStyle = { maxWidth: '20em' }

export function AboutPerson({ name, title, img, children }: Props): JSX.Element {
  return (
    <div className='d-flex flex-column align-items-center rounded shadow p-4' style={aboutStyle}>
      <Image src={img} width={100} fluid className='mb-3 rounded-circle shadow' />
      <h5 className='mb-0'>{name}</h5>
      <h6>{title}</h6>
      <p>{children}</p>
    </div>
  )
}
