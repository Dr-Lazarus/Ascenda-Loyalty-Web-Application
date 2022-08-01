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
import Register from "./../Register";
import App from "../App";

import { BrowserRouter, MemoryRouter } from "react-router-dom";
import React from "react";
import Profile from "../Profile";

afterEach(() => {
	cleanup();
	jest.restoreAllMocks();
});

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: BrowserRouter }),
	};
};
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

export const log = (logMsg) => console.log(logMsg);
const user = userEvent.setup();

describe("Register page render", () => {
	const invalidPassword1 = "123";
	const invalidPassword2 = "12ab";
	const validPassword = "12345678";
	const registerRoute = "/register";
	const profileRoute = "/profile";
	const firstName = "John";
	const lastName = "Cena";
	const email = "hello@gmail.com";
	const contactNumber = "98508791";

	const { user } = renderWithRouter(<Register />, { registerRoute });

	const firstNameInput = screen.getByTestId("firstName-input");
	const lastNameInput = screen.getByTestId("lastName-input");
	const contactNumberInput = screen.getByTestId("contactNumber-input");
	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");
	const confirmPasswordInput = screen.getByTestId("confirm-password-input");
	const registerButton = screen.getByTestId("register-button");
	const registerPage = screen.getByTestId("register-page");

	test("it works!", () => {
		const expected = true;
		const actual = true;
		expect(actual).toBe(expected);
	});

	test("Register page renders", () => {
		expect(screen.findByText("Register an Account")).toBeTruthy();
		expect(screen.findByText("REGISTER")).toBeTruthy();
	});

	test("ALL input fields renders", () => {
		expect(firstNameInput).toBeTruthy();
		expect(lastNameInput).toBeTruthy();
		expect(contactNumberInput).toBeTruthy();
		expect(emailInput).toBeTruthy();
		expect(passwordInput).toBeTruthy();
		expect(confirmPasswordInput).toBeTruthy();
	});

	test("Login buttons renders", () => {
		expect(registerButton).toBeTruthy();
	});

	test("password inputs are being read", async () => {
		await fireEvent.change(passwordInput, {
			target: { value: invalidPassword1 },
		});
		await fireEvent.change(confirmPasswordInput, {
			target: { value: invalidPassword1 },
		});
		expect(passwordInput.value).toBe(invalidPassword1);
		expect(confirmPasswordInput.value).toBe(invalidPassword1);
		expect(registerButton).toBeTruthy();
	});

	test("name inputs are being read", async () => {
		await fireEvent.change(firstNameInput, {
			target: { value: firstName },
		});
		await fireEvent.change(lastNameInput, {
			target: { value: lastName },
		});
		expect(firstNameInput.value).toBe(firstName);
		expect(lastNameInput.value).toBe(lastName);
		expect(registerButton).toBeTruthy();
	});

	test("successful register", async () => {
		await fireEvent.change(firstNameInput, {
			target: { value: firstName },
		});
		await fireEvent.change(lastNameInput, {
			target: { value: lastName },
		});
		await fireEvent.change(emailInput, {
			target: { value: email },
		});
		await fireEvent.change(contactNumberInput, {
			target: { value: contactNumber },
		});
		await fireEvent.change(passwordInput, {
			target: { value: validPassword },
		});
		await fireEvent.change(confirmPasswordInput, {
			target: { value: validPassword },
		});
		expect(registerButton).toBeTruthy();
		await fireEvent.click(registerButton);

		expect(screen.findByTestId("profile-page")).toBeTruthy();
	});

	test("empty register", async () => {
		await user.click(registerButton);
		expect(registerButton).toBeTruthy();
		expect(registerPage).toBeTruthy();
	});

	test("unsuccessful register - password too short", async () => {
		await fireEvent.change(firstNameInput, {
			target: { value: firstName },
		});
		await fireEvent.change(lastNameInput, {
			target: { value: lastName },
		});
		await fireEvent.change(emailInput, {
			target: { value: email },
		});
		await fireEvent.change(contactNumberInput, {
			target: { value: contactNumber },
		});
		await fireEvent.change(passwordInput, {
			target: { value: invalidPassword1 },
		});
		await fireEvent.change(confirmPasswordInput, {
			target: { value: invalidPassword1 },
		});
		expect(registerButton).toBeTruthy();
		await fireEvent.click(registerButton);
		expect(registerPage).toBeTruthy();
	});

	test("unsuccessful register -  mismatch password", async () => {
		await fireEvent.change(firstNameInput, {
			target: { value: firstName },
		});
		await fireEvent.change(lastNameInput, {
			target: { value: lastName },
		});
		await fireEvent.change(emailInput, {
			target: { value: email },
		});
		await fireEvent.change(contactNumberInput, {
			target: { value: contactNumber },
		});
		await fireEvent.change(passwordInput, {
			target: { value: invalidPassword1 },
		});
		await fireEvent.change(confirmPasswordInput, {
			target: { value: invalidPassword2 },
		});
		expect(registerButton).toBeTruthy();
		await fireEvent.click(registerButton);
		expect(registerPage).toBeTruthy();
	});
});
