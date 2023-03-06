import React from 'react'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibleTrue } from '../../store/notificationSlice'

const Medication = () => {
	return (
		<>
			<h3 className='mb-5 text-gray-500'>PRESCRIPTION OVERVIEW</h3>
			<div className='grid grid-cols-3 gap-5 p-2 bg-opacity-10 bg-cyan-700'>
				<h3 className='text-xs'>MEDICATION</h3>
				<h3 className='text-xs'>AMOUNT PROVIDED</h3>
				<h3 className='text-xs'>INTAKE PRESCRIPTION</h3>
			</div>
			{[0].map((med, index) => {
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

const PrescriptionInstruction = () => {
	return (
		<div className='mb-7'>
			<h3 className='mb-5 text-gray-500'>INTAKE INSTRUCTIONS</h3>
			<div className='flex flex-col p-2 rounded-lg bg-cyan-700 bg-opacity-10'>
				<textarea
					placeholder='Type in intake instructions here'
					rows='3'
					className='w-full text-sm font-normal bg-transparent border-0 border-none rounded-lg outline-none resize-none focus:ring-0 focus:ring-offset-0'
				></textarea>
			</div>
		</div>
	)
}

const Prescription = (props) => {
	const { setIsOpen } = props
	const dispatch = useDispatch()
	return (
		<>
			<div className='mb-7'>
				<div className='flex flex-row items-center justify-between mb-5'>
					<h3 className='text-gray-500'>PRESCRIBE</h3>
					<button onClick={() => setIsOpen(false)} data-bs-dismiss='modal' aria-label='Close' type='button'>
						<AiOutlineCloseCircle size={25} />
					</button>
				</div>
				<div className='flex items-center justify-between mb-4'>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								className='w-5 h-5 text-gray-500 dark:text-gray-400'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
									clipRule='evenodd'
								></path>
							</svg>
						</div>
						<input
							type='text'
							id='table-search'
							className='block w-full p-2 pl-10 text-sm text-gray-900 bg-gray-200 border-none rounded-lg shadow-sm lg:w-80 focus:ring-gray-500 focus:border-gray-500 font-Karla-Regular focus:bg-white'
							placeholder='Search for prescription'
						/>
					</div>
					<button
						data-bs-dismiss='modal'
						aria-label='Close'
						type='button'
						onClick={() => dispatch(setVisibleTrue())}
						className='flex p-2 m-2 text-xs text-white transition duration-150 ease-in-out rounded-lg bg-cyan-700 shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
						/* 						data-bs-toggle='modal'
						data-bs-target='#exampleModalCenteredScrollables' */
					>
						PRESCRIBE MEDICATION
					</button>
				</div>

				<form className='flex flex-col gap-2'>
					{[0, 1, 2].map((_prescription, index) => {
						return (
							<div
								key={index}
								className='flex flex-row items-center justify-between p-2 text-sm rounded-lg bg-opacity-10 bg-cyan-700'
							>
								<div className='flex flex-row gap-2'>
									<div className='z-50 p-2 text-center text-white rounded-sm bg-cyan-900'>SI</div>
									<div>
										<h4>Simvastatin - 40mg</h4>
										<h4>10 Saches</h4>
									</div>
								</div>
								<div className='form-check'>
									<input
										className='float-left w-4 h-4 p-3 transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full outline-none appearance-none cursor-pointer p-2align-top form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none'
										type='checkbox'
										value=''
										id='flexCheckDefault'
									/>
								</div>
							</div>
						)
					})}
				</form>
			</div>
		</>
	)
}

const AddMedicationModal = (props) => {
	const { isOpen, setIsOpen } = props
	return (
		<div
			className='fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade'
			id='prescribeMedicationModal'
			tabIndex='-1'
			aria-labelledby='prescribeMedicationModal'
			aria-modal='true'
			role='dialog'
		>
			<div className='relative pointer-events-none min-w-fit modal-dialog modal-dialog-centered modal-dialog-scrollable'>
				<div className='relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding'>
					<div className='relative p-4 modal-body'>
						<Prescription setIsOpen={setIsOpen} />
						<PrescriptionInstruction />
						<Medication />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddMedicationModal
