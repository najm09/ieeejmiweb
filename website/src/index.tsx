import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Login from './components/views/Admin/Login'
import Signup from './components/views/Admin/Signup'
import Dashboard from './components/views/Admin/dashboard'
import SendCerti from './components/views/Admin/tools/SendCerti' 
import SendEmail from './components/views/Admin/tools/SendEmail'
import SimpleTab from './components/views/Admin/tools/SimpleTab'

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <App />} />
      <Route exact path='/Login' render={() => <Login />} />
      <Route exact path='/Signup' render={() => <Signup />} />
      <Route exact path='/Dashboard' render={()=><Dashboard/>}/>
      <Route exact path='/SendCerti' render={()=><SimpleTab><SendCerti/></SimpleTab>}/>
      <Route exact path='/SendEmail' render={()=><SimpleTab><SendEmail/></SimpleTab>}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)


