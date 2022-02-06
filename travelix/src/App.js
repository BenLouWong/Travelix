import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Records from "./components/Records/Records";
import Imports from "./components/Imports/Imports";
import NewRecordForm from "./components/Records/NewRecordForm";
import RecordContext from "./store/record-context";

function App() {
	const [modalState, setModalState] = useState(false);
	const [records, setRecords] = useState([]);

	const modalHandler = () => {
		setModalState(true);
	};

	const closeModalHandler = () => {
		setModalState(false);
	};

	const recordHandler = (records) => {
		setRecords((prevRecords) => {
			return [records, ...prevRecords];
		});
	};

	const recordContext = { items: [...records], openModal: modalHandler };

	return (
		<RecordContext.Provider value={recordContext}>
			<Router>
				{modalState && (
					<NewRecordForm
						onClose={closeModalHandler}
						onSubmitData={recordHandler}
					></NewRecordForm>
				)}
				<NavBar></NavBar>
				<Routes>
					<Route path="/" element={<Dashboard></Dashboard>}></Route>
					<Route path="Records" element={<Records></Records>}></Route>
					<Route path="Imports" element={<Imports></Imports>}></Route>
				</Routes>
			</Router>
		</RecordContext.Provider>
	);
}

export default App;
