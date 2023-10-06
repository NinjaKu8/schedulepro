import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"

type Props = {
  callback: (value: string) => void;
  value: string;
  [x:string]: any;
}

export function InputPassword({ callback, value, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <AutoInput 
      callback={callback} 
      value={value} 
      autoComplete='current-password'
      minLength='8'
      placeholder={t('Password')}
      type='password'  
      {...rest}
    />
  )
}