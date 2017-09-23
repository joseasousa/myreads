import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import { Link } from 'react-router-dom'
import Books from './Books'

class BooksApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      bookStates: [{
        id: 'currentlyReading',
        title: 'Currently Reading'
      }, {
        id: 'wantToRead',
        title: 'Want to Read'
      }, {
        id: 'read',
        title: 'Read'
      }]
    }

    this._handleChange = book => this.handleChange(book)
  }

  handleChange (book) {
    let {books} = this.state
    const index = books.findIndex(b => b.id === book.id)
    books[index] = book
    this.setState({books})
  }

  componentDidMount () {
    BooksAPI.getAll()
    .then(books => {
      this.setState({ books })
    })
    .catch(error => console.error(error))
  }

  render () {
    const { books, bookStates } = this.state
    return (
      <div className='list-books'>

        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>
          {bookStates.map(BookState =>
            <Books
              change={this._handleChange}
              key={BookState.id}
              books={
                books.filter(book =>
                  book.shelf === BookState.id)
              }
              state={BookState} />
          )}
        </div>

        <div className='open-search'>
          <Link to='/search'> Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
