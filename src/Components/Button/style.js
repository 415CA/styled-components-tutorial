import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 8px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: blue;
  border: 5px solid blue;

  ${(props) => props.primary && css`
    background: green;
    color: green;
    border: 5px solid green;
  `}
  
  ${(props) => props.danger && css`
    background: red;
    color: red;
    border: 5px solid red;
  `}

    @media (min-width: 768px) { 
    padding: 1rem 2rem;
    width: 11rem;
  }
  
  @media (min-width: 1024px) { 
    padding: 1.5rem 2.5rem;
    width: 13rem;
  }

  :hover {
    border-color: green;
  }
`;

export default Button;
