import React from 'react'
import { createPopper } from '@popperjs/core'

const Tooltip = (props) => {
	const [popoverShow, setPopoverShow] = React.useState(false)
	const btnRef = React.createRef()
	const popoverRef = React.createRef()
	const openTooltip = () => {
		createPopper(btnRef.current, popoverRef.current, {
			placement: 'top',
		})
		setPopoverShow(true)
	}
	const closeTooltip = () => {
		setPopoverShow(false)
	}
	return (
		<>
			<div className='flex flex-wrap'>
				<div className='w-full text-center'>
					<button
						className='px-6 py-3 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-500 active:bg-blueGray-600 hover:shadow-lg focus:outline-none'
						type='button'
						onMouseEnter={openTooltip}
						onMouseLeave={closeTooltip}
						ref={btnRef}
					>
						top blueGray
					</button>
					<div
						className={
							(popoverShow ? '' : 'hidden ') +
							'bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
						}
						ref={popoverRef}
					>
						<div>
							<div className='p-3 mb-0 font-semibold uppercase border-b border-solid rounded-t-lg opacity-75 bg-blueGray-600 border-blueGray-100'>
								blueGray tooltip title
							</div>
							<div className='p-3'>And here's some amazing content. It's very engaging. Right?</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Tooltip
