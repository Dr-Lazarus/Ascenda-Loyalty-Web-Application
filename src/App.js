import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/search" element={<SearchPage />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
