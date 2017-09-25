import React from 'react'
import * as BooksAPI from '../../api/BooksAPI'
import { Link } from 'react-router-dom'
import Book from '../Book'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      redirect: false
    }
    this._getBooks = e => this.getBooks(e.target.value)
    this._handleChange = e => this.handleChange(e)
  }

  getBooks (book) {
    BooksAPI.search(book, 1)
      .then(books => this.setState({books}))
      .catch(error => this.setState({books: [], message: error}))
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
                  <Book book={book} change={this._handleChange} state='none' />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
