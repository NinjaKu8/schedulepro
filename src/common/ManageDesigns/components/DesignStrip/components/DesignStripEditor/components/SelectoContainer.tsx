import { useEffect, useMemo, useState, useRef, useCallback } from 'react'
import Selecto from 'react-selecto'
import { deepFlat } from '@daybrush/utils'
import { GroupManager, TargetList } from '@moveable/helper'
import Moveable, { MoveableTargetGroupsType } from 'react-moveable'

import { Elements } from './Elements'

export function SelectoContainer() {
  const [targets, setTargets] = useState<MoveableTargetGroupsType>([])
  const groupManager = useMemo<GroupManager>(() => new GroupManager([]), [])
  const moveableRef = useRef<Moveable>(null)
  const selectoRef = useRef<Selecto>(null)

  const setSelectedTargets = useCallback(
    (nextTargetes: MoveableTargetGroupsType) => {
      selectoRef.current!.setSelectedTargets(deepFlat(nextTargetes))
      setTargets(nextTargetes)
    },
    []
  )

  useEffect(() => {
    const elements = selectoRef.current!.getSelectableElements()
    const groupedElements = elements.filter((ele) =>
      ele.classList.contains('grouped') ? ele : null
    )

    // groupManager.group([...groupedElements], true)
    // setTargets(groupedElements)
    groupManager.set([[...groupedElements]], elements)
  }, [])

  return (
    <div className="root">
      <div className="selecto-area">
        <div style={{ display: 'none' }}>
          <button
            onClick={() => {
              const nextGroup = groupManager.group(targets, true)

              if (nextGroup) {
                setTargets(nextGroup)
              }
            }}
          >
            Group
          </button>
          &nbsp;
          <button
            onClick={() => {
              const nextGroup = groupManager.ungroup(targets)

              if (nextGroup) {
                setTargets(nextGroup)
              }
            }}
          >
            Ungroup
          </button>
        </div>
        <Moveable
          origin={false}
          ref={moveableRef}
          target={targets}
          draggable={true}
          resizable={true}
          snappable={true}
          snapGridWidth={12}
          snapGridHeight={12}
          isDisplayGridGuidelines={true}
          maxSnapElementGuidelineDistance={12}
          bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: 'css' }}
          onRender={(e) => {
            e.target.style.cssText += e.cssText
          }}
          onDrag={(e) => {
            e.target.style.transform = e.transform
          }}
          onDragGroup={(e) => {
            e.events.forEach((ev) => {
              ev.target.style.transform = ev.transform
            })
          }}
          onRenderGroup={(e) => {
            e.events.forEach((ev) => {
              ev.target.style.cssText += ev.cssText
            })
          }}
          onClickGroup={(e) => {
            if (!e.moveableTarget) {
              setSelectedTargets([])
              return
            }
            if (e.isDouble) {
              const childs = groupManager.selectSubChilds(
                targets,
                e.moveableTarget
              )

              setSelectedTargets(childs.targets())
              return
            }
            if (e.isTrusted) {
              selectoRef.current!.clickTarget(e.inputEvent, e.moveableTarget)
            }
          }}
        ></Moveable>
        <Selecto
          ref={selectoRef}
          dragContainer={window}
          selectableTargets={['.selecto-area .target']}
          hitRate={0}
          selectByClick={true}
          selectFromInside={false}
          toggleContinueSelect={['shift']}
          ratio={0}
          onDragStart={(e) => {
            const moveable = moveableRef.current!
            const target = e.inputEvent.target
            const flatted = deepFlat(targets)

            if (
              target.tagName === 'BUTTON' ||
              moveable.isMoveableElement(target) ||
              flatted.some((t) => t === target || t.contains(target))
            ) {
              e.stop()
            }
            e.data.startTargets = targets
          }}
          onSelect={(e) => {
            const { startAdded, startRemoved, isDragStartEnd } = e

            if (isDragStartEnd) {
              return
            }
            const nextChilds = groupManager.selectSameDepthChilds(
              e.data.startTargets,
              startAdded,
              startRemoved
            )

            setSelectedTargets(nextChilds.targets())
          }}
          onSelectEnd={(e) => {
            const { isDragStartEnd, isClick, added, removed, inputEvent } = e
            const moveable = moveableRef.current!

            if (isDragStartEnd) {
              inputEvent.preventDefault()

              moveable.waitToChangeTarget().then(() => {
                moveable.dragStart(inputEvent)
              })
            }
            let nextChilds: TargetList

            if (isDragStartEnd || isClick) {
              nextChilds = groupManager.selectCompletedChilds(
                e.data.startTargets,
                added,
                removed
              )
            } else {
              nextChilds = groupManager.selectSameDepthChilds(
                e.data.startTargets,
                added,
                removed
              )
            }
            e.currentTarget.setSelectedTargets(nextChilds.flatten())
            setSelectedTargets(nextChilds.targets())
          }}
        ></Selecto>

        <div className="elements">
          <Elements />
        </div>
      </div>
    </div>
  )
}
