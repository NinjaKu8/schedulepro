import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownSplitAsText } from 'common'
import { getDropdownItemByEventKey } from 'helpers'

type Props = {
  projectId: string;
  [x: string]: any;
}

const projects: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'It\'s a Wonderful Life' },
  { eventKey: 'ABC124', value: 'Gone With The Wind' },
  { eventKey: 'ABC125', value: 'Casablanca' },
  { eventKey: 'ABC126', value: 'Citizen Kane' },
]

export function DropdownProjectsAsText({ projectId, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleSelectDropdown = useCallback((e: string | null): void => {
    console.log('dropdown select', e)
  },[])

  return (
    <DropdownSplitAsText 
      callback={handleSelectDropdown}
      headerText={t('Projects')}
      items={projects}
      selectedItem={getDropdownItemByEventKey(projectId,projects)}
      {...rest}
    />
  )
}