import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { dateStringMaker } from "./dateStringMaker";
import { getHotelsPricesForHotelAsync } from "./destinationSearch";

const HotelDetails = () => {
	const location = useLocation();
	const hotelData = location.state.data;
	const hotelId = location.state.hotelId;
	const destinationId = location.state.destinationId;
	const img =
		hotelData.image_details.prefix +
		hotelData.default_image_index +
		hotelData.image_details.suffix;
	const address = hotelData.address;
	const hotelName = hotelData.name;
	const description = hotelData.description;
	const amenities = Object.keys(hotelData.amenities).join(" · ");
	const star = hotelData.trustyou.score.kaligo_overall;
	const price = location.state.price;
	const total = location.state.total;

	const [roomData, setRoomData] = useState([]);

	useEffect(() => {
		const fetchHotelRoomPrices = async () => {
			const data = await getHotelsPricesForHotelAsync(
				hotelId,
				destinationId,
				dateStringMaker(location.state.startDateObj, true),
				dateStringMaker(location.state.endDateObj, true),
				"SGD",
				"SG",
				location.state.numRooms
			);
			console.log(data);
			setRoomData(data);
		};
		fetchHotelRoomPrices();
	}, []);

	return (
		<>
			{/* <Gmaps /> */}
			<div className="flex flex-col items-center bg-white rounded-lg shadow-md  m-6  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img
					className="object-cover w-full rounded-t-lg md:h-96   md:rounded-none md:rounded-l-lg"
					src={img}
					alt=""
				/>
				<div className="flex-1 flex-col justify-between p-4 leading-normal">
					<p className="mb-2 font-semibold tracking-tight text-gray-800 dark:text-white">
						{hotelName}
					</p>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						{address}
					</p>
					<p className="mb-3 font-light text-sm text-gray-700 dark:text-gray-400">
						_____________
					</p>
					<div
						className=""
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
					<br className="md:hidden" />
					<p className="text-sm">{amenities}</p>
					<div className="flex flex-row justify-between  p-2">
						<div className="grid grid-cols-2 items-center">
							<AiFillStar className="scale-150" />
							<p className="font-bold text-xl">{star}</p>
						</div>
						<div>
							<h2>{price}</h2>
							<p>{total}</p>
						</div>
					</div>
				</div>
				<AiOutlineHeart className="flex-none absolute right-0 mt-6 mr-10 self-start scale-150" />
			</div>
		</>
	);
};

export default HotelDetails;
