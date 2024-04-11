import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/UI/App/App";
import './index.css'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from './components/data/Services/firebaseConfig';
const rootElement = document.getElementById('root');


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
