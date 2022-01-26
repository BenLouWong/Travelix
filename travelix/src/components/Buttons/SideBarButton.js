import React from "react";
import {
	Button,
	Chevron,
	ButtonInner,
	ChevronInner,
} from "./SideBarButton.styles";
import chevronArrow from "../../images/chevron-forward-outline.svg";

export default function SideBarButton(props) {
	const buttonTypeHandler = props.main ? (
		<Button onClick={props.onOpen}>
			{props.title}
			<Chevron src={chevronArrow}></Chevron>
		</Button>
	) : (
		<ButtonInner>
			{props.title}
			<ChevronInner src={chevronArrow}></ChevronInner>
		</ButtonInner>
	);

	return <>{buttonTypeHandler}</>;
}
