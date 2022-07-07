import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ Login, error }) {
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
		<div className="form-inner-login">
			<form className="login-form" onSubmit={submitHandler}>
				<h2>Login</h2>
				{error !== "" ? <div className="error">{error}</div> : ""}
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) =>
							setDetails({ ...details, email: e.target.value })
						}
						value={details.email}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
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
					<input type="submit" value="LOGIN"></input>
				</Link>
				<Link to={"/register"} className="button-register">
					<p className="register">don't have an account?</p>
				</Link>
			</form>
		</div>
	);
}

export default Login;
