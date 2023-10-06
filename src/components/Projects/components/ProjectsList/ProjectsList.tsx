import { useAppSelector } from 'store/hooks'
import { CardSelectable, CardProjectVertical, CardProjectHorizontal, CardList } from 'common'

const projectIds = ['ABC123','ABC124','ABC125','ABC126','ABC127','ABC128','ABC129','ABC130','ABC131','ABC132','ABC133']
const color = 'primary'

export function ProjectsList(): JSX.Element {
  const isViewCard = useAppSelector(state=>state.local.isViewCard)

  return (
    <>
      <CardList isViewCard={isViewCard}>
        {projectIds.map(projectId=>(
          <CardSelectable key={projectId} color={color}>
            {isViewCard 
              ? <CardProjectVertical projectId={projectId} color={color} />
              : <CardProjectHorizontal projectId={projectId} color={color} />
            }
          </CardSelectable>
        ))}
      </CardList>
    </>
  )
}
