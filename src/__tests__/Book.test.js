import React from 'react';
import Book from '../components/Book';

describe('<Book />', () => {
    const book = {
        imageLinks: {
            thumbnail: ''
        }
    }
    it('rendering', () => {
        expect(shallow(<Book book={book} />)).toMatchSnapshot();
    });
})
