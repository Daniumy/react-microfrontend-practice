import Counter from "./components/Counter";
import { lazy, Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout";

const Users = lazy(() => import("./components/Users"));

const App = () => {
	return (
		<div className="App">
			<Layout>
				<Counter />
				<Suspense fallback={<div>Loading...</div>}>
					<Users />
				</Suspense>
			</Layout>
		</div>
	);
};

export default App;
