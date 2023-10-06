import { useAppSelector } from 'store/hooks'
import { CardSelectable, CardScriptVertical, CardScriptHorizontal, CardList } from 'common'

const scriptIds = ['ABC123','ABC124','ABC125','ABC126','ABC127','ABC128','ABC129','ABC130','ABC131','ABC132','ABC133']
const color = 'warning'

export function ScriptsList(): JSX.Element {
  const isViewCard = useAppSelector(state=>state.local.isViewCard)

  return (
    <>
      <CardList isViewCard={isViewCard}>
        {scriptIds.map(scriptId=>(
          <CardSelectable key={scriptId} color={color}>
            {isViewCard 
              ? <CardScriptVertical scriptId={scriptId} color={color} />
              : <CardScriptHorizontal scriptId={scriptId} color={color} />
            }
          </CardSelectable>
        ))}
      </CardList>
    </>
  )
}
