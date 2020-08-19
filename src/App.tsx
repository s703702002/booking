import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import GoTop from './components/GoTop';
import THSR from './components/THSR';
import TRA from './components/TRA';
import TabPanel from './components/TabPanel';

import useToggle from './hooks/useToggle';

const { useState, useMemo } = React;

const useStyles = makeStyles({
  list: {
    width: 150
  }
});

interface Props {
  toggleDrawer: () => void;
  onItemClick: (index: number) => void;
}

const Lists = ({ toggleDrawer, onItemClick }: Props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button onClick={() => onItemClick(0)}>
          <ListItemText primary="THSR" />
        </ListItem>
        <ListItem button onClick={() => onItemClick(1)}>
          <ListItemText primary="TRA" />
        </ListItem>
      </List>
    </div>
  );
};

function App() {
  const [tab, setTab] = useState(0);
  const [darkModeEnabled, toggleDarkMode] = useToggle();
  const [openDrawer, toggleDrawer] = useToggle();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkModeEnabled ? 'dark' : 'light'
        },
        overrides: {
          MuiSvgIcon: {
            root: {
              verticalAlign: 'middle'
            }
          }
        }
      }),
    [darkModeEnabled]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" id="back-to-top-anchor">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            aria-label="switchDarkMode"
            onClick={toggleDarkMode}
            color="inherit"
          >
            {darkModeEnabled ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Lists
          toggleDrawer={toggleDrawer}
          onItemClick={(item) => setTab(item)}
        />
      </SwipeableDrawer>
      <TabPanel value={tab} index={0}>
        <THSR />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <TRA />
      </TabPanel>
      <GoTop />
    </ThemeProvider>
  );
}

export default App;
