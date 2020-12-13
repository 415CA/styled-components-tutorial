import React from 'react';
import StyledAppBar from './css';

const AppBar = ({ children }) => (
  <StyledAppBar style={{ backgroundColor: '#400CCC' }}>
    { children }
  </StyledAppBar>
);

export default AppBar;
