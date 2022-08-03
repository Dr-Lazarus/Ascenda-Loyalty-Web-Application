import express from 'express';
import { getBooking, getAllBookings, updateBooking, deleteBooking,getCheckoutSession,getMyBookings}from "./../controllers/bookingController.js";
import { protect } from "./../JWTMiddleware/authController.js";


const router = express.Router();

router.use(protect);



router
  .route('/createBooking')
  .post(getCheckoutSession);
router
  .route('/getBookingHistory')
  .get(getMyBookings);






export default router;

