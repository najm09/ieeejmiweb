import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import fire from '../../config/Fire';


class Login extends Component {
  state = { email: '', password: '' };


  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  }

  login = () => {
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => alert(error.message));
  }

  signUp = () => {    
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error)=>alert(error.message));
  }

  render() {
    const style = {
      marginTop: 50,
    }
    return (
      <Container component='main' maxWidth="xs" style={style}>
        <CssBaseline />
        <div >
          <Typography component="h1" variant="h5">
            IEEE JMI Admin
        </Typography>
          <form  method="POST">
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={this.login}
                  fullWidth
                  variant="contained"
                >Login
            </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={this.signUp}
                  fullWidth
                  variant="contained">
                    Signup
                  </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;
