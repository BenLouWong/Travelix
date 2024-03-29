import React from "react";
import { Wrapper, Content, CardTitle, ContentInner } from "./Breakdown.styles";
import { PieChart } from "react-minimal-pie-chart";
import { useContext } from "react";
import RecordContext from "../../store/record-context";

export default function Breakdown() {
	const reducer = (accumulator, curr) => accumulator + curr;

	const ctx = useContext(RecordContext);
	// console.log(ctx);

	const TransportDataHandler = () => {
		let TransportIdentifier = ctx.items.filter(
			(el) => el.selectedFilter === "Transport"
		);

		const TransportData =
			TransportIdentifier.length > 0
				? TransportIdentifier.map((el) => +el.value).reduce(reducer)
				: (TransportIdentifier = 1);
		return TransportData;
	};

	const AccomHandler = () => {
		let AccomIdentifier = ctx.items.filter(
			(el) => el.selectedFilter === "Accommodation"
		);
		const AccomData =
			AccomIdentifier.length > 0
				? AccomIdentifier.map((el) => +el.value).reduce(reducer)
				: (AccomIdentifier = 1);
		return AccomData;
	};

	const FoodHandler = () => {
		let FoodIdentifier = ctx.items.filter(
			(el) => el.selectedFilter === "Food"
		);
		const FoodData =
			FoodIdentifier.length > 0
				? FoodIdentifier.map((el) => +el.value).reduce(reducer)
				: (FoodIdentifier = 1);
		return FoodData;
	};

	const PassHandler = () => {
		let PassIdentifier = ctx.items.filter(
			(el) => el.selectedFilter === "Tickets"
		);
		const PassData =
			PassIdentifier.length > 0
				? PassIdentifier.map((el) => +el.value).reduce(reducer)
				: (PassIdentifier = 1);
		return PassData;
	};

	const OtherHandler = () => {
		let OtherIdentifier = ctx.items.filter(
			(el) => el.selectedFilter === "Miscellaneous"
		);
		const OtherData =
			OtherIdentifier.length > 0
				? OtherIdentifier.map((el) => +el.value).reduce(reducer)
				: (OtherIdentifier = 1);
		return OtherData;
	};

	const ShoppingHandler = () => {
		let ShoppingIdentifier = ctx.items.filter(
			(el) => el.selectedFilter === "Shopping"
		);
		const OtherData =
			ShoppingIdentifier.length > 0
				? ShoppingIdentifier.map((el) => +el.value).reduce(reducer)
				: (ShoppingIdentifier = 1);
		return OtherData;
	};

	return (
		<Wrapper
			animate={{
				y: [-18, 5, 0],
				opacity: [0.65, 1],
			}}
			transition={{ duration: 0.6 }}
		>
			<Content>
				<CardTitle>
					<h2>Breakdown</h2>
				</CardTitle>
				<ContentInner>
					<PieChart
						data={[
							{
								title: "Transport",
								// value: dispatch({
								// 	type: CONDITIONS.TRANSPORT,
								// 	item: ctx,
								// }),
								value: TransportDataHandler(),
								color: "var(--cat01)",
							},
							{
								title: "Accommodation",
								value: AccomHandler(),
								color: "var(--cat02)",
							},
							{
								title: "Food",
								value: FoodHandler(),
								color: "var(--cat03)",
							},
							{
								title: "Passes",
								value: PassHandler(),
								color: "var(--cat04)",
							},
							{
								title: "Other",
								value: OtherHandler(),
								color: "var(--cat05)",
							},
							{
								title: "Shopping",
								value: ShoppingHandler(),
								color: "var(--cat06)",
							},
						]}
						lineWidth={40}
						paddingAngle={1}
						animate={1}
						animationDuration={500}
						center={[70, 55]}
						viewBoxSize={[140, 140]}
					></PieChart>
				</ContentInner>
			</Content>
		</Wrapper>
	);
}
