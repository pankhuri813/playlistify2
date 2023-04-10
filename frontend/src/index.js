import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="playlistify.jp.auth0.com"
    clientId="naVxkso0hX6mMeahUlT8KJpfH6YNU4UZ"
    authorizationParams={{
      redirect_uri: window.location.origin+'/homepage'
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

