import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "flowbite-react";
import Button from "@material-tailwind/react/components/Button";
import { useNavigate } from "react-router-dom";

const RoomDetails = ({
	data,
	hotelId,
	hotelName,
	startDate,
	endDate,
	numDaysStay,
	numAdults,
	numRooms,
}) => {
	const navigate = useNavigate();
	console.log(data);
	return (
		<Card>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{data.roomNormalizedDescription}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				Amenities: {data.amenities.join(" · ")}
			</p>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				Price: ${data.price}
			</p>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{`Lowest Price: ${data.lowest_price}`}
			</p>
			<button
				className="h-12 text-lg"
				onClick={() =>
					navigate(`/book/${hotelId}`, {
						state: {
							hotel: data,
							hotelName: hotelName,
							startDate: startDate,
							endDate: endDate,
							numDaysStay: numDaysStay,
							numAdults: numAdults,
							numRooms: numRooms,
						},
					})
				}
			>
				BOOK{" "}
			</button>
		</Card>
	);
};

export default RoomDetails;
