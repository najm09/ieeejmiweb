import React,{Component} from 'react'
import fire from './config/Fire'
import Login from './views/Admin/Login'
import Dashboard from './views/Admin/Dashboard'

class App extends Component{
  state={user:{}};

  componentDidMount(){
    this.authListener();
  }

  // checking for authenticated user

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
        // session start
      }
      else{
        this.setState({user: null})
      }
    }
    )}
  
  render() {
  
    return (
      <div>
        {
          this.state.user ? <Dashboard /> : <Login /> 
        }
      </div>
    )
  }
}

export default App
