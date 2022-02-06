import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.form)`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 450px;
	height: 550px;
	padding: 2rem;
	background: #ffffff;
	border-radius: 10px;
	z-index: 3000000000000;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

export const ModalItem = styled.div`
	width: 100%;
`;

export const ModalItemHeader = styled.div`
	padding-bottom: 1rem;
`;

export const Input = styled.input`
	border: 2px solid var(--medDarkGrey);
	background: var(--lightGrey);
	border-radius: 10px;
	width: 100%;
	height: 41px;
	padding-left: 1.5rem;
`;

export const Select = styled.select`
	border: 2px solid var(--medDarkGrey);
	background: var(--lightGrey);
	border-radius: 10px;
	width: 100%;
	height: 41px;
	padding-left: 1.5rem;
`;

export const CloseIcon = styled.img`
	position: absolute;
	top: 4%;
	right: 5%;
	height: 1rem;
	width: 1rem;
	cursor: pointer;
`;
