import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const LineChart = () => {
	const options = {
		chart: {
			type: 'area',
			height: 120,
			backgroundColor: 'transparent',
		},

		plotOptions: {
			series: {
				fillOpacity: 0.4,
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
		<div className='flex flex-col gap-2'>
			<h4 className='text-sm uppercase'> {' > '} Aggregated Prescriptions Per Month</h4>
			<HighchartsReact
				containerProps={{ style: { height: '100%', width: '100%', overFlow: 'hidden' } }}
				highcharts={Highcharts}
				options={options}
			/>
		</div>
	)
}

const PieChart = () => {
	const options = {
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
		chart: {
			type: 'pie',
			height: 165,
			backgroundColor: 'transparent',
		},
		title: {
			text: null,
		},

		accessibility: {
			announceNewData: {
				enabled: true,
			},
			point: {
				valueSuffix: '%',
			},
		},

		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y:.1f}%',
				},
			},
		},

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
		},

		series: [
			{
				name: 'Prescriptions',
				colorByPoint: true,
				data: [
					{
						name: 'Paracetamol',
						y: 61.04,
						drilldown: 'Chrome',
					},
					{
						name: 'Panadol',
						y: 9.47,
						drilldown: 'Safari',
					},
					{
						name: 'Propanol',
						y: 9.32,
						drilldown: 'Edge',
					},
					{
						name: 'Vitamin C',
						y: 8.15,
						drilldown: 'Firefox',
					},
					{
						name: 'Other',
						y: 11.02,
						drilldown: null,
					},
				],
			},
		],
		drilldown: {
			series: [
				{
					name: 'Chrome',
					id: 'Chrome',
					data: [
						['v97.0', 36.89],
						['v96.0', 18.16],
						['v95.0', 0.54],
						['v94.0', 0.7],
						['v93.0', 0.8],
						['v92.0', 0.41],
						['v91.0', 0.31],
						['v90.0', 0.13],
						['v89.0', 0.14],
						['v88.0', 0.1],
						['v87.0', 0.35],
						['v86.0', 0.17],
						['v85.0', 0.18],
						['v84.0', 0.17],
						['v83.0', 0.21],
						['v81.0', 0.1],
						['v80.0', 0.16],
						['v79.0', 0.43],
						['v78.0', 0.11],
						['v76.0', 0.16],
						['v75.0', 0.15],
						['v72.0', 0.14],
						['v70.0', 0.11],
						['v69.0', 0.13],
						['v56.0', 0.12],
						['v49.0', 0.17],
					],
				},
				{
					name: 'Safari',
					id: 'Safari',
					data: [
						['v15.3', 0.1],
						['v15.2', 2.01],
						['v15.1', 2.29],
						['v15.0', 0.49],
						['v14.1', 2.48],
						['v14.0', 0.64],
						['v13.1', 1.17],
						['v13.0', 0.13],
						['v12.1', 0.16],
					],
				},
				{
					name: 'Edge',
					id: 'Edge',
					data: [
						['v97', 6.62],
						['v96', 2.55],
						['v95', 0.15],
					],
				},
				{
					name: 'Firefox',
					id: 'Firefox',
					data: [
						['v96.0', 4.17],
						['v95.0', 3.33],
						['v94.0', 0.11],
						['v91.0', 0.23],
						['v78.0', 0.16],
						['v52.0', 0.15],
					],
				},
			],
		},
	}
	return (
		<div className='flex flex-col gap-2'>
			<h4 className='text-sm uppercase'> {' > '} Medication prescribed to date</h4>
			<HighchartsReact
				containerProps={{ style: { height: '100%', width: '100%', overFlow: 'hidden' } }}
				highcharts={Highcharts}
				options={options}
			/>
		</div>
	)
}

const ColumnChart = () => {
	const options = {
		chart: {
			type: 'column',
			backgroundColor: 'transparent',
			height: 165,
		},
		title: {
			text: null,
		},

		xAxis: {
			categories: ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10'],
			crosshair: true,
		},
		yAxis: {
			title: {
				text: '',
			},
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat:
				'<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true,
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
			},
		},
		legend: { enabled: false },
		credits: {
			enabled: false,
		},
		series: [
			{
				name: 'Oil and gas extraction',
				data: [13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56, 14.32, 14.13, 13.93],
			},
			{
				name: 'Manufacturing industries and mining',
				data: [12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59, 11.94, 11.96, 11.59],
			},
			{
				name: 'Road traffic',
				data: [10.0, 9.93, 9.97, 10.01, 10.23, 10.26, 10.0, 9.12, 9.36, 8.72],
			},
			{
				name: 'Agriculture',
				data: [4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55, 4.53, 4.51],
			},
		],
	}
	return (
		<div className='flex flex-col gap-2'>
			<h4 className='text-sm uppercase'> {' > '} Past 10 Days Prescribed Medication</h4>
			<HighchartsReact
				containerProps={{ style: { height: '100%', width: '100%', overFlow: 'hidden' } }}
				highcharts={Highcharts}
				options={options}
			/>
		</div>
	)
}

const MedicationStats = () => {
	return (
		<div className='flex flex-col h-full gap-4 p-5 rounded-lg bg-neutral-300'>
			<h3>ORGANIZATION PRESCRIPTION STATS</h3>
			<PieChart />
			<ColumnChart />
			<LineChart />
		</div>
	)
}

export default MedicationStats
