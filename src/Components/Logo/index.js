import { Typography } from '@material-ui/core';
import React from 'react';

const Logo = ({
  children, variant = 'h6', component = 'h1',
}) => (
  <Typography variant={variant} component={component}>
    { children }
  </Typography>
);

export default Logo;
