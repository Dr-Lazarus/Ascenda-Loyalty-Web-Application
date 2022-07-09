import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="relative m-auto p-6 bg-white drop-shadow-xl">
			<div className="flex justify-between items-center align-middle space-x-6">
				<div className="w-[20%]">
					<Link to="/">
						<img
							className="justify-between items-center object-contain"
							src={require("./img/ascenda_logo.png")}
							alt="Ascenda logo"
						/>
					</Link>
				</div>
				<div className="relative flex w-[40%] justify-between align-middle rounded-full border-2 p-2 ">
					<input
						type="search"
						id="default-search"
						class="flex-1 min-w-0"
						placeholder="Search.."
					/>
					<SearchIcon className="flex-none right-2" />
				</div>

				<div className="flex space-x-3 items-center justify-between width-auto">
					<p className="font-semibold">Login</p>
					<Link to="/login">
						<Avatar />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
