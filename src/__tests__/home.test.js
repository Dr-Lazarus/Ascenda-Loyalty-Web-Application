import {
	render,
	screen,
	cleanup,
	fireEvent,
	getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./../Home";
import Banner from "./../Banner";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import React from "react";
import button from "@material-tailwind/react/theme/components/button";
import { act } from "react-test-renderer";

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

test("renders banner button", () => {
	//Tests if the wholep login page has been rendered
	const homeRoute = "/";
	const { getByTestId } = renderWithRouter(<Home />, { homeRoute });
	const bannerButton = getByTestId("showSearchButtonTest");
	expect(bannerButton).toBeTruthy();
});

test("renders drop down show search", async () => {
	const homeRoute = "/";
	const { getByTestId } = renderWithRouter(<Home />, { homeRoute });
	const bannerButton = getByTestId("showSearchButtonTest");
	await fireEvent.click(bannerButton);
	expect(bannerButton).toHaveTextContent("Hide");
});

test("renders drop down show search", async () => {
	const homeRoute = "/";
	const { getByTestId } = renderWithRouter(<Home />, { homeRoute });
	const bannerButton = getByTestId("showSearchButtonTest");
	await fireEvent.dblClick(bannerButton);
	expect(bannerButton).toHaveTextContent("Book your next destination here!");
});

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
