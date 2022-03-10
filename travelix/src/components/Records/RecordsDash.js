import React from "react";
import {
	Wrapper,
	Content,
	Headings,
	Title,
	RecordContainer,
	ContainerHeader,
	NoEntry,
} from "./RecordsDash.styles";
import { ButtonAction } from "../Buttons/NavButton.styles";
// import RecordContainer from "./RecordContainer";
import Row from "../Rows/Row";
import RowHeader from "../Rows/RowHeader";
import { useContext } from "react";
import RecordContext from "../../store/record-context";
import NoContent from "../../images/8ttKySQ.png";

export default function RecordsDash() {
	const ctx = useContext(RecordContext);

	const ItemOutput = ctx.items.map((el, i) => (
		<Row itemData={el} key={i} index={i}></Row>
	));

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
					<ButtonAction onClick={ctx.openModal}>
						Add Record
					</ButtonAction>
				</Headings>
				<RecordContainer>
					<ContainerHeader>
						<RowHeader></RowHeader>
					</ContainerHeader>
					{ItemOutput.length === 0 ? (
						<NoEntry src={NoContent}></NoEntry>
					) : (
						ItemOutput
					)}
				</RecordContainer>
			</Content>
		</Wrapper>
	);
}
