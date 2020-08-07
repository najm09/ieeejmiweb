import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Login from './components/views/Admin/Login'
import Signup from './components/views/Admin/Signup'
import Header from './components/views/User/Header'
import Dashboard from './components/views/Admin/dashboard'
ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <Header ><App /></Header>} />
      <Route exact path='/Login' render={() => <Login />} />
      <Route exact path='/Signup' render={() => <Header><Signup /></Header>} />
      <Route exact path='/Dashboard' render={()=><Dashboard/>}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)


