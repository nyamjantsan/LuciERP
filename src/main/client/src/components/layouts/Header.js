import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
        width: 300,
      },
      fullList: {
        width: 'auto',
      },
  }));

function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };
    const anchor = 'left';
    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon/>
            </ListItemIcon>
            <Typography variant="h6" color="primary" className={classes.title}>
                    LuciERP
                </Typography>
          </ListItem>
          </List>
          <Divider/>
          <List>
            <ListItem button component={Link} to={'/default'} onClick={handleClose}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ContactSupportIcon/>
              </ListItemIcon>
              <ListItemText primary="HelpDesk" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <FingerprintIcon/>
              </ListItemIcon>
              <ListItemText primary="Хүний нөөцийн систем" />
            </ListItem>
          </List>
        </div>
      );
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton  onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    LuciERP
                </Typography>
                <IconButton aria-label="show 4 new mail" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="user-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to={'/profile'} onClick={handleClose}>
                        <ListItemIcon>
                          <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Ажилтаны мэдээлэл</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to={'/settings'} onClick={handleClose} >
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Тохиргоо</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to={'/'} onClick={handleClose}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Гарах</Typography>
                    </MenuItem>
                </Menu>
                </Toolbar>
            </AppBar>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </div>
    );
}

export default Header;