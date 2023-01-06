import React from 'react'

const Spinner = () => {
	return (
		<div className='flex items-center justify-center h-full'>
			<div
				className='inline-block w-16 h-16 border-4 rounded-full spinner-border animate-spin text-cyan-700'
				role='status'
			>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	)
}

export default Spinner
