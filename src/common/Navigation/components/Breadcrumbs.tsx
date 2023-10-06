import { useCallback } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { usePathArray } from 'hooks'
import { DropdownProjectsAsText } from 'common'
import { useNavigate } from 'react-router-dom'

export function Breadcrumbs() {
  const pathArray = usePathArray()
  const navigate = useNavigate()

  const handleClickBreadcrumb = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path) navigate(path)
  },[navigate])

  return (
    <Breadcrumb className='flex-grow-1'>
      <li>
        <u>
          <DropdownProjectsAsText
            projectId='ABC123'
            path={`/user/project/ABC123`}
          />  
        </u>
        {pathArray?.length>0 && <span className='text-muted'>&nbsp;&nbsp;/&nbsp;&nbsp;</span>}     
      </li>
      {pathArray.map((pathItem,i)=>(
        <Breadcrumb.Item 
          active={pathArray.length-1===i} 
          className='text-capitalize'
          data-path={`/user/${pathItem}`}
          key={i}
          onClick={handleClickBreadcrumb}
        >
          {pathItem}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
