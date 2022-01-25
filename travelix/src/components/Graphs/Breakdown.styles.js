import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
	background-color: white;
	height: 320px;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
`;

export const Content = styled.div`
	height: 100%;
	width: 100%;
`;

export const CardTitle = styled.div`
	height: 3rem;
	width: 100%;
	background: var(--lightGreen);
	color: white;
	display: flex;
	justify-content: flex-start;
	padding: 0.5rem 1rem;
`;

export const ContentInner = styled.div`
	padding: 1rem;
`;
