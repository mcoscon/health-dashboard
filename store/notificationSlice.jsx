import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false,
}

export const notificationStateSlice = createSlice({
	name: 'notificationState',
	initialState,
	reducers: {
		setVisibleTrue: (state) => {
			state.value = true
		},
		setVisibleFalse: (state) => {
			state.value = false
		},
	},
})

export const { setVisibleTrue, setVisibleFalse } = notificationStateSlice.actions

export default notificationStateSlice.reducer
