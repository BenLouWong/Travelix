import React from "react";

const RecordContext = React.createContext({
	items: [],
	openModal: () => {},
});

export default RecordContext;
