import React from 'react';
import MenuButton from '../MenuButton';
import StyledDrawer from './css';

const Drawer = ({
  headers, drawerOpen, toggleDrawer,
}) => (
  <StyledDrawer
    {...{
      anchor: 'left',
      open: drawerOpen,
      onClose: toggleDrawer,
    }}
  >
    <MenuButton headers={headers} />
  </StyledDrawer>
);

export default Drawer;
