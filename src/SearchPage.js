import { useState, useEffect } from "react";
import Search from "./Search";
import { Button } from "@material-tailwind/react";
import SearchResult from "./SearchResult";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";

function SearchPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const [showSearch, setShowSearch] = useState(false);
	const [hotels, setHotels] = useState([]);

	//pass dates from search to rendered results
	const startdateobj = location.state.start;
	const enddateobj = location.state.end;
	const startDateString =
		startdateobj.getDate() +
		"/" +
		(startdateobj.getMonth() + 1) +
		"/" +
		startdateobj.getFullYear();

	const endDateString =
		enddateobj.getDate() +
		"/" +
		(enddateobj.getMonth() + 1) +
		"/" +
		enddateobj.getFullYear();
	//pass dates from search to rendered results

	// pagingation management
	const currentPage = 1;
	const totalPages = 100;

	const [page, setPage] = useState(currentPage);

	const onPageChange = (page) => {
		setPage(page);
	};

	useEffect(() => {
		setPage(currentPage);
	}, [currentPage]);
	// pagingation management

	//hotel fetching
	useEffect(() => {
		const getHotels = async () => {
			const getHotelsFromServer = await fetchHotels();
			setHotels(getHotelsFromServer);
		};
		getHotels();
	}, []);

	const fetchHotels = async () => {
		const res = await fetch("http://localhost:5001/Hotels");
		const data = res.json();
		return data;
	};
	//hotel fetching

	return (
		<div className="relative">
			<div className="flex flex-col relative justify-between z-10">
				{showSearch && <Search className="" />}

				<Button
					className="w-full h-16 text-lg duration-300 hover:bg-white"
					onClick={() => setShowSearch(!showSearch)}
					variant="outlined"
				>
					{showSearch ? "Hide" : "Book your next desitnation here!"}
				</Button>
			</div>
			<div className="p-6 space-4">
				<p className="mb-2">
					62 stays · {startDateString} to {endDateString} · 2 guest
				</p>

				<p className="text-2xl font-bold mb-10">Stays nearby</p>
				<div className="flex flex-wrap gap-4">
					<Button variant="outlined">Cancellation</Button>
					<Button variant="outlined">Type of place</Button>
					<Button variant="outlined">Price</Button>
					<Button variant="outlined">Rooms and beds</Button>
					<Button variant="outlined">More filters</Button>
				</div>
			</div>
			{hotels.map((hotel) => (
				<SearchResult
					img={hotel.img}
					location={hotel.location}
					title={hotel.title}
					description={hotel.description}
					star={hotel.star}
					price={hotel.price}
					total={hotel.total}
				/>
			))}

			<div className="flex items-center justify-center text-center">
				<Pagination
					className=""
					onPageChange={onPageChange}
					currentPage={page}
					showIcons={true}
					totalPages={totalPages}
				/>
			</div>
		</div>
	);
}

export default SearchPage;
