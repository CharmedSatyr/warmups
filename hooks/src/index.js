import React from 'react';
import ReactDOM from 'react-dom';

import LoginProvider from './components/auth/login-provider';
import App from './app.js';

const Root = () => (
  <LoginProvider>
    <App />
  </LoginProvider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
