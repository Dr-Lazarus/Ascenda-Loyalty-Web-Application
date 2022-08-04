import axios from "axios";
//functions to be used

/**
 *
 * @param {} hotel_id a given hotel id
 * @returns the json response from the api call with static info about the hotel
 */
export async function getHotelInfoByIdAsync(hotel_id) {
	let url = `https://hotelapi.loyalty.dev/api/hotels/${hotel_id}`;
	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				if (err.message === "Request failed with status code 429") {
					console.log("RATE LIMITED WAIT");
				}
				console.log(err);
				reject(err);
			});
	});
}
