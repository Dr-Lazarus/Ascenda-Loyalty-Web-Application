import { useState } from "react";
import { DateRange } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useNavigate } from "react-router-dom";

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

	function handleSelect(ranges) {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
		// console.log("Selection: ", ranges.selection.startDate);
	}

	return (
		<div className="search">
			<DateRange ranges={[selectionRange]} onChange={handleSelect} />
			<h2>
				Number of guests <PeopleIcon />
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
