import { useCallback } from 'react'

import { Favorite } from 'common'

type Props = {
  isVisible?: boolean;
  scheduleId: string;
}

export function CardScheduleFavorite({ isVisible=true, scheduleId }: Props): JSX.Element | null {

  const handleClickSelect = useCallback((e: React.MouseEvent<HTMLInputElement>): void => {
    console.log('item current clicked',e.currentTarget.value)
  },[])

  return (
    isVisible
      ? <Favorite 
          callback={handleClickSelect}
          isSelected={false}
        />
      : null
  )
}
