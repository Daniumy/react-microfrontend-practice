import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "navbar/Navbar";
import "./index.css";

const App = () => (
	<>
		<Navbar />
	</>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
