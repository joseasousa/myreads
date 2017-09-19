import React from 'react'
import * as BooksAPI from '../../api/BooksAPI'
import { Link, Redirect } from 'react-router-dom'
import Book from '../Book'
import If from '../../If'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      redirect: false
    }
    this._getBooks = e => this.getBooks(e.target.value)
  }

  handleChange (event) {
    const bookState = event.target.value
    const currentBook = this.props.book
    BooksAPI.update(currentBook, bookState)
    .then((books) => {
      console.log('update', books)
      this.setState({ redirect: true })
    })
    .catch(error => console.log(error))
  }

  getBooks (book) {
    //console.log(e.target.value);
    BooksAPI.search(book, 1)
      .then(books => this.setState({books}))
  }

  render () {
    const { redirect } = this.state    
    return ( 
      { redirect:  (
        <Redirect to='/' />
      ) &&
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
      }
    )
  }
}
