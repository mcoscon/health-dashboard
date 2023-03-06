import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiCaretDown } from 'react-icons/bi'
import { FiCheckSquare, FiUser, FiUsers, FiWifi } from 'react-icons/fi'
import Onboard from './Onboard'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from '../NavBar'
const patients = [
	{
		icon: <FiUsers className='hidden p-2 text-cyan-600 sm:flex' size={'2.5em'} />,
		title: 'Total Admitted',
		text: '300',
	},
	{
		icon: <FiCheckSquare className='hidden p-2 text-cyan-600 sm:flex' size={'2.5em'} />,
		title: 'Active Patients',
		text: '150',
	},
	,
	{
		icon: <FiWifi className='hidden p-2 text-cyan-600 sm:flex' size={'2.5em'} />,
		title: 'Online Devices',
		text: '175',
	},
]
const OrganisationStats = () => {
	return (
		<>
			{patients.map((_patients, index) => {
				return (
					<div key={index} className='flex flex-row items-center gap-4 px-3 overflow-hidden '>
						{_patients.icon}
						<div className='mb-2 md:m-0'>
							<h5 className='text-xs font-bold text-gray-400 uppercase'>{_patients.title}</h5>
							<h2 className='text-sm'>{_patients.text}</h2>
						</div>
					</div>
				)
			})}
		</>
	)
}
const OrganisationInfo = () => {
	return (
		<div className='collapse' id='collapseExample'>
			<div className='absolute z-50 w-48 p-3 mt-2 bg-white rounded-lg shadow-lg ove rflow-visible right-5'>
				<div className='visible md:hidden'>
					<OrganisationStats />
					<hr className='my-3' />
				</div>
				<div className='mb-3'>
					<h3 className='text-sm text-gray-500'>Organisation Name</h3>
					<h3 className='text-sm'>xx hospital</h3>
				</div>
				<div className='mb-3'>
					<h3 className='text-sm text-gray-500'>Address</h3>
					<h3 className='text-sm'>98000, Miri Sarawak</h3>
				</div>
				<div>
					<h3 className='text-sm text-gray-500'>Signed Up On</h3>
					<h3 className='text-sm'>13 Apr 1997</h3>
					<hr className='my-3' />
				</div>
				<button className='visible w-full py-2 text-sm text-white rounded-lg font-Karla-Bold bg-cyan-600 md:hidden'>
					Log Out
				</button>
			</div>
		</div>
	)
}

const PatientListHeader = () => {
	const [showModal, setShowModal] = React.useState(false)
	const [hamburgerOpen, setHamburgerOpen] = React.useState(false)

	return (
		<>
			<header className='flex flex-col items-center justify-between gap-4 p-3 bg-transparent shadow-md md:flex-row md:bg-white'>
				<label htmlFor='table-search' className='sr-only'>
					Search
				</label>
				<div className='relative w-full md:w-auto '>
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
						className='block w-full p-2 pl-10 text-sm text-gray-900 bg-white border-none rounded-lg shadow-sm md:bg-gray-200 lg:w-80 focus:ring-gray-500 focus:border-gray-500 font-Karla-Regular'
						placeholder='Search for patient'
					/>
				</div>
				<div className='flex flex-row justify-end w-full gap-3'>
					<OrganisationStats />
					<button
						type='button'
						data-bs-toggle='modal'
						data-bs-target='#onboardModal'
						className='flex flex-row items-center self-center justify-center gap-2 p-2 text-sm text-white rounded-lg bg-cyan-600 shadow-btnShadow font-Karla-Heavy grow-0'
					>
						<AiOutlinePlus size={20} />
						Onboard
					</button>
				</div>
				<Onboard showModal={showModal} setShowModal={setShowModal} />
			</header>
		</>
	)
}

export default PatientListHeader
