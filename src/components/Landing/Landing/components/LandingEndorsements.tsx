import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

const cw = 3
const cg = 1.5

const landingEndorsementsContainerStyle = { maxWidth: '75em' }
const boxStyle = { maxWidth: '22em' }
const landingEndorsementContent = { zIndex: 2 }
const landingEndorsementsCircles = { zIndex: 1 }
const landingEndorsementsCircle1 = { border: '2px solid #66C5FF', top: `-${cw/2}em`, left: `-${cw/2}em`, width: `${cw}em`, height: `${cw}em` }
const landingEndorsementsCircle2 = { border: '2px solid #AA4DD4', top: `-${(cw+cg)/2}em`, left: `-${(cw+cg)/2}em`, width: `${cw+cg}em`, height: `${cw+cg}em` }
const landingEndorsementsCircle3 = { border: '2px solid #66C5FF', top: `-${(cw+(cg*2))/2}em`, left: `-${(cw+(cg*2))/2}em`, width: `${cw+(cg*2)}em`, height: `${cw+(cg*2)}em` }

const endorsementItems = [
  {id: 0, img: '/assets/img/avatars/user_09.png', name: 'John Smith', title: '1st AD', text: 'landing-endorsement1'},
  {id: 1, img: '/assets/img/avatars/user_02.png', name: 'Mary Stephenson', title: 'UPM', text: 'landing-endorsement2'},
  {id: 2, img: '/assets/img/avatars/user_08.png', name: 'Robin Jones', title: '2nd AD', text: 'landing-endorsement3'},
  {id: 3, img: '/assets/img/avatars/user_05.png', name: 'Bernie Boscoe', title: '1st AD', text: 'landing-endorsement4'},
  {id: 4, img: '/assets/img/avatars/user_01.png', name: 'Michael R. Williams', title: '1st AD', text: 'landing-endorsement5'},
  {id: 5, img: '/assets/img/avatars/user_12.png', name: 'Gregory Smith', title: 'UPM', text: 'landing-endorsement6'},
  {id: 6, img: '/assets/img/avatars/user_10.png', name: 'Sarah Josephson', title: '2nd AD', text: 'landing-endorsement7'},
  {id: 7, img: '/assets/img/avatars/user_11.png', name: 'Roger Jones', title: '1st AD', text: 'landing-endorsement8'},
  {id: 8, img: '/assets/img/avatars/user_02.png', name: 'Sally Smith', title: '1st AD', text: 'landing-endorsement9'},
]

function Box({ img, name, title, text}: { img: string; name: string; title: string; text: string }): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='position-relative d-flex gap-2 overflow-hidden shadow-lg p-3 rounded' style={boxStyle}>
      <div style={landingEndorsementsCircles}>
        <div className='position-absolute rounded-circle' style={landingEndorsementsCircle1} />
        <div className='position-absolute rounded-circle' style={landingEndorsementsCircle2} />
        <div className='position-absolute rounded-circle' style={landingEndorsementsCircle3} />
      </div>
      <div className='position-relative d-flex gap-3' style={landingEndorsementContent}>
        <img src={img}  className='rounded-circle'  alt={`${name} avatar`}  height='50px' width='50px' />
        <div className='d-flex flex-column gap-2'>
          <div className='d-flex'> 
            <p className='fw-bold mt-3'>{name}</p>
            <p className='mt-3 ms-auto text-muted'>{t(title)}</p>
          </div>
          <p className='mb-0 small'>{t(text)}</p>
        </div>
      </div>
    </div>
  )
}

export function LandingEndorsements(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Container className='position-relative' style={landingEndorsementsContainerStyle}>
      <h2 className='fw-bold lh-base text-center'>{t('Loved by ADs & UPMs')}</h2>
      <div className='d-flex flex-wrap gap-4 justify-content-center'>
        {endorsementItems.map(item=>(
          <Box name={item.name} key={item.id} img={item.img} title={t(item.title)} text={t(item.text)} />
        ))}
      </div>
    </Container>
  )
}
