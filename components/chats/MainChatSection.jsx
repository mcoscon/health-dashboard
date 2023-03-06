import React from 'react'
import { AiFillPhone, AiFillVideoCamera, AiOutlineFolderOpen, AiOutlineMore, AiOutlineSend } from 'react-icons/ai'

const MainChatSection = () => {
	return (
		<div className='flex flex-col w-full gap-4 md:w-[27.6rem] h-full'>
			<div className='w-full p-4 bg-white rounded-2xl'>
				<h4 className='uppercase'>Shared Files</h4>
				<div className='flex gap-2'>
					{[0, 1, 2].map((e, index) => {
						return (
							<div
								className='flex flex-row items-center gap-2 p-2 rounded-lg bg-slate-400 bg-opacity-10'
								key={index}
							>
								<div className='p-2 rounded-lg text-cyan-600 bg-opacity-10 bg-cyan-700'>
									<AiOutlineFolderOpen size={'1.2rem'} />
								</div>
								<div>
									<h4 className='text-xs'>Analyses</h4>
									<h4 className='text-xs text-slate-400'>Feb 02, 2021</h4>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<div className='w-full p-4 bg-white rounded-2xl'>
				{[0].map((chat, index) => {
					return (
						<>
							<div
								key={index}
								className={`flex flex-row items-center justify-between p-2 text-sm rounded-lg`}
							>
								<div className='flex flex-row gap-2'>
									<div className='z-50 p-2 text-center text-white rounded-sm bg-cyan-900'>M.I</div>
									<div>
										<h4>Michael Evans</h4>
										<h4 className='text-cyan-600'>typing...</h4>
									</div>
								</div>
								<div className='flex gap-4'>
									<button className='p-2 rounded-lg text-cyan-600 bg-opacity-10 bg-cyan-700'>
										<AiFillVideoCamera size={'1.2rem'} />
									</button>
									<button className='p-2 rounded-lg text-cyan-600 bg-opacity-10 bg-cyan-700'>
										<AiFillPhone size={'1.2rem'} />
									</button>
									<button className='p-2 rounded-lg text-cyan-600 bg-opacity-10 bg-cyan-700'>
										<AiOutlineMore size={'1.2rem'} />
									</button>
								</div>
							</div>
							<div className='my-2 border-b-2' />
							<h4 className='my-4 text-sm text-center text-slate-400'>Today</h4>
							<div className='flex flex-col items-start gap-4'>
								<div className='px-4 py-2 rounded-bl-none rounded-2xl bg-cyan-600 md:max-w-[65%] text-white'>
									<p className='text-sm'>Hi Evans, how are you feeling today?</p>
									<p className='text-xs text-right text-slate-200'>10:52am</p>
								</div>
								<div className='px-4 py-2 rounded-br-none rounded-2xl bg-slate-400 bg-opacity-10 md:max-w-[65%] self-end'>
									<p className='text-sm'>
										Good morning, Dr Christine! Im not feeling very well. Ive got these awful pains
										in my stomach and I have not been sleeping well.
									</p>
									<p className='text-xs text-right text-slate-400'>10:52am</p>
								</div>
								<div className='px-4 py-2 rounded-bl-none rounded-2xl bg-cyan-600 md:max-w-[65%] text-white'>
									<p className='text-sm'>Youve got some kind of stomach infection!</p>
									<p className='text-xs text-right text-slate-200'>10:52am</p>
								</div>
								<div className='relative self-end w-full mt-2'>
									<input
										type='text'
										id='table-search'
										className='block w-full p-2 pl-10 text-sm bg-white border-2 rounded-lg shadow-sm border-slate-400 font-Karla-Regular'
										placeholder='Search for chats'
									/>
									<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400'>
										<AiOutlineSend size={'1.2rem'} />
									</div>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</div>
	)
}

export default MainChatSection
