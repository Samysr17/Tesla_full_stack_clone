import React from 'react';
import { createRoot } from 'react-dom/client';
// import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './components/redux/app/store'
import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain="samrat.uk.auth0.com"
    clientId="g6mF80vIK6BrrBULltHBamHXXZi7NfdV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
  <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
