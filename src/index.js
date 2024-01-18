import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataArray } from "./Data/Data";
import "./Main.scss";

console.log(DataArray);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App Data={DataArray} />
  </BrowserRouter>
);

reportWebVitals();
