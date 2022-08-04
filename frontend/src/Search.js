import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrBaby } from "react-icons/gr";
import { DateRange } from "react-date-range";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import Select from "react-select";

const Search = () => {
	const navigate = useNavigate();
	const [inputAdults, setInputAdults] = useState(1);
	const [inputRooms, setInputRooms] = useState(1);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [showDates, setShowDates] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [destinationObj, setdestinationObj] = useState({
		term: "Singapore, Singapore",
		uid: "RsBU",
		lat: 1.2800945,
		lng: 103.8509491,
		type: "city",
	});

	// get dates from date range picker
	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	// get destination
	const destinations = require("./destinations.json");
	// console.log(destinations.length);
	const uniqueData = [
		...destinations
			.reduce((map, obj) => map.set(obj.term, obj), new Map())
			.values(),
	];

	return (
		<div className=" flex flex-col md:flex-row backdrop-blue-3xl bg-white/50 p-2 md:space-x-10 justify-center">
			<div
				className=""
				//className=" flex flex-row bg-white rounded-full border-2 p-2 h-12 w-[330px] focus-within:border-blue-500"
			>
				<Select
					className=" w-full md:w-[330px] h-10 px-5 m-2"
					options={uniqueData.slice(0, 1000)}
					getOptionLabel={(option) => option.term}
					getOptionValue={(option) => option.uid}
					placeholder="Location..."
					defaultValue={{
						term: "Singapore, Singapore",
						uid: "WD0M",
						lat: 1.2800945,
						lng: 103.8509491,
						type: "city",
					}}
					value={destinationObj}
					onChange={(e) => setdestinationObj(e)}
				/>
			</div>
			<div className="flex flex-col z-12 items-center">
				{showDates && (
					<DateRange
						className="flex justify-center"
						ranges={[selectionRange]}
						onChange={handleSelect}
						minDate={new Date()}
					/>
				)}

				<button
					className=" w-full md:w-[330px] h-10 px-5 m-2 duration-300 border rounded-lg text-blue-500 font-semibold border-blue-400 hover:bg-white"
					data-testid="date-picker-button-test"
					onClick={() => setShowDates(!showDates)}
					variant="outlined"
				>
					{showDates ? "Hide" : "Select Dates"}
				</button>
			</div>
			<div className="flex flex-col text-lg z-10 w-full md:w-[330px] ">
				{showDetails && (
					<div
						className=" pb-4 flex flex-col gap-y-2 item-center"
						data-testid="travellers-button-test"
					>
						<div className="flex flex-row justify-between gap-x-6 p-2 bg-white  border rounded-lg border-blue-400">
							<div className="flex gap-x-2 items-center">
								<BsFillPeopleFill />
								<p>Number of Adults: </p>
							</div>
							<input
								className="w-16 right-4 outline-none rounded-lg "
								value={inputAdults}
								onInput={(e) => setInputAdults(e.target.value)}
								min={1}
								max={5}
								defaultValue={1}
								type="number"
								data-testid="num-adults-input"
							/>
						</div>
						<div className="flex flex-row justify-between gap-x-6 p-2  bg-white  border rounded-lg border-blue-400">
							<div className="flex gap-x-2 items-center">
								<FaBed className="scale-125" />
								<p>Number of Rooms: </p>
							</div>
							<input
								className="w-16 right-4 outline-none rounded-lg"
								value={inputRooms}
								onInput={(e) => setInputRooms(e.target.value)}
								min={1}
								max={3}
								defaultValue={1}
								type="number"
								data-testid="num-rooms-input"
							/>
						</div>
					</div>
				)}

				<button
					className="w-full md:w-[330px] h-10 px-5 m-2 duration-300  text-blue-500 font-semibold hover:bg-white  border rounded-lg border-blue-400"
					data-testid="travellers-button-test"
					onClick={() => setShowDetails(!showDetails)}
					variant="outlined"
				>
					{showDetails ? "hide" : "Travellers"}
				</button>
			</div>
			<div className="">
				<button
					className="flex w-full md:w-auto justify-center h-10 px-5 m-2 duration-200  bg-blue-500 hover:bg-white border rounded-lg transition ease-in transform hover:translate-y-1 active:translate-y-0"
					data-testid="search-button"
					onClick={() =>
						navigate("/search", {
							state: {
								destinationObj: destinationObj,
								start: startDate,
								end: endDate,
								inputAdults: inputAdults,
								inputRooms: inputRooms,
							},
						})
					}
				>
					<AiOutlineSearch className="mt-2 scale-125" />
				</button>
			</div>
		</div>
	);
};

export default Search;
