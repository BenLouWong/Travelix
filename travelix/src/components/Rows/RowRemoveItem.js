import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
	position: absolute;
	right: 13%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 10px;
	height: auto;
	width: fit-content;
	font-size: var(--fontVerySmall);
	box-shadow: var(--boxShadowDefault);
	overflow: hidden;
`;

const MenuBtn = styled.button`
	padding: 0.4rem;
	cursor: pointer;
	background: var(--lightOrange);
	border: none;
	width: 100%;
	transition: 0.2s all ease;

	:hover {
		background: var(--darkOrange);
	}
`;

export default function RowRemoveItem() {
	return (
		<Wrapper>
			<MenuBtn>Edit</MenuBtn>
			<MenuBtn>Remove</MenuBtn>
		</Wrapper>
	);
}
