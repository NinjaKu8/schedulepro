import { useCallback, useState } from 'react'

import { AvatarAdd, AvatarUser } from 'common'

export function ScheduleCurrentUsers(): JSX.Element {
  const [isHover, setIsHover] = useState(false)

  function handleMouseEnter(): void {
    setIsHover(true)
  }
  function handleMouseLeave(): void {
    setIsHover(false)
  }

  const handleAddUser = useCallback((e: React.MouseEvent<HTMLElement>) => {
    console.log('add user')
  }, [])

  return (
    <div className={`d-flex ${isHover && 'gap-1'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <AvatarUser userId='ABC123' size='xs' tip link group={!isHover} />
      <AvatarUser userId='ABC123' size='xs' tip link group={!isHover} />
      <AvatarUser userId='ABC123' size='xs' tip link group={!isHover} />
      <AvatarAdd size='xs' callback={handleAddUser} className='pointer' name='Add a user' tip group={!isHover} />
    </div>
  )
}
