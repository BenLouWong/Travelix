import React from "react";
// import { Wrapper, Content } from "../Dashboard/Dashboard.styles";
import {
	UploadContainer,
	Content,
	Image,
	UploadPreview,
	PreviewContent,
	UploadInput,
	UploadButton,
	PreviewItem,
	PreviewIcon,
} from "./Import.styles";
import UploadImage from "../../images/cloud-arrow-up-solid.svg";
import PDFIcon from "../../images/file-pdf-solid.svg";
import { useRef, useState, useContext } from "react";
import RecordContext from "../../store/record-context";

export default function Imports(props) {
	const ctx = useContext(RecordContext);
	const fileInputField = useRef(null);
	const [fileList, setFileList] = useState([]);

	// const onDragEnter = () => fileInputField.current.classlist.add("dragover");
	// const onDragLeave = () =>
	// 	fileInputField.current.classlist.remove("dragover");
	// const onDrop = () => fileInputField.current.classlist.remove("dragover");

	const fileDropHandler = (event) => {
		const newFile = event.target.files[0];
		if (newFile) {
			const updatedList = [newFile, ...fileList];
			console.log(updatedList);
			setFileList(updatedList);
			props.onFileChange(updatedList);
		}
	};

	const previewHandler = ctx.uploads.map((e) => (
		<PreviewItem>
			{e.type === "application/pdf" && (
				<PreviewIcon src={PDFIcon}></PreviewIcon>
			)}
			{e.name}
		</PreviewItem>
	));

	return (
		<>
			<UploadContainer
				animate={{
					y: [10, -5, 0],
					opacity: [0.65, 1],
				}}
				transition={{ duration: 0.4 }}
				ref={fileInputField}
				// onDragEnter={onDragEnter}
				// onDragLeave={onDragLeave}
				// onDrop={onDrop}
			>
				<Content>
					<Image src={UploadImage} alt="Upload Image"></Image>
					<p>Drag and drop your files here, or</p>
					<UploadButton>Click to upload</UploadButton>
					<UploadInput
						type="file"
						value=""
						onChange={fileDropHandler}
					></UploadInput>
				</Content>
			</UploadContainer>
			<UploadPreview>
				<PreviewContent>{previewHandler}</PreviewContent>
			</UploadPreview>
		</>
	);
}
