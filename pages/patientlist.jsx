import Link from 'next/link'
import React from 'react'
import { RiCheckboxCircleFill, RiCloseCircleFill, RiExternalLinkLine, RiQuestionFill } from 'react-icons/ri'
import PatientListHeader from '../components/patientlist/PatientListHeader'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { randomize } from '../components/utilFunctions'

const colors = { SPO2: '#14b8a6', HR: '#06b6d4', RR: '#f59e0b' }

const MiniCharts = (props) => {
	const { key, color, data } = props
	const options = {
		chart: {
			type: 'area',
			height: 50,
			width: 100,
			backgroundColor: 'transparent',
		},

		plotOptions: {
			series: {
				color: color,
				fillOpacity: 0.12,
			},
		},
		title: {
			text: '',
		},
		xAxis: {
			crosshair: false,
			tickLength: 0,
			labels: {
				enabled: false,
			},
		},
		yAxis: {
			labels: {
				enabled: false,
			},
			gridLineWidth: 0,
			gridLineColor: 'rgba(97, 110, 178, 0.2)',
			title: {
				enabled: false,
				text: '',
				style: {
					fontWeight: 'normal',
				},
			},
		},
		series: [
			{
				data: data,
			},
		],
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
	}
	return <HighchartsReact highcharts={Highcharts} options={options} />
}

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
							<h3 className='text-xl font-semibold text-black '>Terms of Service</h3>
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

const tableItems = [
	{
		name: 'Brian Wong',
		RR: 12,
		HR: 61,
		SP02: 97,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([5, 13, 10]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Christopher Ng',
		RR: 14,
		HR: 63,
		SP02: 96,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Jennifer How',
		RR: 13,
		HR: 62,
		SP02: 94,
		deviceStatus: 'OFFLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Angelene Reyes',
		RR: 16,
		HR: 65,
		SP02: 93,
		deviceStatus: 'CONFIGURE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Mia Self',
		RR: 16,
		HR: 60,
		SP02: 97,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Stephan Roger',
		RR: 12,
		HR: 63,
		SP02: 91,
		deviceStatus: 'OFFLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Annie Who',
		RR: 16,
		HR: 63,
		SP02: 97,
		deviceStatus: 'CONFIGURE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Lee Esterban',
		RR: 14,
		HR: 61,
		SP02: 93,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Esther May',
		RR: 17,
		HR: 60,
		SP02: 93,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Parez Lau',
		RR: 16,
		HR: 60,
		SP02: 95,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Mary Grace',
		RR: 17,
		HR: 65,
		SP02: 95,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
	{
		name: 'Mark Long',
		RR: 17,
		HR: 66,
		SP02: 95,
		deviceStatus: 'ONLINE',
		pastThreeRR: randomize([11, 13, 12]),
		pastThreeHR: randomize([49, 60, 70]),
		pastThreeSPO2: randomize([95, 90, 80]),
	},
]
const Table = () => {
	return (
		<div className='flex flex-col w-full p-7 md:max-w-screen-xl'>
			<div className='flex flex-col items-center justify-between w-full gap-5 lg:flex-row md:items-start lg:items-center '></div>
			<div className='relative w-full overflow-x-auto rounded-md shadow-md'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='pb-4 text-xs text-gray-700 uppercase bg-gray-100'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								No
							</th>
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
							<th scope='col' className='px-6 py-3 '>
								SENSOR DEVICE
							</th>
							<th scope='col' className='px-6 py-3 text-center'>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{tableItems.map((item, index) => {
							return (
								<tr key={index} className='text-black bg-white border-b '>
									<td className='px-6 py-1 font-medium text-gray-400'>
										{index < 9 ? 0 : ''}
										{index + 1}
									</td>
									<td className='px-6 py-4 font-medium text-black whitespace-nowrap'>{item.name}</td>
									<td className='px-6 py-2 text-lg font-light '>
										<div className='flex gap-3'>
											<div>
												<h5>{item.RR}</h5>
												<h5 className='text-xs'>BPM </h5>
											</div>
											<MiniCharts data={item.pastThreeRR} color={colors.RR} />
										</div>
									</td>
									<td className='px-6 py-2 text-lg font-light '>
										<div className='flex gap-3'>
											<div>
												<h5>{item.HR}</h5>
												<h5 className='text-xs'>BPM </h5>
											</div>
											<MiniCharts data={item.pastThreeHR} color={colors.HR} />
										</div>
									</td>
									<td className='px-6 py-2 text-lg font-light '>
										<div className='flex gap-3'>
											<div>
												<h5>{item.SP02}</h5>
												<h5 className='text-xs'>% </h5>
											</div>
											<MiniCharts data={item.pastThreeSPO2} color={colors.SPO2} />
										</div>
									</td>
									<td className='px-6 py-1 text-center '>
										{item.deviceStatus === 'ONLINE' || item.deviceStatus === 'OFFLINE' ? (
											<div
												className={`flex gap-2  ${
													item.deviceStatus === 'ONLINE' ? 'text-green-600' : 'text-red-600'
												}`}
											>
												{item.deviceStatus === 'ONLINE' ? (
													<RiCheckboxCircleFill size='1.5em' />
												) : (
													<RiCloseCircleFill size='1.5em' />
												)}
												<h4>{item.deviceStatus}</h4>
											</div>
										) : (
											<div className='flex gap-2 text-gray-500'>
												<RiQuestionFill size='1.5em' />
												<h4>NO DEVICE</h4>
											</div>
										)}
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
							)
						})}
					</tbody>
				</table>
				<nav className='flex items-center justify-between p-4 bg-white' aria-label='Table navigation'>
					<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
						Showing <span className='font-semibold text-gray-500 '>1-10</span> of{' '}
						<span className='font-semibold text-gray-500'>30</span>
					</span>
					<div className='flex justify-center'>
						<nav aria-label='Page navigation example'>
							<ul className='flex list-style-none'>
								<li className='page-item disabled'>
									<a
										className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none'
										href='#'
										tabIndex='-1'
										aria-disabled='true'
									>
										Previous
									</a>
								</li>
								<li className='page-item'>
									<a
										className='page-link relative block py-1.5 px-3 border-0 bg-cyan-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-cyan-600 shadow-md focus:shadow-md'
										href='#'
									>
										1 <span className='visually-hidden'>(current)</span>
									</a>
								</li>
								<li className='page-item active'>
									<a
										className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
										href='#'
									>
										2
									</a>
								</li>
								<li className='page-item'>
									<a
										className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
										href='#'
									>
										3
									</a>
								</li>
								<li className='page-item'>
									<a
										className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
										href='#'
									>
										Next
									</a>
								</li>
							</ul>
						</nav>
					</div>
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
