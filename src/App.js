import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/search" element={<SearchPage />}></Route>
					<Route path="/" element={<Home />}></Route>
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
