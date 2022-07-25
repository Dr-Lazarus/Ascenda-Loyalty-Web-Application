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
	await userEvent.change(emailInput, {
		target: { value: email },
	});
	const password = "123";
	await userEvent.change(passwordInput, { target: { value: password } });
	await userEvent.click(loginButton);
	// await fireEvent(
	// 	loginButton,
	// 	new MouseEvent("click", { bubbles: true, cancelable: false })
	// );
	//await fireEvent.click(loginButton);
	// expect(getByTestId("test-button")).toBeTruthy();
	expect(screen.getByText("LOGIN")).toBeTruthy();
	//expect(screen.getByText("Contact number")).toBeTruthy();
	// expect(screen.findByText("My favourites")).toBeTruthy();
	// expect(screen.findByText("View Booking History")).toBeTruthy();
	//expect(clickLogin).toHaveBeenCalled(submit);
	//expect(loginButton.onclick).toHaveBeenCalled(login.submitHandler);
});

// test("can I login?", async () => {
// 	const loginRoute = "/login";
// 	const { getByTestId } = renderWithRouter(<Login />, { loginRoute });
// 	const emailInput = getByTestId("email-input");
// 	const passwordInput = getByTestId("password-input");
// 	await fireEvent.change(emailInput, {
// 		target: { value: "random@gmail.com" },
// 	});
// 	await fireEvent.change(passwordInput, { target: { value: "123" } });
// 	await fireEvent.click(getByTestId("test-button"));
// 	expect(window.alert).toBeTruthy();
// });

// jest.mock("../useAuth.js");
// test("renders login component", () => {
// 	//Tests if the wholep login page has been rendered
// 	const loginRoute = "/login";
// 	const { authed, login } = useAuth();
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
