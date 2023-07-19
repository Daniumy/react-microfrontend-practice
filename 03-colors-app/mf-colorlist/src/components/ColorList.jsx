import React from "react";

const ColorList = () => {
	const colorsList = ["#000000", "#FF0000", "#00FF00", "#0000FF"];

	return (
		<div className="list-group text-center">
			{colorsList.map((color, index) => (
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
			))}
		</div>
	);
};

export default ColorList;
