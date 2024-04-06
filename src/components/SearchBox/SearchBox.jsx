import React from 'react'
import styles from './SearchBox.module.css'

export const SearchBox = () => {
  return (
      <input className={styles.search} type="text" placeholder="Buscar..." /> 
  )
}
