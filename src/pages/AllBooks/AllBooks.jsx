import React from 'react'
import styles from './AllBooks.module.css'
import { Card } from '../../components/Card/Card'


export const AllBooks = ({libros}) => {
  return (
    <div className={styles.container} >
      <h1 className={styles.title}>All Books</h1>
      <div className={styles.booksContainer}>
      {libros?.map((item) => {
                   return <Card key={item.book.title} book={item.book}/>
                })}
      </div>
    </div>
  )
}
