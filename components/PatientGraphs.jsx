import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Tab } from '@headlessui/react'
import { AiFillCaretDown } from 'react-icons/ai'
import { RiContactsBookLine } from 'react-icons/ri'
import DatePicker from './DatePicker'
import { BiRefresh } from 'react-icons/bi'

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

const ChartsWrapper = (props) => {
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
				containerProps={{ style: { height: '100%', width: '100%' } }}
				highcharts={Highcharts}
				options={options}
			/>
		</>
	)
}

const PatientGraphs = () => {
	return (
		<div className='p-5 overflow-hidden w-[85vw] sm:w-[65vw] md:w-[50vw]'>
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
										<ChartsWrapper key={graph.key} color={graph.color} />
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
										<ChartsWrapper key={graph.key} color={graph.color} />
									</div>
								)
							})}
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

export default PatientGraphs
