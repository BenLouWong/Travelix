import React from "react";
import {
	Wrapper,
	CardTitle,
	ExpenditureContent,
	BudgetGraph,
	GraphInner,
	Content,
} from "./Expenditure.styles";
import { useContext } from "react";
import RecordContext from "../../store/record-context";

export default function Expenditure() {
	const ctx = useContext(RecordContext);

	const testBudget = 5000;
	let sumArr = [0];
	ctx.items.map((el) => sumArr.push(+el.value));
	const reducer = (accumulator, curr) => accumulator + curr;
	const sum = sumArr.reduce(reducer);

	const widthHandler = () => {
		if (sumArr.length === 0) {
			return "0%";
		} else {
			const widthPercentage = (sum / testBudget) * 100;
			return `${widthPercentage.toString()}%`;
		}
	};

	const expenditureHeaderHandler = `${
		sum >= testBudget ? "You have exceeded your budget!" : `$${sum}`
	}`;

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
					<h3>Budget - ${testBudget}</h3>
					<BudgetGraph>
						<GraphInner budget></GraphInner>
					</BudgetGraph>
					<h3>Expenditure - {expenditureHeaderHandler}</h3>
					<BudgetGraph>
						<GraphInner
							expenditure
							width={widthHandler}
						></GraphInner>
					</BudgetGraph>
				</ExpenditureContent>
			</Content>
		</Wrapper>
	);
}
