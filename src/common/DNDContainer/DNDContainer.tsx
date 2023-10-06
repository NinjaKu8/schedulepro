import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { closestCenter, CollisionDetection, DndContext, DragEndEvent, DragOverEvent, DragStartEvent, getFirstCollision, KeyboardCoordinateGetter, KeyboardSensor, MeasuringStrategy, Modifier, MouseSensor, pointerWithin, rectIntersection, TouchSensor, useSensor, useSensors, UniqueIdentifier, Collision } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

import { DNDOverlay } from 'common'
import { coordinateGetter as multipleContainersCoordinateGetter } from './utils'
import { DNDDraggingId, DNDItem, DNDItems, DNDSelectedIds } from 'types/types'

type Props = {
	activeId: DNDDraggingId;
	children: ReactNode;
	coordinateGetter?: KeyboardCoordinateGetter;
	handle?: boolean;
	isItemSelected: (id: DNDItem)=>boolean;
	items: DNDItems;
	modifiers?: Modifier[];
	multiContainer?: boolean;
	overlayComponent: ReactNode;
	overlayModifiers?: Modifier[];
	selectedIds: DNDSelectedIds;
	setActiveId: (id: DNDDraggingId)=>void;
	setItems: (items: DNDItems)=>void;
	setSelectedIds: (selectedIds: DNDSelectedIds)=>void;
}

const measuring = {
	droppable: {
		strategy: MeasuringStrategy.Always
	}
}

const constrainSensorDistance = {
	activationConstraint: {
		distance: 5, // prevents drag on initial click, necessary when not using drag handles
	}
}

export function DNDContainer({ activeId, children, coordinateGetter = multipleContainersCoordinateGetter, handle, isItemSelected, items, modifiers, multiContainer, overlayComponent, overlayModifiers, selectedIds, setActiveId, setItems, setSelectedIds }: Props): JSX.Element {
	const [clonedItems, setClonedItems] = useState<DNDItems | null>(null)
	
	const lastOverId = useRef<DNDDraggingId>(null)
	const recentlyMovedToNewContainer = useRef(false)

	const sensors = useSensors(
		useSensor(MouseSensor, constrainSensorDistance),
		useSensor(TouchSensor, constrainSensorDistance),
		useSensor(KeyboardSensor, { coordinateGetter })
	)

	const findDNDContainer = useCallback((id: DNDItem): UniqueIdentifier | undefined => {
		if(id in items) return id
		return Object.keys(items).find((key)=>items[key].includes(id))
	}, [items])

	const initialContainer = useMemo(()=>(
		activeId ? findDNDContainer(activeId) : null
		// eslint-disable-next-line react-hooks/exhaustive-deps
	), [activeId])

	const filterItems = useCallback((items: DNDItem[]): UniqueIdentifier[] => {
		if(!activeId) return items
		return items.filter((id)=>id === activeId || !selectedIds.includes(id))
	}, [activeId, selectedIds])

	/**
	 * Custom collision detection strategy optimized for multiple containers
	 *
	 * - First, find any droppable containers intersecting with the pointer.
	 * - If there are none, find intersecting containers with the active draggable.
	 * - If there are no intersecting containers, return the last matched intersection
	 *
	 */
	const collisionDetectionStrategy: CollisionDetection = useCallback((args): Collision[] => {
		if(activeId && activeId in items) {
			return closestCenter({
				...args,
				droppableContainers: args.droppableContainers.filter((container)=>container.id in items)
			})
		}

		// Start by finding any intersecting droppable
		const pointerIntersections = pointerWithin(args)
		const intersections = pointerIntersections.length > 0
			? pointerIntersections // If there are droppables intersecting with the pointer, return those
			: rectIntersection(args)
		let overId = getFirstCollision(intersections, 'id')

		if(overId!==null) {
			if(overId in items) {
				const containerItems = items[overId]
				// If a container is matched and it contains items (columns 'A', 'B', 'C')
				if(containerItems.length > 0) {
					// Return the closest droppable within that container
					overId = closestCenter({
						...args,
						droppableContainers: args.droppableContainers.filter((container)=>container.id !== overId && containerItems.includes(container.id))
					})[0]?.id
				}
			}
			lastOverId.current = overId
			return [{ id: overId }]
		}

		// When a draggable item moves to a new container, the layout may shift
		// and the `overId` may become `null`. We manually set the cached `lastOverId`
		// to the id of the draggable item that was moved to the new container, otherwise
		// the previous `overId` will be returned which can cause items to incorrectly shift positions
		if(recentlyMovedToNewContainer.current) lastOverId.current = activeId

		// If no droppable is matched, return the last match
		return lastOverId.current ? [{ id: lastOverId.current }] : []
	}, [activeId, items])

	const handleDragStart = useCallback(({ active }: DragStartEvent): void => {
		setActiveId(active.id)
		setClonedItems(items)
		if(!isItemSelected(active.id)) setSelectedIds([active.id])
	}, [isItemSelected, items, setActiveId, setSelectedIds])

	const handleDragOver = useCallback(({ active, over }: DragOverEvent): void => {
		const overId = over?.id
		if(!overId) return

		const overContainer = findDNDContainer(overId)
		const activeContainer = findDNDContainer(active.id)

		if(!overContainer || !activeContainer) return

		if(activeContainer !== overContainer) {
			const activeItems = items[activeContainer]
			const overItems = items[overContainer]
			const overIndex = overItems.indexOf(overId)
			const activeIndex = activeItems.indexOf(active.id)

			let newIndex: number

			if(overId in items) {
				newIndex = overItems.length + 1
			} else {
				const isBelowOverItem = over && active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height

				const modifier = isBelowOverItem ? 1 : 0

				newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1
			}

			recentlyMovedToNewContainer.current = true

			setItems( {
				...items,
				[activeContainer]: items[activeContainer].filter((item: DNDItem)=>item !== active.id),
				[overContainer]: [
					// @ts-ignore
					...items[overContainer].slice(0, newIndex),
					items[activeContainer][activeIndex],
					...items[overContainer].slice(newIndex, items[overContainer].length)
				]
			})
		}
	}, [items, setItems, findDNDContainer])

	const handleDragEnd = useCallback(({ active, over }: DragEndEvent): void => {
		// ensure that draggable type matches the droppable type
		const originalContainerId = clonedItems ? Object.keys(clonedItems).find(i=>clonedItems[i].includes(active.id)) : null
		const accepts = Object.keys(items)
		if(originalContainerId && !(accepts.includes(originalContainerId) && accepts.includes(over?.data?.current?.type))) {
			if(clonedItems) setItems(clonedItems)
			setActiveId(null)
			return
		}

		const activeContainer = findDNDContainer(active.id)
		const overId = over?.id

		if(!activeContainer || !overId || !initialContainer) {
			setActiveId(null)
			setSelectedIds([])
			return
		}

		const ids = selectedIds.length ? [active.id, ...selectedIds.filter((id)=>id !== active.id)] : [active.id]

		const overContainer = findDNDContainer(overId)

		if(overContainer) {
			const overItems = filterItems(items[overContainer])
			const overIndex = overItems.indexOf(overId)
			const activeIndex = overItems.indexOf(active.id)
			const newItems = arrayMove(overItems, activeIndex, overIndex)
			const newActiveIndex = newItems.indexOf(active.id)

			setItems({
				...items,
				[initialContainer]: items[initialContainer].filter((id)=>!ids.includes(id)),
				[activeContainer]: items[activeContainer].filter((id)=>!ids.includes(id)),
				[overContainer]: [...newItems.slice(0, newActiveIndex + 1), ...ids.filter((id)=>id !== active.id), ...newItems.slice(newActiveIndex + 1, newItems.length)]
			})
		}

		setActiveId(null)
	}, [clonedItems, findDNDContainer, initialContainer, items, selectedIds, setActiveId, setSelectedIds, setItems, filterItems])

	const handleDragCancel = useCallback((): void => {
		if(clonedItems) {
			// Reset items to their original state in case items have been dragged across containers
			setItems(clonedItems)
		}
		setActiveId(null)
		setClonedItems(null)
	}, [clonedItems, setItems, setActiveId, setClonedItems])

	useEffect(()=>{
		requestAnimationFrame(()=>recentlyMovedToNewContainer.current = false)
	}, [items])

	return (
		<div className='dnd'>
			<DndContext
				collisionDetection={multiContainer ? collisionDetectionStrategy : rectIntersection}
				measuring={measuring}
				modifiers={modifiers}
				onDragCancel={handleDragCancel}
				onDragEnd={handleDragEnd}
				onDragOver={handleDragOver}
				onDragStart={handleDragStart}
				sensors={sensors}
			>
				{children}
				<DNDOverlay 
					activeId={activeId} 
					handle={handle} 
					isActive={activeId ? (Object.keys(items) as DNDSelectedIds).includes(activeId) : false} 
					modifiers={overlayModifiers}
					selectedItemsCount={selectedIds.length}
				>
					{overlayComponent}
				</DNDOverlay>
			</DndContext>
		</div>
	)
}
