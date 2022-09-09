import type { NextPage } from 'next'
import store from '../store'
import { Provider } from 'react-redux'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Fotter'
import Card from '../components/Card/Card'
import CardContainer from '../components/CardContainer/CardContainer'

const Home: NextPage = () => {
  return (
    <Provider store={store}>  

      <Header/>
      
     <CardContainer/>
      <Footer/>
    </Provider>
     
  )
}

export default Home
