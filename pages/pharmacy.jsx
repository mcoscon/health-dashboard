import React from 'react'
import PatientListHeader from '../components/patientlist/PatientListHeader'
import MedicationStats from '../components/prescription/MedicationStats'
import PrescribeMedication from '../components/prescription/PrescribeMedication'

const Pharmacy = () => {
	return (
		<div className='flex xl:justify-center'>
			<div className='flex flex-col w-full md:max-w-screen-xl md:flex-row gap-7 p-7'>
				<div className='md:basis-2/3'>
					<PrescribeMedication />
				</div>
				<div className='md:basis-1/3'>
					{/* 	<div className='p-5 text-black bg-white rounded-lg shadow-lg'>BOX</div>
				<div className='p-5 text-black bg-white rounded-lg shadow-lg'>BOX</div> */}
					<MedicationStats />
				</div>
			</div>
		</div>
	)
}

export default Pharmacy
