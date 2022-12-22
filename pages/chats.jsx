import React from 'react'
import MainChatSection from '../components/chats/MainChatSection'
import SideBarChat from '../components/chats/SideBarChat'

const Chats = () => {
	return (
		<div className='flex justify-start w-full xl:justify-center'>
			<div className='flex flex-col justify-center md:max-w-screen-xl md:flex-row gap-7 p-7'>
				<div className='md:basis-1/3'>
					<SideBarChat />
				</div>
				<div className='bg-black md:basis-2/3'>
					<MainChatSection />
				</div>
			</div>
		</div>
	)
}

export default Chats
