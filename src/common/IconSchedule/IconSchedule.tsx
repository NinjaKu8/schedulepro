import { BsMap } from "react-icons/bs"
import classnames from 'classnames'

type Props = {
  className?: string;
  isColor?: boolean;
}

export function IconSchedule({ className, isColor }: Props): JSX.Element {
  return (
    <BsMap className={classnames(className, {'text-info': isColor})} />
  )
}
