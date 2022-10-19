import React from 'react'
import PatientDetails from '../components/PatientDetails'
import PatientDiary from '../components/PatientCompliance'
import PatientGraphs from '../components/PatientGraphs'

const Patient = () => {
	return (
		/* 		<div className='flex flex-row md:items-center md:justify-start p-7'>
			<div className='flex flex-col items-center justify-center flex-auto lg:flex-row gap-7 md:items-start'>
				<div className='flex flex-col gap-7 shrink-0'>
					<PatientDetails />
					<PatientDiary />
				</div>
				<PatientGraphs />
			</div>
		</div> */
		<div className='flex flex-col items-center w-full md:items-start md:flex-row md:justify-startPpatie p-7 gap-7'>
			<div className='flex flex-col gap-7 shrink-0'>
				<PatientDetails />
				<PatientDiary />
			</div>
			<PatientGraphs />
		</div>
	)
}

export default Patient
