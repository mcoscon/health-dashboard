import React, { useState, useEffect, useRef } from 'react'

export const useCountDown = (start) => {
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

export function useInterval(callback, delay) {
	const savedCallback = useRef()

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current()
		}
		if (delay !== null) {
			let id = setInterval(tick, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}

export function randomize(array) {
	console.log(array)
	return array
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
}

export function shift(array) {
	let _array = array
	const toPush = _array.shift()
	_array.push(toPush)
	return _array
}
