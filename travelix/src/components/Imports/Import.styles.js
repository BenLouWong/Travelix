import styled from "styled-components";
import { motion } from "framer-motion";

export const UploadContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 22rem;
	padding: 2rem;
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border: 2px dashed var(--paleBlue);
	width: var(--maxWidth);
	height: 100%;
	border-radius: 10px;
	background: white;
	transition: all 0.2s ease;

	:hover {
		background: #ddecf3;
		opacity: 0.6;
	}
`;

export const Image = styled.img`
	height: 5rem;
	width: 5rem;
`;

export const UploadInput = styled.input`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const UploadButton = styled.button`
	z-index: 0;
	position: relative;
	border: 2px solid var(--buttonBlue);
	color: white;
	border-radius: 40px;
	padding: 0.5rem 1rem;
	background: var(--buttonBlue);
`;

export const UploadPreview = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 22rem;
	padding: 2rem;
`;

export const PreviewContent = styled(Content)`
	border: none;
	background: transparent;
	max-width: var(--maxWidth);
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	grid-gap: 1.5rem;
	align-self: center;
	padding-bottom: 2rem;

	:hover {
		background: none;
		opacity: 1;
	}
`;

export const PreviewItem = styled(motion.a)`
	text-decoration: none;
	display: flex;
	align-items: center;
	width: 100%;
	background: white;
	border-radius: 10px;
	margin-bottom: 1rem;
	border: none;
	padding: 1rem;
	overflow: hidden;
	box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.1);
	max-height: 4rem;
`;

export const PreviewIcon = styled(motion.img)`
	height: auto;
	width: 1.5rem;
	margin-right: 2.5rem;
`;
