import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { AutoInput, CardProjectHorizontal, CardScheduleHorizontal, CardScriptHorizontal, CardSelectable, CardUserHorizontal, Navigation, PageHeader, PageWrapper } from 'common'
import { SearchItem } from './components'

const containerStyles = { maxWidth: '50em'}

export default function Search(): JSX.Element {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ value, setValue ] = useState('')
  const { t } = useTranslation()
  
  const handleSearch = useCallback((value: string): void => {
    setSearchParams(`?query=${value}`)
    console.log('search',value)
  },[setSearchParams])

  useEffect(()=>{
    const query = searchParams.get("query")
    if(query) setValue(query)
  },[searchParams])

  return (
    <div className='d-flex flex-column h-100'>
      <Navigation />
      <PageWrapper>
        <Container style={containerStyles}>
          <PageHeader>{t('Search')}</PageHeader>

          <InputGroup className='mb-5' size='lg'>
            <AutoInput callback={handleSearch} value={value} />
            <Button variant="primary" id="button-addon2">{t('Search')}</Button>
          </InputGroup>

          <div className='d-flex flex-column gap-2'>
            <CardSelectable>
              <SearchItem text={t('User')} color='success'>
                <CardUserHorizontal userId='ABC123' />
              </SearchItem>
            </CardSelectable>
            <CardSelectable>
              <SearchItem text={t('Project')} color='primary'>
                <CardProjectHorizontal projectId='ABC123' manage={false} favorite={false} />
              </SearchItem>
            </CardSelectable>
            <CardSelectable>
              <SearchItem text={t('Script')} color='warning'>
                <CardScriptHorizontal scriptId='ABC123' manage={false} favorite={false} />
              </SearchItem>
            </CardSelectable>
            <CardSelectable>
              <SearchItem text={t('Schedule')} color='info'>
                <CardScheduleHorizontal scheduleId='ABC123' manage={false} favorite={false} />
              </SearchItem>
            </CardSelectable>
          </div>

        </Container>
      </PageWrapper>
    </div>
  )
}
