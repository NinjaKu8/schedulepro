import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { IListSelectItem } from 'common/ListSelect/ListSelect'

// take an array of objects and return a filtered list based on the query string
export function useFilteredArray(list: IListSelectItem[], query: string, addCreateItem?: boolean): IListSelectItem[] {
  const { t } = useTranslation()
  return useMemo(()=>{
    const arr = addCreateItem && query.length>0
      ? [...list, {_id: 'create', name: `${t('Create')} "${query}"...`, selected: false}]
      : list
    return arr.filter((item: IListSelectItem)=>item.name.toLowerCase().includes(query.toLowerCase()))
  },[addCreateItem, list, query, t]) 
}