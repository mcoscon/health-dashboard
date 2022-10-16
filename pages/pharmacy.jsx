import React from 'react'
import MedicationStats from '../components/prescription/MedicationStats'
import PrescribeMedication from '../components/prescription/PrescribeMedication'

const Pharmacy = () => {
	return (
		<div className='flex flex-row w-full gap-7 p-7'>
			<div className='w-2/3'>
				<PrescribeMedication />
			</div>
			<div className='w-1/3'>
				{/* 	<div className='p-5 text-black bg-white rounded-lg shadow-lg'>BOX</div>
				<div className='p-5 text-black bg-white rounded-lg shadow-lg'>BOX</div> */}
				<MedicationStats />
			</div>
		</div>
	)
}

export default Pharmacy
