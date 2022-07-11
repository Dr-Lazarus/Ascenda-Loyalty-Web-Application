import { useState } from "react";
import Search from "./Search";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="relative h-96 bg-center bg-[url('https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg')]">
			<div className="flex flex-col relative items-center z-10">
				{showSearch && <Search className="" />}

				<Button
					onClick={() => setShowSearch(!showSearch)}
					variant="outlined"
				>
					{showSearch ? "Hide" : "Search Dates"}
				</Button>
			</div>
			<div className="md:visible absolute z-0 top-0 left-0 bg-black w-80 pt-6 px-10 pb-8 text-white">
				<p className="text-xl ">Get out and stretch your imagination</p>
				<p className="text-sm m-2 ">
					Plan a different kind of getaway to uncover the hidden gems
					near you.
				</p>
				<Button
					className="!bg-black !text-white !font-bold !mt-6 hover:!bg-white hover:!text-[#ff7779]"
					onClick={() => navigate("/search")}
					variant="outlined"
				>
					Explore Nearby
				</Button>
			</div>
		</div>
	);
};

export default Banner;
