import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import axios from 'axios';

if (process.env.NODE_ENV === "development"){
  axios.defaults.baseURL = 'http://localhost:5006';
} 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </BrowserRouter>
);

reportWebVitals();
