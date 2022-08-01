import {
	render,
	screen,
	cleanup,
	fireEvent,
	getByTestId,
	findByTestId,
	findByText,
	getByText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "./../Login";
import Profile from "../Profile";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
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

test("it works!", () => {
	const expected = true;
	const actual = true;
	expect(actual).toBe(expected);
});

jest.mock("./../useAuth", () => {
	const originalModule = jest.requireActual("./../useAuth");
	return {
		__esModule: true,
		...originalModule,
		default: () => ({
			accessToken: "token",
			isAuthenticated: false,
			login: jest.fn,
			logout: jest.fn,
		}),
	};
});

test("Login page renders", () => {
	const loginRoute = "/login";
	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
	const loginComponent = getByTestId("login-page");
	expect(loginComponent).toBeTruthy();
	expect(screen.findByText("Login")).toBeTruthy();
});

test("input fields renders", () => {
	const loginRoute = "/login";
	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
	const emailInput = getByTestId("email-input");
	const passwordInput = getByTestId("password-input");
	expect(emailInput).toBeTruthy();
	expect(passwordInput).toBeTruthy();
});

test("Login buttons renders", () => {
	const loginRoute = "/login";
	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
	const loginButton = getByTestId("test-button");
	expect(loginButton).toBeTruthy();
});
var login = require("./../Login").login;
var submit = require("./../Login").submitHandler;
login = jest.fn();
submit = jest.fn();

test("email input is being read", async () => {
	const loginRoute = "/login";
	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
	const emailInput = getByTestId("email-input");
	const email = "oakar@gmail.com";
	await fireEvent.change(emailInput, {
		target: { value: email },
	});
	expect(emailInput.value).toBe(email);
});

test("password input is being read", async () => {
	const loginRoute = "/login";
	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
	const passwordInput = getByTestId("password-input");
	const password = "123";
	await fireEvent.change(passwordInput, { target: { value: password } });
	expect(passwordInput.value).toBe(password);
});

test("can I login?", async () => {
	const loginRoute = "/login";
	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
	const emailInput = getByTestId("email-input");
	const passwordInput = getByTestId("password-input");
	const loginButton = getByTestId("test-button");
	const email = "oakar@gmail.com";
	await fireEvent.change(emailInput, {
		target: { value: email },
	});
	const password = "123";
	await fireEvent.change(passwordInput, { target: { value: password } });
	expect(screen.getByText("LOGIN")).toBeTruthy();
});
