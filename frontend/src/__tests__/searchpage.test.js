import {
	render,
	screen,
	cleanup,
	fireEvent,
	getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchPage from "./../SearchPage";
import Search from "./../Search";
import Home from "../Home";
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
		...render(ui, { wrapper: BrowserRouter }),
	};
};

test("it works!", () => {
	const expected = true;
	const actual = true;
	expect(actual).toBe(expected);
});

describe("test rendering elements", () => {
	const destination = "Singapore, Singapore";
	const numAdults = 2;
	const room = 1;
	const contactNumber = "98508791";

	test("render searchPage", async () => {
		const searchRoute = "/search";
		const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
		const searchButton = screen.getByTestId("search-button");
		await fireEvent.click(searchButton);
		expect(global.window.location.pathname).toEqual("/search");
	});

	test("render searchPage", async () => {
		const homeRoute = "/";
		const { getByTestId } = renderWithRouter(<Home />, { homeRoute });
		const searchButton = screen.getByTestId("showSearchButtonTest");
		await fireEvent.click(searchButton);
		expect(global.window.location.pathname).toEqual("/");
	});
});
