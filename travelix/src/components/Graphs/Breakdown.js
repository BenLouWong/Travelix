import React from "react";
import { Wrapper, Content, CardTitle, ContentInner } from "./Breakdown.styles";
import { PieChart } from "react-minimal-pie-chart";

export default function Breakdown() {
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
							{ title: "One", value: 10, color: "var(--cat04)" },
							{ title: "Two", value: 15, color: "var(--cat02)" },
							{
								title: "Three",
								value: 20,
								color: "var(--cat03)",
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
