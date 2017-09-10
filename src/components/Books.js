import React from 'react'
import Book from './Book'

const Books = ({books, state}) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{ state.title }</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {
          books.map(book => (
            <li key={book.id}>
              <Book book={book} state={state.id} />
            </li>
          ))
          }
      </ol>
    </div>
  </div>
  )

export default Books
