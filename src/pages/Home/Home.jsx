import React from 'react'
import { Header } from '../../components/Header/Header'
import styles from './Home.module.css'
import { Offers } from '../../components/Offers/Offers'
import { Footer } from '../../components/Footer/Footer'
import { BestSellers } from '../../components/BestSellers/BestSellers'
import { MainCategories } from '../../components/MainCategories/MainCategories'
import { FirstView } from '../../components/firstview/FirstView'

export const Home = () => {
  return (
    <>
      <Header />
      <FirstView />
      <Offers />
      <BestSellers />
      <MainCategories />
      <Footer /> 
    </>
  )
}
