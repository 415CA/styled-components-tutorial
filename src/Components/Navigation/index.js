import React, { useState, useEffect } from 'react';
import Logo from '../Logo';
import AppBar from './AppBar';
import Header from './Header';
import MenuButtons from './MenuButtons';
import Toolbar from './Toolbar';

const Navigation = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setMobileView(true)
      : setMobileView(false));
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return (
    <Header>
      <AppBar>
        <Toolbar>
          <Logo>
            Rocco
          </Logo>
          <div>
            <MenuButtons />
          </div>
        </Toolbar>
      </AppBar>
    </Header>
  );
};

export default Navigation;
