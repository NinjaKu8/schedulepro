import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Badge from 'react-bootstrap/Badge'

import { ProjectScripts, ProjectSchedules, ProjectUsers } from './components'
import { Navigation, PageWrapper, PageHeader } from 'common'
import { ProjectMenuBar } from './components/ProjectMenuBar'

function ProjectItemSection({ title, children }: { title: string; children: ReactNode }): JSX.Element {
  return (
    <div>
      <h5 className='mb-3'>{title}</h5>
      <div className='ms-4'>
        {children}
      </div>
    </div>
  )
}

export default function Project(): JSX.Element {
  const { id } = useParams()
  console.log("🚀 ~ file: Project.tsx ~ line 8 ~ Project ~ id", id)
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column h-100'>
      <Navigation>
        <ProjectMenuBar />
      </Navigation>
      <PageWrapper>
        <div className='mb-4'>
          <div className='d-flex align-items-center gap-2 mb-2'>
            <div>
              <Badge bg='secondary'>{t('Project')}</Badge>
            </div>
            <PageHeader>It's a Wonderful Life</PageHeader>
          </div>        
          <p>This is a description of the project - it will shoot in Los Angeles. </p>
        </div>
        
        <div className='d-flex flex-column gap-4 mb-5'>

          <ProjectItemSection title={t('Scripts')}>
            <ProjectScripts />
          </ProjectItemSection>

          <ProjectItemSection title={t('Schedules')}>
            <ProjectSchedules />
          </ProjectItemSection>

          <ProjectItemSection title={t('Users')}>
            <ProjectUsers />
          </ProjectItemSection>

        </div>
      </PageWrapper>
    </div>
  )
}
