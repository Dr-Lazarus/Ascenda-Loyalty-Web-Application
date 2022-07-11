import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
// import "./Profile.css";

const Profile = () => {
	return (
		<div className="m5-50 ">
			<div className="text-5xl font-bold mb-10 mt-10">
				<h1 className="flex justify-center">
					Welcome, <span className="text-blue-500">{"Oakar"}</span>
				</h1>
			</div>
			<div className="flex flex-row justify-center space-x-28">
				<div className="">
					<img
						className="rounded-full"
						alt=""
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39af738b-9c56-4e10-92a5-0803596e9df5/dctl9nv-c11ac4c9-544e-4fe1-9104-09264df2255d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5YWY3MzhiLTljNTYtNGUxMC05MmE1LTA4MDM1OTZlOWRmNVwvZGN0bDludi1jMTFhYzRjOS01NDRlLTRmZTEtOTEwNC0wOTI2NGRmMjI1NWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V9a0LPCSYjd33FxUdDGMA4Wb_nHrJCgAbP7GA4zFEFE"
					/>
				</div>

				<div className="">
					<div className="mt-5 mb-5">
						<label className="text-xl font-bold">First Name</label>
						<p>Oakar</p>
					</div>

					<div className="mt-5 mb-5">
						<label className="text-xl font-bold">Email</label>
						<p>oakkarrr00@gmail.com</p>
					</div>

					<div className="mt-5 mb-5">
						<label className="text-xl font-bold">Location</label>
						<p>Singapore</p>
					</div>
				</div>

				<div className="profile-detail-col">
					<div className="mt-5 mb-5">
						<label className="text-xl font-bold">Last Name</label>
						<p>Min</p>
					</div>
					<div className="mt-5 mb-5">
						<label className="text-xl font-bold">
							Contact Number
						</label>
						<p>+65 97795461</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-center space-x-10 mt-10 mb-10">
				<Button className="w-48">My favourites</Button>
				<Button className="w-48">View Booking History</Button>
				<Button className="w-48">Edit Profile</Button>
				<Button className="w-48">Logout</Button>
			</div>
			<div className="flex flex-row justify-center space-x-10 mt-10 mb-10">
				<Button className=" w-52 bg-red-600 hover:bg-white hover:text-red-600 hover:shadow-red-600">
					DELETE ACCOUNT
				</Button>
			</div>
		</div>
	);
};

export default Profile;
