import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link } from "react-router-dom";


let Grid = () => {
  return (
    <div className='container'>

      <div className='row'>
      <div className='col-12 text-center'>
        <h1 className='heading'>The MERN Post</h1>
      </div>
      </div>

      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
    </div>
  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grid />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
