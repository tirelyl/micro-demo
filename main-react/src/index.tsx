import React from 'react';
import ReactDOM from 'react-dom';
import microApp from '@micro-zoe/micro-app';
import './index.css';
import Routes from './routers';
import reportWebVitals from './reportWebVitals';

microApp.start();

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
