import { render, screen, cleanup } from "@testing-library/react";
import Login from "./../Login";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./../App";
import React from "react";

test("renders react component", async () => {
	render(
		<React.StrictMode>
			<App />,
		</React.StrictMode>
	);
});
