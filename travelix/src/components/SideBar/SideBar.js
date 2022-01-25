import React from "react";
import { SideBarWrapper } from "./SideBar.styles";
import Collapsible from "../Collapsible/Collapsible";

const buttonArr = ["Trip Information", "Budget", "Records", "Create New Trip"];

export default function SideBar() {
	const sideBarButtonHandler = buttonArr.map((el) => (
		<Collapsible title={el}></Collapsible>
	));

	return (
		<SideBarWrapper
			animate={{
				y: [18, -5, 0],
			}}
			transition={{ duration: 0.6 }}
		>
			<h1>Your Trip</h1>
			{sideBarButtonHandler}
		</SideBarWrapper>
	);
}
