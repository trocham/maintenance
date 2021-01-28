import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import CarsList from './components/Cars/CarsList';
import CarForm from './components/Cars/CarForm';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Navbar/>
     
      <div className="conrainer p-4">
        <Switch>
          <Route exact path="/" component={CarsList}/>
          <Route path="/newCarMaintenance" component={CarForm}/>
          <Route path="/update/:id" component={CarForm}/>
        </Switch>
        <ToastContainer/>
     
      </div>
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
