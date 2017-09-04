// Make Enzyme functions available in all test files without 
import { shallow, render, mount } from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;


// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };

global.localStorage = localStorageMock;