// This example uses this CSS build to minimize CodeSandBox transpile times
import '@carbon/ibm-products/css/index-full-carbon.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './config';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import { UIShellHeader } from './Example/Header';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <UIShellHeader />
      <App />
      <ThemeDropdown />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
