import React, { useState, useEffect } from 'react'

const useCountDown = (start) => {
	const [counter, setCounter] = useState(start)
	useEffect(() => {
		if (counter === 0) {
			return
		}
		setTimeout(() => {
			setCounter(counter - 1)
			console.log('timer', counter)
		}, 1000)
	}, [counter])
	return counter
}

const Success = (props) => {
	const message = props.message
	let _countDown = useCountDown(2)
	return (
		<div
			className={`absolute top-0 right-0 inline-flex items-center p-4 mt-5 mr-5 text-base text-green-700 transition duration-150 ease-in-out duration-700 bg-green-100 rounded-lg font-Karla-Bold w-96 ${
				_countDown === 0 ? 'hidden' : 'visible'
			}`}
			role='alert'
		>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='fas'
				data-icon='check-circle'
				className='w-4 h-4 mr-2 fill-current'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 512 512'
			>
				<path
					fill='currentColor'
					d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'
				></path>
			</svg>
			{message}
		</div>
	)
}
const NotificationAlert = (props) => {
	const { type, message } = props
	switch (type) {
		case 'success':
			return <Success message={message} />

		default:
			return <Success message={message} />
	}
}

export default NotificationAlert
