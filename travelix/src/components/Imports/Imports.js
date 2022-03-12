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
import JPGIcon from "../../images/file-image-solid.svg";
import OtherIcon from "../../images/file-lines-solid.svg";
import VidIcon from "../../images/file-video-solid.svg";
import { useRef, useState, useContext } from "react";
import RecordContext from "../../store/record-context";

export default function Imports(props) {
	const ctx = useContext(RecordContext);
	const fileInputField = useRef(null);
	const [fileList, setFileList] = useState([]);

	const fileDropHandler = (event) => {
		const newFile = event.target.files[0].name;
		if (newFile) {
			const updatedList = [newFile, ...fileList];
			setFileList(updatedList);
			props.onFileChange(updatedList);
		}
	};

	const iconHandler = (e) => {
		if (String(e.slice(0, 1)).slice(-3) === "pdf") {
			return <PreviewIcon src={PDFIcon}></PreviewIcon>;
		} else if (
			String(e.slice(0, 1)).slice(-3) === "jpg" ||
			String(e.slice(0, 1)).slice(-3) === "png"
		) {
			return <PreviewIcon src={JPGIcon}></PreviewIcon>;
		} else if (String(e.slice(0, 1)).slice(-3) === "mp4") {
			return <PreviewIcon src={VidIcon}></PreviewIcon>;
		} else {
			return <PreviewIcon src={OtherIcon}></PreviewIcon>;
		}
	};

	const previewHandler = ctx.uploads.map((e) => (
		<PreviewItem>
			{iconHandler(e)}
			{e.slice(0, 1)}
		</PreviewItem>
	));

	return (
		<>
			<UploadContainer
				animate={{
					scale: [1, 1.02, 1],
					opacity: [0.65, 1],
				}}
				transition={{ duration: 0.4 }}
				ref={fileInputField}
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
