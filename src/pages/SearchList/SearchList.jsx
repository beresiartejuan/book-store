import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './SearchList.module.css'

export const SearchList = () => {
  const { book } = useParams()
  return (
    <div className={styles.container}>
      {book}
    </div>
  )
}
