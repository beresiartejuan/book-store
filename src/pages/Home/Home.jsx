import React from 'react'
import { Header } from '../../components/Header/Header'

import { Offers } from '../../components/Offers/Offers'
import { Footer } from '../../components/Footer/Footer'
import { BestSellers } from '../../components/BestSellers/BestSellers'
import { MainCategories } from '../../components/MainCategories/MainCategories'
import { FirstView } from '../../components/firstview/FirstView'
import libros from '../../DMockeado/books.js'

export const Home = () => {
  return (
    <>
      <Header />
      <FirstView />
      <Offers books={libros}/>
      <BestSellers books={libros} />
      <MainCategories />
      <Footer /> 
    </>
  )
}
