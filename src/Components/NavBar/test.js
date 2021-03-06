import {
  AppBar,

  Button,

  Drawer, IconButton,

  Link, makeStyles,

  MenuItem, Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const headersData = [
  {
    label: 'Listings',
    href: '/listings',
  },
  {
    label: 'Mentors',
    href: '/mentors',
  },
  {
    label: 'My Account',
    href: '/account',
  },
  {
    label: 'Log Out',
    href: '/logout',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
}));

export default function Header() {
  const {
    header, logo, menuButton, toolbar, drawerContainer,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => (
    <Toolbar className={toolbar}>
      {femmecubatorLogo}
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
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
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => headersData.map(({ label, href }) => (
    <Link
      key={label}
      {...{
        component: RouterLink,
        to: href,
        color: 'inherit',
        style: { textDecoration: 'none' },
        key: label,
      }}
    >
      <MenuItem>{label}</MenuItem>
    </Link>
  ));

  const femmecubatorLogo = (
    <Typography variant='h6' component='h1' className={logo}>
      Femmecubator
    </Typography>
  );

  const getMenuButtons = () => headersData.map(({ label, href }) => (
    <Button
      key={label}
      {...{
        key: label,
        color: 'inherit',
        to: href,
        component: RouterLink,
        className: menuButton,
      }}
    >
      {label}
    </Button>
  ));

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
