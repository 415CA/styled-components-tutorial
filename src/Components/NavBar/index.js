import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import { DesktopToolbar, MobileToolbar } from './Toolbar';

const NavBar = ({ headers }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
    <AppBar headers={headers}>
      { mobileView
        ? (
          <MobileToolbar
            headers={headers}
            drawerOpen={drawerOpen}
            toggleDrawer={toggleDrawer}

          />
        )
        : (
          <DesktopToolbar
            headers={headers}
            toggleDrawer={toggleDrawer}
          />
        )}
    </AppBar>
  );
};

export default NavBar;
