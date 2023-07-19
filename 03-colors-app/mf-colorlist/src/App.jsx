import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => (
  <div className="container">
    <ColorList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
