import { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const history = useNavigate();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="relative h-[70vh] bg-center bg-[url('https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg')]">
			<div className='flex flex-col'>
				{showSearch && <Search />}

				<Button
					onClick={() => setShowSearch(!showSearch)}
					className='!bg-white !font-extrabold'
					variant='outlined'>
					{showSearch ? "Hide" : "Search Dates"}
				</Button>
			</div>
			<div className='sm:hidden bg-black w-80 pt-6 px-10 pb-8 text-white'>
				<p className='text-xl '>Get out and stretch your imagination</p>
				<p className='text-sm m-6 '>
					Plan a different kind of getaway to uncover the hidden gems near you.
				</p>
				<Button
					className='!bg-black !text-white !font-bold !z-30 !mt-6 hover:!bg-white hover:!text-[#ff7779]'
					onClick={() => history.push("/search")}
					variant='outlined'>
					Explore Nearby
				</Button>
			</div>
		</div>
	);
};

export default Banner;
