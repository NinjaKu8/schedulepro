import React, { CSSProperties, forwardRef, memo, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import type { DraggableSyntheticListeners } from '@dnd-kit/core'
import type { Transform } from '@dnd-kit/utilities'

import { Handle } from './components'
import { DNDItem } from 'types/types'

type Props = {
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	dragOverlay?: boolean;
	fadeIn?: boolean;
	handle?: boolean;
	handleProps?: any;
	id: DNDItem;
	isDragging?: boolean;
	isSorting?: boolean;
	listeners?: DraggableSyntheticListeners;
	onSelect?: (id: DNDItem, isShift: boolean, isMeta: boolean) => void;
	transform?: Transform | null;
	transition?: string | null;
}

export const DNDSortableItem = memo(
	forwardRef<HTMLDivElement, Props>(
		({ children, className, disabled, dragOverlay, fadeIn, handle, handleProps, id, isDragging, isSorting, listeners, onSelect, transform, transition }, ref): JSX.Element => {

			useEffect((): ReturnType<any> => {
				if(!dragOverlay) return
				document.body.style.cursor = 'grabbing'
				return () => (document.body.style.cursor = '')
			}, [dragOverlay])

			function handleClick(e: React.MouseEvent<HTMLDivElement>) {
				e.preventDefault()
				if(onSelect) {
					onSelect(id, e.shiftKey, e.metaKey)
				}
			}

			return (
				<div
					className={classNames('dnd__wrapper d-flex', className, fadeIn && 'dnd__wrapper--fadeIn', dragOverlay && 'dnd__wrapper--dragOverlay')}
					onClick={handleClick}
					style={
						{
							transition: [transition].filter(Boolean).join(', '),
							'--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
							'--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
							'--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
							'--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined
						} as CSSProperties
					}
					ref={ref}
				>
					<div 
						className={classNames(
							'dnd__item position-relative d-flex flex-grow-1 outline-0', 
							isDragging && 'dnd__item--dragging', 
							handle && 'dnd__item--withHandle', 
							dragOverlay && 'dnd__item--dragOverlay', 
							disabled && 'dnd__item--disabled', 
							'dnd__item--color'
						)} 
						data-cypress="draggable-item" 
						{...(!handle ? listeners : undefined)} 
						tabIndex={!handle ? 0 : undefined}
					>
						{children}
						<span className={'d-flex align-self-start'}>
							{handle ? <Handle {...handleProps} {...listeners} /> : null}
						</span>
					</div>
				</div>
			)
		}
	)
)
