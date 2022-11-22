import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { Provider } from "react-redux";
import {store} from '../store/store.jsx'
import React, {useEffect} from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
  <Provider store={store}>
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
