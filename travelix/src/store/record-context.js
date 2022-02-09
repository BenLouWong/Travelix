import React from "react";

const RecordContext = React.createContext({
	items: [],
	openModal: () => {},
	closeModal: () => {},
});

export default RecordContext;
