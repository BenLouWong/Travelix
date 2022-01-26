import styled from "styled-components";

export const Chevron = styled.img`
	height: 1rem;
	width: 1rem;
	rotate: 0deg;
	transition: rotate 0.1s ease;
`;

export const ChevronInner = styled(Chevron)`
	height: 0.6rem;
	width: 0.6rem;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
	border: none;
	width: 100%;
	height: auto;
	font-size: var(--fontSmall);
	color: white;
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}

	:hover ${Chevron} {
		rotate: 90deg;
	}
`;

export const ButtonInner = styled(Button)`
	font-size: var(--fontVerySmall);
	padding: 0.2rem 0;
	margin: 0 0.2rem;
`;
