import { BsStar, BsStarFill } from "react-icons/bs"

type Props = {
  callback: (e: React.MouseEvent<HTMLInputElement>)=>void;
  isSelected: boolean;
}

export function Favorite({ callback, isSelected }: Props): JSX.Element {
  return (
    <div className='pointer fs-5 text-warning' onClick={callback}>
      {isSelected
        ? <BsStarFill />
        : <BsStar />
      }
    </div>
  )
}
