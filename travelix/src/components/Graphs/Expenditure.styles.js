import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
	background-color: white;
	height: auto;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;

	@media screen and (min-width: 900px) {
		grid-column-start: 2;
		grid-column-end: -1;
		background-color: white;
		height: auto;
		width: 100%;
		border-radius: 10px;
		overflow: hidden;
	}
`;

export const Content = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CardTitle = styled.div`
	height: 3rem;
	width: 100%;
	background: var(--darkGreen);
	color: white;
	display: flex;
	justify-content: flex-start;
	padding: 0.5rem 1rem;
`;

export const ExpenditureContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 1.5rem 2rem;
`;

export const BudgetGraph = styled.div`
	height: 46.71px;
	width: 100%;
	background-color: var(--lightGrey);
	border-radius: 30px;
	margin-bottom: 1rem;
	overflow: hidden;
`;

export const GraphInner = styled.div`
	height: 100%;
	width: ${(props) => (props.budget ? "100%" : props.width)};
	background: ${(props) =>
		props.budget
			? "linear-gradient(270deg, var(--lightGreen) -0.03%, var(--darkBlue) 100.03%)"
			: "linear-gradient(90deg, var(--darkOrange) -0.05%, var(--lightOrange) 100.08%)"};
	border-radius: 30px;
	transition: width 1s ease-in-out 0.3s;
`;
