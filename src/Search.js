import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrBaby } from "react-icons/gr";
import { DateRange } from "react-date-range";

function Search() {
	const navigate = useNavigate();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

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
		<div>
			<DateRange ranges={[selectionRange]} onChange={handleSelect} />
			<div className="relative bg-grey-100 pt-6 pb-4 flex-1 flex-col gap-y-2 items-center">
				<div className="relative flex flex-row  gap-x-6 px-4">
					<div className="flex gap-x-2 items-center">
						<BsFillPeopleFill />
						<p>Number of Adults: </p>
					</div>
					<input
						className="w-10 absolute right-4"
						min={0}
						defaultValue={2}
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

				<div className="justify-self-center">
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
