import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import NotificationAlert from '../components/ui-components/NotificationAlert'
import styles from '../styles/Home.module.css'
import Patient from './patient'

export default function Home() {
	return (
		<>
			<Head>
				<title>Med Metrics</title>
			</Head>
			<Patient />
		</>
	)
}
