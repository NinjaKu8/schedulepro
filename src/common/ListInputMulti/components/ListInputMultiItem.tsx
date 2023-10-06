import { IoMdClose } from 'react-icons/io'

type Props = {
  _id: string;
  name: string;
  handleClick: (id:string)=>void;
}

export function ListInputMultiItem({ _id, name, handleClick }: Props): JSX.Element {

  function handleRemove() {
    handleClick(_id)
  }
  return (
    <>
      {_id &&
        <span className='list-input__multi--item d-flex align-items-center rounded-1 px-2 user-select-none'>
          {name}
          <IoMdClose className='list-input__multi--cancel ms-1' onClick={handleRemove} />
        </span>
      }
    </>
  )
}
