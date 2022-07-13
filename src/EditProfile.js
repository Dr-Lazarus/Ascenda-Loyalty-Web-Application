import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import "./Profile.css";

const EditProfile = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const handleClick = (event) => {
		event.preventDefault();
		if (firstName == "" || lastName == "" || contact == "" || email == "") {
			alert("Please fill in ALL the details!");
		} else {
			navigate("/profile", {
				state: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					contact: contact,
				},
			});
		}
	};
	return (
		<div className="m5-50 ">
			<div className="justify-center text-5xl font-bold mb-10 mt-10">
				<h1 className="flex justify-center">
					Welcome, <span className="text-blue-500">{"Oakar"}</span>
				</h1>
			</div>
			<form className="flex flex-col md:flex-row justify-center items-center">
				<div className="justify-center mx-12">
					<img
						className="rounded-full"
						alt=""
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39af738b-9c56-4e10-92a5-0803596e9df5/dctl9nv-c11ac4c9-544e-4fe1-9104-09264df2255d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5YWY3MzhiLTljNTYtNGUxMC05MmE1LTA4MDM1OTZlOWRmNVwvZGN0bDludi1jMTFhYzRjOS01NDRlLTRmZTEtOTEwNC0wOTI2NGRmMjI1NWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V9a0LPCSYjd33FxUdDGMA4Wb_nHrJCgAbP7GA4zFEFE"
					/>
				</div>

				<div className="mx-12">
					<div className="flex flex-col w-48">
						<label className="text-xl font-bold">First Name</label>
						<input
							className="border-2 border-black rounded outline-none focus:border-blue-500"
							placeholder={firstName}
							value={firstName}
							type="text"
							onChange={(e) => setFirstName(e.target.value)}
						></input>
					</div>

					<div className="flex flex-col mt-8 mb-8">
						<label className="text-xl font-bold">Last Name</label>
						<input
							className="border-2 border-black rounded outline-none focus:border-blue-500"
							placeholder={lastName}
							value={lastName}
							type="text"
							onChange={(e) => setLastName(e.target.value)}
						></input>
					</div>
				</div>

				<div className="mx-12">
					<div className="flex flex-col w-48">
						<label className="text-xl font-bold">Email</label>
						<input
							className="border-2 border-black rounded outline-none focus:border-blue-500"
							placeholder={email}
							value={email}
							type="text"
							onChange={(e) => setEmail(e.target.value)}
						></input>
					</div>

					<div className="flex flex-col mt-8 mb-8">
						<label className="text-xl font-bold">
							Contact Number
						</label>
						<input
							className="border-2 border-black rounded outline-none focus:border-blue-500"
							placeholder={contact}
							value={contact}
							type="text"
							onChange={(e) => setContact(e.target.value)}
						></input>
					</div>
				</div>
			</form>
			<div className="flex flex-col md:flex-row items-center justify-center mt-10 mb-10">
				<Button className="w-48 h-16 mx-4 my-4" onClick={handleClick}>
					Confirm Details
				</Button>
			</div>
		</div>
	);
};

export default EditProfile;
