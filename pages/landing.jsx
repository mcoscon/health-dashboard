import React from 'react'
import landing_main from '../public/images/landing_main.png'
import Image from 'next/image'
import { TbActivityHeartbeat, TbBrandGoogleAnalytics, TbMessages, TbPill } from 'react-icons/tb'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { RiFacebookCircleFill, RiRssFill, RiTwitterFill, RiWechatLine } from 'react-icons/ri'
import vitals from '../public/images/vitals.png'
import chats from '../public/images/chats.png'
import prescriptions from '../public/images/prescriptions.png'
const HeroSection = () => {
	return (
		<div className='flex flex-col items-center w-full bg-orange-50 items h-max'>
			<nav className='relative flex flex-wrap items-center justify-between w-full py-4 bg-orange-50 text-neutral-500 '>
				<div className='flex flex-wrap items-center justify-between w-full px-6'>
					<div className='flex justify-between w-full'>
						<a
							className='flex items-center mt-2 mr-1 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mt-0'
							href='#'
						>
							<div className='flex items-center gap-2 text-cyan-900'>
								<h3 className='text-xl'>Med Metrics</h3>
								<TbBrandGoogleAnalytics size={'1rem'} />
							</div>
						</a>

						<div className='items-center justify-center hidden gap-4 md:flex md:visible'>
							<Link href='#services'>
								<a className='font-semibold hover:text-neutral-700 focus:text-neutral-700'>Services</a>
							</Link>
							<Link href='#contact'>
								<a className='font-semibold hover:text-neutral-700 focus:text-neutral-700'>Contact</a>
							</Link>
						</div>

						<Link href='/patientlist'>
							<button
								type='button'
								className='flex flex-row items-center justify-center px-4 py-2 text-xs transition duration-150 ease-in-out bg-transparent border-2 rounded-lg h-min text-cyan-700 w-max shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg border-cyan-700 hover:border-transparent'
							>
								Try Demo
								<FiArrowUpRight size={'1rem'} />
							</button>
						</Link>
					</div>
				</div>
			</nav>
			<div className='flex flex-col items-center justify-center w-full max-w-5xl gap-8 p-4 md:flex-row'>
				<div className='flex flex-col gap-6 basis-1/3'>
					<h1 className='text-4xl text-cyan-900'>
						Medical Dashboards <br />
						to help grow your <br />
						business
					</h1>
					<p>
						Real-time data analysis and insights that can help healthcare professionals make informed
						decisions about patient care and optimize workflows.
					</p>

					<button
						type='button'
						className='px-4 py-2 text-xs text-white transition duration-150 ease-in-out rounded-lg w-max bg-cyan-700 shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg'
						/* 	data-bs-toggle='modal'
								data-bs-target='#exampleModalCenteredScrollable' */
					>
						Get a quote
					</button>
					<h4>See whos using our dashboards</h4>
					<div className='flex items-center justify-between p-2 bg-white rounded-lg shadow-lg'>
						<div className='flex items-center gap-4'>
							<img
								src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
								className='rounded-full shadow-lg w-14 '
								alt='Avatar'
							/>
							<div>
								<h4>Dr Erik Schlab</h4>
								<h4 className='text-gray-500'>Wicherston Clinic</h4>
							</div>
						</div>
						<div className='s'>
							<h4>510</h4>
							<h4 className='text-gray-500'>Patients</h4>
						</div>
					</div>
				</div>
				<div className='justify-center hidden md:flex basis-2/3 md:visible'>
					<div className='w-11/12'>
						<Image src={landing_main} fill alt='landing_main' />
					</div>
				</div>
			</div>
		</div>
	)
}

const Services = () => {
	return (
		<div className='flex items-center justify-center w-full bg-stone-100' id='services'>
			<div className='flex flex-col w-full max-w-5xl gap-10 p-4 my-16'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2 '>
					<div>
						<h4 className='mb-4 text-cyan-700'>Services</h4>
						<h1 className='text-4xl text-cyan-900 '>
							Our medicare platform <br />
							for your business
						</h1>
					</div>
					<div className='self-center md:justify-self-end'>
						<Link href='/patientlist'>
							<button
								type='button'
								className='flex flex-row items-center justify-center px-4 py-2 text-xs transition duration-150 ease-in-out bg-transparent border-2 rounded-lg h-min text-cyan-700 w-max shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg border-cyan-700 hover:border-transparent'
							>
								Try Demo
								<FiArrowUpRight size={'1rem'} />
							</button>
						</Link>
					</div>
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex items-center order-last gap-4 md:order-first'>
						<div className='p-2 rounded-full bg-cyan-700 bg-opacity-10'>
							<TbActivityHeartbeat size={'2rem'} />
						</div>
						<div>
							<h3 className='text-lg'>Analyze patient vitals efficiently</h3>
							<h5>
								With our product, healthcare professionals can streamline their workflows and provide
								better, more personalized care to their patients, all while reducing costs and improving
								outcomes.
							</h5>
						</div>
					</div>
					<Image src={vitals} fill alt='vitals' className='rounded-lg' />
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex items-center order-last gap-4 md:order-first'>
						<div className='p-2 rounded-full bg-cyan-700 bg-opacity-10'>
							<TbMessages size={'2rem'} />
						</div>
						<div>
							<h3 className='text-lg'>Seamless collaboration and communication</h3>
							<h5>
								Doctors and patients can securely exchange information, review test results, and discuss
								treatment options in real-time, from anywhere in the world with our intuitive user
								interface.
							</h5>
						</div>
					</div>
					<Image src={chats} fill alt='chats' className='rounded-lg' />
				</div>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex items-center order-last gap-4 md:order-first'>
						<div className='p-2 rounded-full bg-cyan-700 bg-opacity-10'>
							<TbPill size={'2rem'} />
						</div>
						<div>
							<h3 className='text-lg'>Manage patient prescriptions</h3>
							<h5>
								Easily manage and track patient prescriptions, allowing you to stay up-to-date on
								prescription fulfillment and ensure patients receive the correct medication at the right
								time. You can also track patient medication history and make informed decisions about
								future treatment plans.
							</h5>
						</div>
					</div>
					<Image src={prescriptions} fill alt='prescriptions' className='rounded-lg' />
				</div>
			</div>
		</div>
	)
}

const Footer = () => {
	return (
		<div className='flex flex-col items-center w-full bg-orange-50 items h-max' id='contact'>
			<div className='flex flex-col w-full max-w-5xl p-4 my-16'>
				<h4 className='mb-4 text-cyan-700'>Contact us</h4>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					<div className='flex flex-col gap-2'>
						<h1 className='text-2xl text-cyan-900'>Talk with us</h1>
						<div>
							<h4 className='text-sm text-gray-500'>telephone</h4>
							<h4>84037219</h4>
						</div>
						<div>
							<h4 className='text-sm text-gray-500'>general</h4>
							<h4>marcosjconcon@gmail.com</h4>
						</div>
						<div>
							<h4 className='text-sm text-gray-500'>support</h4>
							<h4>marcosjconcon@gmail.com</h4>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='text-2xl text-cyan-900'>Say hello</h1>
						<div>
							<h4 className='text-sm text-gray-500'>name</h4>
							<input
								className='w-full p-1 text-sm text-gray-500 bg-white border rounded-md border-slate-300 focus:outline-slate-400 font-Karla-Heavy'
								type='text'
							/>
						</div>
						<div>
							<h4 className='text-sm text-gray-500'>email</h4>
							<input
								className='w-full p-1 text-sm text-gray-500 bg-white border rounded-md border-slate-300 focus:outline-slate-400 font-Karla-Heavy'
								type='text'
							/>
						</div>
						<div>
							<h4 className='text-sm text-gray-500'>telephone</h4>
							<input
								className='w-full p-1 text-sm text-gray-500 bg-white border rounded-md border-slate-300 focus:outline-slate-400 font-Karla-Heavy'
								type='text'
							/>
						</div>
						<div>
							<h4 className='text-sm text-gray-500'>comment</h4>
							<input
								className='w-full p-1 text-sm text-gray-500 bg-white border rounded-md border-slate-300 focus:outline-slate-400 font-Karla-Heavy'
								type='text'
							/>
						</div>
						<button
							type='button'
							className='flex flex-row items-center justify-center px-4 py-2 mt-4 text-xs transition duration-150 ease-in-out bg-transparent border-2 rounded-lg h-min text-cyan-700 w-max shadow-btnShadow font-Karla-Heavy hover:bg-cyan-600 hover:text-white active:shadow-lg border-cyan-700 hover:border-transparent'
						>
							Submit
							<FiArrowUpRight size={'1rem'} />
						</button>
					</div>
					<div className='flex flex-col gap-4'>
						<h1 className='text-2xl text-cyan-900'>Keep connected</h1>
						<div className='flex items-center gap-2'>
							<RiFacebookCircleFill size='2rem' />
							<h4>Facebook</h4>
						</div>
						<div className='flex items-center gap-2'>
							<RiTwitterFill size='2rem' />
							<h4>Twitter</h4>
						</div>
						<div className='flex items-center gap-2'>
							<RiRssFill size='2rem' />
							<h4>RSS</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
const Landing = () => {
	return (
		<div className='flex flex-col w-full'>
			<HeroSection />
			<Services />
			<Footer />
		</div>
	)
}

export default Landing
