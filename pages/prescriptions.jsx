import React from 'react'
import PatientListHeader from '../components/patientlist/PatientListHeader'
import MedicationStats from '../components/prescription/MedicationStats'
import PrescribeMedication from '../components/prescription/PrescribeMedication'
import NotificationAlert from '../components/ui-components/NotificationAlert'

const Prescriptions = () => {
	return (
		<>
			<div className='flex justify-start w-full xl:justify-center'>
				<div className='flex flex-col justify-center md:max-w-screen-xl md:flex-row gap-7 p-7'>
					<div className='md:basis-2/3'>
						<PrescribeMedication />
					</div>
					<div className='md:basis-1/3'>
						<MedicationStats />
					</div>
				</div>
			</div>
			<NotificationAlert message='Success!' type='success' />
		</>
	)
}

export default Prescriptions
