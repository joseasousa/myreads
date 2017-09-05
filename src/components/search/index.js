import React from 'react';
import * as BooksAPI from '../../api/BooksAPI';
import { Link } from 'react-router-dom';
import { Image } from '../common';

export default class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      books: []
    };
    this._getBooks = e =>  this.getBooks(e.target.value)
  }

  getBooks (book) {
    //console.log(e.target.value);
    BooksAPI.search(book, 1)
      .then(books => this.setState({books}));
  }

  render () {
    return (
      <div className='app'>
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link to='/' className='close-search' >Close</Link>
            <div className='search-books-input-wrapper'>
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
                //console.log(this.state.books)
                }
              <input type='text' placeholder='Search by title or author' onKeyUp={this._getBooks} />

            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid' >
              {this.state.books !== undefined &&
               this.state.books.map(book => (
                <li key={ book.id } >
                  <Image url={ book.imageLinks.thumbnail } />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
