import { createGlobalStyle } from 'styled-components';
import 'fontsource-roboto';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 10em;
    padding: 0;
    background: white;
    font-family: Roboto;
    color: black;
  }
`;

export default GlobalStyle;
