import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
	border: none;
	background-color: transparent;
	padding-right: 2rem;
	cursor: pointer;
	font-size: var(--fontSmall);
	color: var(--medDarkGrey);
	transition: all 0.2s ease;

	:hover {
		color: black;
	}
`;

export const ButtonAction = styled.button`
	border: none;
	background-color: var(--buttonBlue);
	border-radius: ${(props) => (props.newRecord ? "10px" : "40px")};
	color: white;
	padding: ${(props) => (props.newRecord ? "1rem 1.5rem" : "0.4rem 0.7rem")};
	cursor: pointer;
	width: ${(props) => (props.newRecord ? "100%" : "")};
	transition: all 0.3s ease;

	:hover {
		opacity: 0.8;
		transform: scale(1.1);
	}

	:active {
		transform: scale(1);
	}
`;
