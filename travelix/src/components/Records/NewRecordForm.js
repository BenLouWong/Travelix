import React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./NewRecordForm.styles";
import Modal from "../Modal/Modal";

const portalDestination = document.getElementById("overlays");

export default function NewRecordForm(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClose}></Backdrop>,
				portalDestination
			)}
			{ReactDOM.createPortal(
				<Modal onClose={props.onClose}></Modal>,
				portalDestination
			)}
		</>
	);
}
