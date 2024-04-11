import React from 'react'
import styles from './FirstView.module.css'

export const FirstView = () => {
  return (
    <div className= {styles.bg}>
        <article className={styles.intro} >
          <span className={styles.title} >Bienvenido a   Paginas y aromas</span>
          <p>El lugar donde el aroma del café se entrelaza con las historias impresas.</p>
        </article>
      </div>
  )
}
