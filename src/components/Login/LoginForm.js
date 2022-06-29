import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function LoginForm({ Login, error }) {
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
		<form className="login-form" onSubmit={submitHandler}>
			<div className="form-inner">
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
				<Link to={"/profile"} className="button-link">
					<input type="submit" value="LOGIN"></input>
				</Link>
				<Link to={"/register"}>
					<p className="register">don't have an account?</p>
				</Link>
			</div>
		</form>
	);
}

export default LoginForm;
