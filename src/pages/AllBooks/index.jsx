import './AllBooks.module.scss'
import { Card } from '../../components/Card/Card'
import useBook from '../../hooks/useBook';
import useFecht from '../../hooks/useFecht';

export default function AllBooks() {

  const { getAllBooks } = useBook();
  const books = useFecht(getAllBooks);

  return (
    <div className='container' >
      <h1 className='title'>All Books</h1>
      <div className="booksContainer">
        {books.loading && <span>Cargando...</span>}
        {!books.loading && books.result.map(book => (
          <Card key={book.id} book={book}></Card>
        ))}
      </div>
    </div>
  )
}
