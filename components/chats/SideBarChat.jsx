import React from 'react'

const SideBarChat = () => {
	return (
		<div className='flex flex-col gap-4 p-4 bg-white rounded-2xl'>
			<div className='flex items-center justify-between gap-7'>
				<h4 className='uppercase'>Messages</h4>
				<h4>+</h4>
			</div>
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
					className='block w-full p-2 pl-10 text-sm text-gray-900 bg-white rounded-lg shadow-sm border-cyan-600 lg:w-80 focus:ring-cyan-600 focus:border-cyan-600 font-Karla-Regular'
					placeholder='Search for chats'
				/>
			</div>
			{[0, 1, 2, 3, 4, 5, 6].map((chat, index) => {
				return (
					<div
						key={index}
						className={`flex flex-row items-center justify-between p-2 text-sm rounded-lg bg-opacity-10 bg-cyan-700 ${
							index === 0 ? 'bg-cyan-700' : 'bg-transparent'
						}`}
					>
						<div className='flex flex-row gap-2'>
							<div className='z-50 p-2 text-center text-white rounded-sm bg-cyan-900'>SI</div>
							<div>
								<h4>Michael Evans</h4>
								<h4>How are you feeling?</h4>
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
		</div>
	)
}

export default SideBarChat
