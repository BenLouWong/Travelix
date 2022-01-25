import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Records from "./components/Records/Records";
import Imports from "./components/Imports/Imports";
import NewRecordForm from "./components/Records/NewRecordForm";

function App() {
	const [modalState, setModalState] = useState(false);

	const modalHandler = () => {
		setModalState(true);
	};

	const closeModal = () => {
		setModalState(false);
	};

	return (
		<Router>
			{modalState && <NewRecordForm onClose={closeModal}></NewRecordForm>}
			<NavBar></NavBar>
			<Routes>
				<Route
					path="/"
					element={<Dashboard onShowForm={modalHandler}></Dashboard>}
				></Route>
				<Route path="Imports" element={<Imports></Imports>}></Route>
				<Route path="Records" element={<Records></Records>}></Route>
			</Routes>
		</Router>
	);
}

export default App;
