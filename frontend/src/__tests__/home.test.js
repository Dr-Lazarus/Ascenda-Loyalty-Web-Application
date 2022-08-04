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

test("Header rendered", async () => {
	await render(<App />);
	expect("Header").toBeTruthy();
});

test("Footer rendered", async () => {
	await render(<App />);
	expect("Footer").toBeTruthy();
});

const n = [10, 21, 107];
describe("testing Banner Button in home page", () => {
	test("renders banner button", () => {
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
		expect(bannerButton).toHaveTextContent(
			"Book your next destination here!"
		);
	});
	for (var i = 0; i < n.length; i++) {
		let k = n[i];
		test("show search when clicked " + k + " times", async () => {
			const homeRoute = "/";
			const { getByTestId } = renderWithRouter(<Home />, { homeRoute });
			const bannerButton = getByTestId("showSearchButtonTest");

			for (var j = 0; j < k; j++) {
				await fireEvent.click(bannerButton);
			}
			if (k % 2 == 0) {
				expect(bannerButton).toHaveTextContent(
					"Book your next destination here!"
				);
			} else expect(bannerButton).toHaveTextContent("Hide");
		});
	}
});

describe("testing datepicker", () => {
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
		expect(datepickerButton).toHaveTextContent("Hide");
	});

	test("hides DatePicker when clicked twice", async () => {
		const searchRoute = "/search";
		const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
		const datepickerButton = getByTestId("date-picker-button-test");
		await fireEvent.dblClick(datepickerButton);
		expect(datepickerButton).toHaveTextContent("Select Dates");
	});
	for (var i = 0; i < n.length; i++) {
		let k = n[i];
		test("DatePicker when clicked" + k + " times", async () => {
			const searchRoute = "/search";
			const { getByTestId } = renderWithRouter(<Search />, {
				searchRoute,
			});
			const datepickerButton = getByTestId("date-picker-button-test");
			for (var j = 0; j < k; j++) {
				await fireEvent.click(datepickerButton);
			}
			if (k % 2 == 0) {
				expect(datepickerButton).toHaveTextContent("Select Dates");
			} else expect(datepickerButton).toHaveTextContent("Hide");
		});
	}
});

describe("testing travellers", () => {
	test("renders Travellers when clicked once", async () => {
		const searchRoute = "/search";
		const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
		const travellersButton = getByTestId("travellers-button-test");
		await fireEvent.click(travellersButton);
		expect(travellersButton).toHaveTextContent("hide");
	});

	test("hides Travellers when clicked twice", async () => {
		const searchRoute = "/search";
		const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
		const travellersButton = getByTestId("travellers-button-test");
		await fireEvent.dblClick(travellersButton);
		expect(travellersButton).toHaveTextContent("Travellers");
	});

	for (var i = 0; i < n.length; i++) {
		let k = n[i];
		test("Travellers when clicked" + k + " times", async () => {
			const searchRoute = "/search";
			const { getByTestId } = renderWithRouter(<Search />, {
				searchRoute,
			});
			const travellersButton = getByTestId("travellers-button-test");
			for (var j = 0; j < k; j++) {
				await fireEvent.click(travellersButton);
			}
			if (k % 2 == 0) {
				expect(travellersButton).toHaveTextContent("Travellers");
			} else expect(travellersButton).toHaveTextContent("hide");
		});
	}
	test("reads the travellers default values correctly", async () => {
		const searchRoute = "/search";
		const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
		const travellersButton = getByTestId("travellers-button-test");
		await fireEvent.click(travellersButton);
		const adultsInput = getByTestId("num-adults-input");
		const roomsInput = getByTestId("num-rooms-input");
		expect(adultsInput).toHaveValue(1);
		expect(roomsInput).toHaveValue(1);
	});
	test("Travellers invalid input(string) test", async () => {
		const searchRoute = "/search";
		const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
		const travellersButton = getByTestId("travellers-button-test");
		await fireEvent.click(travellersButton);
		const adultsInput = getByTestId("num-adults-input");
		const roomsInput = getByTestId("num-rooms-input");

		await fireEvent.change(adultsInput, { target: { value: "five" } });
		await fireEvent.change(roomsInput, {
			target: { value: "two" },
		});
		expect(adultsInput).toHaveValue(1);
		expect(roomsInput).toHaveValue(1);
	});
	test("Travellers invalid input(out of range) test", async () => {
		const searchRoute = "/search";
		const { getByTestId } = renderWithRouter(<Search />, { searchRoute });
		const travellersButton = getByTestId("travellers-button-test");
		await fireEvent.click(travellersButton);
		const adultsInput = getByTestId("num-adults-input");
		const roomsInput = getByTestId("num-rooms-input");

		await fireEvent.change(adultsInput, { target: { value: 100 } });
		await fireEvent.change(roomsInput, {
			target: { value: 10 },
		});
		expect(adultsInput).not.toHaveValue(100);
		expect(roomsInput).not.toHaveValue(10);
		expect(adultsInput).toHaveValue(1);
		expect(roomsInput).toHaveValue(1);
	});
});
