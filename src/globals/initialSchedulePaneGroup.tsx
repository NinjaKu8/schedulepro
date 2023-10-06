
import { Board, Breakdown, Dood, Elements, ScriptSchedule } from '../components/Schedule/components'
import { IPaneGroup } from 'types/panes'

export const initialSchedulePaneGroup: IPaneGroup = {
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
                },
                {
                  id: '2',
                  name: 'Recycle Bin',
                  content: <Board boardId='ABC124' />
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
                  id: '5',
                  name: 'Elements',
                  content: <Elements />
                }
              ],
              id: '0d4328b4664fb',
              selectedTabId: '5',
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
              id: '3',
              name: 'First Unit',
              content: <Board boardId='ABC123' />
            },
            {
              id: '7',
              name: 'Second Unit',
              content: <Board boardId='ABC125' />
            },
            {
              id: '4',
              name: 'Script',
              content: <ScriptSchedule />
            }
          ],
          id: '412bd8fe5ce03',
          selectedTabId: '3',
          parentIsVertical: false,
          parentId: '165bfc2cebe71',
        }
      ],
      id: '165bfc2cebe71',
      parentId: '4105d75d2e23'
    },
    {
      tabs: [
        {
          id: '6',
          name: 'Dood',
          content: <Dood />
        }
      ],
      id: '7f0060ae7d46',
      selectedTabId: '6',
      parentIsVertical: true,
      parentId: '4105d75d2e23',
      flex: 0.05
    }
  ],
  id: '4105d75d2e23',
  parentId: null
}

// export const initialWindow: ITabPane = {
//   tabs: [
//     {
//       id: '1',
//       name: 'Breakdown',
//       content: <Breakdown />,
//     },
//     {
//       id: '2',
//       name: 'Recycle Bin',
//       content: <Recycle />,
//     },
//     {
//       id: '3',
//       name: 'Stripboard',
//       content: <Stripboard />,
//     },
//     {
//       id: '4',
//       name: 'Script',
//       content: <ScriptSchedule />,
//     },
//     {
//       id: '5',
//       name: 'Elements',
//       content: <Elements />,
//     },
//     {
//       id: '6',
//       name: 'Dood',
//       content: <Dood />,
//     },
//   ],
//   selectedTabId: '1',
//   id: createUniqueId(),
//   parentIsVertical: false,
//   flex: .5,
// }
