import React from 'react'

const DatePicker = (props) => {
	const { className, id } = props
	return (
		<div key={id} className='flex items-center justify-center'>
			<div className='datepicker form-floating mb-3 xl:w-96' data-mdb-toggle-button='false'>
				<input type='text' className={className} placeholder='Select a date' data-mdb-toggle='datepicker' />
			</div>
		</div>
	)
}

export default DatePicker
