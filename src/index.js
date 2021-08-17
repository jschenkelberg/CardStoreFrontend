import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import reactDom from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

const jsxElement = <h1>Our React App</h1>;

reactDom.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
