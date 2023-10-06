import Dropdown from 'react-bootstrap/Dropdown'
import { Trans, useTranslation } from 'react-i18next'

function EditId() {
  const { t } = useTranslation()
  return (
    <>
      <p className='lead mb-2'>{t('Category Type')}</p>
      <Dropdown>
        <Dropdown.Toggle className='mb-2' size='sm'>100 - Cast</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>101 - Background</Dropdown.Item>
          <Dropdown.Item>102 - Vehicles</Dropdown.Item>
          <Dropdown.Item>103 - Stunts</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <p className='small'>
        <Trans i18nKey='managecategories-instructions1'>
          Besides giving your category a name, you can also identify what type of category it is. This is a part of the <a href='https://universalschedulestandard.org'>Universal Schedule Standard</a> and helps identify the type of elements that belong to this category. For instance, you could name the actor's category 'Cast' or 'Talent', but when exporting your data, other systems will want to know that the category is filled with actors, regardless of what you call it.
        </Trans>
      </p>
      <p className='small'>
        <Trans i18nKey='managecategories-instructions2'>
          Try to ensure that each type is unique to a single category. Multiple categories with the same type can cause conflicts.
        </Trans>
      </p>
    </> 
  )
}

function UnchangableMessage() {
  return (
    <p className='small'>
      <Trans i18nKey='managecategories-instructions3'>
        This category's type cannot be changed. But you can change the category's name if you'd like.
      </Trans>
    </p>
  )
}

export function ManageCategoriesId(): JSX.Element {
  return (
    <div>
      {true
        ? <EditId />
        : <UnchangableMessage />
      }
    </div>
    
  )
}
