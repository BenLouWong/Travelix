import React from "react";
import RecordContext from "./record-context";

export default function RecordProvider(props) {
	const recordContext = {
		items: [],
		uploads: [],
	};

	return (
		<RecordContext.Provider value={recordContext}>
			{props.children}
		</RecordContext.Provider>
	);
}
