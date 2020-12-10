import React from 'react';
import Button from './style';

const StyledButton = ({
  primary,
  danger,
  color = 'white',
  onClick,
  type = 'button',
  children,
}) => (
  <Button
    primary={primary}
    danger={danger}
    style={{ backgroundColor: color }}
    type={type}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default StyledButton;
