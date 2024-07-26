import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css"
import { Provider } from 'react-redux';
import store from './Store/Store.js';




ReactDOM.createRoot(document.getElementById("root")).render(

      <Provider store={store}>
            <GoogleOAuthProvider clientId='729671847676-obsm0p8sbel99517f9qvuhs3vpt4mhe3.apps.googleusercontent.com'>
                        <App />
            </GoogleOAuthProvider>
      </Provider>
 
);
