import React from 'react'
import { BiMessageRoundedError, BiZoomIn, BiPhoneOutgoing } from 'react-icons/bi'
import MoreInfoModal from './MoreInfoModal'
const PatientCompliance = () => {
	return (
		<div>
			<div className='p-5 text-black bg-white rounded-lg'>
				<div className='flex flex-row justify-between align-middle '>
					<div>
						<h3>PATIENT COMPLIANCE</h3>
						<h3 className='mb-5 text-cyan-600'>DAYS SKIPPED PAST 30 DAYS</h3>
					</div>
					<div>
						<button className='flex flex-row items-center justify-center gap-2 p-2 text-xs text-white rounded-full bg-cyan-600 shadow-btnShadow font-Karla-Heavy hover:bg-white hover:text-cyan-600 '>
							<BiPhoneOutgoing size={20} />
						</button>
					</div>
				</div>
				<div className='flex flex-col-reverse justify-between sm:flex-row gap-7'>
					<div>
						<div className='grid grid-rows-2 gap-5 mt-5 sm:gap-10'>
							<div className='grid grid-cols-2 gap-8 sm:grid-cols-2'>
								<div className='flex flex-col items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>
											SENSOR
											<br />
											INPUT
										</h4>
									</div>
								</div>
								<div className='flex flex-col items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>
											BREATHING <br /> INPUT
										</h4>
									</div>
								</div>
							</div>
							<div className='grid grid-cols-2 gap-8 sm:grid-cols-2'>
								<div className='flex flex-col items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>
											SYMPTOMS
											<br />
											INPUT
										</h4>
									</div>
								</div>
								<div className='flex flex-col items-center sm:items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>MEDICATION</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center gap-5'>
						<div className='w-[114px] h-[114px] bg-black'></div>
						{/* 						<button className='flex flex-row items-center justify-center gap-2 p-2 text-xs bg-white text-cyan-600 rounded-2xl shadow-btnShadow md:w-full font-Karla-Heavy hover:bg-cyan-600 hover:text-white'>
							<BiMessageRoundedError size={20} />
							REMINDER
						</button> */}
						<button
							className='flex flex-row items-center justify-center gap-2 p-2 text-xs transition duration-150 ease-in-out bg-white rounded-lg text-cyan-600 shadow-btnShadow md:w-full font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
							data-bs-toggle='modal'
							data-bs-target='#moreInfoModal'
						>
							<BiZoomIn size={20} />
							MORE INFO
						</button>
					</div>
					<MoreInfoModal />
				</div>
			</div>
		</div>
	)
}

export default PatientCompliance
