import React from 'react'
import { BiBody, BiFile } from 'react-icons/bi'
import { useState } from 'react'
import DetailsModal from './DetailsModal'
import Image from 'next/image'
import profilePic from '../public/images/patient.png'
const PatientDetails = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div>
			<div className='p-5 text-black bg-white rounded-lg shadow-lg'>
				<h3>PATIENT INFORMATION</h3>
				<h3 className='mb-5 text-cyan-600'>GOH XIAO MING ADAM</h3>
				<div className='flex flex-col-reverse justify-between sm:flex-row gap-7'>
					<div>
						<div className='grid grid-rows-3 gap-5'>
							<div className='grid grid-cols-2 gap-5 sm:grid-cols-2'>
								<div className='flex flex-col items-start'>
									<h4 className='text-xs'>ADMITTED ON</h4>
									<h5 className='text-gray-500'>31 FEB 2022</h5>
								</div>
								<div className='flex flex-col items-start'>
									<h4 className='text-xs'>ONBOARDED ON</h4>
									<h5 className='text-gray-500'>31 FEB 2022</h5>
								</div>
							</div>
							<div className='grid grid-cols-2 gap-5 sm:grid-cols-2'>
								<div className='flex flex-col items-start'>
									<h4 className='text-xs'>DISCHARGE DATE</h4>
									<h5 className='text-gray-500'>31 FEB 2022</h5>
								</div>
								<div className='flex flex-col items-start'>
									<h4 className='text-xs'>EXPECTED END DATE</h4>
									<h5 className='text-gray-500'>31 FEB 2022</h5>
								</div>
							</div>
							<div className='grid grid-cols-2 gap-5 sm:grid-cols-2'>
								<div className='flex flex-col items-start'>
									<h4 className='text-xs'>DOCTOR IN CHARGE</h4>
									<h5 className='text-gray-500'>31 FEB 2022</h5>
								</div>
								<div className='flex flex-col items-start'>
									<h4 className='text-xs'>DIAGNOSIS</h4>
									<h5 className='text-gray-500'>31 FEB 2022</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center gap-5'>
						{/* <div className='w-[114px] h-[114px] bg-black'></div> */}
						<Image
							width='100px'
							height='100px'
							src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
							className='rounded-full shadow-lg w-14 '
							alt='Avatar'
						/>
						<button
							type='button'
							onClick={() => setIsOpen(true)}
							className='flex flex-row items-center justify-center gap-2 p-2 text-xs transition duration-150 ease-in-out bg-white rounded-lg text-cyan-600 shadow-btnShadow md:w-full font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
							data-bs-toggle='modal'
							data-bs-target='#exampleModalCenteredScrollable'
						>
							<BiBody size={20} />
							DETAILS
						</button>
					</div>
					<DetailsModal isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
			</div>
		</div>
	)
}

export default PatientDetails
