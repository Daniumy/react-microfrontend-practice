import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ColorList from "./components/ColorList";

const App = () => (
  <div className="container">
    <ColorList colorsList={["#021333", "#f1288c", "#81eec1"]}/>
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);