import './AllBooks.module.scss'
import { Card } from '../../components/Card/Card'
import libros from "./../../DMockeado/books";

export default function AllBooks() {
  return (
    <div className='container' >
      <h1 className='title'>All Books</h1>
      <div className="booksContainer">
        {libros?.map((item) => {
          return <Card key={item.book.id + "AB"} book={item.book} />
        })}
      </div>
    </div>
  )
}
