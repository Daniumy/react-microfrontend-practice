import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
	background-color: white;
	color: black;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-size: 1rem;
`;

const Button = ({ text, onClick }) => {
	return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;
