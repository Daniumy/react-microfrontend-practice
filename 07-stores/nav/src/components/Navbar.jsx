import React from "react";

import { useCounterStore } from "store/store";
import Swal from "sweetalert2";

const Navbar = () => {
	const { counter, clear } = useCounterStore();

	const handleClick = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You will not be able to recover this counter!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, clear it!",
			cancelButtonText: "No, keep it",
		}).then((result) => {
			if (result.isConfirmed) {
				clear();
			}
		});
  };
  
	return (
		<>
			<h1>Navbar shows counter: {counter.value}</h1>
			<button onClick={() => handleClick()}>CLEAR</button>
		</>
	);
};

export default Navbar;
