import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
}

export const patientGraphSlice = createSlice({
	name: 'patientGraphState',
	initialState,
	reducers: {
		getPatientGraphData: (state) => {
			//after few seconds getting data then return loading false
			state.loading = false
		},
		setPatientGraphLoading: (state) => {
			state.loading = true
		},
	},
	//use https://www.bezkoder.com/redux-toolkit-example-crud/ for async apis
})

export const { getPatientGraphData, setPatientGraphLoading } = patientGraphSlice.actions

export default patientGraphSlice.reducer
