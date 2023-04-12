import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_DOMAIN
const clientId = process.env.REACT_APP_CLIENT_ID


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
    domain ={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin+'/homepage'
    }}
  >
    
     <App />
     
     </Auth0Provider>
     </BrowserRouter>
);