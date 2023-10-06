import { ReactNode } from 'react'
import { useDroppable } from '@dnd-kit/core'

import { DNDItem } from 'types/types'

type Props = {
	children: ReactNode;
	id: DNDItem;
}

export function Droppable({ children, id }: Props): JSX.Element {
	const { setNodeRef } = useDroppable({
		id,
		data: {
			accepts: ['ABC123', 'ABC125']
		}
	})
	
	return (
		<div ref={setNodeRef}>
			{children}
		</div>
	)
}
