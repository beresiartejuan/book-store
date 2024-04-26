import { useParams } from 'react-router-dom'
import './SearchList.module.scss';

export default function SearchList() {
  const { book } = useParams()
  return (
    <div className='container'>
      {book}
    </div>
  )
}
