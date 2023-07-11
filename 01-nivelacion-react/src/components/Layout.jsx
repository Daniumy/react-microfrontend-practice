import React from "react";

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<h1>React nivelation</h1>
			</header>

			<main>{children}</main>

			<footer>&copy; Daniel Maestre</footer>
		</>
	);
};

export default Layout;
