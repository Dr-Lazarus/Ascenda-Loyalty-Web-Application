import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import HotelDetails from "./HotelDetails";
import ChangePassword from "./ChangePassword";
import BookPage from "./BookPage";
import useAuth from "./useAuth";
import { AuthProvider } from "./useAuth";
import BookingSuccess from "./BookingSuccess";

function RequireAuth({ children }) {
	const { authed } = useAuth();
	const location = useLocation();
	console.log("prev_state:", location.state);
	return authed === true ? (
		children
	) : (
		<Navigate
			to="/login"
			replace
			state={{ path: location.pathname, prev_data: location.state }}
		/>
	);
}

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<AuthProvider>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route
							path="/edit-profile"
							element={
								<RequireAuth>
									<EditProfile />
								</RequireAuth>
							}
						></Route>
						<Route path={"/search"} element={<SearchPage />}>
							<Route path=":destinationId">
								<Route path=":startDate">
									<Route path=":endDate">
										<Route path=":inputAdults">
											<Route
												path=":inputRooms"
												element={<SearchPage />}
											/>
										</Route>
									</Route>
								</Route>
							</Route>
						</Route>
						<Route
							path="/change-password"
							element={
								<RequireAuth>
									<ChangePassword />
								</RequireAuth>
							}
						></Route>
						<Route path={"/hotel"}>
							<Route path=":id" element={<HotelDetails />} />
						</Route>
						<Route path={"/book"}>
							<Route
								path=":id"
								element={
									<RequireAuth
										children={<BookPage />}
										test="hi"
									></RequireAuth>
								}
							/>
						</Route>
						<Route
							path="/booking-success"
							element={<BookingSuccess />}
						></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route
							path="/profile"
							element={
								<RequireAuth>
									<Profile />
								</RequireAuth>
							}
						></Route>
						<Route path="/register" element={<Register />}></Route>
					</Routes>
				</AuthProvider>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
