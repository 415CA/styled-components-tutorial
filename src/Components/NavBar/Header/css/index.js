import styled from 'styled-components';

const StyledHeader = styled.header`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  padding-right: 5em;
  padding-left: 7em;
  
  @media (max-width: 900px): {
    padding-left: 0;
  };
`;

export default StyledHeader;
