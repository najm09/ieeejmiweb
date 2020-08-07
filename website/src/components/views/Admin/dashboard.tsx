import React from 'react';
import logo from "./logo.png"
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',

    },
    title: {
      fontWeight: "bold",
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: "#424242"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },

    Logo: {
      width: 100,
      height: 100,
    },
    icon: {
      opacity: 1,
      backgroundColor: "#424242",
      color: "white",
    },

    submit: {
      backgroundColor: "#424242",
      color: "white",
      fontWeight: "bold",
    },
  }),
);

interface Props {

  window?: () => Window;
}

export default function Dashboard(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const TOOLS = [
    {
      id: 1,
      title: 'Certdealer',
      link: '/SendCerti',
    },

    {
      id: 2,
      title: 'Send Email',
      link: '/SendEmail',
    },

    {
      id: 3,
      title: 'Calender',
      link: '/Calender',
    },

    {
      id: 4,
      title: 'Draft',
      link: '/Draft',
    },
  ];

  const drawer = (
    <div>
      <List>
        <ListItem>
          <ListItemIcon className={classes.icon}><AccountCircleIcon /></ListItemIcon>
          <Button variant="contained" className={classes.submit}>Log out</Button>
        </ListItem>
      </List>
      <Divider />
      <List>
        {
          TOOLS.map(ITEMS => (
            <div key={ITEMS.id}>
              <ListItem>
                <ListItemIcon className={classes.icon}><InboxIcon /></ListItemIcon>
                <Button
                  className={classes.submit}
                  href={ITEMS.link}
                  variant="contained" >
                  {ITEMS.title}
                </Button>
              </ListItem>
            </div>
          ))
        }
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Admin Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="work folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4" color="textPrimary">
          IEEE JMI
        </Typography>
        <br />
        <img
          className={classes.Logo}
          src={logo}
          alt="logo">
        </img>
        <br />
        <Typography variant="h4" >Student Branch</Typography>
        <br />
      </main>
    </div>
  );
}