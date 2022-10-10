import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import { AiOutlineCloseCircle, AiOutlinePlus, AiOutlineUpload } from 'react-icons/ai'
import GenericModal from '../GenericModal'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibleFalse, setVisibleTrue } from '../../store/modalSlice'
import { RadioGroup } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import DatePicker from '../DatePicker'
import { FiSettings } from 'react-icons/fi'

const OnboardSignUp = () => {
	const [selectedIndex, setSelectedIndex] = useState(0)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		setTabIndex(1)
	}
	const setTabIndex = (_index) => {
		setSelectedIndex(_index)
	}
	const dispatch = useDispatch()
	console.log(errors)
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
						/* 	disabled={Object.keys(errors).length !== 0} */
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
	const dispatch = useDispatch()
	return (
		/* 		<GenericModal
			ButtonProp={
				<button
					type='button'
					onClick={() => dispatch(setVisibleTrue())}
					className='flex flex-row items-center self-center justify-center gap-2 p-2 text-sm text-white rounded-lg bg-cyan-600 shadow-btnShadow font-Karla-Heavy grow-0'
				>
					<AiOutlinePlus size={20} />
					ONBOARD
				</button>
			}
			modalContent={<OnboardSignUp />}
			
		/> */
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
						{...register('sensorName', { required: true })}
					/>
					{errors?.sensorName && <h4 className='text-xs text-red-500'>Sensor Name is Required</h4>}
				</div>
				<div>
					<h4 className='text-xs'>SENSOR MAC ADDRESS</h4>
					<input
						className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
						type='text'
						{...register('macAddress', { required: true, length: 12 })}
					/>
					{errors?.macAddress && <h4 className='text-xs text-red-500'>Sensor Mac Address is Required</h4>}
				</div>
			</div>

			<h4 className='mb-2 text-xs'>VALID DURATION FOR SENSOR DEVICE API KEY</h4>
			{/* 					<input
						className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
						type='text'
						{...register('sensorName', { required: true })}
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
					/* 		onClick={() => setTabIndex(1)} */
					/* 	type='submit' */
					/* 		onClick={() => setShowModal(true)} */
					className='bg-cyan-600 text-sm text-white rounded-lg shadow-btnShadow p-2 font-Karla-Heavy min-w-[6em]'
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
							{...register('lastName', { required: true })}
						/>
						{errors?.lastName && <h4 className='text-xs text-red-500'>Last Name is Required</h4>}
					</div>

					<div>
						<h4 className='text-xs'>FIRST NAME</h4>
						<input
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='text'
							name='firstName'
							{...register('firstName', { required: true })}
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
							{...register('age', { required: true })}
						/>
						{errors?.age && <h4 className='text-xs text-red-500'>Age is Required</h4>}
					</div>
					<div>
						<h4 className='text-xs'>DATE OF BIRTH</h4>
						<div className='flex items-center justify-center'>
							<div className='mb-3 datepicker form-floating xl:w-96' data-mdb-toggle-button='false'>
								<input
									type='date'
									className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
									placeholder='Select a date'
									data-mdb-toggle='datepicker'
									{...register('dateOfBirth', { required: true })}
								/>
								{errors?.dateOfBirth && (
									<h4 className='text-xs text-red-500'>Date of Birth is Required</h4>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<div>
						<h4 className='text-xs'>DIAGNOSIS</h4>
						<input
							className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
							type='text'
							{...register('diagnosis', { required: true })}
						/>
						{errors?.diagnosis && <h4 className='text-xs text-red-500'>Diagnosis is Required</h4>}
					</div>
					<div>
						<h4 className='text-xs'>ONBOARD DATE</h4>

						<div className='flex items-center justify-center'>
							<div className='mb-3 datepicker form-floating xl:w-96' data-mdb-toggle-button='false'>
								<input
									type='date'
									className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
									placeholder='Select a date'
									data-mdb-toggle='datepicker'
									{...register('onboardDate', { required: true })}
								/>
								{errors?.onboardDate && (
									<h4 className='text-xs text-red-500'>Onboard Date is Required</h4>
								)}
							</div>
						</div>
					</div>
					<div>
						<h4 className='text-xs'>EXPECTED END DATE</h4>
						<div className='flex items-center justify-center'>
							<div className='mb-3 datepicker form-floating xl:w-96' data-mdb-toggle-button='false'>
								<input
									type='date'
									className='p-1 text-sm text-gray-500 bg-transparent border rounded-md border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
									placeholder='Select a date'
									data-mdb-toggle='datepicker'
									{...register('expectedEndDate', { required: true })}
								/>
								{errors?.expectedEndDate && (
									<h4 className='text-xs text-red-500'>Expected End Date is Required</h4>
								)}
							</div>
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
							{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
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
							{...register('contactNumber', { required: true, pattern: rePhoneNumber })}
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
					className='bg-cyan-600 text-sm text-white rounded-lg shadow-btnShadow p-2 font-Karla-Heavy min-w-[6em]'
				>
					Submit
				</button>
			</div>
		</Tab.Panel>
	)
}

export default Onboard
/* 
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
	{
		name: 'Startup',
		ram: '12GB',
		cpus: '6 CPUs',
		disk: '160 GB SSD disk',
	},
	{
		name: 'Business',
		ram: '16GB',
		cpus: '8 CPUs',
		disk: '512 GB SSD disk',
	},
	{
		name: 'Enterprise',
		ram: '32GB',
		cpus: '12 CPUs',
		disk: '1024 GB SSD disk',
	},
]
 */
/* export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-full px-4 py-16">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="text-white shrink-0">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
 */
