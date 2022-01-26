import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
	margin-top: 1rem;
	opacity: 0;
	width: 100%;
	height: 0;
	padding: 1rem;
	background: var(--paleBlue);
	border-radius: 10px;
`;
