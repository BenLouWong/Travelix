import React from "react";
import SideBarButton from "../Buttons/SideBarButton";
import { Wrapper } from "./CollapsibleMenu.styles";

const data = ["Category", "Description", "Value"];

export default function CollapsibleMenu() {
	const menuHandler = data.map((el) => (
		<SideBarButton title={el}></SideBarButton>
	));

	return (
		<Wrapper
			animate={{
				y: [-25, 5, 0],
				opacity: [0, 1],
				height: [0, 140],
			}}
			transition={{ duration: 0.5 }}
		>
			Filter By {menuHandler}
		</Wrapper>
	);
}
