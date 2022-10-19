import { Tab } from '@headlessui/react'
import { useEffect, React, useState } from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'

const SetPrescriptionUsage = () => {
	return (
		<div className='w-full p-4 bg-white rounded-2xl'>
			<h3 className='mb-2'>PRESCRIPTION USAGE</h3>
			<div className='flex'>
				<div className='w-full mb-3'>
					<label
						htmlFor='exampleFormControlTextarea1'
						className='inline-block mb-2 text-sm text-gray-700 form-label font-Karla-Heavy'
					>
						Instructions
					</label>
					<textarea
						className='w-full text-sm font-normal text-gray-900 transition ease-in-out bg-gray-200 border border-gray-300 border-none rounded-lg shadow-sm form-control focus:ring-gray-500 focus:border-gray-500 font-Karla-Regular bg-clip-padding focus:text-gray-700 focus:bg-white focus:outline-none'
						id='exampleFormControlTextarea1'
						rows='3'
					></textarea>
				</div>
			</div>
		</div>
	)
}

const SelectPrescription = () => {
	return (
		<div className='p-4 bg-white rounded-2xl'>
			<h3 className='mb-2'>PRESCRIPTION</h3>

			<div className='relative mb-4'>
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

			<form className='flex flex-col gap-2'>
				{[0, 1, 2, 3, 4, 5, 6].map((_prescription, index) => {
					return (
						<div
							key={index}
							className='flex flex-row items-center justify-between p-2 text-sm rounded-lg bg-opacity-20 bg-cyan-700'
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
	)
}
const BasicPatientInfo = () => {
	return (
		<div className='mb-6'>
			<h4 className='mb-4 uppercase'>Selected Patient</h4>
			<div className='grid grid-cols-2 gap-4'>
				<div>
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
				<div className='flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-white transition duration-300 cursor-pointer bg-cyan-700 gap-7 align-center active:bg-gray-300 ease rounded-2xl'>
					<div>
						<img
							src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
							className='w-12 rounded-full shadow-lg'
							alt='Avatar'
						/>
					</div>
					<div>
						<h3 className='text-white text-md'>Alex Wachinsky</h3>
						<h4>Start Date: 02/04/22</h4>
						<h4>End Date: 02/04/22</h4>
						<h4>Diagnosis: Asthma</h4>
					</div>
					<FiArrowUpRight className='flex self-start' size={'1rem'} />
				</div>
			</div>
		</div>
	)
}

const PatientMedication = () => {
	return (
		<>
			<div className='mb-4'>
				<h4 className='mb-4 uppercase'>Active Medications</h4>
				<div className='grid grid-cols-2 gap-4'>
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
					<span className='flex flex-col gap-2 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center active:bg-gray-300 ease rounded-2xl '>
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
						<div className=''>
							<h4 className='text-black'>Instructions:</h4>
							<h4>Take one daily until finished. Take after meal. wefwed</h4>
						</div>
					</span>
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
					<span className='flex flex-col gap-2 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center active:bg-gray-300 ease rounded-2xl '>
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
						<div className=''>
							<h4 className='text-black'>Instructions:</h4>
							<h4>Take one daily until finished. Take after meal. wefwed</h4>
						</div>
					</span>
				</div>
			</div>
			<div className='mb-4'>
				<h4 className='mb-4 uppercase'>Previous Medications</h4>
				<div className='grid grid-cols-2 gap-4'>
					<span className='flex flex-col gap-2 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer GRI align-center active:bg-gray-300 ease rounded-2xl'>
						<h4 className='uppercase text-cyan-900'>Propanol 20mg Tab</h4>
						<div className='w-full h-1 bg-gray-200'>
							<div className='h-1 bg-cyan-600' style={{ width: '100%' }}></div>
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
					<span className='flex flex-col gap-2 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center active:bg-gray-300 ease rounded-2xl '>
						<h4 className='uppercase text-cyan-900'>Propanol 20mg Tab</h4>
						<div className='w-full h-1 bg-gray-200'>
							<div className='h-1 bg-cyan-600' style={{ width: '100%' }}></div>
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
						<div className=''>
							<h4 className='text-black'>Instructions:</h4>
							<h4>Take one daily until finished. Take after meal. wefwed</h4>
						</div>
					</span>
					<span className='flex flex-col gap-2 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer GRI align-center active:bg-gray-300 ease rounded-2xl'>
						<h4 className='uppercase text-cyan-900'>Propanol 20mg Tab</h4>
						<div className='w-full h-1 bg-gray-200'>
							<div className='h-1 bg-cyan-600' style={{ width: '100%' }}></div>
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
					<span className='flex flex-col gap-2 p-4 text-sm font-semibold text-gray-500 transition duration-300 bg-white cursor-pointer align-center active:bg-gray-300 ease rounded-2xl '>
						<h4 className='uppercase text-cyan-900'>Propanol 20mg Tab</h4>
						<div className='w-full h-1 bg-gray-200'>
							<div className='h-1 bg-cyan-600' style={{ width: '100%' }}></div>
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
						<div className=''>
							<h4 className='text-black'>Instructions:</h4>
							<h4>Take one daily until finished. Take after meal. wefwed</h4>
						</div>
					</span>
				</div>
			</div>
		</>
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
						className='absolute z-50 float-left w-full py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding'
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
const SelectedPatient = () => {
	return (
		<div className='flex flex-col gap-7'>
			<BasicPatientInfo />
			<PatientMedication />
		</div>
		/* <div className='tab-content' id='tabs-tabContent'>
				<div
					className='tab-pane fade show active'
					id='tabs-home'
					role='tabpanel'
					aria-labelledby='tabs-home-tab'
					show
					active
				>
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
			</div> */
	)
}

const PrescribeMedication = () => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	return (
		<form /* onSubmit={handleSubmit(onSubmit)} */>
			<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
				<Tab.List className='flex p-2 mb-4 space-x-5 text-center text-gray-400 bg-white border-2 border-solid font-Karla-Bold rounded-2xl '>
					<Tab
						className={({ selected }) =>
							selected
								? 'focus:outline-0 outline-0 flex flex-row text-cyan-900 border-b-2 border-b-cyan-600'
								: ' text-gray-400 flex flex-row align-middle justify-center'
						}
					>
						Select Patient
					</Tab>
					<div>{'>'}</div>
					<Tab
						/* 	disabled={Object.keys(errors).length !== 0} */
						className={({ selected }) =>
							selected
								? 'focus:outline-0 outline-0 flex flex-row text-cyan-900 border-b-2 border-b-cyan-600'
								: ' text-gray-400 flex flex-row align-middle justify-center '
						}
					>
						Select Prescription and Intake Duration
					</Tab>
				</Tab.List>

				<Tab.Panels>
					<SelectPatientTab /* register={register} errors={errors} setTabIndex={setTabIndex}  */ />
					<SelectPrescriptionTab />
				</Tab.Panels>
			</Tab.Group>
		</form>
	)
}

const SelectPatientTab = (props) => {
	return (
		<Tab.Panel>
			<BasicPatientInfo />
			<PatientMedication />
		</Tab.Panel>
	)
}

const SelectPrescriptionTab = (props) => {
	return (
		<Tab.Panel>
			<div className='flex flex-row gap-4'>
				<SelectPrescription />
				<SetPrescriptionUsage />
			</div>
		</Tab.Panel>
	)
}

export default PrescribeMedication
