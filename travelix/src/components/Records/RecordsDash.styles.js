import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
	height: auto;
	width: 100%;
	grid-column-start: 1;
	grid-column-end: -1;
	overflow: hidden;
	border-radius: 10px;
	padding-bottom: 3rem;
`;

export const Content = styled.div`
	height: 100%;
	width: 100%;
`;

export const Headings = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 0.2rem;
	overflow: visible;
	padding: 0rem 0.5rem 0.3rem 0.5rem;
`;

export const Title = styled.h2`
	margin-bottom: 0.2rem;
`;

export const RecordContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	background-color: white;
	padding: 1.5rem 2.5rem;
	min-height: 45vh;
	height: auto;
	width: 100%;
`;

export const ContainerHeader = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`;

export const ContainerHeaderInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	> * {
		margin-right: 3rem;
	}
`;

export const NoEntry = styled.img`
	width: 50%;
	height: auto;
`;
