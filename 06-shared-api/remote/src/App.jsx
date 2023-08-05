import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";

const App = () => (
  <div className="container">
    <Header />
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
