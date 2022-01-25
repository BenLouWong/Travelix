import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
	height: 100vh;
	width: 100vw;
    z-index; 1;
    padding: 3rem;

`;

export const Content = styled.div`
	width: var(--maxWidth);
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100%;
`;

export const Grid = styled.div`
	width: 100%;
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	grid-gap: 1.5rem;
`;
