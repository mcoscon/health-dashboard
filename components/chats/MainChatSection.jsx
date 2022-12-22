import React from 'react'

const MainChatSection = () => {
	return (
		<div className='flex flex-col w-full gap-4'>
			MainChatSection
			<div>Chat User Info</div>
			<div className='w-full p-4 bg-white rounded-2xl'>
				{[0].map((chat, index) => {
					return (
						<div
							key={index}
							className={`flex flex-row items-center justify-between p-2 text-sm rounded-lg`}
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
		</div>
	)
}

export default MainChatSection
