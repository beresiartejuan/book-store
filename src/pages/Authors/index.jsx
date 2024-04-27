import './Authors.module.scss'

import books from "./../../DMockeado/books";

export default function Authors() {
  const authors = books.map((item) => item.book.author);
  console.log(authors);
  return (
    <div className='container'>
      <h1>Autores</h1>
      <ul className='list'>
        {authors.map((author, index) => (
          <li className={'Author'} key={{ index }}>{author.name}</li>
        ))}
      </ul>

    </div>

  );
};

