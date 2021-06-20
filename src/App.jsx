import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          exact
          path='/'
          render={ () => (
            <Home />
          ) }
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;