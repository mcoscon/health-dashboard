import Link from 'next/link'
import React from 'react'
import { AiOutlineCloseCircle, AiOutlinePlus, AiOutlineRight, AiOutlineSetting, AiOutlineUpload } from 'react-icons/ai'
import { BiBody, BiCaretDown, BiPhoneOutgoing, BiPlusMedical } from 'react-icons/bi'
import { FiCheckSquare, FiSettings, FiTool, FiUsers, FiWifi } from 'react-icons/fi'
import { RiExternalLinkLine, RiHomeGearFill } from 'react-icons/ri'
import GenericModal from '../components/GenericModal'
import { Tab } from '@headlessui/react'
import Onboard from '../components/patientlist/Onboard'
import PatientListHeader from '../components/patientlist/PatientListHeader'

const ActionsModal = () => {
	return (
		<>
			<button
				className='block text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
				type='button'
				data-modal-toggle='defaultModal'
			>
				Toggle modal
			</button>

			<div
				id='defaultModal'
				tabIndex='-1'
				aria-hidden='true'
				className='fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'
			>
				<div className='relative w-full h-full max-w-2xl p-4 md:h-auto'>
					<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
						<div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
							<h3 className='text-xl font-semibold text-black dark:text-white'>Terms of Service</h3>
							<button
								type='button'
								className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
								data-modal-toggle='defaultModal'
							>
								<svg
									aria-hidden='true'
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									></path>
								</svg>
								<span className='sr-only'>Close modal</span>
							</button>
						</div>
						<div className='p-6 space-y-6'>
							<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
								With less than a month to go before the European Union enacts new consumer privacy laws
								for its citizens, companies around the world are updating their terms of service
								agreements to comply.
							</p>
							<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
								The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
								May 25 and is meant to ensure a common set of data rights in the European Union. It
								requires organizations to notify users as soon as possible of high-risk data breaches
								that could personally affect them.
							</p>
						</div>
						<div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
							<button
								data-modal-toggle='defaultModal'
								type='button'
								className='text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
							>
								I accept
							</button>
							<button
								data-modal-toggle='defaultModal'
								type='button'
								className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-black focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
							>
								Decline
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const Table = () => {
	return (
		<div className='flex flex-col w-full p-7 md:max-w-screen-xl'>
			<div className='flex flex-col items-center justify-between w-full gap-5 lg:flex-row md:items-start lg:items-center '></div>
			<div className='relative w-full overflow-x-auto rounded-md shadow-md'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='pb-4 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								Patient Name
							</th>
							<th scope='col' className='px-6 py-3'>
								AVG RR (24 HRS)
							</th>
							<th scope='col' className='px-6 py-3'>
								AVG HR (24 HRS)
							</th>
							<th scope='col' className='px-6 py-3'>
								AVG SP02 (24 HRS)
							</th>
							<th scope='col' className='px-6 py-3 text-center'>
								SENSOR DEVICE
							</th>
							<th scope='col' className='px-6 py-3 text-center'>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								Apple iMac
							</th>
							<td className='px-6 py-1'>Silver</td>
							<td className='px-6 py-1'>PC</td>
							<td className='px-6 py-1'>$2999</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								Apple AirPods
							</th>
							<td className='px-6 py-1'>White</td>
							<td className='px-6 py-1'>Accessories</td>
							<td className='px-6 py-1'>$399</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-red-100 border border-red-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-1'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								Apple iMac
							</th>
							<td className='px-6 py-1'>Silver</td>
							<td className='px-6 py-1'>PC</td>
							<td className='px-6 py-1'>$2999</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								Apple AirPods
							</th>
							<td className='px-6 py-1'>White</td>
							<td className='px-6 py-1'>Accessories</td>
							<td className='px-6 py-1'>$399</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								iPad Pro
							</th>
							<td className='px-6 py-1'>Gold</td>
							<td className='px-6 py-1'>Tablet</td>
							<td className='px-6 py-1'>$699</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center border rounded-sm border-slate-300 bg-slate-100'>
											<h4 className='text-xs text-black'>NO DEVICE</h4>
										</div>
										<h5 className='text-xs'>CONFIGURE NOW</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='my-5 text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th scope='row' className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'>
								Apple Watch
							</th>
							<td className='px-6 py-1'>Black</td>
							<td className='px-6 py-1'>Watches</td>
							<td className='px-6 py-1'>$199</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-green-100 border border-green-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-2'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								Magic Keyboard
							</th>
							<td className='px-6 py-4'>Black</td>
							<td className='px-6 py-4'>Accessories</td>
							<td className='px-6 py-4'>$99</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-red-100 border border-red-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-1'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								Smart Folio iPad Air
							</th>
							<td className='px-6 py-1'>Blue</td>
							<td className='px-6 py-1'>Accessories</td>
							<td className='px-6 py-1'>$79</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-red-100 border border-red-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-1'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
						<tr className='text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white'
							>
								AirTag
							</th>
							<td className='px-6 py-1'>Silver</td>
							<td className='px-6 py-1'>Accessories</td>
							<td className='px-6 py-1'>$29</td>
							<td className='px-6 py-1 text-center'>
								<div className='flex flex-row items-center gap-4'>
									<button>
										<FiSettings />
									</button>
									<div>
										<div className='text-center bg-red-100 border border-red-300 rounded-sm'>
											<h4 className='text-xs text-black'>RSD-12</h4>
										</div>
										<h5 className='text-xs'>24 Sep 2022, 11:45am</h5>
									</div>
								</div>
							</td>
							<td className='px-6 py-1'>
								<Link href='/patient'>
									<a className='flex flex-row items-center justify-center gap-1 border-2 border-transparent rounded-md cursor-pointer font-Karla-Bold text-slate-500 hover:border-slate-500 hover:border-2'>
										<RiExternalLinkLine />
										Dashboard
									</a>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
				<nav className='flex items-center justify-between p-4 bg-white' aria-label='Table navigation'>
					<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
						Showing <span className='font-semibold text-black dark:text-white'>1-20</span> of{' '}
						<span className='font-semibold text-black dark:text-white'>100</span>
					</span>
					<ul className='inline-flex items-center -space-x-px'>
						<li>
							<a
								href='#'
								className='block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
							>
								<span className='sr-only'>Previous</span>
								<svg
									className='w-5 h-5'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
										clipRule='evenodd'
									></path>
								</svg>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
							>
								1
							</a>
						</li>
						<li>
							<a
								href='#'
								className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
							>
								2
							</a>
						</li>
						<li>
							<a
								href='#'
								aria-current='page'
								className='z-10 px-3 py-2 leading-tight border text-cyan-600 border-cyan-300 bg-cyan-50 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
							>
								3
							</a>
						</li>
						<li>
							<a
								href='#'
								className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
							>
								...
							</a>
						</li>
						<li>
							<a
								href='#'
								className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
							>
								100
							</a>
						</li>
						<li>
							<a
								href='#'
								className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
							>
								<span className='sr-only'>Next</span>
								<svg
									className='w-5 h-5'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
										clipRule='evenodd'
									></path>
								</svg>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

const PatientList = () => {
	return (
		<div className='flex flex-col w-full'>
			<PatientListHeader />
			<div className='flex w-full xl:justify-center'>
				<Table />
			</div>
		</div>
	)
}

export default PatientList
