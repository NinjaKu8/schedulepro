import { ReactNode, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { BsArrowRightCircle } from "react-icons/bs"
import { useTranslation } from 'react-i18next'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { IconProject, IconSchedule, IconScript } from 'common'

type ButtonContentProps = {
  children: ReactNode;
  text: string;
}

function ButtonContent({ children, text }: ButtonContentProps): JSX.Element {
  return (
    <div className='d-flex justify-content-between align-items-center mx-3 my-1 text-light'>
      <div>{children}</div>
      <div>{text}</div>
      <div><BsArrowRightCircle className='fs-2' /></div>
    </div>
  )
}

export function CurrentProjectLinks() {
  const navigate = useNavigate()
  const toggleProjectNew = useDispatchUpdateOffcanvasComponent('newProject')
  const toggleScriptNew = useDispatchUpdateOffcanvasComponent('newScript')
  const toggleScheduleNew = useDispatchUpdateOffcanvasComponent('newSchedule')
  const { t } = useTranslation()

  const handleClickProject = useCallback((): void => {
    toggleProjectNew()
    navigate('project')
  },[navigate, toggleProjectNew])

  const handleClickScript = useCallback((): void => {
    toggleScriptNew()
    navigate('script')
  },[navigate, toggleScriptNew])

  const handleClickSchedule = useCallback((): void => {
    toggleScheduleNew()
    navigate('schedule')
  },[navigate, toggleScheduleNew])

  return (
    <div className='d-flex flex-column gap-2 p-3 justify-content-center'>
      <Button variant='secondary' className='rounded-3' onClick={handleClickProject}>
        <ButtonContent text={t('Create a New Project')}>
          <IconProject className='fs-4' />
        </ButtonContent>
      </Button>
      <Button variant='warning' className='rounded-3' onClick={handleClickScript}>
        <ButtonContent text={t('Upload a New Script')}>
          <IconScript className='fs-4' />
        </ButtonContent>
      </Button>          
      <Button variant='info' className='rounded-3' onClick={handleClickSchedule}>
        <ButtonContent text={t('Create a New Schedule')}>
          <IconSchedule className='fs-4' />
        </ButtonContent>  
      </Button> 
    </div>
  )
}
