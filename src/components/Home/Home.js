import "./Home.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { CalendarContainer } from "react-datepicker";

function Home() {
	return (
		<div className="home">
			<div className="search">
				<h1>Travel AnyWhere!</h1>
				<form className="search-form">
					<input className="search-destination" type="text" />
					<DateRangePickerComponent />
					<label className="label-adults" for="number-of-adults">
						Number of Adults
					</label>
					<select className="number-of-adults" id="number-of-adults">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>

					<label className="label-rooms" for="number-of-rooms">
						Number of Rooms
					</label>
					<select className="number-of-rooms" id="number-of-rooms">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</form>
			</div>
			<img
				className="deez"
				alt=""
				src="https://yt3.ggpht.com/l79cKyw3U8UsZJkdwTkvGoKI_pKu-63-s9eHuuTDM1zyy9ywYSMdJ4BjnozwovFSifX1uto9=s900-c-k-c0x00ffffff-no-rj"
			/>
		</div>
	);
}

export default Home;
