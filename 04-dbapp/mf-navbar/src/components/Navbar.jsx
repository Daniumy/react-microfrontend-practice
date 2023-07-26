import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

     function activeClass(isActive) {
          return isActive ? "bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
     }

	return (
		<nav className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<NavLink to="/" className="text-lg text-grey-300">
								DB App
							</NavLink>
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<NavLink
									to="/"
									className={({ isActive }) => activeClass(isActive)}
								>
									Home
								</NavLink>
								<NavLink
									to="/personajes"
									className={({ isActive }) => activeClass(isActive)}
								>
									Personajes
								</NavLink>
								<NavLink
									to="/about"
									className={({ isActive }) => activeClass(isActive)}
								>
									About
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sm:hidden" id="mobile-menu">
				<div className="space-y-1 px-2 pb-3 pt-2">
					<NavLink to="/" className={({ isActive }) => activeClass(isActive)}>
						Home
					</NavLink>
					<NavLink
						to="/personajes"
						className={({ isActive }) => activeClass(isActive)}
					>
						Personajes
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) => activeClass(isActive)}
					>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
