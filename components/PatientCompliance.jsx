import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import Link from 'next/link'
import React from 'react'
import { BiMessageRoundedError, BiZoomIn, BiPhoneOutgoing } from 'react-icons/bi'
import MoreInfoModal from './MoreInfoModal'
import { AiFillAlert } from 'react-icons/ai'
import Image from 'next/image'
const SmileSvg = () => {
	return (
		<svg width='31' height='23' viewBox='0 0 31 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7.25607 16.5862C6.57334 16.1276 5.6359 16.2917 5.16224 16.9528C4.68858 17.6138 4.85807 18.5215 5.5408 18.9801C8.6748 21.0854 11.9257 22.1536 15.2655 22.1536C18.592 22.1536 21.9326 21.0942 25.2697 19.0068C25.9676 18.5702 26.1679 17.6685 25.717 16.9926C25.2661 16.3168 24.3348 16.1229 23.6368 16.5595C20.7632 18.357 17.9788 19.24 15.2655 19.24C12.5657 19.24 9.90525 18.3658 7.25607 16.5862Z'
				fill='#464646'
			/>
			<path
				d='M0.543196 4.01202C0.167302 4.72956 0.463332 5.60629 1.2044 5.97025C1.94547 6.33421 2.85094 6.04758 3.22684 5.33004C4.01147 3.83226 4.82125 3.21422 5.70258 3.21422C6.56758 3.21422 7.329 3.81296 8.04613 5.2906C8.39954 6.01878 9.29568 6.33169 10.0477 5.98951C10.7998 5.64733 11.123 4.77963 10.7696 4.05145C9.6013 1.64428 7.89255 0.30062 5.70258 0.30062C3.52893 0.30062 1.79368 1.62498 0.543196 4.01202Z'
				fill='#464646'
			/>
			<path
				d='M20.125 3.97006C19.7252 4.67536 19.9915 5.56096 20.7199 5.94812C21.4484 6.33527 22.363 6.07736 22.7629 5.37207C23.626 3.84962 24.4584 3.21426 25.2615 3.21426C26.0485 3.21426 26.8329 3.8311 27.6273 5.33458C28.0058 6.05085 28.9123 6.33444 29.652 5.96799C30.3918 5.60154 30.6847 4.72382 30.3062 4.00755C29.048 1.62622 27.3622 0.300657 25.2615 0.300657C23.1768 0.300657 21.4643 1.6077 20.125 3.97006Z'
				fill='#464646'
			/>
		</svg>
	)
}

const DonutChart = (props) => {
	const { key, color, data } = props
	const options = {
		chart: {
			type: 'pie',
			height: 114,
			width: 114,
			backgroundColor: 'transparent',
		},
		animation: false,
		title: {
			verticalAlign: 'middle',
			floating: true,
			useHTML: true,
			text: `<svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.	w3.org/2000/svg">
				<path d="M7.25607 16.5862C6.57334 16.1276 5.6359 16.2917 5.16224 16.9528C4.68858 17.6138 4.85807 18.5215 5.5408 18.9801C8.6748 21.0854 11.9257 22.1536 15.2655 22.1536C18.592 22.1536 21.9326 21.0942 25.2697 19.0068C25.9676 18.5702 26.1679 17.6685 25.717 16.9926C25.2661 16.3168 24.3348 16.1229 23.6368 16.5595C20.7632 18.357 17.9788 19.24 15.2655 19.24C12.5657 19.24 9.90525 18.3658 7.25607 16.5862Z" fill="#464646"/>
				<path d="M0.543196 4.01202C0.167302 4.72956 0.463332 5.60629 1.2044 5.97025C1.94547 6.33421 2.85094 6.04758 3.22684 5.33004C4.01147 3.83226 4.82125 3.21422 5.70258 3.21422C6.56758 3.21422 7.329 3.81296 8.04613 5.2906C8.39954 6.01878 9.29568 6.33169 10.0477 5.98951C10.7998 5.64733 11.123 4.77963 10.7696 4.05145C9.6013 1.64428 7.89255 0.30062 5.70258 0.30062C3.52893 0.30062 1.79368 1.62498 0.543196 4.01202Z" fill="#464646"/>
				<path d="M20.125 3.97006C19.7252 4.67536 19.9915 5.56096 20.7199 5.94812C21.4484 6.33527 22.363 6.07736 22.7629 5.37207C23.626 3.84962 24.4584 3.21426 25.2615 3.21426C26.0485 3.21426 26.8329 3.8311 27.6273 5.33458C28.0058 6.05085 28.9123 6.33444 29.652 5.96799C30.3918 5.60154 30.6847 4.72382 30.3062 4.00755C29.048 1.62622 27.3622 0.300657 25.2615 0.300657C23.1768 0.300657 21.4643 1.6077 20.125 3.97006Z" fill="#464646"/>
				</svg>
`,
		},
		plotOptions: {
			pie: {
				innerSize: '75%',
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false,
				},
			},
		},
		colors: ['#0891b2', '#e2e8f0'],
		labels: {
			enabled: false,
		},
		series: [
			{
				data: [
					['Days of Compliance', 22],
					['Days of Non-Compliance', 8],
				],
			},
		],
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
	}
	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	)
}
const PatientCompliance = () => {
	return (
		<div>
			<div className='p-5 text-black bg-white rounded-lg'>
				<div className='flex flex-row justify-between align-middle '>
					<div>
						<h3>PATIENT COMPLIANCE</h3>
						<h3 className='mb-5 text-cyan-600'>DAYS SKIPPED PAST 30 DAYS</h3>
					</div>
					<div>
						<Link href='/chats'>
							<a className='flex flex-row items-center justify-center gap-2 p-2 text-xs text-white transition duration-150 rounded-full bg-cyan-600 shadow-btnShadow font-Karla-Heavy hover:bg-white hover:text-cyan-600'>
								<BiPhoneOutgoing size={20} />
							</a>
						</Link>
					</div>
				</div>
				<div className='flex flex-col-reverse justify-between sm:flex-row gap-7'>
					<div>
						<div className='grid grid-rows-2 gap-5 mt-5 sm:gap-10'>
							<div className='grid grid-cols-2 gap-8 sm:grid-cols-2'>
								<div className='flex flex-col items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>
											SENSOR
											<br />
											INPUT
										</h4>
									</div>
								</div>
								<div className='flex flex-col items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>
											BREATHING <br /> INPUT
										</h4>
									</div>
								</div>
							</div>
							<div className='grid grid-cols-2 gap-8 sm:grid-cols-2'>
								<div className='flex flex-col items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>
											SYMPTOMS
											<br />
											INPUT
										</h4>
									</div>
								</div>
								<div className='flex flex-col items-center sm:items-start'>
									<div className='flex flex-row items-center gap-2'>
										<h1 className='text-3xl text-rose-300'>02</h1>
										<h4 className='text-xs'>MEDICATION</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center gap-5'>
						<DonutChart />
						{/* 						<button className='flex flex-row items-center justify-center gap-2 p-2 text-xs bg-white text-cyan-600 rounded-2xl shadow-btnShadow md:w-full font-Karla-Heavy hover:bg-cyan-600 hover:text-white'>
							<BiMessageRoundedError size={20} />
							REMINDER
						</button> */}
						<button
							className='flex flex-row items-center justify-center gap-2 p-2 text-xs transition duration-150 ease-in-out bg-white rounded-lg text-cyan-600 shadow-btnShadow md:w-full font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
							data-bs-toggle='modal'
							data-bs-target='#moreInfoModal'
						>
							<BiZoomIn size={20} />
							MORE INFO
						</button>
					</div>
					<MoreInfoModal />
				</div>
			</div>
		</div>
	)
}

export default PatientCompliance
