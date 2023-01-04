import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import OtherActionsMedicationModal from './OtherActionsMedicationModal'

const NotesDrawer = () => {
	const [type, setType] = useState('')
	return (
		<>
			<button
				className='text-xs uppercase transition duration-150 ease-in-out text-cyan-600'
				type='button'
				data-bs-toggle='offcanvas'
				data-bs-target='#offcanvasRight'
				aria-controls='offcanvasRight'
			>
				SEE ALL
			</button>

			<div
				className='fixed top-0 bottom-0 right-0 flex flex-col invisible max-w-full text-gray-700 transition duration-300 ease-in-out bg-white border-none shadow-sm outline-none w-fit offcanvas offcanvas-end bg-clip-padding'
				tabIndex='-1'
				id='offcanvasRight'
				aria-labelledby='offcanvasRightLabel'
			>
				<div className='flex items-center justify-between p-4 offcanvas-header'>
					<h5 className='mb-0 font-semibold leading-normal offcanvas-title' id='offcanvasRightLabel'>
						NOTES: WACHINSKY
					</h5>
					<button
						type='button'
						className='box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
						data-bs-dismiss='offcanvas'
						aria-label='Close'
					></button>
				</div>
				<div className='flex-grow p-2 overflow-y-auto offcanvas-body'>
					<div className='flex flex-col '>
						<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
								<div className='overflow-hidden'>
									<table className='min-w-full'>
										<thead className='bg-white border-b'>
											<tr>
												<th
													scope='col'
													className='px-6 py-4 text-xs font-medium text-left text-gray-900'
												>
													Date
												</th>
												<th
													scope='col'
													className='px-6 py-4 text-xs font-medium text-left text-gray-900'
												>
													Notes
												</th>
												<th
													scope='col'
													className='px-6 py-4 text-xs font-medium text-left text-gray-900'
												>
													Actions
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className='transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100'>
												<td className='px-6 py-4 text-xs font-medium text-gray-900 whitespace-nowrap'>
													01/03/2015
												</td>
												<td className='px-6 py-4 text-xs font-light text-gray-900 whitespace-nowrap'>
													Probably needs more propanol
												</td>
												<td className='flex flex-row gap-4 px-6 py-4 text-xs font-light text-gray-900'>
													<button
														type='button'
														className='flex flex-row items-center justify-center p-2 text-xs transition duration-150 ease-in-out bg-white rounded-full text-cyan-600 shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
														data-bs-toggle='modal'
														data-bs-target='#otherActionsMedicationModal'
														onClick={() => setType('edit')}
													>
														<AiFillEdit size={'1.2em'} />
													</button>
													<button
														type='button'
														className='flex flex-row items-center justify-center p-2 text-xs text-red-600 transition duration-150 ease-in-out bg-white rounded-full shadow-btnShadow font-Karla-Heavy hover:bg-red-600 hover:text-white active:shadow-lg'
														data-bs-toggle='modal'
														data-bs-target='#otherActionsMedicationModal'
														onClick={() => setType('delete')}
													>
														<AiFillDelete size={'1.2em'} />
													</button>
												</td>
											</tr>
											<tr className='transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100'>
												<td className='px-6 py-4 text-xs font-medium text-gray-900 whitespace-nowrap'>
													01/03/2015
												</td>
												<td className='px-6 py-4 text-xs font-light text-gray-900 whitespace-nowrap'>
													Probably needs more propanol
												</td>
												<td className='flex flex-row gap-4 px-6 py-4 text-xs font-light text-gray-900'>
													<button
														type='button'
														onClick={() => setType('edit')}
														className='flex flex-row items-center justify-center p-2 text-xs transition duration-150 ease-in-out bg-white rounded-full text-cyan-600 shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
														data-bs-toggle='modal'
														data-bs-target='#otherActionsMedicationModal'
													>
														<AiFillEdit size={'1.2em'} />
													</button>
													<button
														type='button'
														onClick={() => setType('delete')}
														className='flex flex-row items-center justify-center p-2 text-xs text-red-600 transition duration-150 ease-in-out bg-white rounded-full shadow-btnShadow font-Karla-Heavy hover:bg-red-600 hover:text-white active:shadow-lg'
														data-bs-toggle='modal'
														data-bs-target='#otherActionsMedicationModal'
														onClick={() => setType('delete')}
													>
														<AiFillDelete size={'1.2em'} />
													</button>
												</td>
											</tr>
											<tr className='transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100'>
												<td className='px-6 py-4 text-xs font-medium text-gray-900 whitespace-nowrap'>
													01/03/2015
												</td>
												<td className='px-6 py-4 text-xs font-light text-gray-900 whitespace-nowrap'>
													Probably needs more propanol
												</td>
												<td className='flex flex-row gap-4 px-6 py-4 text-xs font-light text-gray-900'>
													<button
														type='button'
														onClick={() => setType('edit')}
														className='flex flex-row items-center justify-center p-2 text-xs transition duration-150 ease-in-out bg-white rounded-full text-cyan-600 shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
														data-bs-toggle='modal'
														data-bs-target='#otherActionsMedicationModal'
													>
														<AiFillEdit size={'1.2em'} />
													</button>
													<button
														type='button'
														onClick={() => setType('delete')}
														className='flex flex-row items-center justify-center p-2 text-xs text-red-600 transition duration-150 ease-in-out bg-white rounded-full shadow-btnShadow font-Karla-Heavy hover:bg-red-600 hover:text-white active:shadow-lg'
														data-bs-toggle='modal'
														data-bs-target='#otherActionsMedicationModal'
													>
														<AiFillDelete size={'1.2em'} />
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<OtherActionsMedicationModal type={type} />
		</>
	)
}

export default NotesDrawer
