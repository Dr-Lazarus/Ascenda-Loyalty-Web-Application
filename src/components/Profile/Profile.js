import React, { useState } from "react";
import "./Profile.css";

function Profile() {
	return (
		<div className="profile-master">
			<div className="profile-title">
				<h1>
					Welcome, <span>{"Oakar"}</span>
				</h1>
			</div>
			<div className="profile-details">
				<div className="profile-photo-col">
					<img
						className="john-profile"
						alt=""
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39af738b-9c56-4e10-92a5-0803596e9df5/dctl9nv-c11ac4c9-544e-4fe1-9104-09264df2255d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5YWY3MzhiLTljNTYtNGUxMC05MmE1LTA4MDM1OTZlOWRmNVwvZGN0bDludi1jMTFhYzRjOS01NDRlLTRmZTEtOTEwNC0wOTI2NGRmMjI1NWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V9a0LPCSYjd33FxUdDGMA4Wb_nHrJCgAbP7GA4zFEFE"
					/>
				</div>

				<div className="profile-detail-col">
					<div className="profile-entry">
						<label>First Name</label>
						<p>Oakar</p>
					</div>

					<div className="profile-entry">
						<label>Email</label>
						<p>oakkarrr00@gmail.com</p>
					</div>

					<div className="profile-entry">
						<label>Location</label>
						<p>Singapore</p>
					</div>
				</div>

				<div className="profile-detail-col">
					<div className="profile-entry">
						<label>Last Name</label>
						<p>Min</p>
					</div>
					<div className="profile-entry">
						<label>Contact Number</label>
						<p>+65 97795461</p>
					</div>
				</div>
			</div>
			<div className="buttons">
				<input
					className="button-row"
					type="submit"
					value="View Booking History"
				></input>
				<input
					className="button-row"
					type="submit"
					value="Edit Profile"
				></input>

				<input
					className="delete-account-button"
					type="submit"
					value="DELETE ACCOUNT"
				></input>
			</div>
		</div>
	);
}

export default Profile;
