import React from 'react'
import { Select, Image } from './common'
import * as BookApi from '../api/BooksAPI'

class Book extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const bookState = event.target.value
    const currentBook = this.props.book
    BookApi.update(currentBook, bookState)
    .then((books) => {
      console.log('update', books)
      this.setState({ redirect: true })
    })
    .catch(error => console.log(error))
  }
  render () {
    const { handleChange } = this.props
    return (
      <div className='book' >
        <div className='book-top'>
          <Image title={this.props.book.title} url={this.props.book.imageLinks.thumbnail} />
          <Select
            value={this.props.state}
            change={handleChange}
          />
        </div>

        <div className='book-title'>
          {this.props.book.title}
        </div>

        <div className='book-authors'>
          {this.props.book.authors}
        </div>
      </div>
    )
  }
}
export default Book
