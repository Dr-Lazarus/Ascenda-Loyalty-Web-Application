import { useState, useEffect } from "react";
import Search from "./Search";
import {
	getHotelsPricesForDestinationAsync,
	getHotelInfoByIdAsync,
} from "./destinationSearch";
import { dateStringMaker } from "./dateStringMaker";
// import { button } from "flowbite-react";
import SearchResult from "./SearchResult";
import { useLocation } from "react-router-dom";
import { Pagination } from "flowbite-react";
import axios from "axios";

function SearchPage() {
	// const navigate = useNavigate();
	const location = useLocation();
	const [showSearch, setShowSearch] = useState(false);
	const [hotelsPageData, setHotelsPageData] = useState([]);
	const [hotelsPriceSorted, setHotelsPriceSorted] = useState([]);
	const [totalNumResults, setTotalNumResults] = useState(0);

	//pass dates from search to rendered results
	const days = (date_1, date_2) => {
		let difference = date_1.getTime() - date_2.getTime();
		let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
		return TotalDays;
	};

	const startdateobj = location.state.start;
	const enddateobj = location.state.end;
	const numDaysStay = days(enddateobj, startdateobj);
	const startDateString = dateStringMaker(startdateobj);
	const startDateStringReversed = dateStringMaker(startdateobj, true);
	const endDateString = dateStringMaker(enddateobj);
	const endDateStringReversed = dateStringMaker(enddateobj, true);
	//pass dates from search to rendered results

	//hotel sorted price fetching
	useEffect(() => {
		const f = async () => {
			const data = await getHotelsPricesForDestinationAsync(
				location.state.destinationObj.uid,
				startDateStringReversed,
				endDateStringReversed,
				"SGD",
				"SG",
				2
			);
			console.log("ran once");
			console.log(data);
			console.log(data.completed);
			setHotelsPriceSorted(data.hotels);
			setTotalNumResults(data.hotels.length);
		};
		setInterval(f, 8000);
	}, []);

	console.log("hi", hotelsPriceSorted);

	//hotel sorted price fetching

	// pagingation management

	const resultsPerPage = 10;
	// const currentPage = 1;

	const [page, setPage] = useState(1);

	const totalPages = Math.ceil(totalNumResults / resultsPerPage);
	console.log("totalPages", totalPages);

	const onPageChange = (page) => {
		setPage(page);
	};
	// useEffect(() => {
	// 	setPage(currentPage);
	// }, [currentPage]);
	// pagingation management

	//hotel on demand data fetching
	useEffect(() => {
		const lastIndex = page * resultsPerPage - 1;
		const firstIndex = lastIndex - resultsPerPage + 1;
		const thisPageHotels = hotelsPriceSorted.slice(
			firstIndex,
			lastIndex + 1
		);
		const getHotelData = async (thisPageHotels) => {
			const thisPageHotelsData = [];
			for (const hotel of thisPageHotels) {
				const hotelData = await getHotelInfoByIdAsync(hotel.id);
				console.log("hotelData", hotelData);
				thisPageHotelsData.push({ ...hotelData, ...hotel });
			}
			setHotelsPageData(thisPageHotelsData);
		};
		getHotelData(thisPageHotels);
	}, [page, hotelsPriceSorted]);

	console.log(hotelsPageData);

	//hotel on demand data fetching

	return (
		<div className="relative">
			<div className="flex flex-col relative justify-between z-10">
				{showSearch && <Search className="" />}

				<button
					className="w-full py-2 px-4 bg-transparent text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:translate-y-1 active:translate-y-0"
					onClick={() => setShowSearch(!showSearch)}
					variant="outlined"
				>
					{showSearch ? "Hide" : "Book your next desitnation here!"}
				</button>
			</div>
			<div className="p-6 space-4">
				<p className="mb-2">
					{totalNumResults} stays · {startDateString} to{" "}
					{endDateString} · {location.state.inputRooms} Rooms ·{" "}
					{location.state.inputAdults} Adults ·{" "}
					{location.state.inputChildren} Children
				</p>

				<p className="text-2xl font-bold mb-10">Stays nearby</p>
				<div className="flex flex-wrap gap-4">
					<button variant="outlined">Cancellation</button>
					<button variant="outlined">Type of place</button>
					<button variant="outlined">Price</button>
					<button variant="outlined">Rooms and beds</button>
					<button variant="outlined">More filters</button>
				</div>
			</div>
			{hotelsPageData.map((hotel) => (
				<SearchResult
					data={hotel}
					hotelId={hotel.id}
					destinationId={location.state.destinationObj.uid}
					price={hotel.price}
					total={
						Math.round(
							hotel.price *
								location.state.inputRooms *
								numDaysStay *
								100
						) / 100
					}
					numDaysStay={numDaysStay}
					startDateObj={startdateobj}
					endDateObj={enddateobj}
					numAdults={location.state.inputAdults}
					numRooms={location.state.inputRooms}
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
