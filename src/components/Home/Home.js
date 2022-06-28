import "./Home.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./react-datepicker.css";
// import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { CalendarContainer } from "react-datepicker";
// import { DateRangePicker } from "rsuite";

function Home() {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	function onChangeHandler(value) {
		setStartDate(value[0]);
		setEndDate(value[1]);
	}
	return (
		<div className="master">
			<div className="title">
				<h1>
					<h1>Travel AnyWhere!</h1>
				</h1>
			</div>
			<form className="search-form">
				<div className="search-1">
					<div className="search-input">
						<h3>Destination</h3>
						<input className="input-destination" type="text" />
					</div>
					<div className="search-input">
						<h3>Period of stay</h3>
						<DatePicker
							className="date-range"
							id="dateStartEnd"
							selectsRange={true}
							startDate={startDate}
							endDate={endDate}
							onChange={onChangeHandler}
							dateFormat="dd MMM yyyy"
							showDisabledMonthNavigation
						/>
					</div>
				</div>
				<div className="search-2">
					<label className="label" for="number-of-adults">
						Adults
					</label>
					<select className="options" id="number-of-adults">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>

					<label className="label" for="number-of-rooms">
						Rooms
					</label>
					<select className="options" id="number-of-rooms">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>

					<label className="label" for="number-of-children">
						Children
					</label>
					<select className="options" id="number-of-children">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<input
						className="search-button"
						type="submit"
						value="SEARCH"
					></input>
				</div>
			</form>
			<div className="items">
				<img
					className="deez"
					alt=""
					src="https://yt3.ggpht.com/l79cKyw3U8UsZJkdwTkvGoKI_pKu-63-s9eHuuTDM1zyy9ywYSMdJ4BjnozwovFSifX1uto9=s900-c-k-c0x00ffffff-no-rj"
				/>
			</div>
			<div>
				<img
					className="mj"
					alt="michael-jordan"
					src="https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYwODYxMjIwNzM0MjQ3OTkx/michael-jordan-getty-1965683.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
