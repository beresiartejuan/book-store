import React from 'react'
import { Header } from '../../components/Header/Header'
import styles from './Home.module.css'
import { Offers } from '../../components/Offers/Offers'

export const Home = () => {
  return (
    <>
      <Header />
      <div className= {styles.bg}>
        <article className={styles.intro} >
          <span className={styles.title} >Bienvenido a   Paginas y aromas</span>
          <p>El lugar donde el aroma del café se entrelaza con las historias impresas.</p>
        </article>
      </div>
      <Offers />
      
    </>
  )
}
