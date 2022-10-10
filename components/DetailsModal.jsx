import React from 'react'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const Medication = () => {
	return (
		<>
			<h3 className='mb-5 text-gray-500'>MEDICATION OVERVIEW</h3>
			<div className='grid grid-cols-3 gap-5 p-2 '>
				<h3 className='text-xs'>MEDICATION</h3>
				<h3 className='text-xs'>AMOUNT PROVIDED</h3>
				<h3 className='text-xs'>INTAKE PRESCRIPTION</h3>
			</div>
			{[0, 1, 2].map((med, index) => {
				return (
					<>
						<div className={'grid grid-cols-3 gap-5 p-2'}>
							<h4 className='text-sm text-gray-500'>Meds A</h4>
							<h4 className='text-sm text-gray-500'>2 bottles x 50 tablets</h4>
							<h4 className='text-sm text-gray-500'>1 tablet each meal, 3x a day</h4>
						</div>
					</>
				)
			})}
		</>
	)
}
const VitalsSummary = () => {
	return (
		<div className='mb-7'>
			<h3 className='mb-5 text-gray-500'>VITALS SUMMARY</h3>
			<div className='grid grid-cols-3 gap-5 p-2 '>
				<h3 className='text-xs'>VITAL SIGN AVERAGE</h3>
				<h3 className='text-xs'>PAST 30 DAYS</h3>
				<h3 className='text-xs'>PAST 24H</h3>
			</div>
			{[0, 1, 2, 3, 4].map((vital, index) => {
				return (
					<>
						<div
							className={
								index % 2 === 0
									? 'bg-gray-200 grid grid-cols-3 gap-5 p-2'
									: 'bg-white grid grid-cols-3 gap-5 p-2'
							}
						>
							<h4 className='text-sm text-gray-500'>Heart Rate</h4>
							<h4 className='text-sm text-gray-500'>50</h4>
							<h4 className='text-sm text-gray-500'>50</h4>
						</div>
					</>
				)
			})}
		</div>
	)
}

const Overview = (props) => {
	const { setIsOpen } = props
	return (
		<div className='mb-7'>
			<div className='flex flex-row items-center justify-between mb-5'>
				<h3 className='text-gray-500'>PATIENT OVERVIEW</h3>
				<button onClick={() => setIsOpen(false)} data-bs-dismiss='modal' aria-label='Close' type='button'>
					<AiOutlineCloseCircle size={25} />
				</button>
			</div>
			<div className='grid grid-rows-4 gap-5'>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>LAST NAME</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div>
						<h4 className='text-xs'>FIRST NAME</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div>
						<h4 className='text-xs'>MIDDLE NAME</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>GENDER</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div>
						<h4 className='text-xs'>AGE</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div>
						<h4 className='text-xs'>DATE OF BIRTH</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>DIAGNOSIS</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div>
						<h4 className='text-xs'>ONBOARD DATE</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div>
						<h4 className='text-xs'>EXPECTED END DATE</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>EMAIL</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div>
						<h4 className='text-xs'>CONTACT NUMBER</h4>
						<h5 className='text-gray-500'>31 FEB 2022</h5>
					</div>
					<div />
				</div>
			</div>
		</div>
	)
}

const DetailsModal = (props) => {
	const { isOpen, setIsOpen } = props
	return (
		<div
			className='fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade'
			id='exampleModalCenteredScrollable'
			tabIndex='-1'
			aria-labelledby='exampleModalCenteredScrollable'
			aria-modal='true'
			role='dialog'
		>
			<div className='relative pointer-events-none min-w-fit modal-dialog modal-dialog-centered modal-dialog-scrollable'>
				<div className='relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding'>
					<div className='relative p-4 modal-body'>
						<Overview setIsOpen={setIsOpen} />
						<VitalsSummary />
						<Medication />
					</div>
				</div>
			</div>
		</div>
	)
}

/* 		;<Dialog
			className='fixed top-0 bottom-0 left-0 right-0 m-auto bg-black/50'
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<div className='flex flex-col items-end h-[100vh]'>
				<Dialog.Panel className='bg-white rounded-lg shadow-lg w-[50vw] m-7 p-5 h-auto overflow-auto'>
					<Overview setIsOpen={setIsOpen} />
					<VitalsSummary />
					<Medication />
				</Dialog.Panel>
			</div>
		</Dialog> */

export default DetailsModal
