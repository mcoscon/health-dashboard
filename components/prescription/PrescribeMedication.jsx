import { React, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import AddMedicationModal from './AddMedicationModal'
import NotesDrawer from './NotesDrawer'
import NotificationAlert from '../ui-components/NotificationAlert'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibleTrue } from '../../store/notificationSlice'
import { Tooltip } from 'flowbite-react'
import Link from 'next/link'

const BasicPatientInfo = () => {
	const [isOpen, setIsOpen] = useState(false)
	const _notificationState = useSelector((state) => state.notificationState.value)
	const dispatch = useDispatch()
	return (
		<>
			<div className='mb-6'>
				<div className='flex flex-row items-center justify-between mb-4'>
					<h4 className='uppercase '>Selected Patient</h4>
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
							className='block w-full p-2 pl-10 text-sm text-gray-900 bg-white border-none rounded-lg shadow-sm lg:w-80 focus:ring-cyan-600 focus:border-cyan-600 font-Karla-Regular'
							placeholder='Search for patient'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-4 md:flex-row'>
					<div className='flex justify-between flex-1 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer gap-7 align-center ease rounded-2xl basis-1'>
						<div className='flex flex-col gap-4'>
							<h4 className='text-sm uppercase text-cyan-900'>Wachinsky</h4>
							<p>Start Date: 02/04/22</p>
							<p>End Date: 02/04/22</p>
							<p>Diagnosis: Asthma</p>
						</div>
						<div className='flex flex-col justify-between gap-4'>
							<Link href='/patient'>
								<FiArrowUpRight
									className='flex self-end p-1 border-2 rounded-full shadow-btnShadow active:bg-gray-300'
									size={'2rem'}
								/>
							</Link>

							<div className='flex self-center'>
								<img
									src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
									className='rounded-full shadow-lg w-14 '
									alt='Avatar'
								/>
							</div>
							<button
								type='button'
								onClick={() => setIsOpen(true)}
								className='flex flex-row items-center justify-center gap-2 p-2 text-xs transition duration-150 ease-in-out bg-white rounded-lg text-cyan-600 shadow-btnShadow md:w-full font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
								data-bs-toggle='modal'
								data-bs-target='#prescribeMedicationModal'
							>
								<AiOutlinePlusCircle size={20} />
								PRESCRIBE
							</button>
						</div>
						<AddMedicationModal isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
					<div className='flex flex-col flex-1 gap-2 p-4 text-sm font-semibold transition duration-300 bg-white cursor-pointer text-cyan-900 align-center ease rounded-2xl'>
						<div className='flex justify-between'>
							<h4 className='uppercase'>NOTES</h4>
							<NotesDrawer />
						</div>
						<div className='flex flex-col rounded-lg bg-cyan-700 bg-opacity-10'>
							<textarea
								rows='2'
								className='w-full text-sm font-normal bg-transparent border-0 border-none rounded-lg outline-none resize-none focus:ring-0 focus:ring-offset-0'
							></textarea>
							<button
								type='button'
								onClick={() => dispatch(setVisibleTrue())}
								className='flex items-end self-end p-2 m-2 text-xs text-white transition duration-150 ease-in-out rounded-lg bg-cyan-700 shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
								/* 	data-bs-toggle='modal'
								data-bs-target='#exampleModalCenteredScrollable' */
							>
								SAVE NOTE
							</button>
						</div>
						<div>
							<h4 className='text-xs'>Latest Note</h4>
							<div className='flex justify-between'>
								<p className='text-xs font-semibold text-gray-500'>Probably needs more propanol</p>
								<p className='text-xs font-semibold text-gray-500'>20 Nov 18</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const MedicationCard = () => {
	return (
		<span className='flex flex-col gap-2 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer GRI align-center active:bg-gray-300 ease rounded-2xl'>
			<h4 className='uppercase text-cyan-900'>Propanol 20mg Tab</h4>
			<div className='w-full h-1 bg-gray-200'>
				<div className='h-1 bg-cyan-600' style={{ width: '45%' }}></div>
			</div>
			<div className='flex justify-between gap-4 text-sm'>
				<p>1st May 2022</p>
				<p> to </p>
				<p>2nd May 2022</p>
			</div>
			<div className='flex justify-between gap-4 text-sm'>
				<div>
					<h4 className='text-black'>Prescribed On:</h4>
					<h4>1st May 2022</h4>
				</div>
				<div>
					<h4 className='text-black'>Quantity:</h4>
					<h4>40</h4>
				</div>
			</div>
			<div>
				<h4 className='text-black'>Instructions:</h4>
				<h4>Take one daily until finished. Take after meal.wefwefed</h4>
			</div>
		</span>
	)
}
const PatientMedication = () => {
	return (
		<>
			<div className='mb-4'>
				<ul
					className='flex flex-row pl-0 mb-4 text-center list-none border-b-0 nav nav-tabs'
					id='tabs-tab'
					role='tablist'
				>
					<li className='nav-item' role='presentation'>
						<a
							href='#tabs-home'
							className='block px-6 py-3 my-2 text-sm leading-tight uppercase border-t-0 border-b-2 border-transparent rounded-t-lg font-Karla-Heavy nav-link border-x-0 hover:border-transparent focus:border-transparent active'
							id='tabs-home-tab'
							data-bs-toggle='pill'
							data-bs-target='#tabs-home'
							role='tab'
							aria-controls='tabs-home'
							aria-selected='true'
						>
							Active Medications
						</a>
					</li>
					<li className='nav-item' role='presentation'>
						<a
							href='#tabs-profile'
							className='block px-6 py-3 my-2 text-sm leading-tight uppercase border-t-0 border-b-2 border-transparent rounded-t-lg font-Karla-Heavy nav-link border-x-0 hover:border-transparent focus:border-transparent active:text-black'
							id='tabs-profile-tab'
							data-bs-toggle='pill'
							data-bs-target='#tabs-profile'
							role='tab'
							aria-controls='tabs-profile'
							aria-selected='false'
						>
							Previous Medication
						</a>
					</li>
				</ul>
				<div className='tab-content' id='tabs-tabContent'>
					<div
						className='tab-pane fade show active'
						id='tabs-home'
						role='tabpanel'
						aria-labelledby='tabs-home-tab'
					>
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							{[0, 1, 2, 3].map((e) => {
								return <MedicationCard key={e} />
							})}
						</div>
					</div>
					<div className='tab-pane fade' id='tabs-profile' role='tabpanel' aria-labelledby='tabs-profile-tab'>
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							{[0, 1, 2, 3].map((e) => {
								return <MedicationCard key={e} />
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const PrescribeMedication = (props) => {
	return (
		<>
			<BasicPatientInfo />
			<PatientMedication />
		</>
	)
}

export default PrescribeMedication
