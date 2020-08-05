import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Login from './components/views/Admin/Login'
import Signup from './components/views/Admin/Signup'
import Header from './components/views/User/Header'
ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={()=><Header ><App/></Header>}/>
      <Route exact path='/Login' render={()=><Login/>}/>
<Route exact path='/Signup' render={()=><Header><Signup/></Header>}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)


