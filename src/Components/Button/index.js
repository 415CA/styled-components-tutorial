import React from 'react';
import Button from './style';

const StyledButton = ({
  primary,
  color = 'white',
  onClick,
  type = 'button',
  children,
}) => (
  <Button
    primary={primary}
    style={{ backgroundColor: color }}
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default StyledButton;
