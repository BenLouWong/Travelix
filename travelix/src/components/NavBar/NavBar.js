import React from "react";
import { Wrapper, Content, ContentInner, User } from "./NavBar.styles";
import NavButton from "../Buttons/NavButton";
import Logo from "../Logo/Logo";

export default function NavBar() {
	return (
		<Wrapper>
			<Content>
				<ContentInner>
					<Logo></Logo>
					<NavButton></NavButton>
				</ContentInner>
				<User></User>
			</Content>
		</Wrapper>
	);
}
