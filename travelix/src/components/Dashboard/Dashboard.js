import React from "react";
import { Wrapper, Content, Grid } from "./Dashboard.styles";
import SideBar from "../SideBar/SideBar";
import Breakdown from "../Graphs/Breakdown";
import Expenditure from "../Graphs/Expenditure";
import RecordsDash from "../Records/RecordsDash";

export default function Dashboard(props) {
	return (
		<Wrapper>
			<Content>
				<SideBar></SideBar>
				<Grid>
					<Breakdown></Breakdown>
					<Expenditure></Expenditure>
					<RecordsDash></RecordsDash>
				</Grid>
			</Content>
		</Wrapper>
	);
}
