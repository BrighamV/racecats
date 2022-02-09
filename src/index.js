import React from 'react';
import reactDom from 'react-dom';
import App from './components/app/app';



reactDom.render(
  // <React.StrictMode>   // this was causing my get from the database twice. 
      <App />
  // </React.StrictMode>


, document.getElementById("root"))