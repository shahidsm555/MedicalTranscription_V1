
/*
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App'; // Adjust the path if necessary

const root = createRoot(document.getElementById('root'));
root.render(<App />);
*/

/*
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
/*

import React from 'react';
import App from './App';

import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

//const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/


import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const container = document.getElementById("root");
const root = createRoot(container); // Assuming container is not null

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
