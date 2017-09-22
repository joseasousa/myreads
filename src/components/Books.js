import React from 'react'
import Book from './Book'

class Books extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  render () {
    const { title, id } = this.props.state
    const { books, change } = this.props
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {
              books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    state={id}
                    change={change}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Books
