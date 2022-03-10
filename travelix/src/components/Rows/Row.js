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
	ShoppingIcon,
	OtherIcon,
	ClickMore,
} from "./Row.styles";
import { useState } from "react";
import RowRemoveItem from "./RowRemoveItem";

export default function Row(props) {
	const [menuState, setMenuState] = useState(false);
	// const [records, setRecords] = useState();

	let catIcon = <CatIcon></CatIcon>;

	if (props.itemData.selectedFilter === "Transport") {
		catIcon = <TransportIcon></TransportIcon>;
	} else if (props.itemData.selectedFilter === "Accommodation") {
		catIcon = <HotelIcon></HotelIcon>;
	} else if (props.itemData.selectedFilter === "Food") {
		catIcon = <MealIcon></MealIcon>;
	} else if (props.itemData.selectedFilter === "Shopping") {
		catIcon = <ShoppingIcon></ShoppingIcon>;
	} else if (props.itemData.selectedFilter === "Tickets") {
		catIcon = <PassIcon></PassIcon>;
	} else {
		catIcon = <OtherIcon></OtherIcon>;
	}

	const removeItemHandler = () => {
		setMenuState(!menuState);
	};

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
					<ClickMore onClick={removeItemHandler}></ClickMore>
				</RowItem>
				{menuState && (
					<RowRemoveItem index={props.index}></RowRemoveItem>
				)}
			</Wrapper>
		</>
	);
}
