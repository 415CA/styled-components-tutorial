import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

const StyledAppBar = styled(AppBar)`
  background: #400CCC;
  padding-right: 5em;
  padding-left: 7em;
  
  @media (max-width: 900px): {
    padding-left: 0;
  };
`;
export default StyledAppBar;
