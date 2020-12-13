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
  headers, drawerOpen, toggleDrawer,
}) => (
  <Toolbar>
    <IconButton
      {...{
        edge: 'start',
        color: 'inherit',
        'aria-label': 'menu',
        'aria-haspopup': 'true',
        onClick: toggleDrawer,
      }}
    >
      <MenuIcon />
    </IconButton>

    <Drawer
      drawerOpen={drawerOpen}
      toggleDrawer={toggleDrawer}
      headers={headers}
    />

    <Logo>
      Rocco
    </Logo>
  </Toolbar>
);

export { DesktopToolbar, MobileToolbar };
