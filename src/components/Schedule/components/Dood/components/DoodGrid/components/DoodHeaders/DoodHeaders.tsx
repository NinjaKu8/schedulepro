import { BsCheck2Circle } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

import { DoodCell } from '../index'
import { DoodCount, DoodHeader, DoodHeaderContainer } from './components'
import { useAppSelector } from 'store/hooks'

const headerRows = ['Date','Day','Shoot Day']
const headerTotals = ['Work','Hold','Travel','Holiday','Start','Finish','Total']

const doodHeadersWideStyle = { zIndex: 2 }

export function DoodHeaders(): JSX.Element {
  const isShowCount = useAppSelector(state=>state.local.sch_dood_isShow_count)
  const { t } = useTranslation()
  return (
    <div className='dood__header'>

      {/* Header First Column */}
      <div className='d-flex'>
        <div className='position-sticky start-0 d-flex flex-column' style={doodHeadersWideStyle}>
            {headerRows.map(rowName=>(
              <DoodCell key={rowName} isWide>
                {rowName==='Shoot Day'
                  ? <div className='d-flex justify-content-between'>
                      <div><BsCheck2Circle className='pointer' /></div>
                      <div>{rowName}</div>
                    </div>
                  : <div className='text-end'>{rowName}</div>
                }
              </DoodCell>
            ))}
        </div>

        {/* Header Columns */}
        <DoodHeaderContainer>
          <div className='d-flex'>
            <DoodHeader doodHeaderId='doodheader' />
          </div>
        </DoodHeaderContainer>

        {/* Header Totals */}
        <div className='d-flex'>
          {headerTotals.map(columnName=>(
            <div key={columnName} className='d-flex flex-column overflow-hidden'>
              {headerRows.map((rowName,i)=>(
                i===2
                  ? <DoodCell key={rowName}>{t(columnName)}</DoodCell>
                  : <DoodCell key={rowName}>{'\u00a0'}</DoodCell>
              ))}
            </div>
          ))}
          
        </div>
      </div>

      {/* Header Count */}
      {isShowCount && <DoodCount />}

    </div>
  )
}
