import { forwardRef, CSSProperties, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	active?: {
		fill: string
		background: string
	};
	cursor?: CSSProperties['cursor'];
}

export const Action = forwardRef<HTMLButtonElement, Props>(({ active, className, cursor, style, ...props }, ref) => {
	return (
		<button
			ref={ref}
			{...props}
			className={classNames('dnd__action position-absolute d-flex top-0 end-0 h-100 justify-content-center align-items-center rounded', className)}
			tabIndex={0}
			style={
				{
					...style,
					cursor,
					'--fill': active?.fill,
					'--background': active?.background
				} as CSSProperties
			}
		/>
	)
})
