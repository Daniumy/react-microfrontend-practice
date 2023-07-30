import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Counter from "./components/Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Counter initialCounter={10}/>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
