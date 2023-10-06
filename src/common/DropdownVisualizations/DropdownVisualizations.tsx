import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'
import { BsCaretDownFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { updateTemp_progressreports } from 'store/slices/local'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownToggleCustom } from 'common'
import { getDropdownItemByEventKey } from 'helpers'
import { dropdownStyle } from 'globals/dropdownStyle'
import { IProgressReport } from 'types/types'

type Props = {
  progressReportId: string;
}

const visualizations: IDropdownTCItem[] = [
  { eventKey: 'stripProgress', value: <DropdownItem badgeText='Progress' name='Strip' /> },
  { eventKey: 'stripDurationProgress', value: <DropdownItem badgeText='Progress' name='Strip Duration' /> },
  { eventKey: 'circleDurationProgress', value: <DropdownItem badgeText='Progress' name='Circle Duration' /> },
  { eventKey: 'divider1', value: '', isDivider: true },
  { eventKey: 'waffleOverview', value: <DropdownItem badgeText='Overview' name='Waffle' /> },
]

function DropdownItem({ badgeText, name }: { badgeText: string, name: string}): JSX.Element {
  return (
    <div className='d-flex gap-2 align-items-center'>
      <small>
        <Badge pill bg={badgeText==='Progress' ? 'info' : 'warning'}>{badgeText}</Badge>
      </small> 
        {name}
    </div>
  )
}

export function DropdownVisualizations({ progressReportId }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const progressReports: IProgressReport[] = useAppSelector(state=>state.local.temp_progressreports)
  const progressReport: IProgressReport | undefined = progressReports.find(p=>p._id===progressReportId)
  const { t } = useTranslation()

  const handleSelectDropdown = useCallback((value: string|null): void => {
    if(progressReport && value) dispatch(updateTemp_progressreports({ ...progressReport, visualizationId: value }))
  },[dispatch, progressReport]) 

  return (
    <>
      { progressReport &&
        <Dropdown as={ButtonGroup} align='end' className='dropdown-split-as-text' onSelect={handleSelectDropdown}>
          <div className='pointer me-1'>
            {getDropdownItemByEventKey(progressReport.visualizationId,visualizations)?.value}
          </div>
          <Dropdown.Toggle as={DropdownToggleCustom} split>
            <BsCaretDownFill />
          </Dropdown.Toggle>
          <Dropdown.Menu style={dropdownStyle}>
            <Dropdown.Header>{t('Visualizations')}</Dropdown.Header>
            {visualizations.map(item=>(
              item.isDivider
                ? <Dropdown.Divider key={item.eventKey} />
                : <Dropdown.Item 
                  key={item.eventKey}
                  active={progressReport.visualizationId===item.eventKey}
                  eventKey={item.eventKey}
                >
                  {item.value}
                </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      }
    </>
  )
}