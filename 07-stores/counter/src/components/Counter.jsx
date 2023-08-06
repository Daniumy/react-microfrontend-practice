import React from "react";
import { useCounterStore } from "store/store";
import Swal from "sweetalert2";

const Counter = () => {
	const { counter, increment, decrement, clear } = useCounterStore();

     function handleIncrementClick() {
          if (counter.value <= 9) {
               increment();
          }
          else {
               Swal.fire({
                    title: "You cant increment more than 10",
                    icon: "error",
               });
          }
     }
	return (
		<>
			<h1>Counter: {counter.value}</h1>
			<button onClick={() => handleIncrementClick()}>+</button>
			<button onClick={() => decrement()}>-</button>
			<button onClick={() => clear()}>clear</button>
		</>
	);
};

export default Counter;
