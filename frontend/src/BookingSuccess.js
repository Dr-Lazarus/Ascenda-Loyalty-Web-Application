import { Link, useNavigate, useLocation } from "react-router-dom";

const BookingSuccess = () => {
	return (
		<div className="text-center bg-gradient-to-r from-cyan-500 to-blue-500">
			<h1 className="text-white font-bold text-5xl pt-36">
				Booking Successful!
			</h1>
			<p className="text-2xl mt-4 text-white font-thin">
				We wish for your best memories for your vacation.{" "}
			</p>
			<Link to={"/"} className="">
				<p className="text-sm mt-32 pb-8 text-black hover:underline hover:text-white">
					Go back to Main Page
				</p>
			</Link>
		</div>
	);
};

export default BookingSuccess;
