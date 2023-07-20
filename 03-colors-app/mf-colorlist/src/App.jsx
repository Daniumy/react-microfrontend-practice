import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ColorList from "./components/ColorList";

const App = () => (
  <div className="container">
    <ColorList />
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);