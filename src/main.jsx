import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css"
import { Provider } from 'react-redux';
import store from './Store/Store.js';




ReactDOM.createRoot(document.getElementById("root")).render(

      <Provider store={store}>
            <GoogleOAuthProvider clientId='105398526054-eat8pkudja05ag61v40tegc25ftjspob.apps.googleusercontent.com'>
                 
                        <App />
         
                
            </GoogleOAuthProvider>
      </Provider>
 
);
