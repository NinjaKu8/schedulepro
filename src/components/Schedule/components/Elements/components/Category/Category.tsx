
import { CategoryElementChooser } from 'common'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { Element } from './components'

type Props = {
  categoryId: string;
}

const categories = [
  { _id: '1', name: 'Cast' },
  { _id: '2', name: 'Background' },
  { _id: '3', name: 'Stunts' },
  { _id: '4', name: 'Vehicles' },
  { _id: '5', name: 'Props' },
  { _id: '6', name: 'SFX' },
  { _id: '7', name: 'Wardrobe' },
  { _id: '8', name: 'Makeup/Hair' },
  { _id: '9', name: 'Animals' },
  { _id: '10', name: 'Camera' },
  { _id: '11', name: 'Music' },
  { _id: '12', name: 'Sound' },
  { _id: '13', name: 'Art Department' },
  { _id: '14', name: 'Set Dressing' },
  { _id: '15', name: 'Greenery' },
  { _id: '16', name: 'Security' },
  { _id: '17', name: 'Special Equipment' },
  { _id: '18', name: 'Additional Labor' },
  { _id: '19', name: 'VFX' },
  { _id: '20', name: 'MFX' },
  { _id: '21', name: 'Notes' },
  { _id: '22', name: 'Comments' },
  { _id: '23', name: 'Misc' },
  { _id: '24', name: 'Other' },
]
const elements = [
  { _id: '26', name: '1. GEORGE', categoryId: '1' },
  { _id: '27', name: '2. MARY', categoryId: '1' },
  { _id: '28', name: '5. MR. POTTER', categoryId: '1' },
  { _id: '29', name: '5 ND Pedestrians', categoryId: '2' },
  { _id: '30', name: 'Store Owner', categoryId: '2' },
  { _id: '31', name: 'George\'s Car', categoryId: '4' },
]

const categoryStyle = { width: '17em' }
const chooserStyle = { width: '1.5em' }

export function Category({ categoryId }: Props): JSX.Element {
  const toggleManageCategories = useDispatchUpdateOffcanvasComponent('manageCategories')
  const category = categories.find(c=>c._id===categoryId)
  const categoryElements = elements.filter(element=>element.categoryId===categoryId)
  return (
    <>
      <div 
        id={`elements-category-${categoryId}`} 
        className='category d-flex justify-content-between bg-primary-50 rounded-1 pointer px-2 me-2' 
        style={categoryStyle}
      >
        <div className='flex-fill py-1' onClick={toggleManageCategories}>{category?.name ? category?.name : ''}</div>
        <div className='text-end py-1' style={chooserStyle}>
          <CategoryElementChooser categoryId={categoryId} />
        </div>
      </div>
      {categoryElements.map(element=>(
        <Element key={element._id} elementId={element._id} />
      ))}
    </>
  )
}
