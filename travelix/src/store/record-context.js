import React from "react";

const RecordContext = React.createContext({
	items: [],
	openModal: () => {},
	closeModal: () => {},
	uploads: [],
});

export default RecordContext;
