import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC } from 'common'
import { ProjectNew } from './components'

type ManageFooterProps = {
  handleClickSave: () => void;
  toggle: () => void;
}

function ManageFooter({ handleClickSave, toggle }: ManageFooterProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSave} variant='success' className='me-2'>{t('Create')}</Button>
      <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
    </>
  )
}

export function OffcanvasNewProject(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('newProject')
  const { t } = useTranslation()

  const handleClickSave = useCallback((): void => {
    console.log('click save')
    toggle()
  },[toggle])

  return (
    <OffcanvasTC 
      show={offcanvasComponent==='newProject'}
      toggle={toggle} 
      title={t('New Project')} 
      showClose={false} 
      footer={<ManageFooter handleClickSave={handleClickSave} toggle={toggle}/>} 
    >
      <ProjectNew />
    </OffcanvasTC>
  )
}
