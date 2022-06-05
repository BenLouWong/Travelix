import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import RecordContext from "../../store/record-context";
// import { useState } from "react";

const Wrapper = styled(motion.div)`
	position: absolute;
	right: 8%;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 10px;
	height: auto;
	width: fit-content;
	font-size: var(--fontVerySmall);
	box-shadow: var(--boxShadowDefault);
	overflow: hidden;
`;

const MenuBtn = styled.button`
	padding: 0.4rem;
	cursor: pointer;
	background: var(--lightGrey);
	border: none;
	width: 100%;
	transition: 0.2s all ease;

	:hover {
		background: var(--cat02);
	}
`;

export default function RowRemoveItem(props) {
	const ctx = useContext(RecordContext);
	// const [records, setRecords] = useState(ctx.items);

	const deleteHandler = () => {
		ctx.items.splice(props.index, 1);
		console.log(ctx.items);
		// setRecords(ctx.items);
		// props.onDeleteRecord(records);
	};

	return (
		<Wrapper>
			{/* <MenuBtn>Edit</MenuBtn> */}
			<MenuBtn onClick={deleteHandler}>Remove</MenuBtn>
		</Wrapper>
	);
}
