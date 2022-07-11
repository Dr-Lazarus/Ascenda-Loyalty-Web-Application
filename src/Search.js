import { useState } from "react";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { BsFillPeopleFill } from "react-icons/bs";

// DATE PICKER COMPONENT
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
		<div className="search">
			<DateRange ranges={[selectionRange]} onChange={handleSelect} />
			<h2>
				Number of guests <BsFillPeopleFill />
			</h2>
			<input min={0} defaultValue={2} type="number" />
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
				Search Airbnb
			</Button>
		</div>
	);
}

export default Search;
