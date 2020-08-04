import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Login from './components/views/Admin/Login'
import Signup from './components/views/Admin/Signup'

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={()=><App/>}/>
      <Route exact path='/Login' render={()=><Login/>}/>
<Route exact path='/Signup' render={()=><Signup/>}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)


