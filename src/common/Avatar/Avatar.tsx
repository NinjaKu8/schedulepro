import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { Tip } from 'common'
import { avatarSizes } from 'globals/avatarSizes'
import { ReactNode } from 'react'

type Props = {
  callback?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
  group?: boolean // negative left margin causing overlap with previous avatar
  grow?: boolean // should avatar transform scale on hover?
  link?: boolean // include link?
  linkTo: string // link to this user's profile
  name: string // user name
  online?: boolean // is user online
  size?: string // one of 'sm','md','lg'
  src: string | null // img src
  tip?: boolean // include tool tip with user's name
}

function AvatarTip({
  children,
  text,
  tip,
}: {
  children: ReactNode
  text: string
  tip?: boolean
}): JSX.Element {
  return tip ? <Tip text={text}>{children}</Tip> : <>{children}</>
}

function AvatarLink({
  children,
  link,
  linkTo,
}: {
  children: ReactNode
  link?: boolean
  linkTo: string
}): JSX.Element {
  return link ? <Link to={linkTo}>{children}</Link> : <>{children}</>
}

export function Avatar({
  callback,
  className,
  group,
  grow = true,
  link,
  linkTo,
  name,
  online,
  size = 'sm',
  src,
  tip,
}: Props): JSX.Element {
  return (
    <AvatarLink link={link} linkTo={linkTo}>
      <AvatarTip tip={tip} text={name}>
        <img
          alt={`${name} avatar`}
          className={classNames('border rounded-circle', className, {
            'border-1': size === 'xs',
            'border-2': size === 'sm',
            'border-3': size === 'md',
            'border-4': size === 'lg',
            'border-5': size === 'xl',
            'border-success': online,
            'border-secondary': !online,
            grow: grow,
            'ms-n2': group,
          })}
          height={avatarSizes[size as keyof typeof avatarSizes]}
          onClick={callback}
          src={src || '/assets/img/avatars/user_plus.png'}
          width={avatarSizes[size as keyof typeof avatarSizes]}
        />
      </AvatarTip>
    </AvatarLink>
  )
}
