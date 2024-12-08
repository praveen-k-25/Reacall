import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './REACT_ROUTERS/App';
import ProjectApp1 from './P1/ProjectApp1'
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <ProjectApp1/> */}
  </React.StrictMode>
);

// REACT ROUTER DOM  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

