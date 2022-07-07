import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		// BEM
		<div className="app">
			<Router>
				<Header />

				<Switch>
					<Route path="/search">
						<SearchPage />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
