import { BsPerson } from "react-icons/bs"
import classnames from 'classnames'

type Props = {
  className?: string;
  color?: boolean;
}

export function IconUser({ className, color }: Props): JSX.Element {
  return (
    <BsPerson className={classnames(className, {'text-light': color})} />
  )
}
