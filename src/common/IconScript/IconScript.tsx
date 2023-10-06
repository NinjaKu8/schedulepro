import { BsBook } from "react-icons/bs"
import classnames from 'classnames'

type Props = {
  className?: string;
  isColor?: boolean;
}

export function IconScript({ className, isColor }: Props): JSX.Element {
  return (
    <BsBook className={classnames(className, {'text-warning': isColor})} />
  )
}
