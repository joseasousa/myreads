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
  }

  getBooks (bookQuery) {
    BooksAPI.search(bookQuery, 1)
      .then(books =>
        this.setState({books})
      )
      .catch(error => this.setState({books: [], message: error}))
  }

  render () {
    const booksState = this.props.location.state.books
    const PrevBooks = this.state.books

    const books = booksState.filter(item =>
      PrevBooks.filter(book =>
        item.id === book.id).length > 0
    ).concat(PrevBooks)

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
              {books.map(book => (
                <li key={book.id} >
                  <Book book={book} change={this.props.change} state={book.shelf} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
