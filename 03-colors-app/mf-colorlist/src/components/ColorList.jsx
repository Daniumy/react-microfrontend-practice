import React from "react";
import Swal from "sweetalert2";

const ColorList = ({ colorsList }) => {

	function handleCopyColor(color) {
		navigator.clipboard.writeText(color);
		Swal.fire({
			title: "Copiado!",
			text: `El color ${color} ha sido copiado al portapapeles`,
			icon: "success",
			position: "top-end",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
		})
	};

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
					onClick={() => handleCopyColor(color)}
				>
					{color}
				</button>
			)) : <div className="alert alert-danger" role="alert"><b>Sin elementos</b></div>}
		</div>
	);
};

export default ColorList;
