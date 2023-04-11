import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.DOMAIN;
const clientId = process.env.CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain ={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin+'/homepage'
    }}
  >
     <BrowserRouter>
     <App />
     </BrowserRouter>
     </Auth0Provider>
);