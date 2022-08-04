import {
	render,
	screen,
	cleanup,
	fireEvent,
	getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Profile, { returnComingSoon } from "./../Profile";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import React from "react";
import button from "@material-tailwind/react/theme/components/button";
import { act } from "react-test-renderer";
import useAuth from "./../useAuth";
import { AuthProvider } from "./../useAuth";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

afterEach(() => {
	cleanup();
});

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: BrowserRouter, RequireAuth }),
	};
};

test("it works!", () => {
	const expected = true;
	const actual = true;
	expect(actual).toBe(expected);
});

export const log = (logMsg) => console.log(logMsg);
const user = userEvent.setup();

jest.mock("./../useAuth", () => {
	const originalModule = jest.requireActual("./../useAuth");
	return {
		__esModule: true,
		...originalModule,
		default: () => ({
			accessToken: "token",
			isAuthenticated: true,
			login: jest.fn,
			logout: jest.fn,
		}),
	};
});

function RequireAuth({ children }) {
	const { authed } = useAuth();
	const location = useLocation();
	console.log("prev_state:", location.state);
	return authed === true ? (
		children
	) : (
		<Navigate
			to="/login"
			replace
			state={{ path: profileRoute, prev_data: location.state }}
		/>
	);
}
const profileRoute = "/profile";

describe("test rendering elements", () => {
	const firstName = "John";
	const lastName = "Cena";
	const email = "hello@gmail.com";
	const contactNumber = "98508791";

	test("render page", () => {
		const { user } = renderWithRouter(<Profile />, { profileRoute });
		const profilePage = screen.getByTestId("profile-page");
		expect(profilePage).toBeInTheDocument();
	});

	test("render display details", () => {
		const { user } = renderWithRouter(<Profile />, { profileRoute });
		const firstNameDisplay = screen.getByTestId("firstName-display");
		const lastNameDisplay = screen.getByTestId("lastName-display");
		const emailDisplay = screen.getByTestId("email-display");
		const contactNumberDisplay = screen.getByTestId(
			"contactNumber-display"
		);
		expect(firstNameDisplay).toHaveTextContent("First Name");
		expect(lastNameDisplay).toHaveTextContent("Last Name");
		expect(emailDisplay).toHaveTextContent("Email");
		expect(contactNumberDisplay).toHaveTextContent("Contact Number");
	});
	test("render all buttons", () => {
		const { user } = renderWithRouter(<Profile />, { profileRoute });
		const favButton = screen.getByTestId("favourites-button");
		const histButton = screen.getByTestId("history-button");
		const editProfileButton = screen.getByTestId("editProfile-button");
		// const logoutButton = screen.getByTestId("logout-button");
		const delAccButton = screen.getByTestId("delAcc-button");

		expect(favButton).toBeInTheDocument();
		expect(histButton).toBeInTheDocument();
		expect(editProfileButton).toBeInTheDocument();
		expect(delAccButton).toBeInTheDocument();
	});

	test("History test", async () => {
		const { user } = renderWithRouter(<Profile />, { profileRoute });
		const histButton = screen.getByTestId("history-button");
		await fireEvent.click(histButton);
		expect(global.window.location.pathname).toEqual("/booking-history");
	});
	test("EditProfile test", async () => {
		const { user } = renderWithRouter(<Profile />, { profileRoute });
		const editProfileButton = screen.getByTestId("editProfile-button");
		await fireEvent.click(editProfileButton);
		expect(global.window.location.pathname).toEqual("/edit-profile");
	});
	test("DelAcc test", async () => {
		const { user } = renderWithRouter(<Profile />, { profileRoute });
		const delAccButton = screen.getByTestId("delAcc-button");
		await fireEvent.click(delAccButton);
		expect(global.window.location.pathname).toEqual("/");
	});
});
