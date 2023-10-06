import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { defaultDropAnimationSideEffects, DragOverlay, DropAnimation, Modifier } from '@dnd-kit/core'

import { DNDSortableItem } from '../index'
import { DNDDraggingId } from 'types/types'

type Props = {
	activeId: DNDDraggingId;
	children: ReactNode;
	handle?: boolean;
	isActive: boolean;
	modifiers?: Modifier[];
	selectedItemsCount?: number;
}

const dropAnimation: DropAnimation = {
	sideEffects: defaultDropAnimationSideEffects({
		styles: {
			active: {
				opacity: '0.5'
			}
		}
	})
}

const badgeStyle = { top: '-1.5em', right: '1em', zIndex: 10 }

export function DNDOverlay({ activeId, children, handle, isActive, modifiers, selectedItemsCount }: Props): JSX.Element {
	return createPortal(
		<DragOverlay className='dnd__overlay' dropAnimation={dropAnimation} modifiers={modifiers}>
			{activeId ? (
				<>
					<DNDSortableItem id={activeId} handle={handle} dragOverlay>
						{!isActive ? children : null}
					</DNDSortableItem>
					{selectedItemsCount! > 1 && (
						<div 
							className='position-absolute d-inline-block px-3 py-2 rounded shadow bg-white text-primary text-right fs-5 fw-bolder'
							style={badgeStyle}
						>
							<span>{selectedItemsCount}</span>
						</div>
					)}
				</>
			) : null}
		</DragOverlay>,
		document.body
	)
}
