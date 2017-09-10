import React from 'react'
import Books from '../components/Books'

describe('<Books />', () => {
  const books = [{
    id: 1
  }]
  const bookStates = [{
    id: 'currentlyReading',
    title: 'Currently Reading'
  }]
  it('rendering', () => {
    expect(shallow(<Books books={books} state={bookStates} />)).toMatchSnapshot()
  })
})
