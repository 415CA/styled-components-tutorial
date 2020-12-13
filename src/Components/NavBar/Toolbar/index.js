import {
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Drawer from '../Drawer';
import Logo from '../Logo';
import MenuButton from '../MenuButton';
import Toolbar from './css';

const DesktopToolbar = ({ headers }) => (
  <Toolbar>
    <Logo>
      Rocco
    </Logo>
    <MenuButton headers={headers} />
  </Toolbar>
);

const MobileToolbar = ({
  headers, drawerOpen, toggleDrawer, handleDrawerOpen, handleDrawerClose,
}) => (
  <Toolbar>
    <IconButton
      {...{
        edge: 'start',
        color: 'inherit',
        'aria-label': 'menu',
        'aria-haspopup': 'true',
        onClick: handleDrawerOpen,
      }}
    >
      <MenuIcon />
    </IconButton>

    <Drawer
      drawerOpen={drawerOpen}
      toggleDrawer={toggleDrawer}
      headers={headers}
      handleDrawerClose={handleDrawerClose}
    />

    <Logo>
      Rocco
    </Logo>
  </Toolbar>
);

export { DesktopToolbar, MobileToolbar };
