import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  tabs: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1a237e'
  }
}));

export default function Header({ children }: any) {
  const classes = useStyles();
  return (
    <Paper square elevation={0}>
      <Tabs className={classes.avatar}>
        <Tab label="Home" className={classes.tabs} href='/' />
        <Tab label="Events" className={classes.tabs} href='/Events' />
        <Tab label="Team" className={classes.tabs} href='/Team'/>
        <Tab label='Login' className={classes.tabs} href="/Login"/>
      </Tabs>
      {children}
    </Paper>
  );
}