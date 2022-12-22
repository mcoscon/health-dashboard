import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false,
}

export const notificationStateSlice = createSlice({
	name: 'notificationState',
	initialState,
	reducers: {
		setVisibleTrue: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value = true
			console.log('set visible true')
		},
		setVisibleFalse: (state) => {
			state.value = false
			console.log('set visible false')
		},
	},
})

// Action creators are generated for each case reducer function
export const { setVisibleTrue, setVisibleFalse } = notificationStateSlice.actions

export default notificationStateSlice.reducer
