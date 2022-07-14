import Gmaps from "./Gmaps";
import { useLocation } from "react-router-dom";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const HotelDetails = () => {
	const location = useLocation();
	const hotel = location.state.data;
	const img =
		hotel.image_details.prefix +
		hotel.default_image_index +
		hotel.image_details.suffix;
	const address = hotel.address;
	const hotelName = hotel.name;
	const description = hotel.description;
	const amenities = Object.keys(hotel.amenities).join(" · ");
	const star = hotel.trustyou.score.kaligo_overall;
	const price = "$123";
	const total = "$1234";

	return (
		<>
			<div class="flex flex-col items-center bg-white rounded-lg shadow-md  m-6  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img
					class="object-cover w-full rounded-t-lg md:h-96   md:rounded-none md:rounded-l-lg"
					src={img}
					alt=""
				/>
				<div class="flex-1 flex-col justify-between p-4 leading-normal">
					<p class="mb-2 font-semibold tracking-tight text-gray-800 dark:text-white">
						{hotelName}
					</p>
					<p class="font-normal text-gray-700 dark:text-gray-400">
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
			<Gmaps />
		</>
	);
};

export default HotelDetails;
