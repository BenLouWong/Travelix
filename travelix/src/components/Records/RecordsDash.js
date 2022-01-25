import React from "react";
import {
	Wrapper,
	Content,
	Headings,
	Title,
	RecordContainer,
	ContainerHeader,
} from "./RecordsDash.styles";
import { ButtonAction } from "../Buttons/NavButton.styles";
// import RecordContainer from "./RecordContainer";
import Row from "../Rows/Row";
import RowHeader from "../Rows/RowHeader";

const testArr = [1, 2, 3, 4, 5];

export default function RecordsDash(props) {
	const ItemOutput = testArr.map((el) => <Row></Row>);

	return (
		<Wrapper
			animate={{
				x: [-18, 5, 0],
				opacity: [0.65, 1],
			}}
			transition={{ duration: 0.6 }}
		>
			<Content>
				<Headings>
					<Title>Records</Title>
					<ButtonAction onClick={props.onShowForm}>
						Add Record
					</ButtonAction>
				</Headings>
				<RecordContainer>
					<ContainerHeader>
						<RowHeader></RowHeader>
					</ContainerHeader>
					{ItemOutput}
				</RecordContainer>
			</Content>
		</Wrapper>
	);
}
