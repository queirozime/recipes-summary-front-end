import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import "@fontsource/poppins";
import { initializeApp } from 'firebase/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const firebaseConfig = {
  apiKey: "AIzaSyBwG49qhxOhj4vm1p4zNwM3UGfhHEA2FM0",
  authDomain: "cozinhex.firebaseapp.com",
  projectId: "cozinhex",
  storageBucket: "cozinhex.appspot.com",
  messagingSenderId: "162587160055",
  appId: "1:162587160055:web:4b73e462ffc8402d8952f2",
  measurementId: "G-PRPZBWSNCD"
};
const app = initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
