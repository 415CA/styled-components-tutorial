import {
  AppBar, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const Navigation = () => (
  <AppBar position='fixed' color='primary'>
    <Toolbar>
      <IconButton edge='start' color='inherit' aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' />
    </Toolbar>
  </AppBar>
);

export default Navigation;
