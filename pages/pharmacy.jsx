import React from 'react'
import PrescribeMedication from '../components/prescription/PrescribeMedication'

const Pharmacy = () => {
	return (
		<div className='flex flex-row w-full gap-7 p-7'>
			<div className='w-1/2'>
				<div className='p-5 text-black bg-white rounded-lg shadow-lg'>BOX</div>
				<div className='p-5 text-black bg-white rounded-lg shadow-lg'>BOX</div>
			</div>
			<div className='w-1/2'>
				<PrescribeMedication />
			</div>
		</div>
	)
}

export default Pharmacy
