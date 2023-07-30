import React, { useState } from "react";

const Counter = ({ initialCounter }) => {
	if (!initialCounter) {
		throw new Error("initialCounter is required");
	}

	const [count, setCount] = useState(initialCounter);
	
	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
				className="bg-green-100 rounded-md p-3 text-center"
			>
				+
			</button>
			<span className="mx-5">{count}</span>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
				className="bg-yellow-300 rounded-md p-3 text-center"
			>
				-
			</button>
		</div>
	);
};

export default Counter;
