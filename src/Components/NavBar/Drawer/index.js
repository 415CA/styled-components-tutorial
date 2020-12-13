import React from 'react';
import MenuButton from '../MenuButton';
import StyledDrawer from './css';

const DrawerA = ({ headers, drawerOpen, handleDrawerClose }) => (
  <StyledDrawer
    {...{
      anchor: 'left',
      open: drawerOpen,
      onClose: handleDrawerClose,
    }}
  >
    <MenuButton headers={headers} />
  </StyledDrawer>
);

export default DrawerA;
