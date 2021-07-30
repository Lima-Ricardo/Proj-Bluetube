import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';
import { LinkedIn } from '@material-ui/icons';

import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import CameraFrontIcon from '@material-ui/icons/CameraFront';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

const videos = [
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  {
    id: 1,
    title:
      'PRA QUE SERVE AS PROMISSES? || ONDE VIVEM E O QUE COME.',
    infos: 'BlueEdtech, Prof Gustavo Molina',
    date: '01/05/2021',
    imagemUrl: 'react-materialui\src\images\avatar.png',
    linkUrl: 'react-materialui\src\images\avatar.png',
  },
  
];

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuIcon}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark'
                ? '/images/kapuha.png'
                : '/images/kapuha.png'
            }
            alt='logo'
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <SettingsApplicationsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant='outlined'
            color='tertiary'
          >
            online
          </Button>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Aulas'}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
              <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                   color="tertiary"
                   classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Histórico'}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={7}>
                <Typography variant='body2'>

                </Typography>
                <Box mt={2}>
                  <Button
                    variant='outlined'
                    color='tertiary'
                    startIcon={<LinkedIn />}
                  >
                    LinkedIn
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    Módulos 
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Lógica de Programação'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <StorageIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Banco de Dados'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <CameraFrontIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Front-End'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <FlipToBackIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Back-End'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ImportantDevicesIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Severino (Full Stack)'}
                  />
                </ListItem>
              </List>
              <Divider />
            </div>
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Aulas
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;