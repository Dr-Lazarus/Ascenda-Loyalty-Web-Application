import { Button } from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

const Profile = () => {
	const navigate = useNavigate();
	const { authed, logout } = useAuth();
	const location = useLocation();
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
	const firstName = "Oakar";
	const lastName = "Min";
	const email = "oakkarrr00@gmail.com";
	const contact = "97795461";
	const password = "123";
	// console.log(location.state);
	// if (location.state.firstName !== "") {
	// 	firstName = location.state.firstName;
	// }
	// if (location.state.lastName !== "") {
	// 	lastName = location.state.lastName;
	// }
	// if (location.state.email !== "") {
	// 	email = location.state.email;
	// }
	// if (location.state.contact !== "") {
	// 	contact = location.state.contact;
	// }

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
					onClick={returnComingSoon}
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