import React from 'react';
import Books from '../components/Books';

describe('<Books />', () => {
    const books = [{
        id:1
    }]
    const title = 'test'
    it('rendering', () => {
        expect(shallow(<Books books={books} title={title} />)).toMatchSnapshot();
    });
})
