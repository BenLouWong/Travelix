import React from "react";
import { ContainerHeaderInner } from "../Records/RecordsDash.styles";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	height: auto;
	border-bottom: 1px solid #d3d3d3;
	transition: all 0.4s ease;

	:hover {
		scale: 1.05;
	}
`;

const RowItem = styled.div`
	padding: 1.2rem 0.2rem;
	display: flex;
	justify-content: center;
`;

export default function Row() {
	return (
		<Wrapper>
			<ContainerHeaderInner>
				<RowItem>Category</RowItem>
				<RowItem>Description</RowItem>
			</ContainerHeaderInner>
			<RowItem>$30</RowItem>
		</Wrapper>
	);
}
