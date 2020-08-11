import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import fire from '../../config/Fire'
import { Button } from '@material-ui/core';

class Logout extends Component {

  state = { user: {}};

  logout = () => {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <List>
          <ListItem>
            <ListItemIcon onClick={this.logout}>
              <Button style={{color:'white'}}><AccountCircleIcon />&nbsp;Logout</Button>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Logout