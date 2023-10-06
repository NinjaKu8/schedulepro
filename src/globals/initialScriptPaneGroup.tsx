
import { Breakdown, Elements } from '../components/Schedule/components'
import { ScriptScene } from 'common'
import { IPaneGroup } from 'types/panes'

export const initialScriptPaneGroup: IPaneGroup = {
  isVertical: true,
  primaryAxis: [
    {
      isVertical: false,
      primaryAxis: [
        {
          isVertical: true,
          primaryAxis: [
            {
              tabs: [
                {
                  id: '1',
                  name: 'Breakdown',
                  content: <Breakdown />
                }
              ],
              selectedTabId: '1',
              id: 'b49a60b064e8b',
              parentIsVertical: true,
              parentId: 'c4716dbed3695'
            },
            {
              tabs: [
                {
                  id: '3',
                  name: 'Elements',
                  content: <Elements />
                }
              ],
              id: '0d4328b4664fb',
              selectedTabId: '3',
              parentIsVertical: true,
              parentId: 'c4716dbed3695',
            }
          ],
          id: 'c4716dbed3695',
          parentId: '165bfc2cebe71'
        },
        {
          tabs: [
            {
              id: '2',
              name: 'Script',
              content: <ScriptScene />
            }
          ],
          id: '412bd8fe5ce03',
          selectedTabId: '2',
          parentIsVertical: false,
          parentId: '165bfc2cebe71',
        }
      ],
      id: '165bfc2cebe71',
      parentId: '4105d75d2e23'
    }
  ],
  id: '4105d75d2e23',
  parentId: null
}
