import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function Register() {
	return (
		<div className="flex justify-center p-20">
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
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="lastName">Last Name</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="lastName"
								name="lastName"
								id="lastName"
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="contact">Contact Number</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="contact"
								name="contact"
								id="contact"
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
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="password">Password</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="password"
								name="password"
								id="password"
							/>
						</div>

						<div className="flex flex-col mt-2 mb-2">
							<label htmlFor="repassword">Confirm Password</label>
							<input
								className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
								type="password"
								name="repassword"
								id="repassword"
							/>
						</div>
						<Button id = "registerbutton" className="mt-5 w-52">REGISTER</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Register;
