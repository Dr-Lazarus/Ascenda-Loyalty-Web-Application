import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@material-tailwind/react/components/Button";
import axios from "axios";

function Register() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("raw@wwe.com");
	const [password, setPassword] = useState("");
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [contact, setContact] = useState("");

	const submitHandler = (e) => {
		axios({
			method: "POST",
			url: "http://localhost:5001/api/users/register",
			data: {
				email: email,
				password: password,
				firstName: firstname,
				lastName: lastname,
				contactNumber: contact,
				pic: "pic",
			},
		})
			.then(function (response) {
				if (response.statusText === "OK") {
					console.log("success", "Registered successfully!");
					navigate("/profile");
				}
				console.log(response);
			})
			.catch(function (error) {
				console.log("error", error.response.data.message);
			});
	};
	return (
		<div className="flex justify-center p-20" data-testid="register-page">
			<form className="">
				<h2 className="text-5xl font-bold text-blue-500 mb-5">
					Register an Account
				</h2>
				<div className="flex flex-row justify-center">
					<div className="mr-20 w-52">
						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="firstName">First Name</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="firstName"
								name="firstName"
								id="firstName"
								data-testid="firstName-input"
								onChange={(e) => setfirstname(e.target.value)}
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="lastName">Last Name</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="lastName"
								name="lastName"
								id="lastName"
								data-testid="lastName-input"
								onChange={(e) => setlastname(e.target.value)}
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="contact">Contact Number</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="contact"
								name="contact"
								id="contact"
								data-testid="contactNumber-input"
								onChange={(e) => setContact(e.target.value)}
							/>
						</div>
					</div>

					<div className="w-52">
						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="email">Email</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="email"
								name="email"
								id="email"
								data-testid="email-input"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="password">Password</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="password"
								name="password"
								id="password"
								data-testid="password-input"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="repassword">Confirm Password</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="password"
								name="repassword"
								id="repassword"
								data-testid="confirm-password-input"
							/>
						</div>
						<Button
							id="registerbutton"
							className="mt-5 w-52"
							data-testid="register-button"
							onClick={submitHandler}
						>
							REGISTER
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Register;
