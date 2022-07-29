import { useLocation, useNavigate } from "react-router-dom";
import Button from "@material-tailwind/react/components/Button";
import { dateStringMaker } from "./dateStringMaker";
import useAuth from "./useAuth";
import axios from "axios";
import React, { useState } from "react";


const BookPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { token } = useAuth();
	const { userid } = useAuth();
	const destinationID = location.state.destinationId;
	const hotelID= location.state.hotelId;
	const Number_of_nights = location.state.numDaysStay;
	const startDate = location.state.startDate;
	const endDate = location.state.endDate;
	const  Number_of_adults = location.state.numAdults;
	const [message_to_hotel,setmessage_to_hotel] = useState("");
	const room_type = "Test_Hard_Coded"
	const  Number_of_rooms = location.state.numRooms;
	const price = 1000;
	const [salutation,setsalutation] =useState("");
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	

	const roomData = location.state.hotel;
	const hotelName = location.state.hotelName;
	
	const days = location.state.numDaysStay;
	const rooms = location.state.numRooms;
	const adults = location.state.numAdults;
	const totalCost = "$1000";
	const img = roomData.images[0]?.url;
	const submitHandler = (e) => {

		axios({
			method: "POST",
			url: "http://localhost:5001/api/bookings/createBooking",
			headers: {
				Authorization: "Bearer " + token,
			},
			data: {
				destinationID: destinationID,
				hotelID: hotelID,
				Number_of_nights: Number_of_nights,
				startDate: startDate,
				endDate: endDate,
				Number_of_adults: Number_of_adults,
				message_to_hotel:  message_to_hotel,
				room_type:  room_type,
				Number_of_rooms: Number_of_rooms,
				price: price,
				salutation: salutation,
				firstName: firstname,
				lastName:  lastname
			},
		})
			.then(async function (response) {
				if (response.statusText === "OK") {
					
					//const body = await response.json()
					window.location.href = response.data.url
					//console.log("success", "Booking Sucessful!");
					//navigate("/");
				}
				console.log(response);
			})
			.catch(function (error) {
				console.log("error", error.response.data.message);
			});
	};
	return (
		<div className="flex flex-col md:flex-row item-center bg-white rounded-lg shadow-md  m-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
			<div>
				<img
					className="m-2 rounded-lg h-[42vh] w-screen md:w-[40vw]"
					src={img}
					alt="Room"
				></img>
				<img
					className="m-2 rounded-lg h-[45vh] w-screen md:w-[40vw]"
					src={img}
					alt="Room"
				></img>
			</div>
			<div className="ml-5 mt-2">
				<h1 className="text-2xl font-bold">{hotelName}</h1>
				<h2 className="text-xl ">
					{roomData.roomNormalizedDescription}
				</h2>
				<p>
					This is the room description. This room is very big and very
					wide and very scenic and it is very good because it has a
					bed and a sink.
				</p>
				<div>
					<h2 className="mt-6 text-2xl font-bold ">
						Booking Details
					</h2>
					<form>
						<div className="flex flex-col md:flex-row justify-between w-full md:w-1/2">
				
							<select
								id="salutation"
								name="salutation"
								defaultValue={"Mr"}
								className="rounded m-2"
								placeholder=""
								onChange={(e) => setsalutation(e.target.value)}
								required
							>
								<option value="Mr">Mr</option>
								<option value="Ms">Ms</option>
								<option value="Mrs">Mrs</option>
								<option value="Dr">Dr</option>
								<option value="Prof">Prof</option>
							</select>
						
							<input
								className="rounded m-2"
								placeholder="First Name"
								type="text"
								id="firstName"
								onChange={(e) => setfirstname(e.target.value)}
								required

							/>
							
							<input
								className="rounded m-2"
								placeholder="Last Name"
								type="text"
								id="lastName"
								onChange={(e) => setlastname(e.target.value)}
								required
							/>
						</div>


						<div className="flex flex-col md:flex-row text-center md:justify-center md:space-x-12">
							<p className="m-2">
								{" "}
								Start Date:{" "}
								{dateStringMaker(location.state.startDate)}
							</p>
							<p className="m-2">
								{" "}
								End Date:{" "}
								{dateStringMaker(location.state.endDate)}
							</p>
							<p className="m-2">Number of nights: {days}</p>
						</div>
						<div className="flex flex-col justify-center mx-4 md:mx-48 my-4">
							<p>Message to Hotel</p>
							
							<input
								className="rounded w-full"
								type="text"
								size="20"
								style={{width: "500px",height: "200px" }}
								defaultValue={""}
								placeholder="Provide coach service from airport, Extra Bed"
								id="message_to_hotel"
								onChange={(e) => setmessage_to_hotel(e.target.value)}
							/>
						</div>

						<div className="flex flex-col md:flex-row text-center md:justify-center md:space-x-12">
							<p className="m-2">Number of Adults: {adults}</p>
							<p className="m-2">Number of Rooms: {rooms}</p>
						</div>

						<div className="flex flex-col items-center md:items-end align-right w-full md:w-5/6">
							<p className="flex justify-center md:justify-end text-2xl font-bold w-full my-2">
								Total: {totalCost}
							</p>
							<Button className="my-2" onClick={submitHandler}>Proceed to Payment</Button>
							{/* <p
								className="mr-2 hover:text-blue-500 hover:underline"
								onClick={() => navigate("/login")}
							>
								Login to Book
							</p> */}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default BookPage;
