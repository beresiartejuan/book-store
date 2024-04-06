import React from 'react'
import { Header } from '../../components/Header/Header'
import styles from './Home.module.css'
import { Offers } from '../../components/Offers/Offers'
import { Footer } from '../../components/Footer/Footer'
import { BestSellers } from '../../components/BestSellers/BestSellers'

export const Home = () => {
  return (
    <>
      <Header />
     {/*  <img className={styles.image} src='../../assets/1jpg' alt="" /> */}
      <div className= {styles.bg}>
        <article className={styles.intro} >
          <span className={styles.title} >Bienvenido a   Paginas y aromas</span>
          <p>El lugar donde el aroma del café se entrelaza con las historias impresas.</p>
        </article>
      </div>
      <Offers />
      <BestSellers />

      <Footer /> 
      
    </>
  )
}
