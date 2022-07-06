import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
	return (
		<form className="register-form">
			<div className="form-inner">
				<h2 className="register-title">Register an Account</h2>
				<div className="details">
					<div className="personal-particulars">
						<div className="form-group">
							<label htmlFor="firstName">First Name</label>
							<input
								type="firstName"
								name="firstName"
								id="firstName"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="lastName">Last Name</label>
							<input
								type="lastName"
								name="lastName"
								id="lastName"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="contact">Contact Number</label>
							<input type="contact" name="contact" id="contact" />
						</div>
					</div>

					<div className="login-particulars">
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" />
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="repassword">Confirm Password</label>
							<input
								type="password"
								name="repassword"
								id="repassword"
							/>
						</div>

						<input
							className="register-button"
							type="submit"
							value="REGISTER"
						></input>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Register;
