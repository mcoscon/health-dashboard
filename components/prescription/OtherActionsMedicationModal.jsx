import React from 'react'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setVisibleTrue } from '../../store/notificationSlice'
import NotificationAlert from '../ui-components/NotificationAlert'

const OtherActionsMedicationModal = (props) => {
	const { type } = props
	const dispatch = useDispatch()
	if (type === 'edit') {
		return (
			<div
				className='fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade'
				id='otherActionsMedicationModal'
				tabIndex='-1'
				aria-labelledby='otherActionsMedicationModal'
				aria-modal='true'
				role='dialog'
			>
				<div className='relative pointer-events-none min-w-fit modal-dialog modal-dialog-centered modal-dialog-scrollable'>
					<div className='relative flex flex-col w-full text-current bg-white border-none shadow-lg outline-none pointer-events-auto rounded-2xl modal-content bg-clip-padding'>
						<div className='relative p-4 modal-body'>
							<div className='flex flex-col flex-1 gap-2 text-sm font-semibold transition duration-300 bg-white cursor-pointer text-cyan-900 align-center ease'>
								<div className='flex justify-between'>
									<h4 className='uppercase'>NOTES</h4>
								</div>
								<div className='flex flex-col rounded-lg bg-cyan-700 bg-opacity-10'>
									<textarea
										rows='2'
										className='w-full text-sm font-normal bg-transparent border-0 border-none rounded-lg outline-none resize-none focus:ring-0 focus:ring-offset-0'
										placeholder='Probably needs more panadol'
									></textarea>
									<button
										type='button'
										/* 		onClick={() => setIsOpen(true)} */
										className='flex items-end self-end p-2 m-2 text-xs text-white transition duration-150 ease-in-out rounded-lg bg-cyan-700 shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
										data-bs-target='#otherActionsMedicationModal'
										data-bs-dismiss='modal'
										aria-label='Close'
									>
										SAVE NOTE
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div
				className='fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade'
				id='otherActionsMedicationModal'
				tabIndex='-1'
				aria-labelledby='otherActionsMedicationModal'
				aria-modal='true'
				role='dialog'
			>
				<div className='relative pointer-events-none min-w-fit modal-dialog modal-dialog-centered modal-dialog-scrollable'>
					<div className='relative flex flex-col w-full text-current bg-white border-none shadow-lg outline-none pointer-events-auto rounded-2xl modal-content bg-clip-padding'>
						<div className='relative p-4 modal-body'>
							<div className='flex flex-col flex-1 gap-2 text-sm font-semibold transition duration-300 bg-white cursor-pointer text-cyan-900 align-center ease'>
								<div className='flex justify-between'>
									<h4 className='uppercase'>DELETE NOTE</h4>
								</div>
								<div className='flex flex-col rounded-lg bg-cyan-700 bg-opacity-10'>
									<textarea
										disabled
										rows='2'
										className='w-full text-sm font-normal bg-transparent border-0 border-none rounded-lg outline-none resize-none focus:ring-0 focus:ring-offset-0'
										placeholder='Probably needs more panadol'
									></textarea>
									<div className='flex justify-end gap-2'>
										<button
											type='button'
											className='flex items-end self-end p-2 m-2 text-xs transition duration-150 ease-in-out bg-white rounded-lg text-cyan-700 shadow-btnShadow font-Karla-Heavy active:shadow-lg'
											data-bs-dismiss='modal'
										>
											CANCEL
										</button>
										<button
											type='button'
											/* 	onClick={() => dispatch(setVisibleTrue())} */
											className='flex items-end self-end p-2 m-2 text-xs text-white transition duration-150 ease-in-out bg-red-700 rounded-lg shadow-btnShadow font-Karla-Heavy hover:bg-red-600 hover:text-white active:shadow-lg'
											data-bs-dismiss='modal'
										>
											DELETE NOTE
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default OtherActionsMedicationModal
