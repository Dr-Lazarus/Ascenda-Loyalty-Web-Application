import { useState } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="relative h-[80vh] bg-center bg-[url('https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg')]">
			<div className="flex flex-col relative justify-between z-10 bg-white/75">
				{showSearch && (
					<Search className="" data-testid="search-test" />
				)}

				<button
					className="w-full py-2 px-4 bg-transparent text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:translate-y-1 active:translate-y-0"
					onClick={() => setShowSearch(!showSearch)}
					variant="outlined"
					data-testid="showSearchButtonTest"
				>
					{showSearch ? "Hide" : "Book your next destination here!"}
				</button>
			</div>
			<div className="invisible md:visible absolute z-0 bottom-0 left-0 bg-black w-80 pt-6 px-10 pb-8 text-white">
				<p className="text-xl ">Get out and stretch your imagination</p>
				<p className="text-sm m-2 ">
					Plan a different kind of getaway to uncover the hidden gems
					near you.
				</p>
				<button
					className="!bg-black !text-white !font-bold !mt-6 hover:bg-white hover:!text-[#ff7779]"
					onClick={() => navigate("/search")}
					variant="outlined"
				>
					Explore Nearby
				</button>
			</div>
		</div>
	);
};

export default Banner;
