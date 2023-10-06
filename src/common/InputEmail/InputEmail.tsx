import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"
import { emailRegex } from 'globals/emailRegex'

type Props = {
  callback: (value: string) => void;
  value: string;
  [x:string]: any;
}

export function InputEmail({ callback, value, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <AutoInput 
      callback={callback} 
      value={value} 
      inputMode='email'
      pattern={emailRegex}
      placeholder={`${t('email')}@${t('address')}.com`} 
      type='email' 
      {...rest}
    />
  )
}