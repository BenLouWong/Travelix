import React from "react";
import { ContainerHeaderInner } from "../Records/RecordsDash.styles";
import classes from "./RowHeader.module.css";

export default function RowHeader() {
	return (
		<>
			<ContainerHeaderInner>
				<h3>Category</h3>
				<h3>Description</h3>
			</ContainerHeaderInner>
			<h3 className={classes.headerLast}>Value</h3>
		</>
	);
}
