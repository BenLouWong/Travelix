import React, { useEffect } from "react";
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
import { useRef, useState } from "react";
import { storage } from "../../config/config";
import Loading from "../Spinner/Spinner";

export default function Imports() {
	const fileInputField = useRef(null);
	const [spinner, spinnerState] = useState(false);
	const [fileList, setFileList] = useState([]);
	const storageRef = storage.ref();

	const getUploads = async () => {
		const firebaseFiles = (await storageRef.listAll()).items;
		try {
			const fileArr = firebaseFiles.map((file) => {
				return { name: file.name, url: file.getDownloadURL() };
			});
			console.log(fileArr);
			setFileList(fileArr);
		} catch {
			console.error("no files currently stored");
		}
	};

	const uploadHandler = async (event) => {
		const newFile = event.target.files[0];
		spinnerState(true);

		try {
			if (!newFile) return;

			await storageRef.child(`${newFile.name}`).put(newFile);
			spinnerState(false);
			getUploads();
		} catch (err) {
			console.log(err);
		}
	};

	const iconHandler = (docName) => {
		if (/\.pdf$/i.test(docName)) {
			return <PreviewIcon src={PDFIcon}></PreviewIcon>;
		} else if (
			/\.jpg$/i.test(docName) ||
			/\.png$/i.test(docName) ||
			/\.svg$/i.test(docName)
		) {
			return <PreviewIcon src={JPGIcon}></PreviewIcon>;
		} else if (/\.mp4$/i.test(docName)) {
			return <PreviewIcon src={VidIcon}></PreviewIcon>;
		} else {
			return <PreviewIcon src={OtherIcon}></PreviewIcon>;
		}
	};

	const previewHandler = fileList.map(({ name }) => (
		<PreviewItem
			animate={{
				opacity: [0.5, 1],
			}}
			transition={{ duration: 0.3 }}
			href
		>
			{iconHandler(name)}
			{name}
		</PreviewItem>
	));

	useEffect(() => {
		getUploads();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
						onChange={uploadHandler}
					></UploadInput>
				</Content>
			</UploadContainer>
			<UploadPreview>
				<PreviewContent>
					{fileList.length === 0 && <h2>Upload to get started!</h2>}
					{spinner && <Loading></Loading>}
					{previewHandler}
				</PreviewContent>
			</UploadPreview>
		</>
	);
}
