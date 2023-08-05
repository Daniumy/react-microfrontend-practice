import React from "react";
import ReactDOM from "react-dom/client";

import Header from "remote/Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
