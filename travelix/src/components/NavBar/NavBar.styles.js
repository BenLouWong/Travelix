import styled from "styled-components";

export const Wrapper = styled.nav`
	position: relative;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	padding: 1rem 2.5rem;
	height: 100px;
	width: 100vw;
	box-shadow: var(--boxShadowDefault);
	z-index: 15;
`;

export const Content = styled.div`
	width: var(--maxWidth);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ContentInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const User = styled.button`
	border: none;
	border-radius: 50%;
	height: 2.85rem;
	width: 2.85rem;
	background-color: var(--lightGreen);
	cursor: pointer;
`;
