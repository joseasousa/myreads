import React from 'react'
import * as BooksAPI from '../../api/BooksAPI'
import { Link } from 'react-router-dom'
import Book from '../Book'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
    this._getBooks = e => this.getBooks(e.target.value)
  }

  getBooks (book) {
    //console.log(e.target.value);
    BooksAPI.search(book, 1)
      .then(books => this.setState({books}))
  }

  render () {
    return (
      <div className='app'>
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link to='/' className='close-search' >Close</Link>
            <div className='search-books-input-wrapper'>
              <input
                type='text'
                placeholder='Search by title or author'
                onKeyUp={this._getBooks} />

            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid' >
              {this.state.books.map(book => (
                <li key={book.id} >
                  <Book book={book} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
