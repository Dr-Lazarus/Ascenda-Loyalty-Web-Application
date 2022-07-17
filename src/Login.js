import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

const Login = ({ Login, error }) => {
	const navigate = useNavigate();
	const location = useLocation();
	// const [details, setDetails] = useState({
	// 	email: "",
	// 	password: "",
	// });
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();
	const [contact, setContact] = useState("");
	var loginState = false;
	console.log(location.state);
	// if (location.state != null) {
	// 	navigate("/profile", {
	// 		state: {
	// 			firstName: firstName,
	// 			lastName: lastName,
	// 			email: email,
	// 			password: password,
	// 			loginState: location.state.loginState,
	// 			contact: contact,
	// 		},
	// 	});
	// }

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(email);
		if (email == "test@admin.com" && password == "123") {
			console.log("login to test successful");
			loginState = !loginState;
			console.log(loginState);
			navigate("/profile", {
				state: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					password: password,
					loginState: loginState,
					contact: contact,
				},
			});
		} else {
			alert(
				"Your account doesn't exit\nPlease click on \"don't have an account?\" to register. "
			);
		}

		// Login(details);
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
						id="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<Link to={"/profile"} className="button-login">
					<Button
						onClick={submitHandler}
						className="flex w-52 justify-center mt-5"
					>
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
