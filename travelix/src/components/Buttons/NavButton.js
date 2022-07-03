import React from "react";
import { Button, ButtonAction } from "./NavButton.styles";
import { Link } from "react-router-dom";

export default function NavButton() {
	return (
		<>
			<Link to="/">
				<Button>Dashboard</Button>
			</Link>
			<Link to="/Records">
				<Button>Records</Button>
			</Link>
			<Link to="/Imports">
				<Button>Imports</Button>
			</Link>
			<Link to="/#">
				<Button>Test</Button>
			</Link>
			<ButtonAction>Sign up for Pro!</ButtonAction>
		</>
	);
}
