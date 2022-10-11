import React from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
const PatientMedication = () => {
	return (
		<div className='flex flex-row gap-2 overflow-x-auto'>
			<span className='flex flex-col px-4 py-1 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center w-max active:bg-gray-300 ease rounded-2xl'>
				Panadol
				<div className='w-full h-1 mb-1 bg-gray-200'>
					<div className='h-1 bg-blue-600' style={{ width: '45%' }}></div>
				</div>
				<span className='flex justify-between gap-4 text-xs'>
					<p>1/05/22</p>
					<p>2/05/22</p>
				</span>
			</span>
			<span className='flex flex-col px-4 py-1 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center w-max active:bg-gray-300 ease rounded-2xl'>
				Methampethamine
				<div className='w-full h-1 mb-1 bg-gray-200'>
					<div className='h-1 bg-blue-600' style={{ width: '45%' }}></div>
				</div>
				<span className='flex justify-between gap-4 text-xs'>
					<p>1/05/22</p>
					<p>2/05/22</p>
				</span>
			</span>
			<span className='flex flex-col px-4 py-1 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center w-max active:bg-gray-300 ease rounded-2xl'>
				Panadol
				<div className='w-full h-1 mb-1 bg-gray-200'>
					<div className='h-1 bg-blue-600' style={{ width: '45%' }}></div>
				</div>
				<span className='flex justify-between gap-4 text-xs'>
					<p>1/05/22</p>
					<p>2/05/22</p>
				</span>
			</span>
			<span className='flex flex-col px-4 py-1 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center w-max active:bg-gray-300 ease rounded-2xl'>
				Methampethamine
				<div className='w-full h-1 mb-1 bg-gray-200'>
					<div className='h-1 bg-blue-600' style={{ width: '45%' }}></div>
				</div>
				<span className='flex justify-between gap-4 text-xs'>
					<p>1/05/22</p>
					<p>2/05/22</p>
				</span>
			</span>
			<span className='flex flex-col px-4 py-1 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center w-max active:bg-gray-300 ease rounded-2xl'>
				Panadol
				<div className='w-full h-1 mb-1 bg-gray-200'>
					<div className='h-1 bg-blue-600' style={{ width: '45%' }}></div>
				</div>
				<span className='flex justify-between gap-4 text-xs'>
					<p>1/05/22</p>
					<p>2/05/22</p>
				</span>
			</span>
			<span className='flex flex-col px-4 py-1 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center w-max active:bg-gray-300 ease rounded-2xl'>
				Methampethamine
				<div className='w-full h-1 mb-1 bg-gray-200'>
					<div className='h-1 bg-blue-600' style={{ width: '45%' }}></div>
				</div>
				<span className='flex justify-between gap-4 text-xs'>
					<p>1/05/22</p>
					<p>2/05/22</p>
				</span>
			</span>
		</div>
	)
}
const PatientListDropDown = () => {
	return (
		<div className='flex justify-center'>
			<div>
				<div className='relative dropdown'>
					<button
						className='

          px-6
          py-2.5
          bg-cyan-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-cyan-700 hover:shadow-lg
          focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-cyan-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        '
						type='button'
						id='dropdownMenuButton1'
						data-bs-toggle='dropdown'
					>
						List Of Patients
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='caret-down'
							className='w-2 ml-2'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 320 512'
						>
							<path
								fill='currentColor'
								d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
							></path>
						</svg>
					</button>
					<ul
						className='absolute z-50 hidden float-left w-full py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding'
						aria-labelledby='dropdownMenuButton1'
					>
						<li>
							<a
								className='block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100'
								href='#'
							>
								Hernandez
							</a>
						</li>
						<li>
							<a
								className='block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100'
								href='#'
							>
								Hernandez
							</a>
						</li>
						<li>
							<a
								className='block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100'
								href='#'
							>
								Hernandez
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
const SelectPatientTabs = () => {
	return (
		<>
			<ul
				className='flex flex-col flex-wrap pl-0 mb-4 list-none border-b-0 nav nav-tabs md:flex-row grow-0'
				id='tabs-tab'
				role='tablist'
			>
				<li className='nav-item' role='presentation'>
					<a
						href='#tabs-profile'
						className='block py-1 my-2 text-xs font-medium leading-tight uppercase border-t-0 border-b-2 border-transparent nav-link border-x-0 hover:border-transparent focus:border-transparent'
						id='tabs-profile-tab'
						data-bs-toggle='pill'
						data-bs-target='#tabs-profile'
						role='tab'
						aria-controls='tabs-profile'
						aria-selected='false'
					>
						Basic Profile
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						href='#tabs-home'
						className='block py-1 my-2 ml-6 text-xs font-medium leading-tight uppercase border-t-0 border-b-2 border-transparent nav-link border-x-0 hover:border-transparent focus:border-transparent active'
						id='tabs-home-tab'
						data-bs-toggle='pill'
						data-bs-target='#tabs-home'
						role='tab'
						aria-controls='tabs-home'
						aria-selected='true'
					>
						Current Medications
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
					{/* 					<p className='mt-2 mb-4 text-gray-700'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</p> */}
					<PatientMedication />
				</div>
				<div className='tab-pane fade' id='tabs-profile' role='tabpanel' aria-labelledby='tabs-profile-tab'>
					<div className='flex items-center px-4 py-2 text-xs font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer gap-7 align-center w-max active:bg-gray-300 ease rounded-2xl'>
						<div>
							<img
								src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
								className='w-12 rounded-full shadow-lg'
								alt='Avatar'
							/>
						</div>
						<div>
							<h4 className='text-sm text-black'>Alex Wachinsky</h4>
							<h4>Start Date: 02/04/22</h4>
							<h4>End Date: 02/04/22</h4>
							<h4>Diagnosis: Asthma</h4>
						</div>
						<FiArrowUpRight className='flex self-start' size={'1rem'} />
					</div>
				</div>
			</div>
		</>
	)
}

const PrescribeMedication = () => {
	return (
		<ol className='border-l-2 border-blue-600'>
			<li>
				<div className='flex items-center flex-start'>
					<div className='flex items-center justify-center w-4 h-4 mr-3 -mt-2 -ml-2 bg-blue-600 rounded-full'></div>
					<h4 className='-mt-2 text-xl font-semibold text-gray-800'>Select Patient </h4>
				</div>
				<div className='pb-6 mt-2 mb-6 ml-6'>
					<div className='flex justify-between gap-7'>
						<input
							type='text'
							id='table-search'
							className='text-sm text-gray-900 bg-white border-none rounded-lg shadow-sm lg:w-60 focus:ring-gray-500 focus:border-gray-500 font-Karla-Regular'
							placeholder='Search for patient'
						/>
						<PatientListDropDown />
					</div>
					<SelectPatientTabs />
					{/* 					<button
						type='button'
						className='inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
					>
						Read more
					</button> */}
				</div>
			</li>
			<li>
				<div className='flex items-center flex-start'>
					<div className='flex items-center justify-center w-4 h-4 mr-3 -mt-2 -ml-2 bg-blue-600 rounded-full'></div>
					<h4 className='-mt-2 text-xl font-semibold text-gray-800'>Select Prescription</h4>
				</div>
				<div className='pb-6 mb-6 ml-6'>
					<a
						href='#!'
						className='text-sm text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-800'
					>
						12 January, 2022
					</a>
					<p className='mt-2 mb-4 text-gray-700'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
						odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</p>
					<button
						type='button'
						className='inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
					>
						Read more
					</button>
				</div>
			</li>
			<li>
				<div className='flex items-center flex-start'>
					<div className='flex items-center justify-center w-4 h-4 mr-3 -mt-2 -ml-2 bg-blue-600 rounded-full'></div>
					<h4 className='-mt-2 text-xl font-semibold text-gray-800'>Set Intake and Duration</h4>
				</div>
				<div className='pb-6 mb-6 ml-6'>
					<a
						href='#!'
						className='text-sm text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-800'
					>
						27 December, 2021
					</a>
					<p className='mt-2 mb-4 text-gray-700'>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
						deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
						provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
						dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
					</p>
					<button
						type='button'
						className='inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
					>
						Read more
					</button>
				</div>
			</li>
		</ol>
	)
}

export default PrescribeMedication
