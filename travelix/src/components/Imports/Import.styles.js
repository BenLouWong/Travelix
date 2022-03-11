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
	border: 2px solid var(--paleBlue);
	color: white;
	border-radius: 40px;
	padding: 0.5rem 1rem;
	background: var(--paleBlue);
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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	grid-gap: 1.5rem;
	align-self: center;

	:hover {
		background: none;
		opacity: 1;
	}
`;

export const PreviewItem = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 8rem;
	width: 100%;
	background: white;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	padding: 0.5rem;
	overflow: hidden;

	:hover {
		scale: 1.05;
	}
`;

export const PreviewIcon = styled.img`
	height: auto;
	width: 2rem;
	margin-bottom: 0.2rem;
`;
