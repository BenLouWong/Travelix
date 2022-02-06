import React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./NewRecordForm.styles";
import { useState } from "react";
import Modal from "../Modal/Modal";

const portalDestination = document.getElementById("overlays");

export default function NewRecordForm(props) {
	const [filterOption, setFilterOption] = useState("Transport");

	const filterHandler = (selectedOption) => {
		setFilterOption(selectedOption);
	};

	const dataHandler = (entered) => {
		const enteredData = { ...entered, selectedFilter: filterOption };
		props.onSubmitData(enteredData);
	};

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClose}></Backdrop>,
				portalDestination
			)}
			{ReactDOM.createPortal(
				<Modal
					onClose={props.onClose}
					filterSelected={filterOption}
					onChangeFilter={filterHandler}
					onSaveData={dataHandler}
				></Modal>,
				portalDestination
			)}
		</>
	);
}
