import React from "react";
import { Wrapper } from "./Collapsible.styles";
import CollapsibleMenu from "./CollapsibleMenu";
import SideBarButton from "../Buttons/SideBarButton";
import { useState } from "react";

export default function Collapsible(props) {
	const [openState, setOpenState] = useState(false);

	const collapsibleHandler = () => {
		setOpenState(!openState);
	};

	return (
		<Wrapper>
			<SideBarButton
				title={props.title}
				main
				onOpen={collapsibleHandler}
			></SideBarButton>
			{openState && <CollapsibleMenu></CollapsibleMenu>}
		</Wrapper>
	);
}
