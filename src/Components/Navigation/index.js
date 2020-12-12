import React from 'react';
import Logo from '../Logo';
import AppBar from './AppBar';
import Header from './Header';
import Toolbar from './Toolbar';

const Navigation = () => (
  <Header>
    <AppBar>
      <Toolbar>
        <Logo>
          Rocco
        </Logo>
      </Toolbar>
    </AppBar>
  </Header>
);

export default Navigation;
