import './AllBooks.module.scss'
import { Card } from '../../components/Card/Card'


export default function AllBooks({ libros }) {
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
