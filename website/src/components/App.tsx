import React from 'react'
import Login from './views/Admin/Login'
import Dashboard from './views/Admin/dashboard'


function App() {
  return (
    <div>
      {
        false? <Login/>: <Dashboard/>}
    </div>
  )
}

export default App
