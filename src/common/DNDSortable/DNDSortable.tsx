import { ReactNode } from 'react'
import { useSortable } from '@dnd-kit/sortable'

import { DNDSortableItem } from '../index'
import { useMountStatus } from '../../hooks'
import { DNDItem } from 'types/types'

type Props = {
	children: ReactNode;
	className?: string;
	containerId?: DNDItem;
	disabled?: boolean;
	handle?: boolean;
	id: DNDItem;
	onSelect: (id: DNDItem, isShift: boolean, isMeta: boolean) => void;
}

export function DNDSortable({ children, className, containerId, disabled, handle, id, onSelect }: Props): JSX.Element {
	const { isDragging, isSorting, listeners, setActivatorNodeRef, setNodeRef, transform, transition } = useSortable({
		id,
		data: {
			type: containerId
		}
	})
	const mounted = useMountStatus()
	const mountedWhileDragging = isDragging && !mounted

	return (
		<DNDSortableItem 
			className={className}
			fadeIn={mountedWhileDragging} 
			handle={handle} 
			handleProps={handle ? { ref: setActivatorNodeRef } : undefined} 
			id={id} 
			isDragging={isDragging} 
			isSorting={isSorting} 
			listeners={listeners}
			onSelect={onSelect} 
			ref={disabled ? undefined : setNodeRef} 
			transform={transform} 
			transition={transition} 
		>
			{children}
		</DNDSortableItem>
	)
}
