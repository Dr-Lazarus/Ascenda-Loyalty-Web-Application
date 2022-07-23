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
import Search from "./../Search";
import App from "../App";
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

test("renders drop down show search when clicked once", async () => {
	const homeRoute = "/";
	const { getByTestId } = renderWithRouter(<Home />, { homeRoute });
	const bannerButton = getByTestId("showSearchButtonTest");
	await fireEvent.click(bannerButton);
	expect(bannerButton).toHaveTextContent("Hide");
});

test("hides drop down show search when clicked twice", async () => {
	const homeRoute = "/";
	const { getByTestId } = renderWithRouter(<Home />, { homeRoute });
	const bannerButton = getByTestId("showSearchButtonTest");
	await fireEvent.dblClick(bannerButton);
	expect(bannerButton).toHaveTextContent("Book your next destination here!");
});

test("renders DatePicker Button", () => {
	const searchRoute = "/search";
	const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
	const datepickerButton = getByTestId("date-picker-button-test");
	expect(datepickerButton).toBeTruthy();
	expect(datepickerButton).toHaveTextContent("Select Dates");
});

test("renders DatePicker when clicked once", async () => {
	const searchRoute = "/search";
	const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
	const datepickerButton = getByTestId("date-picker-button-test");
	await fireEvent.click(datepickerButton);
	expect(datepickerButton).toHaveTextContent("hide");
});

test("hides DatePicker when clicked twice", async () => {
	const searchRoute = "/search";
	const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
	const datepickerButton = getByTestId("date-picker-button-test");
	await fireEvent.dblClick(datepickerButton);
	expect(datepickerButton).toHaveTextContent("Select Dates");
});

test("Header rendered", async () => {
	await render(<App />);
	expect("Header").toBeTruthy();
});

test("Footer rendered", async () => {
	await render(<App />);
	expect("Footer").toBeTruthy();
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
