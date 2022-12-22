import { configureStore } from '@reduxjs/toolkit'
import notificationStateReducer from './notificationSlice'

export const store = configureStore({
	reducer: {
		notificationState: notificationStateReducer,
	},
})
