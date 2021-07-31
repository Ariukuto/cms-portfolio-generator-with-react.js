import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';

// import reportWebVitals from './reportWebVitals';

// Bootstrap css, js, icons
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

// config
import configObject from './config/config.json';







ReactDOM.render(
    <App config={configObject}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
reportWebVitals();
*/
