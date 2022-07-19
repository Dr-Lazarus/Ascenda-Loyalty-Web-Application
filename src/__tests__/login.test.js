import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { Renderer } from "react-dom";
import Login from "./../Login";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./../App";
import React from "react";

afterEach(() => {
	cleanup();
});

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: BrowserRouter }),
	};
};

test("renders login component", async () => {
	const loginRoute = "/login";
	renderWithRouter(<Login />, { loginRoute });

	expect(screen.getByTestId("login-1")).toHaveTextContent("Login");
});
