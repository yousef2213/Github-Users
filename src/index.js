import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from "react-router-dom";
import {GithubProvider} from './context/context'



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-g04inidb.auth0.com"
      clientId="vuRVK7odmtqteoWMiMiXBZDwA9qY8Z4q"
      redirectUri={window.location.origin}
    >
        <Router>
          <GithubProvider>
            <App />
          </GithubProvider>
        </Router>
    </Auth0Provider>
  </React.StrictMode>
,document.getElementById('root')
);