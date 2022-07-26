import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import useAuth from "./useAuth";

const Login = ({ Login, error }) => {
	const navigate = useNavigate();
	const { authed, login } = useAuth();
	const { state } = useLocation();

	// const [firstName, setFirstName] = useState("john");
	// const [lastName, setLastName] = useState("cena");
	const [email, setEmail] = useState("raw@wwe.com");
	const [password, setPassword] = useState();
	// const [contact, setContact] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		login(email, password).then(
			() => {
				console.log("promise", authed);
				console.log(state?.path);
				navigate(state?.path || "/profile", {
					state: state.prev_data,
				});
			},
			() => {
				alert(
					"Your account doesn't exit\nPlease click on \"don't have an account?\" to register. "
				);
			}
		);
	};

	return (
		<div className="flex justify-center  p-20" data-testid="login-page">
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
						data-testid="email-input"
						onChange={(e) => setEmail(e.target.value)}
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
						data-testid="password-input"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<Button
					onClick={submitHandler}
					className="flex w-52 justify-center mt-5"
					data-testid="test-button"
				>
					LOGIN
				</Button>

				<Link to={"/register"} className="button-register">
					<p className="mt-2 text-sm">don't have an account?</p>
				</Link>
			</form>
		</div>
	);
};

export default Login;
