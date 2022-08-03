//import stripe from ('stripe')('sk_test_51LMg98Ei1XoxZ9ryMaI6Prw4hZJROkcdhGBPyPZiFrAnGGHEBqKOULgEnSTIm2NN3JfA5PZhmyTsgSQIOcFHJ7xP00tfyMBPNK');
import  Booking from './../models/bookingModel.js';
import Stripe from "stripe";
const stripe = new Stripe('sk_test_51LMg98Ei1XoxZ9ryMaI6Prw4hZJROkcdhGBPyPZiFrAnGGHEBqKOULgEnSTIm2NN3JfA5PZhmyTsgSQIOcFHJ7xP00tfyMBPNK');



import {
  getOne ,
  deleteOne, 
  createOne,
  updateOne, 
  getAll
} from "./handlerFactory.js";


const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};




const getCheckoutSession = catchAsync(async (req, res, next) => {





  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    customer_email: req.user.email,
    submit_type: 'book',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        currency:'sgd',
        amount: req.body.price * 100,
        quantity: 1,
        name:'Package Name'
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/booking-success`,
    cancel_url: `http://localhost:3000/`,
  });

  //1 Create Booking 
  const {destinationID,
				hotelID,
				Number_of_nights,
				startDate,
				endDate,
				Number_of_adults,
				message_to_hotel,
				room_type,
				Number_of_rooms,
				price,
				salutation,
				firstName,
				lastName} = req.body;
        const user = req.user._id;
  const doc = await Booking.create({destinationID,
    hotelID,
    Number_of_nights,
    user,
    startDate,
    endDate,
    Number_of_adults,
    message_to_hotel,
    room_type,
    Number_of_rooms,
    price,
    salutation,
    firstName,
    lastName});
  res.json({
    data: doc,
    url: session.url
  })

  // // 3) Create session as response
  // res.status(200).json({
  //   status: 'success',
  //   session
  // });
});

const getMyBookings = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ user: req.user._id });

  res.status(200).json( {
    title: 'My Bookings',
    data: bookings
  });
});




//const createBooking = createOne(Booking);
const getBooking = getOne(Booking);
const getAllBookings = getAll(Booking);
const updateBooking = updateOne(Booking);
const deleteBooking = deleteOne(Booking);

export { getBooking, getAllBookings, updateBooking, deleteBooking,getCheckoutSession,getMyBookings};
