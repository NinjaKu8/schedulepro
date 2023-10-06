
import { useAppSelector } from 'store/hooks'
import { InputElementTagCategories, InputElementTagElements } from './components'
import { useInputElementState } from 'hooks'

type Props = {
  callback: ()=>void;
}

export function InputElementTag({ callback }: Props): JSX.Element {
  const initialElementName = useAppSelector(state=>state.local.scr_createTagName)

  const { elementName, isCategorySelect, handleSelectElement, handleSelectCategory, handleBackButton } = useInputElementState({breakdownId: 'ABC123', initialElementName, callback })

  return (
    <div className='position-absolute d-flex flex-column gap-2 p-2 h-100'>
      {!isCategorySelect
        ? <InputElementTagElements 
            callback={handleSelectElement} 
            elementName={elementName}
          />
        : <InputElementTagCategories 
            callback={handleSelectCategory} 
            callbackBackButton={handleBackButton}
            elementName={elementName}
          />
      }
    </div>
  )
}
