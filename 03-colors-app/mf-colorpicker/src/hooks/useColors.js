import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
	const [color, setColor] = useState(getLastColor());
	const [colorList, setColorList] = useState(getColorList());

	function handleChangeColor(e) {
		setColor(e.target.value);
	}

	function handleSubmitSaveColor(e) {
		e.preventDefault();
		setColorList([color, ...colorList]);
	}
	
	useEffect(() => {
		localStorage.setItem("colors", JSON.stringify(colorList));
	}, [colorList]);
     
     return {color, colorList, handleChangeColor, handleSubmitSaveColor}
};
