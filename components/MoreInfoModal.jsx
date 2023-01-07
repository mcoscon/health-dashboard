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
					<div key={index} className={'grid grid-cols-3 gap-5 p-2'}>
						<h4 className='text-sm text-gray-500'>Meds A</h4>
						<h4 className='text-sm text-gray-500'>2 bottles x 50 tablets</h4>
						<h4 className='text-sm text-gray-500'>1 tablet each meal, 3x a day</h4>
					</div>
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
					<div
						key={index}
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
				)
			})}
		</div>
	)
}

const Table = () => {
	return (
		<div className='flex flex-col w-full'>
			<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
					<div className='overflow-hidden'>
						<table className='min-w-full text-center'>
							<thead className='border-b'>
								<tr className='border-b'>
									<th scope='col' className='px-6 py-4 text-sm font-bold text-gray-400'>
										Date
									</th>
									<th scope='col' className='px-6 py-4 text-sm font-bold text-gray-400'>
										Sensor Input
									</th>
									<th scope='col' className='px-6 py-4 text-sm font-bold text-gray-400'>
										Breathing Input
									</th>
									<th scope='col' className='px-6 py-4 text-sm font-bold text-gray-400'>
										Symptoms Input
									</th>
									<th scope='col' className='px-6 py-4 text-sm font-bold text-gray-400'>
										Medication
									</th>
								</tr>
							</thead>
							<tbody>
								{[0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((dataRow, index) => {
									return (
										<>
											<tr className='border-b'>
												<td className='px-6 py-4 text-sm font-medium text-gray-900 uppercase whitespace-nowrap'>
													<div className='flex justify-center space-x-2'>
														{/* <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded-full '>
												2/4 SCORE
											</span> */}
													</div>
													<h4 className='text-xs font-medium text-gray-400'>
														13th April 2016
													</h4>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-rose-500 text-white rounded-full '>
														NOT COMPLETED
													</span>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-emerald-500 text-white rounded-full '>
														COMPLETED
													</span>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-emerald-500 text-white rounded-full '>
														COMPLETED
													</span>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-rose-500 text-white rounded-full '>
														NOT COMPLETED
													</span>
												</td>
											</tr>
											<tr className='border-b'>
												<td className='px-6 py-4 text-sm font-light text-gray-900 uppercase whitespace-nowrap'>
													<h4 className='text-xs font-medium text-gray-400'>
														13th April 2016
													</h4>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-emerald-500 text-white rounded-full '>
														COMPLETED
													</span>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-emerald-500 text-white rounded-full '>
														COMPLETED
													</span>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-emerald-500 text-white rounded-full '>
														COMPLETED
													</span>
												</td>
												<td className='px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap'>
													<span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-rose-500 text-white rounded-full '>
														NOT COMPLETED
													</span>
												</td>
											</tr>
										</>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

const Overview = (props) => {
	const { setIsOpen } = props
	return (
		<>
			<ul
				className='flex flex-col flex-wrap pl-0 list-none nav nav-pills md:flex-row'
				id='pills-tab'
				role='tablist'
			>
				<li className='nav-item' role='presentation'>
					<a
						href='#pills-home'
						className='block p-2 my-2 text-xs font-medium leading-tight uppercase rounded nav-link md:mr-2 focus:outline-none focus:ring-0 active'
						id='pills-home-tab'
						data-bs-toggle='pill'
						data-bs-target='#pills-home'
						role='tab'
						aria-controls='pills-home'
						aria-selected='true'
					>
						PAST 30 DAYS
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						href='#pills-profile'
						className='block p-2 my-2 text-xs font-medium leading-tight uppercase rounded nav-link md:mx-2 focus:outline-none focus:ring-0'
						id='pills-profile-tab'
						data-bs-toggle='pill'
						data-bs-target='#pills-profile'
						role='tab'
						aria-controls='pills-profile'
						aria-selected='false'
					>
						PAST 60 DAYS
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						href='#pills-contact'
						className='block p-2 my-2 text-xs font-medium leading-tight uppercase rounded nav-link md:mx-2 focus:outline-none focus:ring-0'
						id='pills-contact-tab'
						data-bs-toggle='pill'
						data-bs-target='#pills-contact'
						role='tab'
						aria-controls='pills-contact'
						aria-selected='false'
					>
						PAST 90 DAYS
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<input
						type='date'
						/* 	href='#pills-contact' */
						className='block p-2 my-2 text-xs font-medium leading-tight uppercase rounded md:mx-2 nav-link focus:outline-none focus:ring-0 font-Karla-Regular'
						/* 	id='pills-contact-tab'
					data-bs-toggle='pill'
					data-bs-target='#pills-contact'
					role='tab'
					aria-controls='pills-contact'
					aria-selected='false' */
						placeholder='Select a date'
					></input>
				</li>
			</ul>
			<div className='tab-content' id='pills-tabContent'>
				<div
					className='tab-pane fade show active'
					id='pills-home'
					role='tabpanel'
					aria-labelledby='pills-home-tab'
				>
					<Table />
				</div>
				<div className='tab-pane fade' id='pills-profile' role='tabpanel' aria-labelledby='pills-profile-tab'>
					<Table />
				</div>
				<div className='tab-pane fade' id='pills-contact' role='tabpanel' aria-labelledby='pills-contact-tab'>
					<Table />
				</div>
			</div>
		</>
	)
}

const MoreInfoModal = (props) => {
	const { isOpen, setIsOpen } = props
	return (
		<div
			className='fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade'
			id='moreInfoModal'
			tabIndex='-1'
			aria-labelledby='moreInfoModal'
			aria-modal='true'
			role='dialog'
		>
			<div className='relative pointer-events-none min-w-fit modal-dialog modal-dialog-centered modal-dialog-scrollable'>
				<div className='relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding'>
					<div className='relative p-4 modal-body'>
						<div className='flex flex-row items-center justify-between mb-5'>
							<h3 className='text-gray-500'>PATIENT COMPLIANCE HISTORY</h3>
							<button
								/* onClick={() => setIsOpen(false)} */
								data-bs-dismiss='modal'
								aria-label='Close'
								type='button'
							>
								<AiOutlineCloseCircle size={25} />
							</button>
						</div>
						<Overview /* setIsOpen={setIsOpen} */ />
						{/* 		<VitalsSummary />
						<Medication /> */}
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

export default MoreInfoModal
