import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./NewRecordForm.styles";
import { useState } from "react";
import Modal from "../Modal/Modal";
import RecordContext from "../../store/record-context";

const portalDestination = document.getElementById("overlays");

export default function NewRecordForm(props) {
	const ctx = useContext(RecordContext);

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
				<Backdrop onClick={ctx.closeModal}></Backdrop>,
				portalDestination
			)}
			{ReactDOM.createPortal(
				<Modal
					filterSelected={filterOption}
					onChangeFilter={filterHandler}
					onSaveData={dataHandler}
				></Modal>,
				portalDestination
			)}
		</>
	);
}
