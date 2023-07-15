import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter";

const App = () => <Counter />;

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
