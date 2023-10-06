import { forwardRef, useEffect, ReactNode } from 'react'

type XProps = {
	children: ReactNode
	[x: string]: any
}

// this updates the position of the overlay (via popper.scheduleUpdate)
export const ListOverlayUpdate = forwardRef<HTMLDivElement, XProps>(({ placement, arrowProps, popper, children, show: _show, ...props }: XProps, ref) => {
	
	useEffect(() => {
		popper.scheduleUpdate()
	}, [children, popper])

	return (
		<div 
      ref={ref} 
      {...props} 
      className={`bg-white rounded-bottom shadow-lg overflow-auto ${props.className}`}
      style={{ position: 'absolute', height: '10em', width: '15em', zIndex: 1050, ...props.style }}
    >
			{children}
		</div>
	)
})