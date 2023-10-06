import { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'

import { Footer } from 'common'

type Props = {
  children?: ReactNode,
}

const containerStyle = { maxWidth: '100em' }

export function PageWrapper({ children }: Props): JSX.Element {
  return (
    <section className='flex-fill d-flex flex-column slide-down overflow-auto w-100'>
      <Container fluid className='pt-4 flex-grow-1' style={containerStyle}>
        {children}
      </Container>
      <Footer />
    </section>
  )
}
