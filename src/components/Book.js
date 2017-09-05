import React from 'react';
import { Select, Image } from './common'


const Book = ({ book, state }) => {
  return (
    <div className='book' >
      <div className='book-top'>
        <Image title={book.title} url={book.imageLinks.thumbnail} />        
        <Select value={state}/>        
      </div>

      <div className='book-title'>
        {book.title}
      </div>

      <div className='book-authors'>
        {book.authors}
      </div>
    </div>
  );
}

export default Book;
