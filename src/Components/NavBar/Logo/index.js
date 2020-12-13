import React from 'react';
import StyledTypography from './css';

const Logo = ({
  children, variant = 'h6', component = 'h1',
}) => (
  <StyledTypography variant={variant} component={component}>
    { children }
  </StyledTypography>
);

export default Logo;
