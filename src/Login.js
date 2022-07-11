import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Login = ({ Login, error }) => {
	const [details, setDetails] = useState({
		name: "",
		email: "",
		password: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();
		Login(details);
	};

	return (
		<div className="flex justify-center  p-20">
			<form className="" onSubmit={submitHandler}>
				<h2 className="text-5xl font-bold text-blue-500 mb-5">Login</h2>
				{error !== "" ? <div className="error">{error}</div> : ""}
				<div className="flex flex-col mt-2">
					<label className="text-lg" htmlFor="email">
						Email
					</label>
					<input
						className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
						type="email"
						name="email"
						id="email"
						onChange={(e) =>
							setDetails({ ...details, email: e.target.value })
						}
						value={details.email}
					/>
				</div>
				<div className="flex flex-col mt-2">
					<label className="text-lg" htmlFor="password">
						Password
					</label>
					<input
						className="border-2 border-black rounded h-8 duration-300 focus:outline-none focus-within:border-blue-500"
						type="password"
						name="password"
						id="password"
						onChange={(e) =>
							setDetails({
								...details,
								password: e.target.value,
							})
						}
						value={details.password}
					/>
				</div>
				<Link to={"/profile"} className="button-login">
					<Button className="flex w-52 justify-center mt-5">
						LOGIN
					</Button>
				</Link>

				<Link to={"/register"} className="button-register">
					<p className="mt-2 text-sm">don't have an account?</p>
				</Link>
			</form>
		</div>
	);
};

export default Login;
