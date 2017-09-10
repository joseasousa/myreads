import React from 'react'
import Seach from '../components/search'

describe('<Search />', () => {
  it('renders', () => {
    expect(shallow(<Seach />)).toMatchSnapshot()
  })
})
