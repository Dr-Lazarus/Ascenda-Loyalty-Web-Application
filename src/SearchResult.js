import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const SearchResult = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) => {
	return (
		<a
			href="/"
			class="flex flex-col items-center bg-white rounded-lg shadow-md  m-6 md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<img
				class="object-cover md:object-fill w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
				src={img}
				alt=""
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<p class="mb-2 font-semibold tracking-tight text-gray-800 dark:text-white">
					{location}
				</p>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					{title}
				</p>
				<p className="mb-3 font-light text-sm text-gray-700 dark:text-gray-400">
					_____________
				</p>
				<p>{description}</p>
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
		</a>
	);
};

export default SearchResult;

// 				<h2>{price}</h2>
// 				<p>{total}</p>
