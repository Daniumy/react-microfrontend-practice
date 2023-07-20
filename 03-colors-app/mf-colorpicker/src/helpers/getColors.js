export const getColorList = () => {
     const colors = localStorage.getItem("colors");
     return colors ? JSON.parse(colors) : [];
}

export const getLastColor = () => {
     const colors = getColorList();
     return colors[0];
}