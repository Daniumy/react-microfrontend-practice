import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import HomePage from "./pages/HomePage";
import PersonajesPage from "./pages/PersonajesPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Navbar from "mf_navbar/Navbar";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personajes" element={<PersonajesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
	</BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
