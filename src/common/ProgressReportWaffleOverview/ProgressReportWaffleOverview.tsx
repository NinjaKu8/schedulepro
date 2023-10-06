import { useCallback, useState } from 'react'

import { ProgressReportWaffleOverviewHeader, ProgressReportWaffleOverviewLegend, ProgressReportWaffleOverviewListItem } from './components'

const scriptOrderedIds = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160']
const boardOrderedIds = ['7','18','87','9','30','74','24','27','15','90','66','67','89','37','142','157','159','5','58','59','41','42','57','48','0','44','60','47','86','147','148','118','72','35','133','134','101','102','84','34','88','40','130','137','69','81','82','124','120','128','149','29','154','139','145','14','140','135','126','123','68','2','31','54','144','151','83','55','110','79','38','28','11','4','6','17','13','109','3','1','119','50','156','62','53','10','16','8','33','131','36','158','23','63','39','43','127','12','25','153','141','26','132','45','121','46','21','22','49','32','91','146','52','56','61','20','96','64','150','106','129','65','70','143','71','19','103','73','160','75','76','136','92','105','152','93','125','117','155','122','77','51','138','78','80','85','94','100']

export function ProgressReportWaffleOverview(): JSX.Element {

  const [ boardId, setBoardId ] = useState<string>('boardOrder')
  const [ ids, setIds ] = useState<string[]>(boardOrderedIds)

  const handleSelectSort = useCallback((value: string | null): void => {
    if(value==='scriptOrder') {
      setIds(scriptOrderedIds)
    } else if(value==='boardOrder') {
      setIds(boardOrderedIds)
    }
    if(value) setBoardId(value)
  },[setIds, setBoardId])

  return (
    <div className='d-flex flex-column'>
      <ProgressReportWaffleOverviewHeader selectedBoardId={boardId} handleSelectSort={handleSelectSort} />
      <div className='d-flex flex-column gap-3'>
        <div className='d-flex flex-wrap gap-1 p-1 justify-content-center overflow-hidden'>
          {ids.map((id) => (
            <ProgressReportWaffleOverviewListItem key={id} id={id} />
          ))}
        </div>
        <ProgressReportWaffleOverviewLegend />
      </div>
    </div>
  )
}