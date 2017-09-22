import React from 'react'
import Book from '../components/Book'

describe('<Book />', () => {
  const book = {
    title: 'teste',
    imageLinks: {
      thumbnail: ''
    },
    authors: [
      'teste'
    ]
  }
  it('rendering', () => {
    expect(shallow(<Book book={book} />)).toMatchSnapshot()
  })
})
