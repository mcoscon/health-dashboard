import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibleFalse } from '../../store/notificationSlice'

/* const useCountDown = (start) => {
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
} */

const Success = (props) => {
	const message = props.message
	return (
		<div
			className={`absolute top-0 right-0 inline-flex items-center p-4 mt-5 mr-5 text-base text-green-700 transition ease-in-out duration-700 bg-green-100 rounded-lg font-Karla-Bold w-96 z-50`}
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

const Warning = (props) => {
	const message = props.message
	return (
		<div
			className='inline-flex items-center w-full px-6 py-5 mb-3 text-base text-yellow-700 bg-yellow-100 rounded-lg'
			role='alert'
		>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='fas'
				data-icon='exclamation-triangle'
				className='w-4 h-4 mr-2 fill-current'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 576 512'
			>
				<path
					fill='currentColor'
					d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'
				></path>
			</svg>
			{message}
		</div>
	)
}
const NotificationAlert = (props) => {
	const { type, message } = props
	const visible = useSelector((state) => state.notificationState.value)
	const dispatch = useDispatch()
	setTimeout(() => {
		dispatch(setVisibleFalse())
	}, 2500)
	switch (type) {
		case 'success':
			return visible && <Success message={message} />
		case 'warning':
			return visible && <Warning message={message} />
	}
}

export default NotificationAlert
