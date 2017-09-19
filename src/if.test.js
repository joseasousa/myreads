import React from 'react'
import { shallow } from 'enzyme'
import If from './If'

describe('<If />', () => {
  it('renders whitout error', () => {
    const test = (
      <If test>
        <span>teste</span>
      </If>
      )
    expect(shallow(test)).toMatchSnapshot()
  })
  it('renders whith error', () => {
    const test = (
      <If test={false}>
        <span>teste</span>
      </If>
    )
    expect(shallow(test)).toMatchSnapshot()
  })
})
