import React from 'react'
import styles from './Authors.module.css'

export const Authors = ({ books }) => {
  const authors = books.map((item) => item.book.author);
  console.log(authors);
  return (
    <div className={styles.container}>
      <h1>Autores</h1>
      <ul className={styles.list}>
        {authors.map((author, index) => (
          <li className={styles.Authors} key={{index}}>{author.name}</li>
        ))}
      </ul>
      
    </div>
  
  );
};

