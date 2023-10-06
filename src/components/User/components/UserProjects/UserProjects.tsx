import { useTranslation } from 'react-i18next'

import { CardSmall, CardSmallInfo } from 'common'

export function UserProjects() {
  const { t } = useTranslation()
  return (
    <>
      <h5>{t('Projects')}</h5>
      <p className='text-muted'>{t('These are the projects that you have in common with')} Michael</p>
      <div className='d-flex flex-wrap gap-4'>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
        <CardSmall>
          <CardSmallInfo title='Its a Wonderful Life' subtitle='S1 :: E1' link='/user/project/ABC123' managerName='manageProject' showManage />
        </CardSmall>
      </div>
    </>
  )
}
