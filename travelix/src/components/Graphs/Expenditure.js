import React from "react";
import {
	Wrapper,
	CardTitle,
	ExpenditureContent,
	BudgetGraph,
	GraphInner,
	Content,
} from "./Expenditure.styles";
export default function Expenditure() {
	return (
		<Wrapper
			animate={{
				x: [18, -5, 0],
				opacity: [0.65, 1],
			}}
			transition={{ duration: 0.6 }}
		>
			<Content>
				<CardTitle>
					<h2>Expenditure</h2>
				</CardTitle>
				<ExpenditureContent>
					<h3>Budget</h3>
					<BudgetGraph>
						<GraphInner budget></GraphInner>
					</BudgetGraph>
					<h3>Expenditure</h3>
					<BudgetGraph>
						<GraphInner expenditure width="70%"></GraphInner>
					</BudgetGraph>
				</ExpenditureContent>
			</Content>
		</Wrapper>
	);
}
