import { ReactNode } from 'react'
import { AnimateLayoutChanges, useSortable, defaultAnimateLayoutChanges, SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy, rectSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import classNames from 'classnames'

import { Droppable } from './components'
import { DNDItem, DNDSelectedIds } from 'types/types'

const animateLayoutChanges: AnimateLayoutChanges = (args) => defaultAnimateLayoutChanges({ ...args, wasDragging: true })

type Props = {
	children: ReactNode;
	strategy?: 'vertical'|'horizontal'|'grid';
	id: DNDItem;
	items: DNDSelectedIds;
}

export function DNDDroppable({ children, id, items, strategy, ...props }: Props): JSX.Element {
	const { active, isDragging, over, setNodeRef, transition, transform } = useSortable({
		id,
		data: {
			type: 'container',
			children: items
		},
		animateLayoutChanges
	})
	const hover = over ? (id === over.id && active?.data.current?.type !== 'container') || items.includes(over.id) : false
	const sortingStrategy = strategy
		? strategy==='horizontal'
			? horizontalListSortingStrategy
			: strategy==='vertical'
				? verticalListSortingStrategy
				: rectSortingStrategy
		: rectSortingStrategy

	return (
		<div
			{...props}
			ref={setNodeRef}
			style={{
				transition,
				transform: CSS.Translate.toString(transform),
				opacity: isDragging ? 0.5 : undefined
			}}
			className={classNames('dnd__container', hover && 'dnd__container--hover')}
			tabIndex={undefined}
		>
			<SortableContext items={items} strategy={sortingStrategy}>
				<Droppable id={id}>{children}</Droppable>
			</SortableContext>
		</div>
	)
}
