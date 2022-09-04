import type { NextPage } from 'next'
import store from '../store'
import { Provider } from 'react-redux'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <Provider store={store}>  
      <Header/>
    </Provider>
     
  )
}

export default Home
