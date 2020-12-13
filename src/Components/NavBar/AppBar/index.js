import React, { useEffect, useState } from 'react';
import { DesktopToolbar, MobileToolbar } from '../Toolbar';
import StyledAppBar from './css';

const AppBar = ({ headers }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  useEffect(() => {
    const setResponsiveness = () => (
      window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false)
    );
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return (
    <StyledAppBar>
      { mobileView
        ? (
          <MobileToolbar
            headers={headers}
            drawerOpen={drawerOpen}
            toggleDrawer={toggleDrawer}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        )
        : (
          <DesktopToolbar
            headers={headers}
            toggleDrawer={toggleDrawer}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        )}
    </StyledAppBar>
  );
};

export default AppBar;
