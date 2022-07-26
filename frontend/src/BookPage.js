import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@material-tailwind/react/components/Button";
const BookPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const hotelData = location.state.hotel;
	const hotelName = hotelData.name;
	const roomType = "This Room";
	const startDate = new Date();
	const startDateString =
		startDate.getDate() +
		"/" +
		(startDate.getMonth() + 1) +
		"/" +
		startDate.getFullYear();
	const endDateString =
		startDate.getDate() +
		4 +
		"/" +
		(startDate.getMonth() + 1) +
		"/" +
		startDate.getFullYear();
	const days = 4;
	const rooms = 1;
	const adults = 2;
	const children = 0;
	const totalCost = 420;
	const img =
		hotelData.image_details.prefix +
		hotelData.default_image_index +
		hotelData.image_details.suffix;
	const img1 =
		hotelData.image_details.prefix +
		(hotelData.default_image_index + 1) +
		hotelData.image_details.suffix;
	return (
		<div className="flex flex-col md:flex-row item-center bg-white rounded-lg shadow-md  m-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
			<div>
				<img
					className="m-2 rounded-lg h-[42vh] w-screen md:w-[40vw]"
					src={img}
				></img>
				<img
					className="m-2 rounded-lg h-[45vh] w-screen md:w-[40vw]"
					src={img1}
				></img>
			</div>
			<div className="ml-5 mt-2">
				<h1 className="text-2xl font-bold">{hotelName}</h1>
				<h2 className="text-xl ">{roomType}</h2>
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
								className="rounded m-2"
								placeholder=""
								required
							>
								<option value="mr">Mr</option>
								<option value="ms">Ms</option>
								<option value="mrs">Mrs</option>
								<option value="dr">Dr</option>
								<option value="prof">Prof</option>
							</select>
							<input
								className="rounded m-2"
								placeholder="First Name"
								type="text"
								required
							/>
							<input
								className="rounded m-2"
								placeholder="Last Name"
								type="text"
								required
							/>
						</div>

						<div className="flex flex-col md:flex-row justify-between w-full md:w-1/2">
							<input
								className="rounded m-2 md:w-full"
								placeholder="Credit card number"
								min={0}
								size={16}
								type="number"
								required
							/>
							<input
								className="rounded m-2 w-24"
								placeholder="CVV"
								min={0}
								size={3}
								type="number"
								required
							/>
						</div>

						<div className="flex flex-col md:flex-row text-center md:justify-center md:space-x-12">
							<p className="m-2">
								{" "}
								Start Date: {startDateString}
							</p>
							<p className="m-2"> End Date: {endDateString}</p>
							<p className="m-2">Number of nights: {days}</p>
						</div>
						<div className="flex flex-col justify-center mx-4 md:mx-48 my-4">
							<p>Message to Hotel</p>
							<textarea
								className="rounded w-full"
								type="text"
								rows="5"
								placeholder="Provide coach service from airport, Extra Bed"
							/>
						</div>

						<div className="flex flex-col md:flex-row text-center md:justify-center md:space-x-12">
							<p className="m-2">Number of Adults: {adults}</p>
							<p className="m-2">Number of Rooms: {rooms}</p>
							<p className="m-2">
								Number of Children: {children}
							</p>
						</div>

						<div className="flex flex-col items-center md:items-end align-right w-full md:w-5/6">
							<p className="flex justify-center md:justify-end text-2xl font-bold w-full my-2">
								Total: $ {totalCost}
							</p>
							<Button className="my-2">Proceed to Payment</Button>
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
