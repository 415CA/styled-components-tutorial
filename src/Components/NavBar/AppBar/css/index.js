import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

const StyledAppBar = styled(AppBar)`
  background-color: #400CCC;
  padding-right: 79px;
  padding-left: 118px;
  
  @media (max-width: 900px): {
    padding-left: 0;
  };
`;
export default StyledAppBar;
