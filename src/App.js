import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import HotelDetails from "./HotelDetails";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/edit-profile"
						element={<EditProfile />}
					></Route>
					<Route path="/search" element={<SearchPage />}></Route>
					<Route path=":id" element={<h1>ciao</h1>} />
					<Route path={"/hotel"}>
						<Route path=":id" element={<HotelDetails />} />
					</Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/register" element={<Register />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
