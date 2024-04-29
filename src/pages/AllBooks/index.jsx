import styles from './AllBooks.module.scss';
import { Card } from '../../components/Card/Card';

import books from "../../DMockeado/books";

export default function AllBooks() {

  return (
    <div className={styles.container} >
      <h1 className={styles.title}>All Books</h1>
      <div className={styles.booksContainer}>
        {books?.map((item) => {
          return <Card key={item.book.id + "AB"} book={item.book} />
        })}
      </div>
    </div>
  )
}
