import React from "react";

const ColorList = ({ colorsList }) => {
	return (
		<div className="list-group text-center">
			{colorsList.length ? colorsList.map((color, index) => (
				<button
					key={index}
					type="button"
					className="list-group-item list-group-item-action text-white"
					aria-current="true"
					title="Copiar"
					style={{ backgroundColor: color, fontWeight: "bolder" }}
				>
					{color}
				</button>
			)) : <div className="alert alert-danger" role="alert"><b>Sin elementos</b></div>}
		</div>
	);
};

export default ColorList;
