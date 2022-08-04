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

	test("it works!", () => {
		const expected = true;
		const actual = true;
		expect(actual).toBe(expected);
	});

	test("Register page renders", () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });
		const registerPage = screen.getByTestId("register-page");
		expect(registerPage).toBeInTheDocument();
	});

	test("ALL input fields renders", () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });
		const firstNameInput = screen.getByTestId("firstName-input");
		const lastNameInput = screen.getByTestId("lastName-input");
		const contactNumberInput = screen.getByTestId("contactNumber-input");
		const emailInput = screen.getByTestId("email-input");
		const passwordInput = screen.getByTestId("password-input");
		const confirmPasswordInput = screen.getByTestId(
			"confirm-password-input"
		);

		expect(firstNameInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();
		expect(contactNumberInput).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(confirmPasswordInput).toBeInTheDocument();
	});

	test("Register buttons renders", () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });
		const registerButton = screen.getByTestId("register-button");
		const registerPage = screen.getByTestId("register-page");
		expect(registerButton).toBeInTheDocument();
	});

	test("password inputs are being read", async () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });
		const passwordInput = screen.getByTestId("password-input");
		const confirmPasswordInput = screen.getByTestId(
			"confirm-password-input"
		);
		const registerButton = screen.getByTestId("register-button");

		await fireEvent.change(passwordInput, {
			target: { value: invalidPassword1 },
		});
		await fireEvent.change(confirmPasswordInput, {
			target: { value: invalidPassword1 },
		});
		expect(passwordInput.value).toBe(invalidPassword1);
		expect(confirmPasswordInput.value).toBe(invalidPassword1);
		expect(registerButton).toBeInTheDocument();
	});

	test("name inputs are being read", async () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });

		const firstNameInput = screen.getByTestId("firstName-input");
		const lastNameInput = screen.getByTestId("lastName-input");
		const registerButton = screen.getByTestId("register-button");
		await fireEvent.change(firstNameInput, {
			target: { value: firstName },
		});
		await fireEvent.change(lastNameInput, {
			target: { value: lastName },
		});
		expect(firstNameInput.value).toBe(firstName);
		expect(lastNameInput.value).toBe(lastName);
		expect(registerButton).toBeInTheDocument();
	});

	test("successful register", async () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });

		const firstNameInput = screen.getByTestId("firstName-input");
		const lastNameInput = screen.getByTestId("lastName-input");
		const contactNumberInput = screen.getByTestId("contactNumber-input");
		const emailInput = screen.getByTestId("email-input");
		const passwordInput = screen.getByTestId("password-input");
		const confirmPasswordInput = screen.getByTestId(
			"confirm-password-input"
		);
		const registerButton = screen.getByTestId("register-button");
		const registerPage = screen.getByTestId("register-page");
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
		// expect(screen.findByTestId("profile-page")).toBeInTheDocument();
		expect(global.window.location.pathname).toEqual("/");
	});

	// test("empty register", async () => {
	// 	const { user } = renderWithRouter(<Register />, { registerRoute });
	// 	const registerButton = screen.getByTestId("register-button");
	// 	const registerPage = screen.getByTestId("register-page");
	// 	await user.click(registerButton);
	// 	expect(registerButton).toBeInTheDocument();
	// 	expect(registerPage).toBeInTheDocument();
	// });

	test("unsuccessful register - password too short", async () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });

		const firstNameInput = screen.getByTestId("firstName-input");
		const lastNameInput = screen.getByTestId("lastName-input");
		const contactNumberInput = screen.getByTestId("contactNumber-input");
		const emailInput = screen.getByTestId("email-input");
		const passwordInput = screen.getByTestId("password-input");
		const confirmPasswordInput = screen.getByTestId(
			"confirm-password-input"
		);
		const registerButton = screen.getByTestId("register-button");
		const registerPage = screen.getByTestId("register-page");
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
		expect(registerButton).toBeInTheDocument();
		await fireEvent.click(registerButton);
		expect(registerPage).toBeInTheDocument();
	});

	test("unsuccessful register -  mismatch password", async () => {
		const { user } = renderWithRouter(<Register />, { registerRoute });

		const firstNameInput = screen.getByTestId("firstName-input");
		const lastNameInput = screen.getByTestId("lastName-input");
		const contactNumberInput = screen.getByTestId("contactNumber-input");
		const emailInput = screen.getByTestId("email-input");
		const passwordInput = screen.getByTestId("password-input");
		const confirmPasswordInput = screen.getByTestId(
			"confirm-password-input"
		);
		const registerButton = screen.getByTestId("register-button");
		const registerPage = screen.getByTestId("register-page");
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
		expect(registerButton).toBeInTheDocument();
		await fireEvent.click(registerButton);
		expect(registerPage).toBeInTheDocument();
	});
});
