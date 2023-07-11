import { useState } from "react";
import styled from "@emotion/styled";
import "./Counter.css";

const BtnDiminish = styled.button`
	color: tomato;
	margin: 1rem;
	&:hover {
		color: darkblue;
	}
`;

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
	};

	const handleDiminish = () => {
		setCounter(counter - 1);
	};

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={handleClick}>click me</button>
			<BtnDiminish onClick={handleDiminish}> diminish </BtnDiminish>
		</div>
	);
};

export default Counter;
