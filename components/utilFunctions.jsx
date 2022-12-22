import React, { useState, useEffect } from 'react'
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
