import React, { useState } from "react";

const ColorPicker = () => {
	const [color, setColor] = useState("#000000");

	function handleSubmitSaveColor(e) {
		e.preventDefault();
		alert(`Color seleccionado: ${color}`)
	}

	return (
		<form onSubmit={handleSubmitSaveColor}>
			<input
				type="color"
				className="form-control"
				style={{ width: "100%", height: "200px" }}
				title="Selecciona un color..."
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>

			<div className="text-center">
				<h2 className="mt-3 fw-bolder">
					<div
						style={{
							width: "20px",
							height: "20px",
							background: color,
							display: "inline-block",
							margin: "0 1rem",
						}}
					></div>
					{color}
				</h2>
				<button type="submit" className="btn btn-success">Guardar Color</button>
			</div>
		</form>
	);
};

export default ColorPicker;
