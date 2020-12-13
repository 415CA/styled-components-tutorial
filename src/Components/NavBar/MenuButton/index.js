import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import StyledMenuButton from './css';

const headersData = [
  {
    label: 'Landing',
    href: '/',
  },
  {
    label: 'Home',
    href: '/home',
  },
];

const MenuButtons = ({ headers = headersData }) => headers.map(({ label, href }) => (
  <StyledMenuButton
    key={label}
    {...{
      key: label,
      color: 'inherit',
      to: href,
      component: RouterLink,
    }}
  >
    {label}
  </StyledMenuButton>
));

export default MenuButtons;
