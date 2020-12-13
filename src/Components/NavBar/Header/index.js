import React from 'react';
import StyledHeader from './css';

const Header = ({ children }) => (
  <StyledHeader>
    { children }
  </StyledHeader>
);

export default Header;
