import styled from "styled-components";
import TravelIcon from "../../images/plane-solid.svg";
import AccomIcon from "../../images/hotel-solid.svg";
import FoodIcon from "../../images/utensils-solid.svg";
import TicketIcon from "../../images/ticket-alt-solid.svg";
import MiscIcon from "../../images/bookmark-solid.svg";
import Ellipsis from "../../images/ellipsis-v-solid.svg";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: auto;
	border-bottom: 1px solid #d3d3d3;
	transition: all 0.2s ease;

	:hover {
		background: var(--lightGrey);
	}
`;

export const RowItem = styled.div`
	width: auto;
	padding: 1.2rem 0.2rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const CatIcon = styled.div`
	background: black;
	border-radius: 50%;
	margin: 0 1rem;
	overflow: hidden;
	padding: 1rem;
`;

export const TransportIcon = styled(CatIcon)`
	background: url(${TravelIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-color: var(--cat01);
	background-size: 1rem;
`;

export const HotelIcon = styled(CatIcon)`
	background: url(${AccomIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-color: var(--cat02);
	background-size: 1rem;
`;

export const MealIcon = styled(HotelIcon)`
	background: url(${FoodIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-color: var(--cat03);
	background-size: 1rem;
`;

export const PassIcon = styled(HotelIcon)`
	background: url(${TicketIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-color: var(--cat04);
	background-size: 1rem;
`;

export const OtherIcon = styled(HotelIcon)`
	background: url(${MiscIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-color: var(--cat05);
	background-size: 1rem;
`;

export const ClickMore = styled.button`
	background: url(${Ellipsis});
	background-repeat: no-repeat;
	background-position: center;
	border: none;
	height: 40px;
	margin-left: 2rem;
	cursor: pointer;
`;
