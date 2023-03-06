import React, { useState } from 'react'
import { RiLogoutCircleLine, RiHandHeartLine, RiListUnordered, RiBluetoothLine, RiChat1Line } from 'react-icons/ri'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
const NavBar = (props) => {
	/* 	const { hamburgerOpen, setHamburgerOpen } = props
	console.log(hamburgerOpen) */
	const [hamburgerOpen, setHamburgerOpen] = useState(false)
	const [selectedLink, setSelectedLink] = useState(0)
	const renderclassName = hamburgerOpen
		? `shadow-md bg-cyan-900 w-60 h-full flex-col md:flex shadow-md ${
				hamburgerOpen ? 'md:hidden fixed h-full z-50 top-0' : 'hidden top-0'
		  }`
		: `shadow-md bg-cyan-900 w-full h-full flex-col hidden md:flex shadow-md top-0`

	return (
		<>
			<header className='flex items-center justify-between p-3 shadow-md md:bg-white bg-cyan-900 md:hidden'>
				<button className='flex md:hidden' onClick={() => setHamburgerOpen(true)}>
					<GiHamburgerMenu className='text-white' />
				</button>
			</header>
			<div className={renderclassName} id='sidenavSecExample'>
				<div className='px-6 pt-4 pb-2 mb-6'>
					<a href='#!'>
						<div className='flex gap-2 text-slate-200 grow'>
							<h2 className='m-0 text-xl '>Med Metrics</h2>
							<TbBrandGoogleAnalytics size={'1.38em'} />
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
							onClick={() => setSelectedLink(0)}
							className={`flex items-center gap-4 px-6 py-2 mb-6 overflow-hidden text-sm transition duration-200 ease-in-out rounded-lg text-ellipsis whitespace-nowrap  font-Karla-Bold ${
								selectedLink === 0 ? 'text-white ' : 'text-slate-300 hover:text-slate-50'
							}`}
						>
							<RiListUnordered size={20} />
							Management
						</a>
					</Link>
					<Link href='/prescriptions/' className='relative'>
						<a
							onClick={() => setSelectedLink(1)}
							className={`flex items-center gap-4 px-6 py-2 mb-6 overflow-hidden text-sm transition duration-200 ease-in-out rounded-lg  text-ellipsis whitespace-nowrap font-Karla-Bold ${
								selectedLink === 1 ? 'text-white ' : 'text-slate-300 hover:text-slate-50'
							}`}
						>
							<RiBluetoothLine size={20} />
							Prescriptions
						</a>
					</Link>
					<Link href='/chats' className='relative'>
						<a
							onClick={() => setSelectedLink(2)}
							className={`flex items-center gap-4 px-6 py-2 mb-6 overflow-hidden text-sm transition duration-200 ease-in-out rounded-lg  text-ellipsis whitespace-nowrap  font-Karla-Bold ${
								selectedLink === 2 ? 'text-white ' : 'text-slate-300 hover:text-slate-50'
							}`}
						>
							<RiChat1Line size={20} />
							Chats
						</a>
					</Link>
				</ul>
				<div className='px-4 text-center '>
					<button
						className={`w-full py-2 text-sm text-white border-2 rounded-lg font-Karla-Bold ${
							selectedLink === 3
								? 'text-white border-white'
								: 'text-slate-300 hover:text-slate-50 border-slate-300 hover:border-slate-50'
						}`}
					>
						Log Out
					</button>
				</div>
			</div>
		</>
	)
}

export default NavBar
