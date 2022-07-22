import { useState, useEffect } from "react";
import Search from "./Search";
import {
	getHotelsPricesForDestinationAsync,
	getHotelInfoByIdAsync,
} from "./destinationSearch";
import { Button } from "@material-tailwind/react";
import SearchResult from "./SearchResult";
import { useLocation } from "react-router-dom";
import { Pagination } from "flowbite-react";

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
	const startDateString =
		startdateobj.getDate() +
		"/" +
		(startdateobj.getMonth() + 1) +
		"/" +
		startdateobj.getFullYear();

	const startDateStringReversed =
		startdateobj.getFullYear() +
		"-" +
		(startdateobj.getMonth() + 1) +
		"-" +
		startdateobj.getDate();

	const endDateString =
		enddateobj.getDate() +
		"/" +
		(enddateobj.getMonth() + 1) +
		"/" +
		enddateobj.getFullYear();

	const endDateStringReversed =
		enddateobj.getFullYear() +
		"-" +
		(enddateobj.getMonth() + 1) +
		"-" +
		enddateobj.getDate();
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
			setHotelsPriceSorted(data.hotels);
			setTotalNumResults(data.hotels.length);
		};
		f();
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
					{totalNumResults} stays · {startDateString} to{" "}
					{endDateString} · {location.state.inputRooms} Rooms ·{" "}
					{location.state.inputAdults} Adults ·{" "}
					{location.state.inputChildren} Children
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
			{hotelsPageData.map((hotel) => (
				<SearchResult
					data={hotel}
					id={hotel.id}
					img={
						hotel.image_details.prefix +
						hotel.default_image_index +
						hotel.image_details.suffix
					}
					address={hotel.address}
					hotelName={hotel.name}
					description={
						hotel.description === " "
							? hotel.description
							: "<No description>"
					}
					amenities={
						Object.keys(hotel.amenities).join(" · ")
						// "<No Amenities Data>"
					}
					star={hotel.trustyou.score.kaligo_overall}
					price={"$ " + hotel.price}
					total={
						"$ " +
						Math.round(
							hotel.price *
								location.state.inputRooms *
								numDaysStay *
								100
						) /
							100
					}
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
