<<<<<<< HEAD
import React from 'react'
import './App.css'


function App() {
  return (
        <div></div>
  )
}

export default App
=======
import React from 'react'
import fire from './config/Fire'
import Login from './views/Admin/Login'
import Dashboard from './views/Admin/Dashboard'

export default function App() {

  const [user, setUser] = React.useState(null);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      // session start
    }
    else {
      setUser(null);
    }
  })
  
  return (
    <div>
      {
        user ? <Dashboard /> : <Login />
      }
    </div>
  )

}
>>>>>>> 5f14ce5dabaa259f9b122997cbda8483c3380ed3
