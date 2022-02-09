import React from "react";
import { ContainerHeaderInner } from "../Records/RecordsDash.styles";
import {
	Wrapper,
	RowItem,
	CatIcon,
	TransportIcon,
	HotelIcon,
	MealIcon,
	PassIcon,
	OtherIcon,
	ClickMore,
} from "./Row.styles";

export default function Row(props) {
	let catIcon = <CatIcon></CatIcon>;

	if (props.itemData.selectedFilter === "Transport") {
		catIcon = <TransportIcon></TransportIcon>;
	} else if (props.itemData.selectedFilter === "Accommodation") {
		catIcon = <HotelIcon></HotelIcon>;
	} else if (props.itemData.selectedFilter === "Food") {
		catIcon = <MealIcon></MealIcon>;
	} else if (props.itemData.selectedFilter === "Tickets") {
		catIcon = <PassIcon></PassIcon>;
	} else {
		catIcon = <OtherIcon></OtherIcon>;
	}

	return (
		<>
			<Wrapper
				animate={{ x: [15, -2, 0], opacity: [0.65, 1] }}
				transition={{ duration: 0.5 }}
			>
				<ContainerHeaderInner>
					<RowItem>{catIcon}</RowItem>
					<RowItem>{props.itemData.description}</RowItem>
				</ContainerHeaderInner>
				<RowItem>
					${props.itemData.value}
					<ClickMore></ClickMore>
				</RowItem>
			</Wrapper>
		</>
	);
}
