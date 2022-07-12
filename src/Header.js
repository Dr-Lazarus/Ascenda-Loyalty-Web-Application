import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
	return (
		<nav className=" top-0 z-50 px-6 py-2 bg-white drop-shadow-xl">
			<div className="flex justify-between items-center align-middle space-x-6">
				<div className="w-[20%]">
					<Link to="/">
						<img
							className=""
							src={require("./img/ascenda_logo.png")}
							alt="Ascenda logo"
						/>
					</Link>
				</div>
				<div className="flex space-x-3 justify-end items-center">
					<Button className="border" variant="gradient">
						Login
					</Button>
					<Link to="/login">
						<Avatar src={require("./img/user.png")} size="md" />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
