import React from 'react';
import App from '../App'
import { Route } from 'react-router';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
})
