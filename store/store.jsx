import { configureStore } from '@reduxjs/toolkit'
import modalStateReducer from './modalSlice'

export const store = configureStore({
	reducer: {
		modalState: modalStateReducer,
	},
})
