import styled from "styled-components";
import { motion } from "framer-motion";

export const SideBarWrapper = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	color: white;
	background-color: var(--darkBlue);
	border-radius: 10px;
	width: 18rem;
	height: auto;
	min-height: 100%;
	padding: 2rem;
	margin-right: 1.5rem;

	@media screen and (min-width: 75em) {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		color: white;
		background-color: var(--darkBlue);
		border-radius: 10px;
		width: 19vw;
		height: auto;
		min-height: 100%;

		padding: 2rem;
		margin-right: 1.5rem;
	}
`;
