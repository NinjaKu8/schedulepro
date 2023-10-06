import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common/AutoInput'

type Props = {
  disabled: boolean;
}

const inputStyle = { maxWidth: '5em' }

export function AddDays({ disabled }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleDayBreaksChange = useCallback((): void => {
    console.log('changed')
  },[])

  return (
    <div className={classnames('d-flex align-items-center gap-3 mx-5', {'text-muted': disabled})}>
      <div>
        {t('Add breaks every')}:
      </div>
      <div>
        <AutoInput
          value='5'
          callback={handleDayBreaksChange}
          className='text-center'
          style={inputStyle}
          size='sm'
          disabled={disabled}
        />
      </div>
      <div className='flex-grow-1 d-flex flex-column'>
        <Dropdown>
          <Dropdown.Toggle size='sm' className='w-100' disabled={disabled}>
            {t('Pages per Day')}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item active>{t('Pages per Day')}</Dropdown.Item>
            <Dropdown.Item>{t('Hours per Day')}</Dropdown.Item>
            <Dropdown.Item>{t('Total Days on Board')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
