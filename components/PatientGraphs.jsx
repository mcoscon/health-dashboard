import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Tab } from '@headlessui/react'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import { RiHeartPulseLine, RiLungsLine, RiStackLine } from 'react-icons/ri'
import { BiRefresh } from 'react-icons/bi'
import { GiCycle, GiHalfHeart } from 'react-icons/gi'
import { randomize, shift, useInterval } from './utilFunctions'

const colors = [
	{ key: 'SPO2', color: '#14b8a6' },
	{ key: 'HEART RATE', color: '#06b6d4' },
	,
	{ key: 'RESPIRATION RATE', color: '#f59e0b' },
	,
	{ key: 'TIDAL DEPTH', color: '#a855f7' },
	,
	{ key: 'DUTY CYCLE', color: '#f43f5e' },
]

const MiniCharts = (props) => {
	const { key, color, data } = props
	const options = {
		chart: {
			type: 'area',
			height: 100,
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
	return (
		<div>
			<HighchartsReact
				containerProps={{ style: { height: '100%', width: '100%', overFlow: 'hidden' } }}
				highcharts={Highcharts}
				options={options}
			/>
		</div>
	)
}

const MainCharts = (props) => {
	const { key, color } = props
	const options = {
		chart: {
			type: 'area',
			height: 120,
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
			gridLineWidth: 1,
			gridLineColor: 'rgba(97, 110, 178, 0.2)',
			title: {
				enabled: true,
				text: '',
				style: {
					fontWeight: 'normal',
				},
			},
		},
		yAxis: {
			gridLineWidth: 1,
			gridLineColor: 'rgba(97, 110, 178, 0.2)',
			title: {
				enabled: true,
				text: '',
				style: {
					fontWeight: 'normal',
				},
			},
		},
		series: [
			{
				data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
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
		<>
			<HighchartsReact
				containerProps={{ style: { height: '100%', width: '100%', overFlow: 'hidden' } }}
				highcharts={Highcharts}
				options={options}
			/>
		</>
	)
}

const LiveSpot = () => {
	const [data, setData] = useState([29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4])

	const livespotData = [
		{
			icon: <RiLungsLine className='p-2 rounded-full text-white bg-[#f59e0b] sm:flex' size={'2em'} />,
			title: 'Resp Rate',
			color: '#f59e0b',
		},
		{
			icon: <RiHeartPulseLine className='p-2 bg-[#06b6d4] text-white rounded-full sm:flex' size={'2em'} />,
			title: 'Heart Rate',
			color: '#06b6d4',
		},
		,
		{
			icon: <GiCycle className='p-2 bg-[#f43f5e] text-white rounded-full sm:flex' size={'2em'} />,
			title: 'Duty Cycle',
			text: '175',
			color: '#f43f5e',
		},
		{
			icon: <GiHalfHeart className='p-2 rounded-full text-white bg-[#14b8a6] sm:flex' size={'2em'} />,
			title: 'SPO2 Level',
			color: '#14b8a6',
		},
		{
			icon: <RiStackLine className='p-2 rounded-full text-white bg-[#a855f7] sm:flex' size={'2em'} />,
			title: 'Tidal Depth',
			color: '#a855f7',
		},
	]
	useInterval(() => {
		const _data = randomize(data)
		setData(_data)
	}, 2000)

	return (
		<div className='flex flex-wrap justify-center gap-8 md:justify-start'>
			{livespotData.map((_livespotData, index) => (
				<div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg' key={index}>
					<div className='flex gap-8'>
						{_livespotData.icon}
						<div>
							<h5 className='text-sm font-bold text-gray-400 uppercase'>{_livespotData.title}</h5>
							<h1 className='text-2xl text-cyan-700'>{data[8]}</h1>
						</div>
					</div>
					<MiniCharts color={_livespotData.color} data={data} />
					<div className='flex items-center justify-between gap-8 '>
						<h5 className='text-xs font-bold text-gray-400'>{'1 minute ago'}</h5>

						<div className='flex flex-row items-center justify-center text-xs font-bold transition duration-150 ease-in-out bg-white text-cyan-600 '>
							DETAILS
							<AiFillCaretRight />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

const PatientGraphs = () => {
	return (
		<div className='p-4 w-[85vw] sm:w-[65vw] md:w-[50vw] flex flex-col '>
			<div className='flex flex-row items-center justify-between gap-4'>
				<h3 className='mb-2'>VITALS GRAPHS</h3>
				<div className='flex items-center gap-2'>
					<input
						type='date'
						className='w-40 p-2 text-sm text-gray-500 bg-white border rounded-md shadow-lg border-slate-200 focus:outline-slate-300 font-Karla-Heavy'
						placeholder='Select a date'
					/>

					<button className='flex flex-row items-center justify-center gap-2 p-2 text-xs text-white rounded-lg shadow-btnShadow font-Karla-Heavy bg-cyan-600'>
						<BiRefresh size={20} />
						UPDATE
					</button>
				</div>
			</div>
			<Tab.Group>
				<Tab.List className='flex mb-5 space-x-5 font-Karla-Bold text-cyan-500'>
					<Tab
						className={({ selected }) =>
							selected ? 'border-cyan-500 border-b-4 focus:outline-0 outline-0' : ' text-gray-500'
						}
					>
						HOURLY
					</Tab>
					<Tab
						className={({ selected }) =>
							selected ? 'border-cyan-500 border-b-4 focus:outline-0 outline-0' : ' text-gray-500'
						}
					>
						DAILY
					</Tab>
					<Tab
						className={({ selected }) =>
							selected ? 'border-cyan-500 border-b-4 focus:outline-0 outline-0' : ' text-gray-500'
						}
					>
						LIVE SPOT
					</Tab>
				</Tab.List>

				<Tab.Panels>
					<Tab.Panel>
						<div>
							{colors.map((graph, index) => {
								return (
									<div key={index}>
										<h3 className='flex flex-row items-center gap-2 mb-2 text-sm text-gray-500'>
											<AiFillCaretDown />
											{graph.key}
										</h3>
										<MainCharts key={graph.key} color={graph.color} />
									</div>
								)
							})}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div>
							{colors.map((graph, index) => {
								return (
									<div key={index}>
										<h3 className='flex flex-row items-center gap-2 mb-2 text-sm text-gray-500'>
											<AiFillCaretDown />
											{graph.key}
										</h3>
										<MainCharts key={graph.key} color={graph.color} />
									</div>
								)
							})}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<LiveSpot />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

export default PatientGraphs
