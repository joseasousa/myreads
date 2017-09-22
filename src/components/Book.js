import React from 'react'
import { Select, Image } from './common'
import * as BooksAPI from '../api/BooksAPI'

class Book extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
    this._handleChange = e => this.handleChange(e.target.value)
  }

  handleChange (event) {
    console.log(`test book`, event)
    const { book } = this.props
    book.shelf = event
    const bookState = event
    console.log('teste')
    BooksAPI.update(book, bookState)
    .then((books) => {
      this.props.change(book)
    })
    .catch(error => console.log(error))
  }

  render () {
    const { title, imageLinks, authors } = this.props.book
    const { state } = this.props
    return (
      <div className='book' >
        <div className='book-top'>
          <Image title={title} url={imageLinks.thumbnail} />
          <Select
            value={state}
            change={this._handleChange}
          />
        </div>

        <div className='book-title'>
          {title}
        </div>

        <div className='book-authors'>
          {authors}
        </div>
      </div>
    )
  }
}
export default Book
