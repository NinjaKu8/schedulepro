import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

const landingToolsPrimaryContainerStyle = { maxWidth: '60em', marginTop: '2em' }
const landingToolsPrimaryBoxStyle = { flex: '0 0 18em' }

const toolItems = [
  {id: 0, img: '/assets/icons/speed.svg', title: 'Built for speed', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia'},
  {id: 1, img: '/assets/icons/keyboard.svg', title: 'Keyboard first design', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia'},
  {id: 2, img: '/assets/icons/users.svg', title: 'Built for teams', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia'},
  {id: 3, img: '/assets/icons/offline.svg', title: 'Works offline', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia'},
  {id: 4, img: '/assets/icons/flashlight.svg', title: 'Light and dark UI', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia'},
  {id: 5, img: '/assets/icons/secure.svg', title: 'Detailed permissions', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia'},
]

function Box({ img, title, text}: { img: string; title: string; text: string }): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column gap-3 overflow-hidden' style={landingToolsPrimaryBoxStyle}>
      <div><img src={img} height='40px' alt='icon' /></div>
      <h5 className='mb-0'>{t(title)}</h5>
      <p className='mb-0 small'>{t(text)}</p>
    </div>
  )
}

export function LandingToolsPrimary(): JSX.Element {
  const { t } = useTranslation()
  return (
    <section>
      <Container className='d-flex flex-column gap-5' style={landingToolsPrimaryContainerStyle}>
        <h2 className='fw-bold text-center'>{t("An experience you'd expect from a professional tool.")}</h2>
        <div className='d-flex flex-wrap gap-4 justify-content-center'>
          {toolItems.map(item=>(
            <Box key={item.id} img={item.img} title={t(item.title)} text={t(item.text)} />
          ))}
        </div>
      </Container>
    </section>
  )
}
