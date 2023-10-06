
import { Category, ElementsMenuBar } from './components'

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

export function Elements(): JSX.Element {
  return (
    <>
      <ElementsMenuBar />
      <div className='p-1 overflow-auto d-flex flex-column flex-wrap align-content-start gap-1 w-100 h-100'>
        {categories.map(category=>(
          <Category key={category._id} categoryId={category._id} />
        ))}
      </div>
    </>
  )
}
