import React from "react";
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

export default function Modal(props) {
	return (
		<Wrapper
			animate={{ opacity: [0.75, 1] }}
			transition={{ duration: 0.3 }}
		>
			<Content>
				<h2>New Record</h2>
				<CloseIcon
					src={closeIcon}
					alt="close window"
					onClick={props.onClose}
				></CloseIcon>
				<ModalItem>
					<ModalItemHeader>Category</ModalItemHeader>
					<Select name="categories" id="categories">
						<option value="Test">Test</option>
						<option value="Test02">Test02</option>
					</Select>
				</ModalItem>
				<ModalItem>
					<ModalItemHeader>Description</ModalItemHeader>
					<Input type="text" required></Input>
				</ModalItem>
				<ModalItem>
					<ModalItemHeader>Value</ModalItemHeader>
					<Input type="number" required></Input>
				</ModalItem>
				<ButtonAction newRecord>Submit</ButtonAction>
			</Content>
		</Wrapper>
	);
}
