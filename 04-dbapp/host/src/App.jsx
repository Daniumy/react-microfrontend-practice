import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import NotFound from "./pages/NotFound";
import Navbar from "mf_navbar/Navbar";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const PersonajesPage = lazy(() => import("./pages/PersonajesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

const App = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={<Loader />}>
						<HomePage />
					</Suspense>
				}
			/>
			<Route
				path="/personajes"
				element={
					<Suspense fallback={<Loader />}>
						<PersonajesPage />
					</Suspense>
				}
			/>
			<Route
				path="/about"
				element={
					<Suspense fallback={<Loader />}>
						<AboutPage />
					</Suspense>
				}
			/>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
