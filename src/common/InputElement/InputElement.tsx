
import { InputElementCategories, InputElementElements } from './components'
import { useInputElementState } from 'hooks'

type Props = {
  className?: string;
  initialElementName?: string;
  style?: React.CSSProperties;
}

export function InputElement({ className, initialElementName='', style }: Props): JSX.Element {

  const { elementName, isCategorySelect, handleSelectElement, handleSelectCategory, handleBackButton } = useInputElementState({breakdownId: 'ABC123', initialElementName })

  return (
    <div className={className} style={style}>
      {!isCategorySelect
        ? <InputElementElements 
            callback={handleSelectElement} 
            elementName={elementName}
          />
        : <InputElementCategories 
            callback={handleSelectCategory} 
            callbackBackButton={handleBackButton}
            elementName={elementName}
          />
      }
    </div>
  )
}
