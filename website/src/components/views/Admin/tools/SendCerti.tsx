import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#424242",
    color: "white"
  },
}));

export default function Login() {
  const classes = useStyles();

  return (

    <Container component='main'  maxWidth="xs">

      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Send Certificate        
        </Typography>
        <form className={classes.form} noValidate >
          <Typography variant="h5">Select Template Certificate</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            type='file'
            fullWidth
            id="certi-template"
            name="certi-template"
          /><hr/><br/>
           <Typography variant="h5">Select CSV File</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            type='file'
            required
            fullWidth
            name="csv-file"
            id="csv-file"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
}
