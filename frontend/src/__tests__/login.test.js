import {
	render,
	screen,
	cleanup,
	fireEvent,
	getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "./../Login";
import Profile from "../Profile";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import React from "react";
import button from "@material-tailwind/react/theme/components/button";

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

test("it works!", () => {
	const expected = true;
	const actual = true;
	expect(actual).toBe(expected);
});

// test("renders login component", () => {
// 	//Tests if the wholep login page has been rendered
// 	const loginRoute = "/login";
// 	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
// 	expect(getByTestId("login-page")).toHaveTextContent("Login");
// 	expect(getByTestId("test-button")).toHaveTextContent("LOGIN"); //Button is rendered with text called "LOGIN"
// });

// test("can I login?", async () => {
// 	const loginRoute = "/login";
// 	const profileRoute = "/profile";
// 	const { getByTestId } = await renderWithRouter(<Login />, { loginRoute });
// 	const emailInput = getByTestId("email-input");
// 	const passwordInput = getByTestId("password-input");
// 	// expect(emailInput).toBeTruthy();
// 	// expect(passwordInput).tobeTruthy();
// 	await fireEvent.change(emailInput, { target: { value: "test@admin.com" } });
// 	await fireEvent.change(passwordInput, { target: { value: "123" } });
// 	await fireEvent.click(getByTestId("test-button"));
// 	expect(screen.
// });

// test("email inputs are being read", () => {
// 	const loginRoute = "/login";
// 	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
// 	const emailInput = getByTestId("email-input");
// 	expect(emailInput).toBeTruthy();
// });

// test("password inputs are being read", () => {
// 	const loginRoute = "/login";
// 	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
// 	const passwordInput = getByTestId("password-input");
// 	expect(passwordInput).toBeTruthy();
// });
