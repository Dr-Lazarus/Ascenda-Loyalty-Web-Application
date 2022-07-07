import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<h1>Ascenda</h1>
			</Link>

			<div className="header__center">
				<input type="text" />
				<SearchIcon />
			</div>

			<div className="header__right">
				<Link to="/login">
					<Avatar />
				</Link>
			</div>
		</div>
	);
}

export default Header;
