import React from 'react'
import { RiLogoutCircleLine, RiHandHeartLine, RiListUnordered, RiBluetoothLine, RiChat1Line } from 'react-icons/ri'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const NavBar = (props) => {
	const { hamburgerOpen, setHamburgerOpen } = props
	console.log(hamburgerOpen)

	const renderclassName = hamburgerOpen
		? `shadow-md bg-cyan-900 w-60 h-full flex-col md:flex shadow-md ${
				hamburgerOpen ? 'md:hidden fixed h-full z-50' : 'hidden'
		  }`
		: `shadow-md bg-cyan-900 w-60 h-full flex-col hidden md:flex shadow-md`

	return (
		<div className={renderclassName} id='sidenavSecExample'>
			<div className='px-6 pt-4 pb-2 mb-6'>
				<a href='#!'>
					<div className='flex items-center gap-5 text-white grow'>
						<h2 className='text-xl '>Saint Bernards</h2>
						{hamburgerOpen && (
							<button onClick={() => setHamburgerOpen(false)}>
								<AiOutlineCloseCircle />
							</button>
						)}
					</div>
				</a>
			</div>
			<ul className='relative px-4'>
				<Link href='/patientlist' className='relative'>
					<a
						className='flex items-center gap-4 px-6 py-2 mb-6 overflow-hidden text-sm text-white transition duration-300 ease-in-out rounded-lg text-ellipsis whitespace-nowrap hover:text-cyan-600 hover:bg-white font-Karla-Bold'
						data-mdb-ripple='true'
					>
						<RiListUnordered size={20} />
						Management
					</a>
				</Link>
				<Link href='/pharmacy' className='relative'>
					<a
						className='flex items-center gap-4 px-6 py-2 mb-6 overflow-hidden text-sm text-white transition duration-300 ease-in-out rounded-lg text-ellipsis whitespace-nowrap hover:text-cyan-600 hover:bg-white font-Karla-Bold'
						data-mdb-ripple='true'
					>
						<RiBluetoothLine size={20} />
						Medication
					</a>
				</Link>
				<Link href='/patientlist' className='relative'>
					<a
						className='flex items-center gap-4 px-6 py-2 mb-6 overflow-hidden text-sm text-white transition duration-300 ease-in-out rounded-lg cursor-pointer text-ellipsis whitespace-nowrap hover:text-cyan-600 hover:bg-white font-Karla-Bold'
						data-mdb-ripple='true'
					>
						<RiChat1Line size={20} />
						Chats
					</a>
				</Link>
			</ul>
			<div className='px-4 text-center '>
				<button className='w-full py-2 text-sm text-white border-2 border-white rounded-lg font-Karla-Bold hover:border-transparent hover:bg-white hover:text-cyan-600'>
					Log Out
				</button>
			</div>
		</div>
	)
}

export default NavBar
