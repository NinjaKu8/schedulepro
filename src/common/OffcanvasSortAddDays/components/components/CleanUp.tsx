import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

import { Checkbox } from 'common'

type Props = {
  disabled: boolean;
}

export function CleanUp({ disabled }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className={classnames('d-flex flex-column gap-3 mx-5', {'text-muted': disabled})}>
      <Checkbox 
        callback={(e: React.ChangeEvent<HTMLInputElement>)=>{}} 
        label={t('Remove any existing banners from current board')}
        disabled={disabled}
      />
      <Checkbox 
        callback={(e: React.ChangeEvent<HTMLInputElement>)=>{}} 
        label={t('Remove any existing day breaks from current board')}
        disabled={disabled}
      />
    </div>
  )
}
