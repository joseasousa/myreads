import React from 'react'
import { Image } from '../components/common'

describe('<image />', () => {
  it('should render', () => {
    expect(shallow(<Image alt='test' src='' />)).toMatchSnapshot()
  })
})
