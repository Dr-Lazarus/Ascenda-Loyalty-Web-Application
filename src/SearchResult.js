import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchResult = ({
	data,
	id,
	img,
	address,
	hotelName,
	description,
	amenities,
	star,
	price,
	total,
}) => {
	console.log("id: " + id);
	const navigate = useNavigate();
	return (
		<div
			onClick={() =>
				navigate(`/hotel/${id}`, {
					state: { data: data },
				})
			}
			class="flex flex-col items-center bg-white rounded-lg shadow-md  m-6 md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<img
				class="object-cover md:object-fill w-full h-96 rounded-t-lg md:h-48 md:w-96 md:rounded-none md:rounded-l-lg"
				src={img}
				alt="boo hoo"
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
				{/* <div
					className="md:hidden"
					dangerouslySetInnerHTML={{
						__html: description.match(/<p>(.*?)<\/p>/)[0],
					}}
				/> */}
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
	);
};

export default SearchResult;
