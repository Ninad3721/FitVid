import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-8lc0lqo1pnfawv1t.us.auth0.com"
        clientId="br6ZL3rlVxhzYVzaWJcJSeiFZ6JrBXmJ"
        authorizationParams={{
          redirect_uri: "http://localhost:3000/ModuleSelection"
        }}
      >
        <App />
      </Auth0Provider>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
