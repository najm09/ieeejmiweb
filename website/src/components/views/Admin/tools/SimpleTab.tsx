import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#424242',
  },
  tab: {
    opacity: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
}));

export default function SimpleTab({children}:any) {
  const classes = useStyles();
  return (
    <div>
        <Tabs className={classes.root} >
          <Tab label="Home" href='/Dashboard' className={classes.tab} />
        </Tabs>
      {children}
    </div>
  );
}

