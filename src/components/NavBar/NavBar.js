import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<navbar>
			<div className="nav-bar">
				<li className="home-button">
					<Link to={"/"}>
						<img
							className="home-logo"
							width="200px"
							height="200px"
							alt="travel-logo"
							src="https://static.vecteezy.com/system/resources/previews/002/868/381/non_2x/globe-and-plane-travel-icon-sticker-style-travel-icon-vector.jpg"
						/>
					</Link>
				</li>
				<Link to={"/login"} className="button-link">
					<button className="profile-button">
						<img
							className="profile-icon"
							src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
							width="40px"
							height="40px"
							alt="Free High quality Profile Icon"
						/>
						<p>Login</p>
					</button>
				</Link>
			</div>
		</navbar>
	);
}

export default NavBar;
