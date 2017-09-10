import React from 'react'
import MainPage from '../components/MainPage'

describe('<MainPage />', () => {
    it('rendering', () => {
        expect(shallow(<MainPage />)).toMatchSnapshot()
    })
})
