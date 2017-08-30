import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import MainPage from './components'
import SearchPage from './components/search'
import TestPage from './components/teste.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route path='/search' render={() => <SearchPage />} />
        <Route path='/teste' render={() => <TestPage />} />
        <Route render={() => <MainPage />} />
      </Switch>
    )
  }
}

export default App
