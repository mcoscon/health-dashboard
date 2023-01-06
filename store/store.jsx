import { configureStore } from '@reduxjs/toolkit'
import notificationStateReducer from './notificationSlice'
import patientGraphStateReducer from './patientGraphSlice'

export const store = configureStore({
	reducer: {
		notificationState: notificationStateReducer,
		patientGraphState: patientGraphStateReducer,
	},
})
