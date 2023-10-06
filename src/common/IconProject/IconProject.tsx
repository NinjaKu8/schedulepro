import { BsFilm } from "react-icons/bs"
import classnames from 'classnames'

type Props = {
  className?: string;
  isColor?: boolean;
}

export function IconProject({ className, isColor }: Props): JSX.Element {
  return (
    <BsFilm className={classnames(className, {'text-light': isColor})} />
  )
}
