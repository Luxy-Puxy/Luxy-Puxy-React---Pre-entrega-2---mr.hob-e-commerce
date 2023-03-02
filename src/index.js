import React from 'react';
import ReactDOM from 'react-dom';
import './components/navbar/Navbar.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);