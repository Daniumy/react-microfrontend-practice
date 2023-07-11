import { useState } from "react";
import styled from "@emotion/styled";
import "./Counter.css";
import { handleClick } from "../helpers/handleClick";

const BtnDiminish = styled.button`
	color: tomato;
	margin: 1rem;
	&:hover {
		color: darkblue;
	}
`;

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={() => setCounter(handleClick(counter, 1))}>
				click me
			</button>
			<BtnDiminish onClick={() => setCounter(handleClick(counter, -1))}>
				diminish
			</BtnDiminish>
		</div>
	);
};

export default Counter;
