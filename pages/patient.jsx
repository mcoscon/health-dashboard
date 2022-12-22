import React from 'react'
import PatientDetails from '../components/PatientDetails'
import PatientDiary from '../components/PatientCompliance'
import PatientGraphs from '../components/PatientGraphs'

const Patient = () => {
	return (
		<div className='flex justify-start w-full xl:justify-center'>
			<div className='flex flex-col justify-center md:flex-row md:justify-start p-7 gap-7 md:max-w-screen-xl'>
				<div className='flex flex-col gap-7 shrink-0'>
					<PatientDetails />
					<PatientDiary />
				</div>
				<PatientGraphs />
			</div>
		</div>
	)
}

export default Patient
