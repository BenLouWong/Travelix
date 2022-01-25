import React from "react";
import { Wrapper, Button } from "./Collapsible.styles";
import CollapsibleMenu from "./CollapsibleMenu";

export default function Collapsible(props) {
	return (
		<Wrapper>
			<Button>{props.title}</Button>
			<CollapsibleMenu></CollapsibleMenu>
		</Wrapper>
	);
}
