import React, { useContext } from "react";
import {
	Wrapper,
	Content,
	ModalItem,
	ModalItemHeader,
	Input,
	Select,
	CloseIcon,
} from "./Modal.styles";
import { ButtonAction } from "../Buttons/NavButton.styles";
import closeIcon from "../../images/cross-svgrepo-com.svg";
import { useState } from "react";
import RecordContext from "../../store/record-context";

export default function Modal(props) {
	const ctx = useContext(RecordContext);

	const [enteredDescription, setEnteredDescription] = useState("");
	const [enteredValue, setEnteredValue] = useState("");

	const descriptionHandler = (event) => {
		// The read-only target property of the Event interface is a reference to the object onto which the event was dispatched.
		setEnteredDescription(event.target.value);
		// console.log(event.target.value);
	};

	const valueHandler = (event) => {
		setEnteredValue(event.target.value);
		// console.log(event.target.value);
	};

	const filterHandler = (event) => {
		props.onChangeFilter(event.target.value);
		console.log(enteredDescription);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const recordData = {
			description: enteredDescription,
			value: enteredValue,
		};
		props.onSaveData(recordData);
		ctx.closeModal();
	};

	return (
		<Wrapper
			animate={{ opacity: [0.55, 1] }}
			transition={{ duration: 0.3 }}
			onSubmit={submitHandler}
		>
			<Content>
				<h2>New Record</h2>
				<CloseIcon
					src={closeIcon}
					alt="close window"
					onClick={ctx.closeModal}
				></CloseIcon>
				<ModalItem>
					<ModalItemHeader>Category</ModalItemHeader>
					<Select
						onChange={filterHandler}
						value={props.filterSelected}
					>
						<option value="Transport">Transport</option>
						<option value="Accommodation">Accommodation</option>
						<option value="Food">Food</option>
						<option value="Tickets">Passes</option>
						<option value="Shopping">Shopping</option>
						<option value="Miscellaneous">Other</option>
					</Select>
				</ModalItem>
				<ModalItem>
					<ModalItemHeader>Description</ModalItemHeader>
					<Input
						type="text"
						required
						onChange={descriptionHandler}
						value={enteredDescription}
					></Input>
				</ModalItem>
				<ModalItem>
					<ModalItemHeader>Value</ModalItemHeader>
					<Input
						type="number"
						required
						onChange={valueHandler}
						value={enteredValue}
					></Input>
				</ModalItem>
				<ButtonAction newRecord type="submit">
					Submit
				</ButtonAction>
			</Content>
		</Wrapper>
	);
}
