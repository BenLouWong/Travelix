import React from "react";
import { Wrapper, Content, Grid } from "../Dashboard/Dashboard.styles";
import SideBar from "../SideBar/SideBar";
import RecordsDash from "../Records/RecordsDash";

export default function Records(props) {
	return (
		<Wrapper>
			<Content>
				<SideBar></SideBar>
				<Grid>
					<RecordsDash onShowForm={props.onShowForm}></RecordsDash>
				</Grid>
			</Content>
		</Wrapper>
	);
}
