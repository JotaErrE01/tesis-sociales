import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import './register';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
