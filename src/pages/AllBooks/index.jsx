import styles from './AllBooks.module.scss'
import { Card } from '../../components/Card/Card'
import useBook from '../../hooks/useBook';
import useFetch from '../../hooks/useFetch';

export default function AllBooks() {

  const { getAllBooks } = useBook();
  const books = useFetch(getAllBooks);

  return (
    <div className={styles.container} >
      <h1 className={styles.title}>All Books</h1>
      <div className={styles.booksContainer}>
        {books.loading && <span>Cargando...</span>}
        {!books.loading && books.result.map(book => (
          <Card key={book.id} book={book}></Card>
        ))}
      </div>
    </div>
  )
}
