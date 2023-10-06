import InputGroup from 'react-bootstrap/InputGroup'
import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'

import { AutoInput } from 'common/AutoInput'

export function Find(): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <p className='lead mb-1'>{t('Find')}</p>
      <div className='find d-flex flex-column gap-3'>
        <div className='d-flex gap-1'>
          <div className='flex-grow-1 d-flex flex-column'><Button size='sm' variant='link' active>{t('Any Type')}</Button></div>
          <div className='flex-grow-1 d-flex flex-column'><Button size='sm' variant='link'>{t('Scene')}</Button></div>
          <div className='flex-grow-1 d-flex flex-column'><Button size='sm' variant='link'>{t('Element')}</Button></div>
          <div className='flex-grow-1 d-flex flex-column'><Button size='sm' variant='link'>{t('Description')}</Button></div>
        </div>

        <div>
          <InputGroup>
            <AutoInput value='' callback={()=>{}} placeholder='Enter text, scenes, elements...' />
            <InputGroup.Text><CloseButton /></InputGroup.Text>
          </InputGroup>
        </div>

        <div className='d-flex gap-1'>
          <div className='flex-grow-1 d-flex flex-column'>
            <Button size='sm' variant='link' active>
              <Trans i18nKey='find-musthaveallitems'>
                Must have <strong>All</strong> items
              </Trans>
            </Button>
          </div>
          <div className='flex-grow-1 d-flex flex-column'>
            <Button size='sm' variant='link'>
              <Trans i18nKey='find-canhaveanyitems'>
                Can have <strong>Any</strong> items
              </Trans>
            </Button>
          </div>
        </div>

        <div className='text-muted my-4'>
          {t('Nothing Found')}
        </div>
      </div>
    </>
  )
}
