import { Button, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
	const cancelHandler = () => {
		const cancel = window.confirm(
			"Are you sure you want to cancel this booking?\nBookingID: jxxxx"
		);
		if (cancel) {
			// do smth
		}
	};

	return (
		<div className="justify-center ">
			<h1 className="text-3xl font-bold my-10 text-center ">
				Booking History
			</h1>
			<Table className="table-auto text-center">
				<thead className=" border-grey border-b-2">
					<tr className="font-bold text-lg">
						<th>Booking ID</th>
						<th>Date of Booking</th>
						<th>Hotel Name </th>
						<th>Hotel ID </th>
						<th>Duration of stay</th>
						<th>Adults</th>
						<th>Rooms </th>
						<th>Status </th>
						<th>Actions </th>
					</tr>
				</thead>
				{/* to add on the entries, create a for loop and just render, if
				status is pending add a cancel button! */}
				<tr className="h-12 border-b-2 border-dotted">
					<td>hzzR</td>
					<td>31 July 2022</td>
					<td>Ascenda Sample </td>
					<td>Ascenda Sample ID </td>
					<td>5 Aug 2022 - 7 Aug 2022</td>
					<td>2</td>
					<td>1 </td>
					<td> Completed </td>
					<td> </td>
				</tr>
				<tr className="h-12 border-b-2 border-dotted">
					<td>jzzr</td>
					<td>23 September 2022</td>
					<td>Hotel 81 </td>
					<td>Hotel 81 ID </td>
					<td>9 Dec 2022 - 12 Dec 2022</td>
					<td>2</td>
					<td>1 </td>
					<td> Pending </td>
					<td
						className="hover:underline hover:text-red-700"
						onClick={cancelHandler}
					>
						{" "}
						Cancel Booking{" "}
					</td>
				</tr>
			</Table>

			<div className="mt-6 mb-10 text-center font-thin">
				<p>End of Entries</p>
			</div>
		</div>
	);
};

export default BookingHistory;
