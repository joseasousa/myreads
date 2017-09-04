import React from 'react';
import { Select, Image } from './common'
import './Books.css';

const Book = ({ book }) => {
  return (
    <div className='book'>
      <Image title={book.title} url={book.imageLinks.thumbnail} />
      <Select />    
      
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
