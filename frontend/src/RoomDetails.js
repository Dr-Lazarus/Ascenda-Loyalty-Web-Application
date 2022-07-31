import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "flowbite-react";
import Button from "@material-tailwind/react/components/Button";
import { useNavigate } from "react-router-dom";

const RoomDetails = ({
	data,
	hotelId,
	hotelName,
	destinationId,
	startDate,
	endDate,
	numDaysStay,
	numAdults,
	numRooms,
}) => {
	const navigate = useNavigate();
	console.log(data);
	const setImage = () => {
		if (data.images == 0) {
			return "";
		}
		return data.images[0].url;
	};
	const img = setImage();
	return (
		<Card>
			<div className="flex flex-col md:flex-row h-fit w-full">
				<div className="w-1/2 ">
					<img
						className="rounded aspect-square w-full md:aspect-video"
						src={img}
						alt="No Image Available"
					></img>
				</div>
				<div className="w-1/2 mx-0 md:mx-4">
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{data.roomNormalizedDescription}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						{data.amenities.join(" · ")}
					</p>
					<div className="flex flex-col text-center items-end my-4">
						<p className="text-2xl font-bold text-end text-gray-700 dark:text-gray-400">
							{`$${data.price}/Night`}
						</p>
						<p className="text-end italic text-gray-700 dark:text-gray-400">
							{`Lowest Price: $${data.lowest_price}/Night`}
						</p>
						<Button
							className="h-12 text-lg"
							onClick={() =>
								navigate(`/book/${hotelId}`, {
									state: {
										hotel: data,
										hotelName: hotelName,

										hotelId: hotelId,
										destinationId: destinationId,

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
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default RoomDetails;
