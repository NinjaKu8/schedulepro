import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"

const elementIdStyle = {width: '5em'}

export function ManageElementsName(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <div className='d-flex gap-2'>
        <div style={elementIdStyle}><p className='lead mb-2 text-center'>{t('ID')}</p></div>
        <div className='flex-grow-1'><p className='lead mb-2'>{t('Name')}</p></div>
      </div>
      <div className='d-flex gap-2'>
        <div style={elementIdStyle}><AutoInput className='text-center' value='1' callback={()=>{}} size='lg' /></div>
        <div className='flex-grow-1'><AutoInput value='GEORGE' callback={()=>{}} size='lg' /></div>
      </div>
    </div>
  )
}
