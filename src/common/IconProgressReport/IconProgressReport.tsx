import { BsHourglass } from "react-icons/bs"
import classnames from 'classnames'

type Props = {
  className?: string;
  isColor?: boolean;
}

export function IconProgressReport({ className, isColor }: Props): JSX.Element {
  return (
    <BsHourglass className={classnames(className, {'text-primary': isColor})} />
  )
}
