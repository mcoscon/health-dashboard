import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { Provider, useSelector } from "react-redux";
import {store} from '../store/store.jsx'
import React, {useEffect} from 'react'
import NotificationAlert from '../components/ui-components/NotificationAlert';
function MyApp({ Component, pageProps }) {
 
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
  <Provider store={store} className='bg-black'>
    <div className='flex flex-col min-h-screen md:flex-row'>
      <div>
        <NavBar/>
      </div>
      <Component {...pageProps} />
    </div>
   
  </Provider>
  )
}

export default MyApp
