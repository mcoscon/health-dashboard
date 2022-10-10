import React from 'react'
import NavBar from '../components/NavBar'
import PatientDetails from '../components/PatientDetails'
import PatientDiary from '../components/PatientCompliance'
import PatientGraphs from '../components/PatientGraphs'
import DetailsModal from '../components/DetailsModal'

const Patient = () => {
	return (
		<div className='flex flex-row md:items-center md:justify-start p-7'>
			{/*Patient Info*/}
			<div className='flex flex-col items-center justify-center flex-auto lg:flex-row gap-7 md:items-start'>
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
