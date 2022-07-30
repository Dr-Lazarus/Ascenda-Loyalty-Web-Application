import axios from "axios";
//functions to be used

/**
 *
 * @param {} hotel_id a given hotel id
 * @returns the json response from the api call with static info about the hotel
 */
export async function getHotelInfoByIdAsync(hotel_id) {
	let url = `https://hotelapi.loyalty.dev/api/hotels/${hotel_id}`;
	// const url = `http://localhost:5001/hotels/${hotel_id}`;
	let response = await fetch(url);
	let data = await response.json();
	return data;
}

/**
 *
 * @param {*} destination_id The Id of the destination where the hotels should be located in
 * @param {*} checkin The date for checkin in YYYY-MM-DD format (e.g 2022-08-18)
 * @param {*} checkout The date for checkout in YYYY-MM-DD format (eg 2022-08-19)
 * @param {*} currency The currency code e.g SGD, USD, CAD
 * @param {*} country_code The 2 Letter Country Code (Each country has an official one, Singapore is Sg for example)
 * @param {*} adults Number of guests staying per room, If there are more than one room, append with `|` separator
 * @param {*} rooms Number of rooms
 * @returns the prices for all hotels in that destination for those dates
 */
export const getHotelsPricesForDestinationAsync = async (
	destination_id,
	checkin,
	checkout,
	currency,
	country_code,
	adults,
	rooms
) => {
	let guests = new Array(rooms).fill(adults).join("|");

	let response = await axios.get(
		"https://hotelapi.loyalty.dev/api/hotels/prices",
		{
			params: {
				destination_id: destination_id,
				checkin: checkin,
				checkout: checkout,
				lang: "en_US",
				currency: currency,
				country_code: country_code,
				guests: guests,
				partner_id: "1",
			},
			withCredentials: false,
		}
	);
	console.log(response);
	let data = response.data;
	data.hotels.sort((a, b) =>
		parseInt(a.lowest_converted_price) > parseInt(b.lowest_converted_price)
			? 1
			: -1
	);
	console.log(data.hotels.length);
	console.log(data.hotels[1].lowest_converted_price);
	return data;
};
/**
 *
 * @param {*} destination_id The Id of the destination where the hotels should be located in
 * @param {*} checkin The date for checkin in YYYY-MM-DD format (e.g 2022-08-18)
 * @param {*} checkout The date for checkout in YYYY-MM-DD format (eg 2022-08-19)
 * @param {*} currency The currency code e.g SGD, USD, CAD
 * @param {*} country_code The 2 Letter Country Code (Each country has an official one, Singapore is Sg for example)
 * @param {*} guests Number of guests staying per room, If there are more than one room, append with `|` separator
 * @param limitPerPage How many entries you want on each page
 * @param pageNumber Which Page you want to see at the moment
 * @returns the subarray
 */
// async function getPagesHotelsPricesForDestination(
// 	destination_id,
// 	checkin,
// 	checkout,
// 	currency,
// 	country_code,
// 	guests,
// 	limitPerPage,
// 	pageNumber
// ) {
// 	let hotelsReturn, numHotels;
// 	const data = await getHotelsPricesForDestinationAsync(
// 		destination_id,
// 		checkin,
// 		checkout,
// 		currency,
// 		country_code,
// 		guests
// 	); //.then(data=>{
// 	lastIndex = pageNumber * limitPerPage - 1;
// 	firstIndex = lastIndex - limitPerPage + 1;
// 	hotelsReturn = data.hotels.slice(firstIndex, lastIndex + 1);
// 	numHotels = data.length;
// 	return hotelsReturn;
// }

//getPagesHotelsPricesForDestination('WD0M','2022-08-18','2022-08-19','SGD','SG','2',4,2);

/**
 *
 * @param {*} destination_id a destination id
 * @returns api response of list of hotels and their info for that destination
 */
async function getHotelsForDestinationAsync(destination_id) {
	let url = `https://hotelapi.loyalty.dev/api/hotels/${destination_id}`;
	console.log(url);
	let response = await fetch(url);
	let data = await response.json();
	return data;
}

/**
 *
 * @param {*} hotelid The Id of the hotel whose price you want to check
 * @param {*} destination_id The Id of the destination where the hotel is
 * @param {*} checkin The date for checkin in YYYY-MM-DD format (e.g 2022-08-18)
 * @param {*} checkout The date for checkout in YYYY-MM-DD format (eg 2022-08-19)
 * @param {*} currency The currency code e.g SGD, USD, CAD
 * @param {*} country_code The 2 Letter Country Code (Each country has an official one, Singapore is Sg for example)
 * @param {*} adults Number of guests staying per room, If there are more than one room, append with `|` separator
 * @param {*} rooms Number of rooms
 * @returns the api json response for the prices and info for booking the given hotel at given dates
 */
export async function getRoomPricesForHotelAsync(
	hotelid,
	destination_id,
	checkin,
	checkout,
	currency,
	country_code,
	adults,
	rooms
) {
	let guests = new Array(rooms).fill(adults).join("|");

	let response = await axios.get(
		`https://hotelapi.loyalty.dev/api/hotels/${hotelid}/price`,
		{
			params: {
				destination_id: destination_id,
				checkin: checkin,
				checkout: checkout,
				lang: "en_US",
				currency: currency,
				country_code: country_code,
				guests: guests,
				partner_id: "1",
			},
			withCredentials: false,
		}
	);
	const url = `http://hotelapi.loyalty.dev/api/hotels/${hotelid}/price`;
	const params = {
		destination_id: destination_id,
		checkin: checkin,
		checkout: checkout,
		lang: "en_US",
		currency: currency,
		country_code: country_code,
		guests: guests,
		partner_id: "1",
	};
	// let test = axios.getUri({ url, params });
	// console.log(test);
	let data = response.data;
	return data;
}

/*

  the code below was to model it in mongoDB
  but decided no need for it in database


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSearchSchema = new Schema({
    destinationId:{
    type: String,
    required: [true, 'Invalid Destination']
    },
    checkin:{
    type: String,
    required:[true, 'Checkin date is required']
    },
    checkout:{
    type: String,
    required: [true, 'Checkout date is required']
    },
    lang:{
        type:String,
        default:'en_US'
    },
    currency:{
        type:String,
        default: 'SGD'
    },
    country_code:{
        type:String,
        required:[true, 'Country code is required']
    },
    guests:{
        type:String,
        required:[true, 'Number of guests is required']
    },
    partner_id:{
        type:String,
        default:1
    },
    dateCreated:{
        type:Date,
        default: Date.now,
    }

});

const DestinationSearch = mongoose.model('Destination', destinationSearchSchema);

module.exports = DestinationSearch;

  */
