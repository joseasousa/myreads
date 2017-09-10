import React from 'react';
import Book from '../components/Book';

describe('<Book />', () => {
    const book = {
        imageLinks: {
            thumbnail: ''
        }
    }
    const state = {
        id: 'currentlyReading',
        title: 'Currently Reading'
      }
      
    it('rendering', () => {
        expect(shallow(<Book book={book} state={state} />)).toMatchSnapshot();
    });
})
