import React from 'react'
import { increment, decrement } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

     const counter = useSelector((state) => state.counter.value);
     const dispatch = useDispatch();
     
  return (
		<>
			<div>
				<h1>Counter: {counter}</h1>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
			</div>
		</>
	);
}

export default Counter