
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Login from './components/views/Admin/Login'
ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <App />} />
      <Route path='/Login' render={() => <Login />} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)