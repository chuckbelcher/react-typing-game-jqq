import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ScoreProvider } from './context/scoreContext';
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
  <Auth0Provider
  domain="pateogroup.us.auth0.com"
  clientId="VF6IkabfzRqGUbu2c8CuXB0DJqZa8xRI"
  redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

