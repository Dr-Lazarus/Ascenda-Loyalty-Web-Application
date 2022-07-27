import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import "./Profile.css";

const EditProfile = () => {
	const navigate = useNavigate();
	const location = useLocation();
	var firstName = location.state.firstName;
	var lastName = location.state.lastName;
	var email = location.state.email;
	var contact = location.state.contact;
	var loginState = location.state.loginState;
	const handleClick = (event) => {
		event.preventDefault();
		if (
			firstName === "" ||
			lastName === "" ||
			contact === "" ||
			email === ""
		) {
			alert("Please fill in ALL the details!");
		} else {
			navigate("/profile", {
				state: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					loginState: location.state.loginState,
					contact: contact,
				},
			});
		}
	};
	// const handleChangePassword = (e) => {
	// 	console.log(location.state.password);
	// 	const currentPassword = prompt("Please type your current password: ");
	// 	if (currentPassword == location.state.password) {
	// 		const newPassword = prompt("Please type your new password: ");
	// 		const confirmPassword = prompt(
	// 			"Please confirm your new password: "
	// 		);
	// 	} else {
	// 		alert("Incorrect Current Password!");
	// 	}
	// };
	const handleBack = (event) => {
		navigate("/profile", {
			state: {
				firstName: firstName,
				lastName: lastName,
				email: email,
				loginState: location.state.loginState,
				contact: contact,
			},
		});
	};

	const resetPasswordHandler = (e) => {
		navigate("/change-password", {
			state: {
				firstName: firstName,
				lastName: lastName,
				email: email,
				loginState: location.state.loginState,
				contact: contact,
			},
		});
	};

	return (
		<div className="m5-50 ">
			<div className="justify-center text-5xl font-bold mb-10 mt-10">
				<h1 className="flex justify-center">
					Welcome, <span className="text-blue-500">{firstName}</span>
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
							type="text"
							onChange={(e) => (firstName = e.target.value)}
						></input>
					</div>

					<div className="flex flex-col mt-8 mb-8">
						<label className="text-xl font-bold">Last Name</label>
						<input
							className="border-2 border-black rounded outline-none focus:border-blue-500"
							placeholder={lastName}
							type="text"
							onChange={(e) => (lastName = e.target.value)}
						></input>
					</div>
				</div>

				<div className="mx-12">
					<div className="flex flex-col w-48">
						<label className="text-xl font-bold">Email</label>
						<input
							className="border-2 border-black rounded outline-none focus:border-blue-500"
							placeholder={email}
							type="text"
							onChange={(e) => (email = e.target.value)}
						></input>
					</div>

					<div className="flex flex-col mt-8 mb-8">
						<label className="text-xl font-bold">
							Contact Number
						</label>
						<input
							className="border-2 border-black rounded outline-none focus:border-blue-500"
							placeholder={contact}
							type="text"
							onChange={(e) => (contact = e.target.value)}
						></input>
					</div>
				</div>
			</form>
			<div className="flex flex-col md:flex-row items-center justify-center mt-10">
				<button className="w-48 h-16 mx-4 my-4" onClick={handleClick}>
					Confirm Details
				</button>
				<button className="w-48 h-16 mx-4 my-4" onClick={handleBack}>
					Back
				</button>
			</div>
			<p
				onClick={resetPasswordHandler}
				className="text-center mb-10 text-sm hover:underline hover:text-blue-500"
			>
				Reset Password
			</p>
		</div>
	);
};

export default EditProfile;
