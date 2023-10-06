import { FaArrowLeft } from "react-icons/fa"
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { AutoInputSelectSansOverlay, Tip } from 'common'
import { InputElementTagLabel } from './index'
import { IListSelectItem } from "common/ListSelect/ListSelect"

type Props = {
  callback: (id: string|null, value?: string) => void;
  callbackBackButton: () => void;
  elementName: string;
}

const categories: IListSelectItem[] = [
  { _id: '1', name: 'Cast', selected: false },
  { _id: '2', name: 'Background', selected: false },
  { _id: '3', name: 'Stunts', selected: false },
  { _id: '4', name: 'Vehicles', selected: false },
  { _id: '5', name: 'Props', selected: false },
  { _id: '6', name: 'SFX', selected: false },
  { _id: '7', name: 'Wardrobe', selected: false },
  { _id: '8', name: 'Makeup/Hair', selected: false },
  { _id: '9', name: 'Animals', selected: false },
  { _id: '10', name: 'Camera', selected: false },
  { _id: '11', name: 'Music', selected: false },
  { _id: '12', name: 'Sound', selected: false },
  { _id: '13', name: 'Art Department', selected: false },
  { _id: '14', name: 'Set Dressing', selected: false },
  { _id: '15', name: 'Greenery', selected: false },
  { _id: '16', name: 'Security', selected: false },
  { _id: '17', name: 'Special Equipment', selected: false },
  { _id: '18', name: 'Additional Labor', selected: false },
  { _id: '19', name: 'VFX', selected: false },
  { _id: '20', name: 'MFX', selected: false },
  { _id: '21', name: 'Notes', selected: false },
  { _id: '22', name: 'Comments', selected: false },
  { _id: '23', name: 'Misc', selected: false },
  { _id: '24', name: 'Other', selected: false },
]

const buttonStyle = { minWidth: '2.4em', minHeight: '2.4em'}

export function InputElementTagCategories({ callback, callbackBackButton, elementName }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <div className='flex-shrink-0 d-flex justify-content-between'>
        <InputElementTagLabel>{`${t('What category is')} "${elementName}"`}</InputElementTagLabel>
        <div>
          <Tip text='Back to select element'>
            <Button className='rounded-circle m-0 p-0 bg-light border' style={buttonStyle} onClick={callbackBackButton}>
              <FaArrowLeft className='m-0 p-0' />
            </Button>
          </Tip>
        </div>
      </div>
      <AutoInputSelectSansOverlay 
        callback={callback} 
        focusOnMount
        list={categories} 
        value='' 
      />
    </>
  )
}
