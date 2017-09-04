import React from 'react';
import { Select } from '../components/common'

describe('<Select />', () => {
    
    it('should render', () => {
        expect(shallow(<Select />)).toMatchSnapshot();
    });
    
  
})

