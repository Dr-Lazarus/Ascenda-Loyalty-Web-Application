import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrBaby } from "react-icons/gr";
import { DateRange } from "react-date-range";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBed } from "react-icons/fa";

function Search() {
	const navigate = useNavigate();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [showDates, setShowDates] = useState(false);

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	return (
		<div className=" flex flex-row backdrop-blue-3xl bg-white/30 p-2 space-x-10 justify-center ">
			<div className="relative flex flex-row bg-white rounded-full border-2 p-2 h-12">
				<input
					type="search"
					id="default-search"
					className="flex-1 min-w-96 outline-none"
					placeholder="Search location"
				/>
				{/* <AiOutlineSearch className="flex-none right-2 mt-1 scale-125" /> */}
			</div>
			<div className="flex flex-col relative justify-between z-10">
				{showDates && <DateRange />}

				<Button
					className="w-full"
					onClick={() => setShowDates(!showDates)}
					variant="outlined"
				>
					{showDates ? "hide" : "Search Dates"}
				</Button>
			</div>
			<div className=" pt-6 pb-4 flex flex-col gap-y-2">
				<div className="flex flex-row  gap-x-6 px-4">
					<div className="flex gap-x-2 items-center">
						<BsFillPeopleFill />
						<p>Number of Adults: </p>
					</div>
					<input
						className="w-10 right-4"
						min={0}
						defaultValue={2}
						type="number"
					/>
				</div>
				<div className="relative flex flex-row  gap-x-6 px-4">
					<div className="flex gap-x-2 items-center">
						<FaBed className="scale-125" />
						<p>Number of Rooms: </p>
					</div>
					<input
						className="w-10 absolute right-4"
						min={0}
						defaultValue={0}
						type="number"
					/>
				</div>

				<div className="relative flex flex-row  gap-x-6 px-4">
					<div className="flex gap-x-2 items-center">
						<GrBaby className="scale-125" />
						<p>Number of Children: </p>
					</div>
					<input
						className="w-10 absolute right-4"
						min={0}
						defaultValue={0}
						type="number"
					/>
				</div>

				<div className="absolute bottom-12 right-4">
					<Button
						onClick={() =>
							navigate("/search", {
								state: {
									start: startDate,
									end: endDate,
								},
							})
						}
					>
						Search Hotels
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Search;
