import InputGroup from 'react-bootstrap/InputGroup'
import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common/AutoInput'

export function Replace(): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <p className='lead mb-1'>{t('Replace')}</p>
      <div className='find d-flex flex-column gap-3'>
        <div>
          <InputGroup>
            <AutoInput value='' callback={()=>{}} placeholder='Enter replacement text...' />
            <InputGroup.Text><CloseButton /></InputGroup.Text>
          </InputGroup>
        </div>

        <div className='ms-auto'>
          <Button size='sm'>{t('Replace')}</Button>
        </div>
      </div>
    </>
  )
}
