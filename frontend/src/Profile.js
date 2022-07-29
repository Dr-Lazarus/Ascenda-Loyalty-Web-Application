import Button from "@material-tailwind/react/components/Button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const Profile = () => {
	const navigate = useNavigate();
	const { authed, token, logout } = useAuth();
	const location = useLocation();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [password, setPassword] = useState("");

	const warnDelete = () => {
		const delacc = window.confirm(
			"Are you sure that you want to DELETE YOUR ACCOUNT?"
		);
		if (delacc === true) {
			window.alert("Account deleted successfully");
			navigate("/");
		}
		console.log(delacc);
	};

	axios
		.get("http://localhost:5001/api/users/viewprofile", {
			headers: {
				Authorization: "Bearer " + token,
			},
		})
		.then(function (response) {
			if (response.statusText === "OK") {
				console.log("user data fetched successfully!");
				setFirstName(response.data.firstName);
				setLastName(response.data.lastName);
				setEmail(response.data.email);
				setContact(response.data.contactNumber);
			}
			console.log(response);
		})
		.catch(function (error) {
			console.log(token);
			console.log("error", error.response);
		});

	const handleEdit = (e) => {
		navigate("/edit-profile", {
			state: {
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				contact: contact,
			},
		});
	};
	const returnComingSoon = (e) => {
		window.alert("This feature will be implemented soon!");
	};
	const handleLogout = (e) => {
		logout();
		navigate("/");
	};
	const submitHandler = (e) => {

		axios({
			method: "GET",
			url: "http://localhost:5001/api/bookings/getBookingHistory",
			headers: {
				Authorization: "Bearer " + token,
			},
		})
			.then(async function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log("error", error.response.data.message);
			});
	};

	return (
		<div className="m5-50 ">
			<div className="justify-center text-5xl font-bold mb-10 mt-10">
				<h1 className="flex justify-center">
					{"Welcome, "}
					<span className="text-blue-500">{firstName}</span>
				</h1>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center">
				<div className="justify-center mx-12">
					<img
						className="rounded-full"
						alt=""
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39af738b-9c56-4e10-92a5-0803596e9df5/dctl9nv-c11ac4c9-544e-4fe1-9104-09264df2255d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5YWY3MzhiLTljNTYtNGUxMC05MmE1LTA4MDM1OTZlOWRmNVwvZGN0bDludi1jMTFhYzRjOS01NDRlLTRmZTEtOTEwNC0wOTI2NGRmMjI1NWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V9a0LPCSYjd33FxUdDGMA4Wb_nHrJCgAbP7GA4zFEFE"
					/>
				</div>

				<div className="mx-12">
					<div className="">
						<label className="text-xl font-bold">First Name</label>
						<p>{firstName}</p>
					</div>

					<div className="mt-8 mb-8">
						<label className="text-xl font-bold">Last Name</label>
						<p>{lastName}</p>
					</div>
				</div>

				<div className="mx-12">
					<div className="">
						<label className="text-xl font-bold">Email</label>
						<p>{email}</p>
					</div>

					<div className="mt-8 mb-8">
						<label className="text-xl font-bold">
							Contact Number
						</label>
						<p>{contact}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center mt-10 ">
				<Button
					className="w-48 h-16 mx-4 my-4"
					onClick={returnComingSoon}
				>
					My favourites
				</Button>
				<Button
					className="w-48 h-16 mx-4 my-4"
					onClick={submitHandler}
				>
					View Booking History
				</Button>
				<Button className="w-48 h-16 mx-4 my-4" onClick={handleEdit}>
					Edit Profile
				</Button>

				{authed && (
					<Button
						className="w-48 h-16 mx-4 my-4"
						onClick={handleLogout}
					>
						Logout
					</Button>
				)}
			</div>
			<div className="flex flex-row justify-center space-x-10 mt-10 mb-10">
				<Button
					className=" w-52 bg-red-600 hover:bg-white hover:text-red-600 hover:shadow-red-600"
					onClick={warnDelete}
				>
					DELETE ACCOUNT
				</Button>
			</div>
		</div>
	);
};

export default Profile;
