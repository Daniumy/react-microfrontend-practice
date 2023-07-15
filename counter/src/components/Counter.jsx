import React, { useState } from "react";
import "./Counter.css";
import Button from "./Button";
import Styled from "@emotion/styled";

const Success = Styled.span`
	color: green;
`;

const Error = Styled.span`
	color: red;
`;

const Counter = () => {
	const [count, setCount] = React.useState(0);

	// If CSS is going to be used, better to call the class counter-container as this css is going to apply to the host's "container" class as well
	return (
		<div className="container">
			<h2>
				Counter:{" "}
				{count >= 0 ? <Success>{count}</Success> : <Error>{count}</Error>}
			</h2>
			<Button onClick={() => setCount(count + 1)} text={"+1"} />
			<Button onClick={() => setCount(count - 1)} text={"-1"} />
		</div>
	);
};

export default Counter;
