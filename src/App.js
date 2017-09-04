import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/search';
import TestPage from './components/teste.js';
import './App.css'

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route path='/search' render={() => <SearchPage />} />
        <Route path='/teste' render={() => <TestPage />} />
        <Route render={() => <MainPage />} />
      </Switch>
    );
  }
}

export default App;
