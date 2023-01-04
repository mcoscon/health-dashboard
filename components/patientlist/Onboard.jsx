import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import { AiOutlineCloseCircle, AiOutlinePlus, AiOutlineUpload } from 'react-icons/ai'
import GenericModal from '../GenericModal'
import { useDispatch } from 'react-redux'
import { setVisibleFalse, setVisibleTrue } from '../../store/notificationSlice'
import { RadioGroup } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import DatePicker from '../DatePicker'
import { FiSettings } from 'react-icons/fi'
import OtherActionsMedicationModal from '../prescription/OtherActionsMedicationModal'
import NotificationAlert from '../ui-components/NotificationAlert'
const _ = require('lodash')
const OnboardSignUp = () => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm()

	const onSubmit = (data) => {
		setTabIndex(1)

		dispatch(setVisibleTrue())
	}
	const setTabIndex = (_index) => {
		setSelectedIndex(_index)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-row items-center justify-between'>
				<h3 className='text-lg'>ONBOARD PATIENT</h3>
				<button data-bs-toggle='modal' data-bs-target='#onboardModal' type='button'>
					<AiOutlineCloseCircle size={25} />
				</button>
			</div>
			<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
				<Tab.List className='flex pb-5 mb-5 space-x-5 text-gray-500 border-b border-solid font-Karla-Bold border-slate-200'>
					<Tab
						className={({ selected }) =>
							selected
								? 'focus:outline-0 outline-0 flex flex-row text-cyan-600'
								: ' text-gray-500 flex flex-row align-middle justify-center '
						}
					>
						Input Patient Information
					</Tab>
					<div>{'>'}</div>
					<Tab
						className={({ selected }) =>
							selected
								? 'focus:outline-0 outline-0 flex flex-row text-cyan-600'
								: ' text-gray-500 flex flex-row align-middle justify-center '
						}
					>
						Setup Sensor Device
					</Tab>
				</Tab.List>
				<Tab.Panels>
					<PatientInfoTab register={register} errors={errors} setTabIndex={setTabIndex} />
					<SensorDeviceTab register={register} errors={errors} setTabIndex={setTabIndex} />
				</Tab.Panels>
			</Tab.Group>
		</form>
	)
}

const Onboard = (props) => {
	return (
		<>
			<div
				className='fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade'
				id='onboardModal'
				tabIndex='-1'
				aria-labelledby='onboardModal'
				aria-modal='true'
				role='dialog'
			>
				<div className='relative pointer-events-none min-w-fit w-96 modal-dialog modal-dialog-centered modal-dialog-scrollable'>
					<div className='relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding'>
						<div className='relative p-4 modal-body'>
							<OnboardSignUp />
						</div>
					</div>
				</div>
			</div>
			<NotificationAlert type='success' message='Success' />
		</>
	)
}

const SensorDeviceTab = (props) => {
	const { register, errors, setTabIndex } = props
	const [selected, setSelected] = useState(0)

	return (
		<Tab.Panel>
			<div className='grid grid-cols-2 gap-5 mb-5'>
				<div>
					<h4 className='text-xs'>SENSOR DEVICE NAME</h4>
					<input
						className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
						type='text'
						{...register('sensorName', { required: false })}
					/>
					{errors?.sensorName && <h4 className='text-xs text-red-500'>Sensor Name is Required</h4>}
				</div>
				<div>
					<h4 className='text-xs'>SENSOR MAC ADDRESS</h4>
					<input
						className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
						type='text'
						{...register('macAddress', { required: false, length: 12 })}
					/>
					{errors?.macAddress && <h4 className='text-xs text-red-500'>Sensor Mac Address is Required</h4>}
				</div>
			</div>

			<h4 className='mb-2 text-xs'>VALID DURATION FOR SENSOR DEVICE API KEY</h4>
			{/* 					<input
						className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
						type='text'
						{...register('sensorName', { required: false })}
					/>
					{errors?.sensorName && <h4 className='text-xs text-red-500'>Sensor Name is Required</h4>} */}
			<RadioGroup value={selected} onChange={setSelected} className='grid grid-cols-3 gap-5 mb-5'>
				<RadioGroup.Option
					key={0}
					value={0}
					className={({ checked }) =>
						`${checked ? 'border-2 rounded-lg border-cyan-600 text-cyan-600' : ' border'}
        p-2 text-center text-cyan-600 rounded-lg`
					}
				>
					<h1>30</h1>
					<h5 className='text-xs'>DAYS</h5>
				</RadioGroup.Option>
				<RadioGroup.Option
					value={1}
					key={1}
					className={({ checked }) =>
						`${checked ? 'border-2 rounded-lg border-cyan-600 text-cyan-600' : ' border'}
        p-2 text-center text-cyan-600 rounded-lg`
					}
				>
					<h1>90</h1>
					<h5 className='text-xs '>DAYS</h5>
				</RadioGroup.Option>
				<RadioGroup.Option
					value={2}
					key={2}
					className={({ checked }) =>
						`${checked ? 'border-2 rounded-lg border-cyan-600 text-cyan-600' : ' border-2'}
        p-2 text-center text-cyan-600 rounded-lg`
					}
				>
					<h1>90</h1>
					<h5 className='text-xs'>
						DAYS <br /> (ONBOARD TO END DATE)
					</h5>
				</RadioGroup.Option>
			</RadioGroup>

			<div className='flex justify-center gap-4 pt-5 border-t border-solid border-slate-200'>
				<button
					type='button'
					onClick={() => setTabIndex(0)}
					className='bg-white border border-slate-200 text-sm text-cyan-600 rounded-lg shadow-btnShadow p-2 font-Karla-Heavy min-w-[6em]'
				>
					Back
				</button>
				<button
					disabled={Object.entries(errors).length > 0}
					data-bs-toggle='modal'
					data-bs-target='#onboardModal'
					type='submit'
					className='bg-cyan-600 text-sm text-white rounded-lg shadow-btnShadow p-2 font-Karla-Heavy min-w-[6em] disabled:bg-gray-600'
				>
					Submit
				</button>
			</div>
		</Tab.Panel>
	)
}
const PatientInfoTab = (props) => {
	const { register, errors, setTabIndex } = props
	const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
	return (
		<Tab.Panel>
			<div className='grid grid-rows-4 '>
				<div className='grid grid-cols-3 gap-3'>
					<div>
						<h4 className='text-xs'>LAST NAME</h4>
						<input
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='text'
							{...register('lastName', { required: false })}
						/>
						{errors?.lastName && <h4 className='text-xs text-red-500'>Last Name is Required</h4>}
					</div>

					<div>
						<h4 className='text-xs'>FIRST NAME</h4>
						<input
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='text'
							name='firstName'
							{...register('firstName', { required: false })}
						/>
						{errors?.firstName && <h4 className='text-xs text-red-500'>First Name is Required</h4>}
					</div>
					<div>
						<h4 className='text-xs'>MIDDLE NAME</h4>
						<input
							type='text'
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							{...register('middleName', { required: false })}
						/>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>GENDER</h4>
						<input className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy' />
					</div>
					<div>
						<h4 className='text-xs'>AGE</h4>
						<input
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='number'
							{...register('age', { required: false })}
						/>
						{errors?.age && <h4 className='text-xs text-red-500'>Age is Required</h4>}
					</div>
					<div>
						<h4 className='text-xs'>DATE OF BIRTH</h4>

						<div className='mb-3 datepicker form-floating' data-mdb-toggle-button='false'>
							<input
								type='date'
								className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
								placeholder='Select a date'
								data-mdb-toggle='datepicker'
								{...register('dateOfBirth', { required: false })}
							/>
							{errors?.dateOfBirth && <h4 className='text-xs text-red-500'>Date of Birth is Required</h4>}
						</div>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>DIAGNOSIS</h4>
						<input
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='text'
							{...register('diagnosis', { required: false })}
						/>
						{errors?.diagnosis && <h4 className='text-xs text-red-500'>Diagnosis is Required</h4>}
					</div>
					<div>
						<h4 className='text-xs'>ONBOARD DATE</h4>

						<div className='mb-3 datepicker form-floating' data-mdb-toggle-button='false'>
							<input
								type='date'
								className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
								placeholder='Select a date'
								data-mdb-toggle='datepicker'
								{...register('onboardDate', { required: false })}
							/>
							{errors?.onboardDate && <h4 className='text-xs text-red-500'>Onboard Date is Required</h4>}
						</div>
					</div>
					<div>
						<h4 className='text-xs'>EXPECTED END DATE</h4>
						<div className='mb-3 datepicker form-floating' data-mdb-toggle-button='false'>
							<input
								type='date'
								className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
								placeholder='Select a date'
								data-mdb-toggle='datepicker'
								{...register('expectedEndDate', { required: false })}
							/>
							{errors?.expectedEndDate && (
								<h4 className='text-xs text-red-500'>Expected End Date is Required</h4>
							)}
						</div>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>EMAIL</h4>
						<input
							className='p-1 text-sm text-gray-500 border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='email'
							name='email'
							{...register('email', { required: false, pattern: /^\S+@\S+$/i })}
						/>
						{errors?.email?.type === 'pattern' ? (
							<h4 className='text-xs text-red-500'>Invalid Email</h4>
						) : errors?.email?.type === 'required' ? (
							<h4 className='text-xs text-red-500'>Email is Required</h4>
						) : (
							<></>
						)}
					</div>
					<div>
						<h4 className='text-xs'>CONTACT NUMBER</h4>
						<input
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='text'
							name='contactNumber'
							{...register('contactNumber', { required: false, pattern: rePhoneNumber })}
						/>
						{errors?.contactNumber?.type === 'pattern' ? (
							<h4 className='text-xs text-red-500'>Invalid Contact Number</h4>
						) : errors?.contactNumber?.type === 'required' ? (
							<h4 className='text-xs text-red-500'>Contact Number is Required</h4>
						) : (
							<></>
						)}
					</div>
					<div className='flex items-end'>
						<button className='flex gap-2 items-center rounded-md border border-slate-200 p-1.5 bg-slate-200'>
							<AiOutlineUpload size={'1rem'} />
							<h4 className='text-xs'>UPLOAD PROFILE PHOTO</h4>
						</button>
					</div>
					<div />
				</div>
			</div>
			<div className='flex justify-center gap-4 pt-5 border-t border-solid border-slate-200'>
				<button
					type='button'
					data-bs-toggle='modal'
					data-bs-target='#onboardModal'
					className='bg-white border border-slate-200 text-sm text-cyan-600 rounded-lg shadow-btnShadow p-2 font-Karla-Heavy min-w-[6em]'
				>
					Cancel
				</button>
				<button
					type='submit'
					onClick={() => setTabIndex(1)}
					className='bg-cyan-600 text-sm text-white rounded-lg shadow-btnShadow p-2 font-Karla-Heavy min-w-[6em]'
				>
					Next
				</button>
			</div>
		</Tab.Panel>
	)
}

export default Onboard
