import React from 'react';
import StyledToolbar from './css';

const Toolbar = ({ children }) => (
  <StyledToolbar>
    { children }
  </StyledToolbar>
);

export default Toolbar;
