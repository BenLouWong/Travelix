import React from "react";
import { ContainerHeaderInner } from "../Records/RecordsDash.styles";

export default function RowHeader() {
	return (
		<>
			<ContainerHeaderInner>
				<h3>Category</h3>
				<h3>Description</h3>
			</ContainerHeaderInner>
			<h3>Value</h3>
		</>
	);
}
