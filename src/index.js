import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './Components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <StylesProvider injectFirst>
      <Router>
        <App />
      </Router>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
